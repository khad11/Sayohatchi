"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquare,
  Eye,
  FerrisWheelIcon as WheelchairIcon,
  Brain,
  Users,
} from "lucide-react";

export default function AccessibilityFeatures() {
  const [activeTab, setActiveTab] = useState("ai-assistant");

  return (
    <div>
      <Tabs defaultValue="ai-assistant" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="ai-assistant" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> AI Yordamchi
          </TabsTrigger>
          <TabsTrigger value="visual" className="flex items-center gap-2">
            <Eye className="h-4 w-4" /> Ko'rish qobiliyati cheklangan
          </TabsTrigger>
          <TabsTrigger value="mobility" className="flex items-center gap-2">
            <WheelchairIcon className="h-4 w-4" /> Harakatlanish ehtiyojlari
          </TabsTrigger>
          <TabsTrigger value="volunteer" className="flex items-center gap-2">
            <Users className="h-4 w-4" /> Ko'ngillilar dasturi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai-assistant">
          <Card>
            <CardHeader>
              <CardTitle>AI Sayohat yordamchisi</CardTitle>
              <CardDescription>
                Bizning AI yordamchimiz imkoniyati cheklangan sayohatchilar
                uchun qulay sayohatlarni rejalashtirish va real vaqtda yordam
                berishi mumkin.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">
                      Bizning AI imkoniyati cheklangan sayohatchilarga qanday
                      yordam beradi:
                    </h3>
                    <ul className="space-y-2  list-disc pl-5">
                      <li>Veb-saytda ovozli boshqaruv</li>
                      <li>
                        Imkoniyat ehtiyojlariga asoslangan shaxsiy marshrutlar
                      </li>
                      <li>Real vaqtda tarjima va muloqot yordami</li>
                      <li>
                        Barcha manzillar uchun batafsil imkoniyat ma'lumotlari
                      </li>
                      <li>
                        Sayohat davomida favqulodda yordam va qo'llab-quvvatlash
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-white">
                <h3 className="font-medium mb-2">
                  AI Yordamchimizni sinab ko'ring
                </h3>
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-gray-600 italic">
                    "Men nogironlar aravachasidan foydalanaman. Toshkentdagi
                    imkoniyati cheklangan insonlar uchun qulay diqqatga sazovor
                    joylarni tavsiya qila olasizmi?"
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                  <p>
                    Men O'zbekiston tarixi davlat muzeyi, Amir Temur muzeyi va
                    Toshkent teleminorasini tavsiya qilaman, ularning barchasi
                    nogironlar aravachasi uchun qulay. Chorsu bozorining ba'zi
                    qismlari ham imkoniyati cheklangan insonlar uchun qulay.
                    Ushbu joylardagi panduslar, liftlar va maxsus hojatxonalar
                    haqida batafsil ma'lumot olishni xohlaysizmi?
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                AI Yordamchi bilan suhbatlashing
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="visual">
          <Card>
            <CardHeader>
              <CardTitle>
                Ko'rish qobiliyati cheklangan insonlar uchun imkoniyatlar
              </CardTitle>
              <CardDescription>
                Ko'rish qobiliyati cheklangan sayohatchilar uchun vositalar va
                xizmatlar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Audio tavsiflar</h3>
                    <p>
                      Diqqatga sazovor joylar, tarixiy yodgorliklar va tabiiy
                      manzaralarning batafsil audio tavsiflari.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Taktil xaritalar</h3>
                    <p>
                      Asosiy sayyohlik joylarida taktil xaritalarning
                      mavjudligi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Yo'l-yo'riq xizmatlari</h3>
                    <p>
                      Ko'rish qobiliyati cheklangan sayohatchilarga yordam
                      berish uchun maxsus tayyorlangan yo'l-yo'riqchilar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">AI navigatsiya ilovasi</h3>
                    <p>
                      Bizning mobil ilovamiz ovozli navigatsiya va to'siqlar
                      haqida ogohlantirishlarni taqdim etadi.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Batafsil ma'lumot</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="mobility">
          <Card>
            <CardHeader>
              <CardTitle>Harakatlanish imkoniyatlari</CardTitle>
              <CardDescription>
                Harakatlanish qobiliyati cheklangan sayohatchilar uchun
                resurslar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <WheelchairIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Imkoniyati cheklangan insonlar uchun qulay transport
                    </h3>
                    <p>
                      Nogironlar aravachasi uchun qulay taksilar, avtobuslar va
                      sayohat transportlari haqida ma'lumot.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <WheelchairIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Turar joy ma'lumotlar bazasi
                    </h3>
                    <p>
                      Imkoniyati cheklangan insonlar uchun qulay xonalar va
                      jihozlarga ega mehmonxonalarning keng qamrovli ma'lumotlar
                      bazasi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <WheelchairIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Imkoniyati cheklangan insonlar uchun qulay yo'nalishlar
                    </h3>
                    <p>
                      Nogironlar aravachasi uchun qulay yo'llar va diqqatga
                      sazovor joylar bilan maxsus marshrutlar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <WheelchairIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Jihozlarni ijaraga olish</h3>
                    <p>
                      Manzillaringizda harakatlanish jihozlarini qayerdan
                      ijaraga olish mumkinligi haqida ma'lumot.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Imkoniyati cheklangan insonlar uchun qulay manzillarni toping
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="volunteer">
          <Card>
            <CardHeader>
              <CardTitle>Ko'ngilli sayohat hamrohi dasturi</CardTitle>
              <CardDescription>
                Imkoniyati cheklangan sayohatchilarni ko'ngilli hamrohlar bilan
                bog'lash
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">
                      Bizning ko'ngillilar dasturi qanday ishlaydi:
                    </h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>
                        Imkoniyati cheklangan sayohatchilar ko'ngilli hamroh
                        so'rashi mumkin
                      </li>
                      <li>
                        Ko'ngillilar tekshiriladi, o'qitiladi va ehtiyoj va
                        afzalliklarga qarab tanlanadi
                      </li>
                      <li>
                        Hamrohlar navigatsiya, muloqot va umumiy yordam bilan
                        ta'minlaydi
                      </li>
                      <li>
                        Xizmat bepul taqdim etiladi (ko'ngillilar bepul turar
                        joy olishadi)
                      </li>
                      <li>
                        Sayohatchilar va ko'ngillilar sayohatdan so'ng o'z
                        tajribalarini baholaydilar
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">
                    Hamrohga ehtiyojingiz bormi?
                  </h3>
                  <p className="mb-4">
                    Keyingi sarguzashtingizga hamrohlik qilish uchun ko'ngilli
                    so'rang.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ko'ngilli so'rash
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Ko'ngilli bo'ling</h3>
                  <p className="mb-4">
                    Yangi joylarni o'rganish bilan bir qatorda sayohatni hamma
                    uchun qulay qilishga yordam bering.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ko'ngilli sifatida ariza topshiring
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Dastur haqida batafsil ma'lumot
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
