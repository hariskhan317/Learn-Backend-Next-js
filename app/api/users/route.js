const { NextResponse } = require("next/server");
import { users } from '@/lib/db.js'


//crud opperation
export const GET = async (req, res) => {
    try {
        return NextResponse.json(users)
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: 'Error', err}, {status:500})
    }  
}

export const POST = async (req, res) => {
    try {
        const { name } = await req.json();
        const newUser = {name, id: users.length +1}
        users.push(newUser)
        return NextResponse.json(users)
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: 'Error', err}, {status:500})
    }  
}