const { NextResponse } = require("next/server");
import { users } from '@/lib/db.js'


// advance routing url params
export async function GET() {
    return NextResponse.json(users)
}