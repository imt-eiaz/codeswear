import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, brand: "audi", model: "R8", ownerId: 1 },
    { id: 2, brand: "audi", model: "R6", ownerId: 1 },
    { id: 3, brand: "mercedes", model: "benz", ownerId: 2 },
  ]);
}
