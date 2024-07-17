import Contact from '@/models/contact'; 
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db'; 

export async function POST(request) {
    const { name, email, message } = await request.json();

    try {
        await connectDB();
        await Contact.create({ name, email, message })
        return NextResponse.json({msg: ["i am contact server"]})
    } catch (error) {
        console.log(error);
    }
}
