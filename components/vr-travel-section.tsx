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
import { HeadsetIcon as VrHeadset, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VRExperience {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  previewVideo: string;
}

const vrExperiences: VRExperience[] = [
  {
    id: 1,
    name: "Registon maydoni 360°",
    location: "Samarqand",
    description:
      "Registon maydonining ulug'vorligini virtual haqiqatda his qiling.",
    image: "/registon.jpg",
    previewVideo:
      "https://www.youtube.com/embed/5W5v1kBpDtc?si=rl3LX3fJ6AMvwXTA&autoplay=1&mute=1",
    // YouTube 360 video
  },
  {
    id: 2,
    name: "Buxoro eski shahar sayohati",
    location: "Buxoro",
    description:
      "Buxoroning qadimiy ko'chalari va yodgorliklarini VR orqali aylanib chiqing.",
    image: "/buxoro.jpg",
    previewVideo:
      "https://www.youtube.com/embed/PTlXAYbbScc?si=IUAOkTVQ_HOJDAZw",
  },
  {
    id: 3,
    name: "Chimyon tog'larida paraplan uchish",
    location: "Toshkent viloyati",
    description:
      "Uyingizdan chiqmasdan Chimyon tog'lari ustida paraplan uchish zavqini his qiling.",
    image: "/chimyon.jpg",
    previewVideo: "/placeholder.svg?height=400&width=600",
  },
];

export default function VRTravelSection() {
  const [selectedExperience, setSelectedExperience] =
    useState<VRExperience | null>(null);

  return (
    <div>
      <div className="mb-8 text-center">
        <p className="text-xl max-w-3xl mx-auto">
          Tashrif buyurishdan oldin manzillarni virtual haqiqatda his qiling.
          Sayohatingizni rejalashtirish yoki jismoniy sayohat qila olmaydigan
          kishilar uchun juda qulay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vrExperiences.map((experience) => (
          <Card key={experience.id} className="bg-gray-800 border-gray-700">
            <div className="relative">
              <img
                src={experience.image}
                alt={experience.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full h-14 w-14"
                    onClick={() => setSelectedExperience(experience)}
                  >
                    <Play className="h-8 w-8 text-white" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{selectedExperience?.name}</DialogTitle>
                    <DialogDescription>
                      {selectedExperience?.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    {selectedExperience &&
                    selectedExperience.previewVideo.includes("youtube") ? (
                      <iframe
                        src={selectedExperience.previewVideo}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; vr"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-white">
                        <p>Video mavjud emas</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center mt-4">
                    <Button className="flex items-center gap-2">
                      <VrHeadset className="h-5 w-5" />
                      To'liq VR tajribasini boshlash
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <CardHeader>
              <CardTitle className="text-white">{experience.name}</CardTitle>
              <CardDescription className="text-gray-400">
                {experience.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>{experience.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <VrHeadset className="mr-2 h-5 w-5" /> VR orqali tajriba qiling
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          Barcha VR tajribalarini ko'ring
        </Button>
      </div>
    </div>
  );
}
