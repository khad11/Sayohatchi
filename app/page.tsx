"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Train, Car, Clock, Utensils } from "lucide-react";
import WeatherRecommendations from "@/components/weather-recommendations";
import PopularDestinations from "@/components/popular-destinations";
import CleanupAlert from "@/components/cleanup-alert";
import VRTravelSection from "@/components/vr-travel-section";
import AccessibilityFeatures from "@/components/accessibility-features";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const agencies = [
  {
    name: "Anex tour",
    logo: "/anex.tour.png",
    description: "Ishonchli Umra xizmatlari bilan mashhur firma.",
  },
  {
    name: "Sayohatchi.uz",
    logo: "/sayohatchi-t.png",
    description: "Yoshlar uchun qulay va arzon paketlar.",
  },
  {
    name: "FlyTour",
    logo: "/fly-tour.png",
    description: "Dunyo bo‘ylab eksklyuziv VIP sayohatlar.",
  },
  {
    name: "Ustoz Tour",
    logo: "/ustoz-t.jpeg",
    description: "Haj va Umra bo‘yicha 20 yillik tajriba.",
  },
  {
    name: "Tashkent Travel",
    logo: "/toshkent-t.jpeg",
    description: "Toshkent markazidagi sayohat agentligi.",
  },
  {
    name: "Ziyorat Travel",
    logo: "/ziyorat-t.jpeg",
    description: "Ziyorat va sayohatni birlashtirgan paketlar.",
  },
  {
    name: "Grand Tour",
    logo: "/g-trevel.png",
    description: "Oila uchun qulay xizmatlar va qulay narxlar.",
  },
];
export default function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };
  const router = useRouter();

  const handleClick = () => {
    router.push("/ai-route");
  };
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <Navbar />
      <CleanupAlert />

      <section
        className="relative py-20 px-6 bg-gradient-to-br from-teal-600 to-emerald-500 text-white overflow-hidden "
        id="weather"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
            Ajoyib joylarni kashf eting
          </h1>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl">
            Ob-havo, imkoniyatlar va afzalliklaringizga asoslangan shaxsiy
            tavsiyalar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-200 font-semibold shadow-md hover:text-black"
            >
              Manzillarni ko'rish
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-emerald-700 hover:bg-gray-200 font-semibold"
            >
              Sayohatingizni rejalashtiring
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100" id="agencies">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Hamkorlik qilayotgan turistik firmalar
          </h2>
          <Slider {...sliderSettings}>
            {agencies.map((agency) => (
              <div key={agency.name} className="px-4">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center h-full">
                  <img
                    src={agency.logo}
                    alt={agency.name}
                    className="h-20 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2">{agency.name}</h3>
                  <p className="text-gray-600 text-sm">{agency.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50" id="destinations">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Ob-havo sharoitiga ko'ra tavsiyalar
          </h2>
          <WeatherRecommendations />
        </div>
      </section>

      <section className="py-20 px-6" id="vr">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Eng mashhur manzillar
          </h2>
          <PopularDestinations />
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900 text-white" id="umrah">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Virtual haqiqat sayohati
          </h2>
          <VRTravelSection />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Transport variantlari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Plane,
                title: "Havo transporti",
                desc: "Parvozlar va narxlar",
                body: "Turli aviakompaniyalarning real vaqtdagi narxlari va mavjudligini solishtiring.",
                btn: "Parvozlarni qidirish",
              },
              {
                icon: Train,
                title: "Poyezd transporti",
                desc: "Temir yo'l aloqalari va chiptalar",
                body: "Butun mamlakat bo'ylab poyezd yo'nalishlari, jadvallarini toping va chiptalarni band qiling.",
                btn: "Poyezdlarni topish",
              },
              {
                icon: Car,
                title: "Yo'l transporti",
                desc: "Avtomobil ijarasi va sayohatlar",
                body: "Avtomobillarni ijaraga oling, yo'l ko'rsatmalarini toping va sayohat yo'nalishlarini yarating.",
                btn: "Sayohatni rejalashtirish",
              },
            ].map(({ icon: Icon, title, desc, body, btn }) => (
              <Card key={title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex items-center gap-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{body}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{btn}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-amber-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Maxsus marshrutlar rejasi</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Har qanday hududni o'rganish uchun mukammal yo'l xaritasini
            yarating. AI yordamida vaqtingizga mos marshrutlar tuzing.
          </p>
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700"
            onClick={handleClick}
          >
            <Clock className="mr-2 h-5 w-5" /> Marshrutingizni yarating
          </Button>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Arzon Umra ziyoratlari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Toshkent",
              "Samarqand",
              "Buxoro",
              "Andijon",
              "Namangan",
              "Farg'ona",
            ].map((region) => (
              <Card key={region} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{region} viloyati</CardTitle>
                  <CardDescription>
                    Ushbu viloyatdan boshlanadigan Umra paketlari
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { label: "Iqtisodiy paket", price: "$800 dan" },
                    { label: "Standart paket", price: "$1200 dan" },
                    { label: "Premium paket", price: "$1800 dan" },
                  ].map(({ label, price }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between"
                    >
                      <span>{label}:</span>
                      <Badge variant="outline" className="font-semibold">
                        {price}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Batafsil ma'lumot
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Ovqatlanishni unutmang!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mahalliy taomlar",
                desc: "Haqiqiy mahalliy taomlarni kashf eting",
                body: "AI tavsiyalari asosida eng yaxshi restoranlarni toping va mahalliy taomlarning ajoyib lazzatidan bahramand bo‘ling.",
                color: "text-purple-500",
              },
              {
                title: "O'z ovqatingizni olib boring",
                desc: "Ovqat olib boradigan sayohatchilar uchun maslahatlar",
                body: "O'z ovqatingizni qanday qadoqlash va saqlash haqida maslahatlar. Mahalliy qoidalarni biling.",
                color: "text-teal-500",
              },
            ].map(({ title, desc, body, color }) => (
              <Card key={title} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex items-center gap-4">
                  <Utensils className={`h-8 w-8 ${color}`} />
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{body}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Batafsil o'rganish</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sayohat yo'riqnomasi</h3>
            <p className="text-gray-300">
              AI-quvvatlangan sayohat hamrohingiz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              {["Manzillar", "VR sayohat", "Imkoniyatlar", "Transport"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resurslar</h3>
            <ul className="space-y-2">
              {[
                "Sayohat yo'riqnomalari",
                "Ob-havo yangiliklari",
                "Umra paketlari",
                "Ovqatlanish yo'riqnomasi",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Aloqa</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@travelguide.com</li>
              <li>Telefon: +998 90 123 4567</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-12 border-t border-gray-800 pt-6">
          <p>
            © {new Date().getFullYear()} Sayohat yo'riqnomasi. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
}
