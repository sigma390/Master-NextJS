import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { Schema } from 'zod';
import { schema } from '../schema';


type UserProps = {
    params:{
        id:number,
       
    }
}


export function GET(req:NextRequest, {params:{id}}:UserProps){

    if (id > 10) {
      return   NextResponse.json({error:'User Not found 404'}, {status:404})
    }
    return NextResponse.json({
        id:1,
        name:'Omkar'
    })
}

//put request 

export async function PUT(req:NextRequest, {params:{id}}:UserProps){
    const body = await req.json();

    const validation = schema.safeParse(body);


    if (!validation.success) {
        return NextResponse.json(validation.error.errors,{status:400})
        
    }
    if(id >10){
        return NextResponse.json({error:"User not Found!!!"},{status:404})
    }
    return NextResponse.json({id:1, name:body.name});
}
// delete 

export function DELETE(req:NextRequest, {params:{id}}:UserProps){
    //if user exists or not

    if (id>10) {
        return NextResponse.json({error:'User not found!!!'},{status:404});
        
    }
    return NextResponse.json({});
}