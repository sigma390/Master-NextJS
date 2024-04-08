


//get method

import { NextRequest, NextResponse } from "next/server";

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
   if (!body.name) {
    return NextResponse.json({error:'Name not found!!!'},{status:400});
    
   }
   return NextResponse.json({id:1, name:body.name});
}