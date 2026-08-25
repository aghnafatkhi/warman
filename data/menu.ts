export interface MenuItem {
  id: string;
  name: string;
  category: 'rice-bowl' | 'main-course' | 'side-dish' | 'sambal' | 'savory-bites' | 'sweet-bites';
  price: number;
  description?: string;
  portionNote?: string;
  image?: string;
}

export interface SambalItem {
  id: string;
  name: string;
  price: number;
}

export const RESTAURANT_INFO = {
  name: "Warman Restaurant",
  brandName: "WARMAN",
  address: {
    line1: "Ruko Commpark",
    line2: "Jl. Canadian Broadway Kota Wisata No. 15 Blok E",
    village: "Limus Nunggal",
    district: "Kecamatan Cileungsi",
    regency: "Kabupaten Bogor",
    province: "Jawa Barat",
    postalCode: "16820",
    full: "Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E, Limus Nunggal, Kecamatan Cileungsi, Kabupaten Bogor, Jawa Barat 16820"
  },
  googleMapsUrl: "https://maps.app.goo.gl/CNx9b48TZ6nkC8WLA",
  phone: "0821-2345-1707",
  openingHours: "Setiap hari · 10.00–22.00 WIB",
  priceRange: "sekitar Rp25.000–Rp50.000 per orang",
  googleRating: "4,9 di Google",
  googleReviewsCount: "170+ ulasan",
  taxNote: "Harga belum termasuk pajak 10%.",
  sambalChoices: ["Korek", "Matah", "Terasi", "Cabe Ijo"]
};

export const SAMBAL_LIST: SambalItem[] = [
  {
    id: "korek",
    name: "Korek",
    price: 8000
  },
  {
    id: "matah",
    name: "Matah",
    price: 8000
  },
  {
    id: "terasi",
    name: "Terasi",
    price: 8000
  },
  {
    id: "cabe-ijo",
    name: "Cabe Ijo",
    price: 8000
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'rice-bowl', label: 'Rice Bowl' },
  { id: 'main-course', label: 'Main Course' },
  { id: 'side-dish', label: 'Side Dish' },
  { id: 'sambal', label: 'Sambal' },
  { id: 'savory-bites', label: 'Savory Bites' },
  { id: 'sweet-bites', label: 'Sweet Bites' },
] as const;

