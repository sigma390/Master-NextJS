


//get method

import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import prisma from "@/prisma/client";


export async  function GET(request:NextRequest){


    //get data from database
  const users=  await prisma.user.findMany()




    return NextResponse.json(users)
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
