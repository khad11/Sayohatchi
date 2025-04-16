// app/api/ai-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { date, interests, weather, location } = body;

  if (!date || !interests || !weather) {
    return NextResponse.json(
      { error: "Barcha ma'lumotlar to‘liq emas" },
      { status: 400 }
    );
  }

  const prompt = `
Siz AI sayohat agentisiz. Foydalanuvchi quyidagi shartlarda sayohat qilmoqchi:
- Sanasi: ${date}
- Qiziqishlari: ${interests.join(", ")}
- Ob-havo: ${weather.weather[0].description}, harorat ${weather.main.temp}°C
- Joylashuv: ${location}

Ushbu ma'lumotlarga asoslanib, 3-4 ta bosqichli marshrut tuzing. Har bosqichda:
- Nima qilish kerak
- Qayerga borish kerak
- Qaysi transportdan foydalanish mumkin
-

Marshrut O‘zbek tilida yozilsin.
`;
  console.log(prompt);
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const result = response.choices[0].message.content;
    return NextResponse.json({ route: result });
  } catch (error) {
    return NextResponse.json(
      { error: "AI xizmatida xatolik" },
      { status: 500 }
    );
  }
}
