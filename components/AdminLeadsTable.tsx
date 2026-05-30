"use client";

import { useCallback, useEffect, useState } from "react";
import { TrashIcon, WhatsappIcon } from "@/components/icons";
import type { Lead } from "@/types/lead";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function getWhatsappHref(phone: string) {
  const digits = phone.replace(/[^0-9]/g, "");
  const normalized = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  return `https://wa.me/${normalized}`;
}

export default function AdminLeadsTable({ onUnauthorized }: { onUnauthorized: () => void }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/leads", { cache: "no-store" });

      if (response.status === 401) {
        onUnauthorized();
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Gagal mengambil data leads.");
        return;
      }

      setLeads(data.leads || []);
    } catch {
      setError("Gagal mengambil data leads.");
    } finally {
      setLoading(false);
    }
  }, [onUnauthorized]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  async function deleteLead(id: string) {
    const confirmed = window.confirm("Yakin ingin menghapus data lead ini?");
    if (!confirmed) return;

    setDeletingId(id);
    setFeedback("");
    setError("");

    try {
      const response = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Gagal menghapus lead.");
        return;
      }

      setFeedback("Lead berhasil dihapus.");
      await fetchLeads();
    } catch {
      setError("Gagal menghapus lead.");
    } finally {
      setDeletingId(null);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    onUnauthorized();
  }

  return (
    <div className="min-h-screen bg-topre-soft px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 rounded-4xl border border-topre-border bg-white p-5 shadow-card md:flex-row md:items-center md:justify-between md:p-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-topre-navy">Dashboard Leads Inquiry</h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">Data calon customer yang masuk dari landing page Topre.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={fetchLeads}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-topre-primary bg-white px-5 py-2 text-sm font-bold text-topre-primary transition hover:bg-topre-light"
              type="button"
            >
              Refresh
            </button>
            <button
              onClick={logout}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-topre-primary px-5 py-2 text-sm font-bold text-white transition hover:bg-topre-navy"
              type="button"
            >
              Logout
            </button>
          </div>
        </div>

        {feedback && <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{feedback}</div>}
        {error && <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}

        <div className="overflow-hidden rounded-4xl border border-topre-border bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-[1180px] w-full border-collapse text-left text-sm">
              <thead className="bg-topre-primary text-white">
                <tr>
                  {[
                    "Nama",
                    "Perusahaan",
                    "WhatsApp",
                    "Kota / Area",
                    "Jenis Kebutuhan",
                    "Kebutuhan Suhu",
                    "Catatan",
                    "Waktu Masuk",
                    "Aksi",
                  ].map((header) => (
                    <th key={header} className="px-4 py-4 font-black">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-topre-border">
                {loading ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center font-semibold text-slate-500">Memuat data leads...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center font-semibold text-slate-500">Belum ada leads masuk.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="align-top transition hover:bg-topre-soft">
                      <td className="px-4 py-4 font-bold text-topre-navy">{lead.name}</td>
                      <td className="px-4 py-4 text-slate-700">{lead.company || "-"}</td>
                      <td className="px-4 py-4">
                        <a href={getWhatsappHref(lead.phone)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-topre-primary hover:underline">
                          <WhatsappIcon className="h-4 w-4" />
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-slate-700">{lead.city || "-"}</td>
                      <td className="px-4 py-4 text-slate-700">{lead.need_type || "-"}</td>
                      <td className="px-4 py-4 text-slate-700">{lead.temperature_need || "-"}</td>
                      <td className="max-w-[260px] px-4 py-4 text-slate-700">{lead.message || "-"}</td>
                      <td className="px-4 py-4 text-slate-700">{formatDate(lead.created_at)}</td>
                      <td className="px-4 py-4">
                        <button
                          type="button"
                          disabled={deletingId === lead.id}
                          onClick={() => deleteLead(lead.id)}
                          className="focus-ring inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          <TrashIcon className="h-4 w-4" />
                          {deletingId === lead.id ? "Menghapus" : "Hapus"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
