import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

interface Option {
  label: string
  percentage: number
}

interface MultiOptionCardProps {
  title: string
  icon: string
  options: Option[]
  volume: string
}

export function MultiOptionCard({ title, icon, options, volume }: MultiOptionCardProps) {
  return (
    <Card className="p-5 bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-card-foreground text-sm leading-tight">{title}</h3>
        </div>
      </div>

      <div className="space-y-2.5 mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <span className="text-sm text-card-foreground flex-1 min-w-0 truncate">{option.label}</span>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-base font-semibold text-card-foreground min-w-[3rem] text-right">
                {option.percentage}%
              </span>
              <div className="flex gap-1.5">
                <Button
                  size="sm"
                  className="bg-long hover:bg-long/90 text-long-foreground px-4 h-8 text-xs font-medium"
                >
                  Long
                </Button>
                <Button
                  size="sm"
                  className="bg-short hover:bg-short/90 text-short-foreground px-4 h-8 text-xs font-medium"
                >
                  Short
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
        <span className="text-muted-foreground">{volume} Vol.</span>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-card-foreground">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  )
}
