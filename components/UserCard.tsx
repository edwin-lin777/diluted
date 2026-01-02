"use client"

import { useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Clock, Users, DollarSign } from "lucide-react"

// Sample market data for a startup prediction market
const marketData = [
  { date: "Jan", probability: 35, volume: 12000 },
  { date: "Feb", probability: 38, volume: 15000 },
  { date: "Mar", probability: 42, volume: 18000 },
  { date: "Apr", probability: 45, volume: 22000 },
  { date: "May", probability: 52, volume: 28000 },
  { date: "Jun", probability: 58, volume: 35000 },
  { date: "Jul", probability: 62, volume: 42000 },
]

interface PredictionMarketCardProps {
  name?: string
  valuation?: number
  category?: string
  logoUrl?: string
  currentProbability?: number
  eloRating?: number
  volume?: number
  traders?: number
  expiryDate?: string
}

export function UserCard({
  name = "Acme AI",
  question = "Long or Short?",
  category = "Startups",
  logoUrl = "/ai-startup-logo.png",
  currentProbability = 62,
  eloRating = 1847,
  volume = 342580,
  traders = 1243,
  expiryDate = "Dec 31, 2026",
}: PredictionMarketCardProps) {
  const [activePosition, setActivePosition] = useState<"long" | "short" | null>(null)
  const [amount, setAmount] = useState("")

  const longPrice = currentProbability
  const shortPrice = 100 - currentProbability
  const priceChange = 5.2

  const handlePosition = (position: "long" | "short") => {
    setActivePosition(position)
  }

  return (
    <Card className="w-full max-w-4xl bg-card overflow-hidden border-border shadow-lg">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="p-6 pb-4 border-b border-border">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="size-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden border border-border/50">
                <img src={logoUrl || "/placeholder.svg"} alt={name} className="size-12 object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs font-medium border-muted-foreground/30">
                    {category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
                <h2 className="text-xl font-bold text-card-foreground leading-tight mb-2 text-balance">{question}</h2>
              </div>
            </div>

            {/* ELO Rating Badge */}
            <div className="flex flex-col items-end gap-1">
              <div className="text-xs text-muted-foreground font-medium">ELO Rating</div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold font-mono tabular-nums text-card-foreground">{eloRating}</div>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20 font-semibold">
                  High
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">Top 15% accuracy</div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="p-6 py-4 bg-muted/30">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Current Probability</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-card-foreground font-mono tabular-nums">
                  {currentProbability}%
                </span>
                <span className="text-sm font-medium text-success flex items-center gap-1">
                  <TrendingUp className="size-3.5" />+{priceChange}%
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Volume</div>
                  <div className="font-semibold flex items-center gap-1 text-card-foreground">
                    <DollarSign className="size-3.5" />
                    {(volume / 1000).toFixed(0)}K
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Traders</div>
                  <div className="font-semibold flex items-center gap-1 text-card-foreground">
                    <Users className="size-3.5" />
                    {traders}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketData}>
                <defs>
                  <linearGradient id="probabilityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 100]}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                          <div className="text-sm font-medium text-card-foreground">{payload[0].payload.date}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Probability: <span className="font-semibold text-card-foreground">{payload[0].value}%</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Volume:{" "}
                            <span className="font-semibold text-card-foreground">
                              ${(payload[0].payload.volume / 1000).toFixed(0)}K
                            </span>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="probability"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  fill="url(#probabilityGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trading Section */}
        <div className="p-6 pt-5">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Button
              variant={activePosition === "long" ? "default" : "outline"}
              size="lg"
              className={`h-auto py-4 flex flex-col items-center gap-2 ${
                activePosition === "long"
                  ? "bg-success hover:bg-success/90 text-success-foreground border-success"
                  : "border-border hover:bg-muted hover:text-card-foreground"
              }`}
              onClick={() => handlePosition("long")}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="size-5" />
                <span className="text-lg font-bold">Long (Yes)</span>
              </div>
            </Button>

            <Button
              variant={activePosition === "short" ? "default" : "outline"}
              size="lg"
              className={`h-auto py-4 flex flex-col items-center gap-2 ${
                activePosition === "short"
                  ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground border-destructive"
                  : "border-border hover:bg-muted hover:text-card-foreground"
              }`}
              onClick={() => handlePosition("short")}
            >
              <div className="flex items-center gap-2">
                <TrendingDown className="size-5" />
                <span className="text-lg font-bold">Short (No)</span>
              </div>
            </Button>
          </div>

        
        </div>
      </CardContent>
    </Card>
  )
}
