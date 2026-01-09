import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongoose";
import Company from "../../models/Company";

export async function PATCH(req, res) {
    try {
        await connectDB();
        const {name, elo} = await req.json(); 
        console.log(elo);
        const before = await Company.findOne({Company: name });
        console.log("before", name);
        const result = await Company.updateOne( {
            Company: name}, {$set: {elo}}
        );
        const after = await Company.find({Company: name });
        console.log("and after", after);
        return NextResponse.json({msg: "Elo Updated Successfully"});

    } catch (e) {
        console.log(e);
        return NextResponse.json({msg: "Failed to update Elo"});

    }
}