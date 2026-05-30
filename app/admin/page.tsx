import type { Metadata } from "next";
import AdminDashboard from "@/components/AdminDashboard";
import { isAdminAuthenticated } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin Leads Inquiry | Topre Refrigerated Vehicle",
  description: "Dashboard leads inquiry landing page Topre.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminDashboard initialAuthenticated={isAdminAuthenticated()} />;
}
