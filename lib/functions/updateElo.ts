import { connectToDatabase } from "@/database/mongoose"




export const updateElo = async ({company, longOrShort}: CompanyProps) => {
    await connectToDatabase
    const longs = company.longs;
    const companyID = company.id;
    const shorts = company.shorts;
    const elo = company.elo;
    const rOpponent = 1000;
    const K = 32;
    const E = 1/ (1+ 10^((rOpponent-elo)/400))

    if (longOrShort){
        const newElo = elo + (K*(1-E));
        update.$inc.longs = 1;
        
        const UpdatedCompany = await company.findByIdAndUpdate(
            companyID,
            update,
            {new: true}
        )
    } else {
        const newElo = elo + (K*(-E));
    }

    



}