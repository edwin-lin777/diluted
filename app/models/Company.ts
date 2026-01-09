import mongoose, { Schema, model, models } from "mongoose";

const CompanySchema = new Schema({
  Company: { type: String, required: true, unique: true },
  Valuation: { type: Number, required: true },
  Country: { type: String, required: true },
  City: { type: String, required: true },
  Industry: { type: String, required: true },
  Investors: { type: String, required: true },
  elo: { type: Number, required: true },
  image: {type: Number,}
},  { collection: "private-companies-list" });

const Company = models.Company || model("Company", CompanySchema);
console.log("company database page",Company);
export default Company;