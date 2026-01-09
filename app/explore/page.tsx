import ExploreInteractive from "@/components/ExploreInteractive"
import HeaderCard from "@/components/HeaderCard";

const page = async () => {
    const res = await fetch("http://localhost:3001/api/fetch-company", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exclude: [] }),
      cache: "no-store",
      next: { revalidate: 0 }
    });
    const data = await res.json();

  return (
      <div className="pt-20 flex flex-col items-center justify-center gap-5">
        <HeaderCard/>
        <ExploreInteractive 
        name={data[0]?.Company} 
        elo={data[0]?.elo}  
        city={data[0]?.City} 
        country={data[0]?.Country}
        investors={data[0]?.Investors}
        valuation={data[0]?.Valuation}
        industry={data[0]?.Industry}
        />
      </div>
  );
};

export default page;
