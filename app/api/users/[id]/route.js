import { NextResponse } from "next/server";
import { users } from '@/lib/db' 

export const GET = async (req,par, res) => {
    try {
        const { id } = par.params;
        const selectedUser = users.filter((user) => user.id == id)
        if (!selectedUser) {
            return NextResponse.json({message: 'Cant find the user'}, {status:400})
        }
        return NextResponse.json(selectedUser)
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: 'Error', err}, {status:500})
    }  
}

export const DELETE = async (req, par, res) => {
    try {
        const { id } = par.params;
        const deletedUser = users.filter((user) => user.id != id)
        if (!deletedUser) {
            return NextResponse.json({message: 'Cant find the user'}, {status:400})
        }
        console.log(deletedUser)
        return NextResponse.json(deletedUser)
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: 'Error', err}, {status:500})
    }  
}