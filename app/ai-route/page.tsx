"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRange } from "react-day-picker";

export default function AIRoutePage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [interests, setInterests] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [route, setRoute] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const generateRoute = async () => {
    setLoading(true);
    try {
      const weatherRes = await fetch(`/api/weather?city=${location}`);
      const weather = await weatherRes.json();

      const response = await fetch("/api/ai-route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateRange,
          interests,
          location,
          budgetMin,
          budgetMax,
          accessibility,
          weather,
        }),
      });

      const data = await response.json();
      setRoute(data.route);
    } catch (error) {
      console.error("Marshrutni yaratishda xatolik:", error);
      setRoute("Xatolik yuz berdi. Qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationInput = async (val: string) => {
    setLocation(val);

    // Qidiruv tavsiyalari (demo uchun oddiy filter)
    const cities = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Farg‘ona"];
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(val.toLowerCase())
    );
    setSuggestions(filtered);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        AI yordamida marshrut yarating
      </h1>

      <div className="space-y-4">
        <Label>Manzilingiz</Label>
        <Input
          placeholder="Masalan: Toshkent"
          value={location}
          onChange={(e) => handleLocationInput(e.target.value)}
        />
        {suggestions.length > 0 && (
          <div className="bg-white shadow rounded border p-2">
            {suggestions.map((city) => (
              <div
                key={city}
                className="cursor-pointer hover:bg-gray-100 p-1"
                onClick={() => {
                  setLocation(city);
                  setSuggestions([]);
                }}
              >
                {city}
              </div>
            ))}
          </div>
        )}

        <Label>Sayohat sanasi (boshlanish va tugash)</Label>
        <Calendar mode="range" selected={dateRange} onSelect={setDateRange} />

        <Label>Rejalashtirgan byudjetingiz (so‘mda)</Label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={budgetMin}
            onChange={(e) => setBudgetMin(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Max"
            value={budgetMax}
            onChange={(e) => setBudgetMax(e.target.value)}
          />
        </div>

        <Label>Qiziqishlaringiz</Label>
        <div className="flex flex-wrap gap-4">
          {["Tarixiy joylar", "Tabiat", "Ovqat", "Madaniyat", "VR tajriba"].map(
            (interest) => (
              <div
                key={interest}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleInterest(interest)}
              >
                <Checkbox checked={interests.includes(interest)} />
                <span>{interest}</span>
              </div>
            )
          )}
        </div>

        <Label>Imkoniyatingiz holati</Label>
        <Select onValueChange={(val) => setAccessibility(val)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tanlang" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hech qanday cheklov yo‘q">
              Hech qanday cheklov yo‘q
            </SelectItem>
            <SelectItem value="nogironlar uchun mos">
              Nogironlar uchun mos
            </SelectItem>
            <SelectItem value="otasiz/onasisiz bolalar">
              Otasiz/onasisiz bolalar
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={generateRoute}
          disabled={loading || !location || !dateRange}
          className="mt-4"
        >
          {loading ? "Yaratilmoqda..." : "Marshrutni yaratish"}
        </Button>

        {route && (
          <div className="mt-6">
            <Label>AI Tavsiya qilgan marshrut</Label>
            <Textarea readOnly value={route} className="min-h-[200px]" />
          </div>
        )}
      </div>
    </div>
  );
}
