import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { Schema } from 'zod';
import { schema } from '../schema';
import prisma from '../../../../prisma/client';


type UserProps = {
    params:{
        id:string,
       
    }
}


export async function GET(req:NextRequest, {params:{id}}:UserProps){

    // if (id > 10) {
    //   return   NextResponse.json({error:'User Not found 404'}, {status:404})
    // }
    // return NextResponse.json({
    //     id:1,
    //     name:'Omkar'
    // })

   const user = await prisma.user.findUnique({
        where:{id: parseInt(id)} //as the params inn url are string so we convert string to number asin our model the id is number type
    })


    if (!user) {
      return   NextResponse.json({error:'User Not found 404'}, {status:404})
    }
    return NextResponse.json(user)
}

//put request 

export async function PUT(req:NextRequest, {params:{id}}:UserProps){
    const body = await req.json();

    const validation = schema.safeParse(body);

    const userId = parseInt(id);

    // Check for user presence
    const userPresent = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    if (userId > 10) {
        return NextResponse.json({ error: "User not Found!!!" }, { status: 404 });
    }

    if (!userPresent) {
        return NextResponse.json(
            { error: "User Not Found!!!" },
            { status: 400 }
        );
    }

    const UpdatedUser = await prisma.user.update({
        where: {
            id: userPresent.id
        },
        data: {
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(UpdatedUser);
    
}
// delete 

export async function DELETE(req:NextRequest, {params:{id}}:UserProps){
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) }
    });

    if (!user) {
        return NextResponse.json({ error: 'User Not Found 404' }, { status: 404 });
    }

    await prisma.user.delete({
        where: { id: parseInt(id) }
    });

    return NextResponse.json({ msg: "Deleted" });
}