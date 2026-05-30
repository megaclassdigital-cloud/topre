"use client";

import { useCallback, useState } from "react";
import AdminLeadsTable from "@/components/AdminLeadsTable";
import AdminLogin from "@/components/AdminLogin";

export default function AdminDashboard({ initialAuthenticated = false }: { initialAuthenticated?: boolean }) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);

  const onSuccess = useCallback(() => setAuthenticated(true), []);
  const onUnauthorized = useCallback(() => setAuthenticated(false), []);

  return authenticated ? <AdminLeadsTable onUnauthorized={onUnauthorized} /> : <AdminLogin onSuccess={onSuccess} />;
}
