import { NextRequest, NextResponse } from 'next/server';
import { schema } from './schema';

// type ProductProps = {
//     params
// :{
//     id:number,
//     name:string,
//     price:

// }
// }


export function GET(req:NextRequest){
    return NextResponse.json([
    {
        id:1,
        name:"Milk",
        price:2.5
    },
    {
        id:2,
        name:"Bread",
        price:3.5
    }]
)
}

//post request
export async function POST(req:NextRequest){
    const body = await req.json();
    const val = schema.safeParse(body);
    if(!val.success){
        return NextResponse.json(val.error.errors,{status:400});
    }
    return NextResponse.json({id:10, name:body.name, price:body.price},{status:201})

}