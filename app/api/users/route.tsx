


//get method

import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

export function GET(request:NextRequest){
    return NextResponse.json([
    {
        id:1,
        name:'Omkar'

    },
    {
        id:2,
        name:'Anisha'

    }])
}


//post method 
export async function POST(req:NextRequest){
   const body =  await req.json();
   const val = schema.safeParse(body);
   if (!val.success) {
    return NextResponse.json(val.error.errors,{status:400});
    
   }
   return NextResponse.json({id:1, name:body.name});
}

//Put method
