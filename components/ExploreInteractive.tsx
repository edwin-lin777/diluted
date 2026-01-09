'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"
import ExploreCard from "@/components/ExploreCard"

interface ExploreInteractiveProps {
  id?: string 
  name?: string
  city?: string
  country?: string
  industry?: string
  investors?: string
  valuation?: number
  elo?: number
}

export default function ExploreInteractive(props: ExploreInteractiveProps) {
  const [activePosition, setActivePosition] = useState<"long" | "short" | null>(null)
  const [amount, setAmount] = useState("")
  const { name } = props
  const [eloState, setEloState] = useState<number | undefined>(props.elo)
  const [netElo, updateNetElo] = useState(0)
  const handlePosition = (position: "long" | "short") => {
    setActivePosition(position)
  }
  const handleSkip = () => {
    // Reset for next company
    setActivePosition(null)
    setAmount("")
  }

  async function handleLong () {
    if (eloState === undefined || !name) return;
    const E = 1 / ( 1 + 10 ** ((1000 - eloState)/400)); 
    const updatedElo = eloState + 32 * (1 - E);
    const netElo = updatedElo - eloState;

    try {
      const res = await fetch('/api/handle-long', {
        method: "PATCH",
        headers: { "Content-type": 'application/json' },
        body: JSON.stringify({ name, elo: updatedElo }),
      });

      if (!res.ok) {
        console.error('PATCH failed', await res.text());
        return;
      }

      const updated = await res.json();
      // API now returns the updated doc; update local state so subsequent tests use latest elo
      setEloState(updated.elo ?? updatedElo);
      console.log('updated elo', updated.elo ?? updatedElo);
      updateNetElo(netElo);
    } catch (err) {
      console.error(err);
    }
  }
  async function handleShort () {
    if (eloState === undefined || !name) return;
    const E = 1 / ( 1 + 10 ** ((1000 - eloState)/400)); 
    const updatedElo = eloState + 32 * ( - E);

    try {
      const res = await fetch('/api/handle-long', {
        method: "PATCH",
        headers: { "Content-type": 'application/json' },
        body: JSON.stringify({ name, elo: updatedElo }),
      });

      if (!res.ok) {
        console.error('PATCH failed', await res.text());
        return;
      }

      const updated = await res.json();
      // API now returns the updated doc; update local state so subsequent tests use latest elo
      setEloState(updated.elo ?? updatedElo);
      console.log('updated elo', updated.elo ?? updatedElo);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <ExploreCard {...props} elo={eloState} eloChange={parseInt(`${netElo}`, 10)}/>
      <Button onClick={handleLong}>handleLong</Button>
      <Button onClick={handleShort}>handleShort</Button>
      
      {/* Trading Section */}
      <div className="p-6 pt-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button
            variant={activePosition === "long" ? "default" : "outline"}
            size="lg"
            className={`hover:cursor-pointer h-auto py-4 flex flex-col items-center gap-2 ${
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
            className={`hover:cursor-pointer h-auto py-4 flex flex-col items-center gap-2 ${
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
        <div className="flex justify-center">
          <Button onClick={handleSkip}>Skip</Button>
        </div>
      </div>
    </>
  )
}
