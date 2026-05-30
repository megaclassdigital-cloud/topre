"use client";

import { FormEvent, useState } from "react";
import { BrandMark } from "@/components/icons";

export default function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Password salah. Silakan coba lagi.");
        return;
      }

      setPassword("");
      onSuccess();
    } catch {
      setError("Terjadi kendala saat login. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-12">
      <div className="w-full rounded-4xl border border-topre-border bg-white p-6 shadow-soft md:p-8">
        <div className="mb-8 flex justify-center">
          <BrandMark />
        </div>
        <h1 className="text-center text-3xl font-black tracking-tight text-topre-navy">Admin Login</h1>
        <p className="mt-3 text-center text-sm leading-6 text-slate-600">Masukkan password admin untuk melihat data leads inquiry.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-topre-navy">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="focus-ring w-full rounded-2xl border border-topre-border px-4 py-3 text-sm text-topre-navy"
              placeholder="Masukkan password admin"
            />
          </label>

          {error && <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-topre-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-topre-navy disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Memproses..." : "Masuk Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
