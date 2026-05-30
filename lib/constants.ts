export const BRAND = {
  primaryBlue: "#1E3A8A",
  secondaryBlue: "#2563EB",
  darkNavy: "#0F172A",
  white: "#FFFFFF",
  softBackground: "#F8FAFC",
  borderSoftBlueGray: "#E2E8F0",
  textGray: "#475569",
  lightBlueAccent: "#DBEAFE",
  yellowAccent: "#FACC15",
};

export const SALES = {
  name: process.env.NEXT_PUBLIC_SALES_NAME || "Sopiyan",
  role: "Sales Executive",
  area: process.env.NEXT_PUBLIC_SALES_AREA || "Indonesia",
  phoneDisplay: "0812-1942-3402",
  phoneWa: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281219423402",
  email: process.env.NEXT_PUBLIC_SALES_EMAIL || "sopiyan@topre.co.id",
};

export const WHATSAPP_MESSAGE =
  "Halo, saya ingin konsultasi kebutuhan box pendingin Topre untuk distribusi produk saya.";

export const NAV_ITEMS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "Kontak", href: "#kontak" },
];

export const PROBLEMS = [
  {
    title: "Suhu Harus Tetap Stabil",
    description:
      "Produk frozen dan chilled memerlukan sistem pendingin yang mampu menjaga suhu secara konsisten selama distribusi.",
  },
  {
    title: "Kebutuhan Muatan Berbeda",
    description:
      "Setiap bisnis memiliki kebutuhan kapasitas, dimensi box, dan pola distribusi yang berbeda-beda.",
  },
  {
    title: "Butuh Rekomendasi yang Tepat",
    description:
      "Pemilihan unit pendingin, insulated box, dan konfigurasi kendaraan perlu disesuaikan dengan kebutuhan operasional.",
  },
];

export const PRODUCTS = [
  {
    title: "FL Series",
    description:
      "Solusi refrigerated vehicle untuk kebutuhan distribusi produk frozen dan chilled dengan performa pendinginan yang andal.",
    badge: "Frozen & Chilled",
  },
  {
    title: "XV Series",
    description:
      "Pilihan unit refrigerasi untuk kebutuhan pendinginan yang lebih kuat dan kapasitas operasional yang lebih besar.",
    badge: "High Capacity",
  },
  {
    title: "Dual Temperature",
    description:
      "Solusi kendaraan dengan pembagian ruang suhu untuk membawa produk frozen dan chilled dalam satu armada.",
    badge: "Two Compartments",
  },
  {
    title: "Eutectic Refrigerator Vehicle",
    description:
      "Alternatif pendinginan untuk kebutuhan distribusi tertentu dengan efisiensi operasional yang sesuai.",
    badge: "Efficient Cooling",
  },
  {
    title: "Custom Insulated Box",
    description:
      "Insulated container dengan struktur yang dirancang untuk membantu menjaga suhu dan kualitas produk selama pengiriman.",
    badge: "Custom Need",
  },
];

export const WHY_TOPRE = [
  {
    title: "Teknologi Pendingin Terpercaya",
    description:
      "Mendukung kebutuhan distribusi frozen dan chilled dengan solusi yang dirancang untuk menjaga suhu secara stabil.",
  },
  {
    title: "Insulated Box untuk Cold Chain",
    description:
      "Struktur insulated box membantu menjaga kualitas produk selama proses pengiriman.",
  },
  {
    title: "Pilihan Sesuai Kebutuhan Bisnis",
    description:
      "Tersedia beberapa opsi series dan konfigurasi untuk menyesuaikan kebutuhan distribusi.",
  },
  {
    title: "Cocok untuk Berbagai Jenis Produk",
    description:
      "Dapat digunakan untuk kebutuhan makanan beku, chilled product, dairy, farmasi, dan distribusi sejenis.",
  },
  {
    title: "Pendekatan Konsultatif",
    description:
      "Sales membantu memberikan arahan awal sesuai kebutuhan kapasitas, suhu, dan operasional distribusi.",
  },
  {
    title: "Tampilan Profesional dan Siap Digunakan",
    description:
      "Solusi yang membantu bisnis menjalankan distribusi produk dingin dengan lebih terstruktur.",
  },
];

export const USE_CASES = [
  {
    title: "Frozen Food",
    image: "/images/industries/frozen-food.jpeg",
    alt: "Produk frozen food untuk kebutuhan distribusi box pendingin Topre",
  },
  {
    title: "Seafood",
    image: "/images/industries/seafood.jpg",
    alt: "Produk seafood segar untuk kebutuhan distribusi refrigerated vehicle",
  },
  {
    title: "Daging",
    image: "/images/industries/meat.jpg",
    alt: "Produk daging untuk distribusi cold chain menggunakan box pendingin",
  },
  {
    title: "Dairy Product",
    image: "/images/industries/dairy.webp",
    alt: "Produk dairy untuk kebutuhan distribusi suhu dingin",
  },
  {
    title: "Sayur & Buah",
    image: "/images/industries/vegetables-fruits.jpg",
    alt: "Sayur dan buah untuk kebutuhan distribusi chilled product",
  },
  {
    title: "Farmasi",
    image: "/images/industries/pharmacy.jpg",
    alt: "Produk farmasi untuk kebutuhan distribusi suhu terkontrol",
  },
  {
    title: "Catering / Central Kitchen",
    image: "/images/industries/catering.webp",
    alt: "Distribusi makanan catering dan central kitchen dengan kendaraan pendingin",
  },
  {
    title: "Retail & Supermarket",
    image: "/images/industries/retail-supermarket.jpg",
    alt: "Distribusi produk retail dan supermarket dengan refrigerated vehicle",
  },
];

export const NEED_TYPES = [
  "Box pendingin frozen",
  "Box pendingin chilled",
  "Dual temperature",
  "Unit refrigerasi",
  "Konsultasi kebutuhan unit",
  "Lainnya",
];

export const TEMPERATURE_NEEDS = [
  "Frozen",
  "Chilled",
  "Dual temperature",
  "Belum yakin / perlu konsultasi",
];
