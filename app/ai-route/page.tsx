"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  useEffect(() => {
    const saved = localStorage.getItem("aiForm");
    if (saved) {
      const parsed = JSON.parse(saved);
      setLocation(parsed.location || "");
      setDateRange(parsed.dateRange || undefined);
      setBudgetMin(parsed.budgetMin || "");
      setBudgetMax(parsed.budgetMax || "");
      setInterests(parsed.interests || []);
      setAccessibility(parsed.accessibility || "");
    }
  }, []);

  useEffect(() => {
    const data = {
      location,
      dateRange,
      budgetMin,
      budgetMax,
      interests,
      accessibility,
    };
    localStorage.setItem("aiForm", JSON.stringify(data));
  }, [location, dateRange, budgetMin, budgetMax, interests, accessibility]);

  const generateRoute = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://turizmplanner.pythonanywhere.com/api/travel-plan/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location,
            start_date: dateRange?.from?.toISOString().split("T")[0],
            end_date: dateRange?.to?.toISOString().split("T")[0],
            budget_from: Number(budgetMin),
            budget_to: Number(budgetMax),
            interests: interests.map((i) => i.toLowerCase()),
            having_disability: accessibility === "nogiron",
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      setRoute(data.ai_itinerary);
    } catch (error) {
      console.error("Marshrutni yaratishda xatolik:", error);
      setRoute("Xatolik yuz berdi. Qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationInput = async (val: string) => {
    setLocation(val);

    const cities = [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Xiva",
      "Farg‘ona",
      "Namangan",
      "Andijon",
      "Navoiy",
      "Xorazm",
      "Qoraqalpog'ziston",
      "Surxondaryo",
      "Qashqadaryo",
    ];
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
        <Label>Qaysi viloyatga bormoqchisiz?</Label>
        <Input
          className="opacity-50"
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

        <div className="mb-5">
          {" "}
          <Label>Qiziqishlaringiz</Label>
          <div className="flex flex-wrap gap-4">
            {[
              "Tarixiy joylar",
              "Tabiat",
              "Ovqat",
              "Madaniyat",
              "VR tajriba",
            ].map((interest) => (
              <div
                key={interest}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleInterest(interest)}
              >
                <Checkbox checked={interests.includes(interest)} />
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>

        <Label htmlFor="accessibility">Nogironligingiz bormi?</Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="accessibility"
            onCheckedChange={(val) =>
              setAccessibility(val ? "nogiron" : "sog'lom")
            }
          />
          <span>Ha</span>
        </div>

        <Button
          onClick={generateRoute}
          disabled={loading || !location || !dateRange}
          className="mt-4"
        >
          {loading ? "Yaratilmoqda..." : "Marshrutni yaratish"}
        </Button>

        {route && (
          <div className="mt-6 space-y-2">
            <Label className="text-lg font-semibold">
              AI tavsiya qilgan marshrut
            </Label>
            <div className="bg-muted p-4 rounded-2xl shadow border relative">
              <pre className="whitespace-pre-wrap break-words text-sm max-h-[300px] overflow-y-auto">
                {route}
              </pre>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-xs"
                onClick={() => {
                  navigator.clipboard.writeText(route);
                }}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// sfdjghsl
