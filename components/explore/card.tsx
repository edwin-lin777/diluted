import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark, Repeat2 } from "lucide-react"

interface CompanyCardProps {
  title: string
  icon: string
  sentiment: number
  volume: string
  hasRefresh?: boolean
}

export function CompanyCard({ title, icon, sentiment, volume, hasRefresh }: CompanyCardProps) {
  return (
    <Card className="p-5 bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-card-foreground text-sm leading-tight mb-1">{title}</h3>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <div className="text-2xl font-bold text-card-foreground">{sentiment}%</div>
          <div className="text-xs text-muted-foreground">sentiment</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Button className="w-full bg-[#3aa85b]/20 hover:bg-long/30 text-[#3aa85b] font-semibold" size="lg">
          Long
        </Button>
        <Button className="w-full bg-[#c53637]/20 hover:bg-short/30 text-[#c53637] font-semibold" size="lg">
          Short
        </Button>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>{volume} Vol.</span>
          {hasRefresh && <Repeat2 className="w-4 h-4" />}
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-card-foreground">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  )
}
