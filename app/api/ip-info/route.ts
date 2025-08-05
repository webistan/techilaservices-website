import { NextResponse } from "next/server";

// Fetching country code from ipinfo.io
export async function GET() {
  try {
    const response = await fetch("https://ipinfo.io/json");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch IP info" },
      { status: 500 }
    );
  }
} 