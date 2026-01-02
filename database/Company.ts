import mongoose, { Schema, model, models } from "mongoose";

const CompanySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    longs: { type: Number, required: true },
    shorts: { type: Number, required: true },
    elo: { type: Number, required: true },
    image: { type: String },
  },
  { collection: "private-companies-list" }
);

const Company = models.Company || model("Company", CompanySchema);
console.log(Company);
export default Company;
