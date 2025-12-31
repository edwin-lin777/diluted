import { connectToDatabase } from "@/database/mongoose";
import Company from "@/database/Company";

export const getCompanyByID = async (id: string) => {

    const company = await Company.findById(id).lean(); 
  return company;
};