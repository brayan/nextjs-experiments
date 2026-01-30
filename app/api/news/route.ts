import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  console.log(request);
  return new Response('Hello');
}

// export async function POST(request: NextRequest): Promise<NextResponse> {

// }
