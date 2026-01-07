import { connectToDatabase } from "@/database/mongoose";
import Company from "@/database/Company";
import { updateElo } from "@/lib/functions/updateElo";
import ModernLeaderboard from "./TopLeaderboard";

const LeaderboardPage = async () => {
  await connectToDatabase();
  const company = await Company.findById("695493b587503d0003d2495a").lean();
  

  console.log("company lsit", company);
  console.log("single company:", company)
  const topCompanies = await Company.find({}).sort({ elo: -1 }).limit(3).lean();
  console.log(topCompanies);
  return (
    <div>
    <div >
      <div>
      <ModernLeaderboard/>
      </div>
    </div>
    </div>
  );
};

export default LeaderboardPage;