export const FULL_MENU: MenuItem[] = [
  // 1. RICE BOWL
  {
    id: "rb-dori",
    name: "Dori Rice Bowl",
    category: "rice-bowl",
    price: 26000,
    description: "Nasi putih, ikan dori tepung deep-fried, sambal.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rb-paru",
    name: "Paru Rice Bowl",
    category: "rice-bowl",
    price: 26000,
    description: "Nasi putih, paru sapi deep-fried, sambal.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rb-karaage",
    name: "Karaage Rice Bowl",
    category: "rice-bowl",
    price: 25000,
    description: "Nasi putih, ayam fillet tepung deep-fried, sambal.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rb-suwir",
    name: "Suwir Rice Bowl",
    category: "rice-bowl",
    price: 21000,
    description: "Nasi putih, daging ayam suwir, sambal.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
  },

  // 2. MAIN COURSE
  {
    id: "mc-ayam-goreng",
    name: "Ayam Goreng",
    category: "main-course",
    price: 27000,
    description: "Daging ayam deep-fried, sambal."
  },
  {
    id: "mc-paru-sapi",
    name: "Paru Sapi Goreng",
    category: "main-course",
    price: 32000,
    description: "Paru sapi deep-fried, sambal."
  },
  {
    id: "mc-ikan-lele",
    name: "Ikan Lele Goreng",
    category: "main-course",
    price: 22000,
    description: "Ikan lele deep-fried, sambal."
  },
  {
    id: "mc-ikan-nila",
    name: "Ikan Nila Goreng",
    category: "main-course",
    price: 28000,
    description: "Ikan nila deep-fried, sambal."
  },
  {
    id: "mc-telur-barendo-2",
    name: "Telur Barendo 2 telur",
    category: "main-course",
    price: 22000,
    description: "Telur ayam deep-fried dimasak dengan teknik khusus, sambal."
  },
  {
    id: "mc-telur-barendo-3",
    name: "Telur Barendo 3 telur",
    category: "main-course",
    price: 29000,
    description: "Telur ayam deep-fried dimasak dengan teknik khusus, sambal."
  },
  {
    id: "mc-nasgor-kampoeng",
    name: "Nasi Goreng Kampoeng",
    category: "main-course",
    price: 23000,
    description: "Nasi putih digoreng, daging ayam suwir."
  },
  {
    id: "mc-nasgor-spesial",
    name: "Nasi Goreng Spesial",
    category: "main-course",
    price: 43000,
    description: "Nasi putih digoreng, ayam deep-fried, telur mata sapi."
  },
  {
    id: "mc-nasi-putih",
    name: "Nasi Putih",
    category: "main-course",
    price: 8000
  },
  {
    id: "mc-nasi-merah",
    name: "Nasi Merah",
    category: "main-course",
    price: 10000
  },

  // 3. SIDE DISH
  {
    id: "sd-ati-ampela",
    name: "Ati Ampela",
    category: "side-dish",
    price: 15000
  },
  {
    id: "sd-bakwan-sayur",
    name: "Bakwan Sayur",
    category: "side-dish",
    price: 24000,
    description: "Bakwan goreng renyah dengan isi sayuran segar, 3 pcs."
  },
  {
    id: "sd-bakwan-jagung",
    name: "Bakwan Jagung",
    category: "side-dish",
    price: 24000,
    description: "Bakwan goreng renyah dengan isi jagung manis, 3 pcs."
  },
  {
    id: "sd-tumis-pare-teri",
    name: "Tumis Pare Teri",
    category: "side-dish",
    price: 15000
  },
  {
    id: "sd-tumis-toge-tahu",
    name: "Tumis Toge Tahu",
    category: "side-dish",
    price: 14000
  },
  {
    id: "sd-tumis-pakcoy",
    name: "Tumis Pakcoy",
    category: "side-dish",
    price: 12000
  },
  {
    id: "sd-tumis-kangkung",
    name: "Tumis Kangkung",
    category: "side-dish",
    price: 14000
  },

  // 4. SAMBAL
  {
    id: "sb-korek",
    name: "Sambal Korek",
    category: "sambal",
    price: 8000
  },
  {
    id: "sb-matah",
    name: "Sambal Matah",
    category: "sambal",
    price: 8000
  },
  {
    id: "sb-terasi",
    name: "Sambal Terasi",
    category: "sambal",
    price: 8000
  },
  {
    id: "sb-cabe-ijo",
    name: "Cabe Ijo",
    category: "sambal",
    price: 8000
  },

  // 5. SAVORY BITES
  {
    id: "sv-french-fries",
    name: "French Fries",
    category: "savory-bites",
    price: 21000
  },
  {
    id: "sv-tahu-bakso",
    name: "Tahu Bakso Bumbu Rujak",
    category: "savory-bites",
    price: 24000
  },
  {
    id: "sv-cireng",
    name: "Cireng Bumbu Rujak",
    category: "savory-bites",
    price: 17000
  },
  {
    id: "sv-dimsum",
    name: "Dimsum",
    category: "savory-bites",
    price: 20000
  },
  {
    id: "sv-tahu-cabe-garam",
    name: "Tahu Cabe Garam",
    category: "savory-bites",
    price: 22000
  },
  {
    id: "sv-bakpao-daging",
    name: "Bakpao Goreng Mini Daging",
    category: "savory-bites",
    price: 21000
  },
  {
    id: "sv-risoles-beef-mayo",
    name: "Risoles Beef Mayo",
    category: "savory-bites",
    price: 21000
  },
  {
    id: "sv-sosis-solo",
    name: "Sosis Solo Ayam",
    category: "savory-bites",
    price: 20000
  },
  {
    id: "sv-samosa",
    name: "Samosa",
    category: "savory-bites",
    price: 21000
  },
  {
    id: "sv-mozarella-sticks",
    name: "Mozarella Sticks",
    category: "savory-bites",
    price: 25000
  },
  {
    id: "sv-shrimp-rolls",
    name: "Shrimp Rolls",
    category: "savory-bites",
    price: 23000
  },
  {
    id: "sv-chicken-nugget",
    name: "Chicken Nugget",
    category: "savory-bites",
    price: 20000
  },
  {
    id: "sv-ebi-furai",
    name: "Ebi Furai",
    category: "savory-bites",
    price: 28000
  },
  {
    id: "sv-beef-sausages",
    name: "Beef Sausages",
    category: "savory-bites",
    price: 25000
  },
  {
    id: "sv-stik-singkong",
    name: "Stik Singkong Goreng",
    category: "savory-bites",
    price: 21000
  },

  // 6. SWEET BITES
  {
    id: "sw-pisang-cokelat",
    name: "Pisang Cokelat",
    category: "sweet-bites",
    price: 21000
  },
  {
    id: "sw-pisang-goreng",
    name: "Pisang Goreng Tepung",
    category: "sweet-bites",
    price: 20000
  },
  {
    id: "sw-bakpao-cokelat",
    name: "Bakpao Goreng Mini Cokelat",
    category: "sweet-bites",
    price: 20000
  },
  {
    id: "sw-bakpao-pisang",
    name: "Bakpao Goreng Mini Pisang",
    category: "sweet-bites",
    price: 20000
  }
];

export function formatPrice(price: number): string {
  return `Rp${price.toLocaleString('id-ID')}`;
}

