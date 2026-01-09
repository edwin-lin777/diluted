import Company from "@/app/models/Company";

export const getCompanyByID = async (id: string) => {

    const company = await Company.findById(id).lean(); 
  return company;
};