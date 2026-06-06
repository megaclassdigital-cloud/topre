"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
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
  name: "", company: "", phone: "", city: "", need_type: "", temperature_need: "", message: "",
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
    setError(""); setSuccess(false);
    if (form.name.trim().length < 2) { setError("Nama minimal 2 karakter."); return; }
    if (!form.phone.trim()) { setError("Nomor WhatsApp wajib diisi."); return; }
    setLoading(true);
    try {
      await fetch("/api/submit-leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, source: "topre-landing-page" }) });
      setSuccess(true); setForm(initialFormState);
    } catch {
      setError("Terjadi kendala saat mengirim data.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="inquiry" className="bg-[#f8fafc] py-20 lg:py-32">
      <div className="section-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0064e0]/20 bg-[#0064e0]/5 px-6 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-[#0064e0]">
            Form Inquiry
          </span>
          <h2 className="mt-6 text-[32px] md:text-[42px] font-black tracking-tight text-[#0a1317] leading-tight">
            Konsultasikan Kebutuhan Unit Anda
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-slate-600 max-w-2xl mx-auto">
            Isi form berikut untuk menyampaikan kebutuhan Anda. Data akan langsung diterima oleh sales untuk ditindaklanjuti lebih cepat.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm"
          >
            <h3 className="text-[24px] font-black leading-snug text-[#0a1317]">
              Informasi yang Anda kirim membantu sales memahami kebutuhan awal Anda.
            </h3>
            <div className="mt-8 grid gap-4">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0064e0]/10 text-[#0064e0]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-[18px] font-semibold text-slate-700">{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Nama" required>
                  <input value={form.name} onChange={(e) => updateField("name", e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 px-4 text-[16px] focus:ring-2 focus:ring-[#0064e0]/20 outline-none transition" placeholder="Nama Anda" />
                </Field>
                <Field label="Nama Perusahaan">
                  <input value={form.company} onChange={(e) => updateField("company", e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 px-4 text-[16px] focus:ring-2 focus:ring-[#0064e0]/20 outline-none transition" placeholder="PT / CV" />
                </Field>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Nomor WhatsApp" required>
                  <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 px-4 text-[16px] focus:ring-2 focus:ring-[#0064e0]/20 outline-none transition" placeholder="08xxxxxxxx" />
                </Field>
                <Field label="Kota / Area">
                  <input value={form.city} onChange={(e) => updateField("city", e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 px-4 text-[16px] focus:ring-2 focus:ring-[#0064e0]/20 outline-none transition" placeholder="Contoh: Jakarta" />
                </Field>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Jenis Kebutuhan">
                  <select value={form.need_type} onChange={(e) => updateField("need_type", e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-[16px] focus:ring-2 focus:ring-[#0064e0]/20 outline-none transition">
                    <option value="">Pilih kebutuhan</option>
                    {NEED_TYPES.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </Field>
                <Field label="Kebutuhan Suhu">
                  <select value={form.temperature_need} onChange={(e) => updateField("temperature_need", e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-[16px] focus:ring-2 focus:ring-[#0064e0]/20 outline-none transition">
                    <option value="">Pilih suhu</option>
                    {TEMPERATURE_NEEDS.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Catatan Kebutuhan">
                <textarea value={form.message} onChange={(e) => updateField("message", e.target.value)} className="min-h-[120px] w-full rounded-xl border border-slate-300 p-4 text-[16px] focus:ring-2 focus:ring-[#0064e0]/20 outline-none transition" placeholder="Ceritakan kebutuhan spesifik Anda..." />
              </Field>

              {error && <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] font-bold text-red-700">{error}</div>}
              {success && <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-[14px] font-bold text-emerald-700">Terima kasih. Data Anda sudah terkirim.</div>}

              <button type="submit" disabled={loading} className="h-12 w-full rounded-full bg-[#0064e0] text-[16px] font-black text-white hover:bg-[#0457cb] transition disabled:opacity-50">
                {loading ? "Mengirim..." : "Kirim Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-[14px] font-black uppercase tracking-wider text-[#0a1317]">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}