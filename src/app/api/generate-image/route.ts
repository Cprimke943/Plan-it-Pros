export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import ImagePig from "imagepig";
import fs from "fs/promises";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const imagepig = ImagePig(process.env.IMAGEPIG_API_KEY || "");
console.log("ImagePig key:", process.env.IMAGEPIG_API_KEY);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }

  try {
    const result = await imagepig.default(prompt);

    const fileName = `${Date.now()}-${prompt.replace(/\s+/g, "-")}.jpeg`;
    const filePath = path.join(
      process.cwd(),
      "public/images/generated",
      fileName
    );

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await result.save(filePath);

    return NextResponse.json({ url: `/images/generated/${fileName}` });
  } catch (err) {
    console.error("ImagePig error:", err);
    return NextResponse.json(
      { error: "Image generation failed" },
      { status: 500 }
    );
  }
}
