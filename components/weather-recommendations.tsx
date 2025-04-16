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
import { Sun, CloudRain, Cloud, CloudSnow, Wind } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type WeatherType = "sunny" | "rainy" | "cloudy" | "snowy" | "windy";

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  weatherTypes: WeatherType[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Samarqand sohil kurordi",
    description:
      "Tiniq suvlar va oq qumli sohillar bilan mukammal quyoshli dam olish joyi.",
    image: "/registon-2.jpg",
    weatherTypes: ["sunny"],
  },
  {
    id: 2,
    name: "Toshkent tog' dam olish maskani",
    description:
      "Yomg'irli kunlar uchun ichki faoliyatlar bilan qulay tog' uylari.",
    image: "/tosh-dam-olish.jpg",
    weatherTypes: ["rainy", "cloudy"],
  },
  {
    id: 3,
    name: "Buxoro tarixiy markazi",
    description:
      "Ichki muzeylar va tarixiy joylarni o'rganing, har qanday ob-havo uchun mos.",
    image: "/buxoro02.jpg",
    weatherTypes: ["rainy", "cloudy", "windy"],
  },
  {
    id: 4,
    name: "Farg'ona vodiysi uzumzorlari",
    description:
      "Vino degustatsiyasi turlari bilan go'zal qishloq joylari, quyoshli yoki bulutli ob-havoda eng yaxshi.",
    image: "/far-uzumzor.jpg",
    weatherTypes: ["sunny", "cloudy"],
  },
  {
    id: 5,
    name: "Chimyon chang'i kurordi",
    description:
      "Ajoyib chang'i inshootlari bilan qor sevuvchilar uchun mukammal manzil.",
    image: "/chimyon.jpg",
    weatherTypes: ["snowy"],
  },
  {
    id: 6,
    name: "Orol dengizi sarguzashti",
    description:
      "Noyob landshaft suratga olish imkoniyatlari, ayniqsa shamollik kunlarda.",
    image: "/orol-dengiz.jpg",
    weatherTypes: ["windy", "sunny"],
  },
];

export default function WeatherRecommendations() {
  const [selectedWeather, setSelectedWeather] = useState<WeatherType>("sunny");

  const filteredDestinations = destinations.filter((dest) =>
    dest.weatherTypes.includes(selectedWeather)
  );

  const weatherIcons = {
    sunny: <Sun className="h-5 w-5" />,
    rainy: <CloudRain className="h-5 w-5" />,
    cloudy: <Cloud className="h-5 w-5" />,
    snowy: <CloudSnow className="h-5 w-5" />,
    windy: <Wind className="h-5 w-5" />,
  };

  return (
    <div>
      <Tabs
        defaultValue="sunny"
        onValueChange={(value) => setSelectedWeather(value as WeatherType)}
      >
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="sunny" className="flex items-center gap-2">
            {weatherIcons.sunny} Quyoshli
          </TabsTrigger>
          <TabsTrigger value="rainy" className="flex items-center gap-2">
            {weatherIcons.rainy} Yomg'irli
          </TabsTrigger>
          <TabsTrigger value="cloudy" className="flex items-center gap-2">
            {weatherIcons.cloudy} Bulutli
          </TabsTrigger>
          <TabsTrigger value="snowy" className="flex items-center gap-2">
            {weatherIcons.snowy} Qorli
          </TabsTrigger>
          <TabsTrigger value="windy" className="flex items-center gap-2">
            {weatherIcons.windy} Shamollik
          </TabsTrigger>
        </TabsList>

        {Object.keys(weatherIcons).map((weather) => (
          <TabsContent key={weather} value={weather}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination) => (
                <Card key={destination.id} className="overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{destination.name}</CardTitle>
                    <CardDescription>
                      {destination.weatherTypes
                        .map((w) => {
                          if (w === "sunny") return "quyoshli";
                          if (w === "rainy") return "yomg'irli";
                          if (w === "cloudy") return "bulutli";
                          if (w === "snowy") return "qorli";
                          if (w === "windy") return "shamollik";
                          return w;
                        })
                        .join(", ")}{" "}
                      ob-havo uchun mukammal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{destination.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Batafsil ma'lumot</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
