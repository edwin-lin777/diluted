import { CompanyCard } from "@/components/explore/card"
import { Badge } from "@/components/ui/badge";


const page = () => {
  return (
      <div className="pt-20 max-w-6xl mx-auto gap-5">
      <div className='flex flex-row gap-3 pb-3'>
        <Badge variant='secondary'>Trending</Badge>
        <Badge variant='outline'>Finance</Badge>
        <Badge variant='outline'>Tech</Badge>
        <Badge variant='outline'>Defence</Badge>
 

      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <CompanyCard
            title="Apple reaches $4T market cap by Q2 2026?"
            icon="🍎"
            sentiment={37}
            volume="$2m"
            hasRefresh
          />

          <CompanyCard title="Tesla achieves full self-driving approval?" icon="🚗" sentiment={45} volume="$3m" />

          <CompanyCard title="Amazon acquires major retail chain?" icon="📦" sentiment={28} volume="$1.5m" />

          <CompanyCard title="Microsoft AI revenue exceeds $50B?" icon="💻" sentiment={62} volume="$4m" hasRefresh />

          <CompanyCard title="Netflix subscriber count reaches 300M?" icon="🎬" sentiment={71} volume="$1.8m" />

          <CompanyCard title="SpaceX completes Mars mission by 2028?" icon="🚀" sentiment={34} volume="$6.5m" />

          <CompanyCard title="Meta launches new VR headset?" icon="🥽" sentiment={52} volume="$2.8m" />

          <CompanyCard title="Nvidia maintains AI chip dominance?" icon="🔧" sentiment={78} volume="$5.2m" hasRefresh />
      </div>
    </div>
  );
};

export default page;
