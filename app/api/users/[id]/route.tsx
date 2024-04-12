import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';


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
    if (!body.name) {
        return NextResponse.json({error:"Name required!!!"},{status:400})
        
    }
    if(id >10){
        return NextResponse.json({error:"User not Found!!!"},{status:404})
    }
    return NextResponse.json({id:1, name:body.name});
}