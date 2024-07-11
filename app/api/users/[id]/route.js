const { NextResponse } = require("next/server");
import { users } from '@/lib/db.js'

export async function GET(request, par) { 
    const singleData = users.filter((user) => user.id == par.params.id)
    if (!singleData) {
        return NextResponse.json("can't find the data")
    }
    console.log(singleData) 
    return NextResponse.json(singleData)
}