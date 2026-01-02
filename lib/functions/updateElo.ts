import Company from "@/database/Company";
import { connectToDatabase } from "@/database/mongoose";

export const updateElo = async ({ CompanyProps, longOrShort }: UpdateElo) => {
  await connectToDatabase();
  const companyId = CompanyProps._id;
  const elo = CompanyProps.elo;
  const rOpponent = 1000;
  const K = 32;
  const E = 1 / (1 + Math.pow(10, (rOpponent - elo) / 400));

  const updateFactorLong = K * (1 - E);
  const updateFactorShort = K * (0 - E);
  if (longOrShort) {
    return await Company.findByIdAndUpdate(
      companyId,
      {
        $inc: {
          longs: 1,
          elo: Math.round(updateFactorLong),
        },
      },
      { new: true }
    );
  } else {
    return await Company.findByIdAndUpdate(
      companyId,
      {
        $inc: {
          shorts: 1,
          elo: Math.round(updateFactorShort),
        },
      },
      { new: true }
    );
  }
};
