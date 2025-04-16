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
import { Heart, MapPin, Star } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  likes: number;
  rating: number;
  isLiked: boolean;
}

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([
    {
      id: 1,
      name: "Registon maydoni",
      location: "Samarqand",
      description:
        "Uchta madrasa bilan o'ralgan tarixiy maydon, haqiqiy me'moriy mo'jiza.",
      image: "/registon.jpg",
      likes: 1245,
      rating: 4.9,
      isLiked: false,
    },
    {
      id: 2,
      name: "Buxoro eski shahri",
      location: "Buxoro",
      description:
        "140 dan ortiq me'moriy yodgorliklar bilan YUNESKO Jahon merosi ob'ekti.",
      image: "/buxoro02.jpg",
      likes: 1120,
      rating: 4.8,
      isLiked: false,
    },
    {
      id: 3,
      name: "Toshkent teleminorasi",
      location: "Toshkent",
      description:
        "Markaziy Osiyodagi eng baland inshoot, panoramik ko'rinishlar bilan kuzatuv maydoni.",
      image: "/telaminorra.jpg",
      likes: 980,
      rating: 4.6,
      isLiked: false,
    },
    {
      id: 4,
      name: "Amir Temur muzeyi",
      location: "Toshkent",
      description:
        "O'zbekiston milliy qahramoni Amir Temurga bag'ishlangan muzey.",
      image: "/muzey-temur.jpg",
      likes: 875,
      rating: 4.5,
      isLiked: false,
    },
    {
      id: 5,
      name: "Shohi Zinda",
      location: "Samarqand",
      description:
        "Ko'k gumbazli maqbaralar va murakkab koshin ishlari bilan ajralib turadigan nekropol.",
      image: "/shohi-zinda.jpg",
      likes: 1050,
      rating: 4.7,
      isLiked: false,
    },
    {
      id: 6,
      name: "Chimyon tog'lari",
      location: "Toshkent viloyati",
      description:
        "Piyoda yurish, chang'i va paraplan uchish imkoniyatlarini taklif etuvchi go'zal tog' tizmasi.",
      image: "/chimyon.jpg",
      likes: 920,
      rating: 4.6,
      isLiked: false,
    },
  ]);

  const handleLike = (id: number) => {
    setDestinations(
      destinations.map((dest) => {
        if (dest.id === id) {
          return {
            ...dest,
            likes: dest.isLiked ? dest.likes - 1 : dest.likes + 1,
            isLiked: !dest.isLiked,
          };
        }
        return dest;
      })
    );
  };

  // Sort destinations by likes (most liked first)
  const sortedDestinations = [...destinations].sort(
    (a, b) => b.likes - a.likes
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedDestinations.map((destination) => (
        <Card key={destination.id} className="overflow-hidden">
          <img
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{destination.name}</CardTitle>
                <CardDescription className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" /> {destination.location}
                </CardDescription>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>{destination.rating}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3">{destination.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center gap-1 ${
                destination.isLiked ? "text-red-500" : ""
              }`}
              onClick={() => handleLike(destination.id)}
            >
              <Heart
                className={`h-5 w-5 ${
                  destination.isLiked ? "fill-red-500 text-red-500" : ""
                }`}
              />
              {destination.likes}
            </Button>
            <Button>Batafsil ma'lumot</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
