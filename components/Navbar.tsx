// components/navbar.tsx
import Link from "next/link";
import { Menu, User } from "lucide-react";

export default function Navbar() {
  // 🔐 Hozircha statik, keyinchalik auth tizim bilan o‘zgartirasiz
  const isLoggedIn = false;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 max-w-6xl">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Sayohatchi
        </Link>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="#weather">Ob-havo</Link>
          <Link href="#destinations">Manzillar</Link>
          <Link href="#vr">VR Sayohat</Link>
          <Link href="#umrah">Umra</Link>
          <Link href="#food">Ovqatlanish</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="flex items-center space-x-2 text-emerald-600 font-medium"
            >
              <User className="w-5 h-5" />
              <span>Profil</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Login
            </Link>
          )}
          <button className="md:hidden text-gray-700">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
