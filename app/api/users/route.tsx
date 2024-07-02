


//get method

import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import prisma from "@/prisma/client";
import { error } from "console";


export async  function GET(request:NextRequest){


    //get data from database
  const users=  await prisma.user.findMany()
  console.log(users)




    return NextResponse.json(users)
}

//post method 
export async function POST(req: NextRequest) {
  const body = await req.json();
  const val = schema.safeParse(body);

  if (!val.success) {
      return NextResponse.json(val.error.errors, { status: 400 });
  }

  //check if user already exists or not
  const usr = await prisma.user.findUnique({
      where: {
          email: body.email
      }
  });

  if (usr) {
      return NextResponse.json({ error: "User Already Exists" }, { status: 400 });
  }

  const newuser = await prisma.user.create({
      data: {
          name: body.name,
          email: body.email
      }
  });

  return NextResponse.json(newuser, { status: 201 });
}

//Put method
