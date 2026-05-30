"use client";

import { FormEvent, useState } from "react";
import ButtonLink from "@/components/ButtonLink";
import SectionHeader from "@/components/SectionHeader";
import { CheckIcon, WhatsappIcon } from "@/components/icons";
import { NEED_TYPES, TEMPERATURE_NEEDS } from "@/lib/constants";
import { getWhatsappLink } from "@/lib/whatsapp";

const bullets = [
  "Jenis produk yang dikirim",
  "Kebutuhan suhu frozen atau chilled",
  "Area distribusi",
  "Kapasitas dan kebutuhan unit",
];

type FormState = {
  name: string;
  company: string;
  phone: string;
  city: string;
  need_type: string;
  temperature_need: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  company: "",
  phone: "",
  city: "",
  need_type: "",
  temperature_need: "",
  message: "",
};

export default function LeadFormSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const phoneRegex = /^[0-9+\-\s]+$/;

    if (form.name.trim().length < 2) {
      setError("Nama minimal 2 karakter.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Nomor WhatsApp wajib diisi.");
      return;
    }

    if (!phoneRegex.test(form.phone.trim())) {
      setError("Nomor WhatsApp hanya boleh angka, +, spasi, atau tanda -.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/submit-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "topre-landing-page" }),
      });

      if (!response.ok) {
        throw new Error("Submit failed");
      }

      setSuccess(true);
      setForm(initialFormState);
    } catch {
      setError("Terjadi kendala saat mengirim data. Silakan coba lagi atau hubungi WhatsApp sales.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="inquiry" className="section-padding bg-topre-soft">
      <div className="section-container">
        <SectionHeader
          label="Form Inquiry"
          title="Konsultasikan Kebutuhan Unit Anda"
          description="Isi form berikut untuk menyampaikan kebutuhan Anda. Data akan langsung diterima oleh sales untuk ditindaklanjuti lebih cepat."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-4xl border border-topre-border bg-white p-6 shadow-card md:p-8">
            <h3 className="text-2xl font-black tracking-tight text-topre-navy">
              Informasi yang Anda kirim membantu sales memahami kebutuhan awal Anda.
            </h3>
            <div className="mt-6 grid gap-4">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 rounded-2xl border border-topre-border bg-white px-4 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-topre-light text-topre-primary">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-bold text-slate-700 md:text-base">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-topre-border bg-white p-5 shadow-soft md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nama" required>
                  <input
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="focus-ring w-full rounded-2xl border border-topre-border px-4 py-3 text-sm text-topre-navy placeholder:text-slate-400"
                    placeholder="Masukkan nama Anda"
                    autoComplete="name"
                  />
                </Field>

                <Field label="Nama Perusahaan">
                  <input
                    value={form.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    className="focus-ring w-full rounded-2xl border border-topre-border px-4 py-3 text-sm text-topre-navy placeholder:text-slate-400"
                    placeholder="Contoh: PT / CV / Nama Bisnis"
                    autoComplete="organization"
                  />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nomor WhatsApp" required>
                  <input
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className="focus-ring w-full rounded-2xl border border-topre-border px-4 py-3 text-sm text-topre-navy placeholder:text-slate-400"
                    placeholder="Contoh: 08xxxxxxxxxx"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </Field>

                <Field label="Kota / Area">
                  <input
                    value={form.city}
                    onChange={(event) => updateField("city", event.target.value)}
                    className="focus-ring w-full rounded-2xl border border-topre-border px-4 py-3 text-sm text-topre-navy placeholder:text-slate-400"
                    placeholder="Contoh: Jakarta, Tangerang, Bekasi"
                    autoComplete="address-level2"
                  />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Jenis Kebutuhan">
                  <select
                    value={form.need_type}
                    onChange={(event) => updateField("need_type", event.target.value)}
                    className="focus-ring w-full rounded-2xl border border-topre-border bg-white px-4 py-3 text-sm text-topre-navy"
                  >
                    <option value="">Pilih jenis kebutuhan</option>
                    {NEED_TYPES.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Kebutuhan Suhu">
                  <select
                    value={form.temperature_need}
                    onChange={(event) => updateField("temperature_need", event.target.value)}
                    className="focus-ring w-full rounded-2xl border border-topre-border bg-white px-4 py-3 text-sm text-topre-navy"
                  >
                    <option value="">Pilih kebutuhan suhu</option>
                    {TEMPERATURE_NEEDS.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Catatan Kebutuhan">
                <textarea
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="focus-ring min-h-32 w-full resize-y rounded-2xl border border-topre-border px-4 py-3 text-sm text-topre-navy placeholder:text-slate-400"
                  placeholder="Ceritakan kebutuhan produk, kapasitas, atau rute distribusi Anda"
                />
              </Field>

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  Terima kasih. Data Anda sudah terkirim. Tim sales akan segera menghubungi Anda.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-full bg-topre-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-topre-navy disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Mengirim..." : "Kirim Inquiry"}
              </button>

              <ButtonLink href={getWhatsappLink()} variant="secondary" target="_blank" rel="noreferrer" className="w-full">
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Lanjut Chat WhatsApp
              </ButtonLink>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-topre-navy">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}
