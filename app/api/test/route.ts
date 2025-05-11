import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  console.log({ request });
  return NextResponse.json({
    up: true,
  });
};
