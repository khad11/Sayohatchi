// app/api/ai-route/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai"; // OpenAI SDK yoki boshqa API

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // OpenAI API kalitingizni .env faylidan oling
});

export async function POST(req: Request) {
  const data = await req.json(); // Frontenddan yuborilgan malumotni qabul qilish
  console.log(data);

  const { location, date, duration, interests, budget } = data;

  // AI ga yuboriladigan promptni yaratish
  const prompt = `
Sayohat rejalashtirish:
Manzil: ${location}
Sana: ${date}
Davomiylik: ${duration} kun
Qiziqishlar: ${interests}
Byudjet: ${budget}

Yuqoridagi ma'lumotlarga asoslanib tavsiyalarni tayyorlang:
`;

  try {
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4", // Yoki boshqa modelni tanlang
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({ plan: aiResponse.choices[0].message.content });
  } catch (error) {
    return NextResponse.json(
      { error: "AI bilan bogʻlanishda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
