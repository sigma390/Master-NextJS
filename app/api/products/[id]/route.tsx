

import { NextRequest, NextResponse } from 'next/server';
import { schema } from '../schema';
import prisma from '../../../../prisma/client';
import { Prisma } from '@prisma/client';
type ProductProps = {
    params
:{
    id:string,
    name:string,
    price: number

}
}


export async function GET(req:NextRequest, {params:{id}}:ProductProps){
    
    const productt = await prisma.products.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    console.log(productt)

    return NextResponse.json(productt)
}

//UPDATE request
export async function PUT(req:NextRequest, {params:{id}}:ProductProps){
    const body = await req.json();

    // Perform schema validation
    const val = schema.safeParse(body);
    if (!val.success) {
        return NextResponse.json(val.error.errors, { status: 400 });
    }

    // Check if the product already exists
    const existingProductId =  parseInt(id)

    if (!existingProductId) {
        return NextResponse.json({ error: "Product Not Found" }, { status: 400 });
    }

    // Create a new product in the database
    const updatedProduct = await prisma.products.update({
        where:{
            id:existingProductId
        },
        data: {
            name: body.name,
            price: body.price
        }
    });

    return NextResponse.json(updatedProduct, { status: 201 });

}

