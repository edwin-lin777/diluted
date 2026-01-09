'use client'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Clock, Users, DollarSign } from "lucide-react"
import Company from "@/app/models/Company"
import Image from "next/image"
import { LongShort } from "./UserCard"
import { useState } from "react"

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
  city?: string
  country?: string
  industry?: string
  investors?: string
  valuation?: number
  category?: string
  logoUrl?: string
  currentProbability?: number
  elo?: number
  volume?: number
  eloChange: number
}



const ExploreCard = ({
  name,
  city,
  country,
  industry,
  investors,
  valuation,
  category,
  currentProbability,
  elo,
  volume,
  eloChange,
}: PredictionMarketCardProps) => {
  
  return (
    <Card className="w-full max-w-4xl bg-card overflow-hidden border-border shadow-lg">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="p-6 pb-4 border-b border-border">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="size-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden border border-border/50">
                            <Image
                  src={`https://img.logo.dev/name/${name}/?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`}
                  alt={`${name} logo`}
                  width={128}
                  height={128}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs font-medium border-muted-foreground/30">
                    {industry}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
                <h2 className="text-xl font-bold text-card-foreground leading-tight mb-2 text-balance">Long or Short?</h2>
              </div>
            </div>

            {/* ELO Rating Badge */}
            <div className="flex flex-col items-end gap-1">
                <div>+{eloChange}</div>
              <div className="text-xs text-muted-foreground font-medium">ELO Rating</div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold font-mono tabular-nums text-card-foreground">{parseInt(`${elo}`, 10)}</div>
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
        
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div className="h-48 w-full ">
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
                          stroke="#f6004e"
                          strokeWidth={2}
                          fill="url(#probabilityGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
      </CardContent>
    </Card>
  )
}

export default ExploreCard;
