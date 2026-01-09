
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from '../../../lib/mongoose'
import Company from "../../models/Company";

export async function POST() {
    try {
        await connectDB();
        const single = await Company.aggregate([{ $sample: { size: 1}}]);
        console.log(single);
        return NextResponse.json(single);
        
    } catch (error) {
       if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            return NextResponse.json({msg: errorList})
        } else {
            return NextResponse.json({msg: "Unable to send message."});
        }
    }

    
}