const { NextResponse } = require("next/server");
import { users } from '@/lib/db.js'


// advance routing url params
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    console.log(request.url)
    console.log(name);
    console.log(age);
    const obj = Object.fromEntries(searchParams.entries())
    return NextResponse.json(obj)
}