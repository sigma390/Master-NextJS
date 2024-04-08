import { NextRequest, NextResponse } from 'next/server';


type UserProps = {
    params:{
        id:number
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