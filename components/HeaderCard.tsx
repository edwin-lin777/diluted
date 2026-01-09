import React from 'react'
import { Card } from './ui/card'

const HeaderCard = () => {
  return (
    <Card className='w-full max-w-4xl bg-card overflow-hidden border-border shadow-lg'>
        <div className='flex justify-center flex-col items-center'>

            <h1 className='font-bold text-2xl'>Have you ever wanted to short or long a private company?</h1>
            <h1>Cast your vote to see which companies are the most bullish or bearish!</h1>
        </div>
      
    </Card>
  )
}

export default HeaderCard
