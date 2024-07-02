import { NextRequest, NextResponse } from 'next/server';
import { schema } from './schema';
import prisma from '../../../prisma/client';
import { Prisma } from '@prisma/client';
type ProductProps = {
    params
:{
    id:string,
    name:string,
    price: number

}
}


export async function GET(req:NextRequest){
    
    const prodss = await prisma.products.findMany()
    console.log(prodss)

    return NextResponse.json(prodss)
}

//post request
export async function POST(req:NextRequest){
    const body = await req.json();

    // Perform schema validation
    const val = schema.safeParse(body);
    if (!val.success) {
        return NextResponse.json(val.error.errors, { status: 400 });
    }

    // Check if the product already exists
    const existingProduct = await prisma.products.findUnique({
        where: {
            name: body.name
        }
    });

    if (existingProduct) {
        return NextResponse.json({ error: "Product Already Exists" }, { status: 400 });
    }

    // Create a new product in the database
    const newProduct = await prisma.products.create({
        data: {
            name: body.name,
            price: body.price
        }
    });

    return NextResponse.json(newProduct, { status: 201 });

}

