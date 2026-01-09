"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function CompanySearch() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for startups"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" pl-10 h-13 text-base bg-gray-200"
        />
      </div>
  )
}
