import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("leads")
      .select("id,name,company,phone,city,need_type,temperature_need,message,source,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ message: "Gagal mengambil data leads." }, { status: 500 });
    }

    return NextResponse.json({ leads: data || [] });
  } catch {
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
