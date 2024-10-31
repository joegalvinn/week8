import { db } from "@/utils/dbConnection";
import { NextResponse } from "next/server";

// API route to fetch coaster data
export async function GET() {
  const coasters = await db.query(`SELECT * FROM coasterrollers`);
  return NextResponse.json(coasters.rows);
}
