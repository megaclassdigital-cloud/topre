import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const id = params.id;

  if (!id) {
    return NextResponse.json({ message: "ID lead tidak valid." }, { status: 400 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ message: "Gagal menghapus lead." }, { status: 500 });
    }

    return NextResponse.json({ message: "Lead berhasil dihapus." });
  } catch {
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
