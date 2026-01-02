import { UserCard } from "@/components/UserCard";
import HeaderCard from "@/components/HeaderCard";
const page = () => {
  return (
      <div className="pt-20 flex flex-col items-center justify-center gap-5">
        <HeaderCard/>
        <UserCard/>
      </div>
  );
};

export default page;
