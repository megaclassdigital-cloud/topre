import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import type { LeadFormPayload } from "@/types/lead";

const phoneRegex = /^[0-9+\-\s]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadFormPayload;

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();

    if (name.length < 2) {
      return NextResponse.json({ message: "Nama minimal 2 karakter." }, { status: 400 });
    }

    if (!phone) {
      return NextResponse.json({ message: "Nomor WhatsApp wajib diisi." }, { status: 400 });
    }

    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ message: "Nomor WhatsApp tidak valid." }, { status: 400 });
    }

    const payload = {
      name,
      company: body.company?.trim() || null,
      phone,
      city: body.city?.trim() || null,
      need_type: body.need_type?.trim() || null,
      temperature_need: body.temperature_need?.trim() || null,
      message: body.message?.trim() || null,
      source: "topre-landing-page",
    };

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert(payload);

    if (error) {
      return NextResponse.json({ message: "Terjadi kendala saat mengirim data." }, { status: 500 });
    }

    return NextResponse.json({ message: "Lead berhasil disimpan." }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Request tidak valid." }, { status: 400 });
  }
}
