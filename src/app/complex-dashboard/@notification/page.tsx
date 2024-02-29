
import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <>
    <Card> <div>
      Notification 
      </div>
    <Link href = "/complex-dashboard/archived"> Archived</Link>
    </Card>
    </>
  )
}

export default Notification