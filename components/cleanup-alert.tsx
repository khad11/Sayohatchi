"use client";

import { useState, useEffect } from "react";
import { AlertCircle, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CleanupAlert() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
      <Alert className="bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4 text-amber-600" />
        <div className="flex-1">
          <AlertTitle className="text-amber-800">Do'stona eslatma</AlertTitle>
          <AlertDescription className="text-amber-700">
            Iltimos, sayyohlik joylarini ziyorat qilgandan so'ng, ularning
            go'zalligini kelajak tashrif buyuruvchilar uchun saqlab qolish
            maqsadida, o'zingizdan keyin tozalab ketishni unutmang.
          </AlertDescription>
        </div>
        <button
          onClick={() => setShowAlert(false)}
          className="text-amber-600 hover:text-amber-800"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Yopish</span>
        </button>
      </Alert>
    </div>
  );
}
