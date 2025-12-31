import { connectToDatabase } from "@/database/mongoose";
import Company from "@/database/Company";
import { updateElo } from "@/lib/functions/updateElo";

const LeaderboardPage = async () => {
  await connectToDatabase();
  const company = await Company.findById("695493b587503d0003d2495b").lean();

  console.log("company lsit", company);

  const topCompanies = await Company.find({}).sort({ elo: -1 }).limit(3).lean();
  console.log(topCompanies);
  return (
    <div className="mt-67 flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-blue-300 ">Top Rankings</h1>
      {topCompanies.map((company) => (
        <div key={company._id}>
          <h2>{company.Company}</h2>
          <p className="text-sm">{company.elo}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardPage;
