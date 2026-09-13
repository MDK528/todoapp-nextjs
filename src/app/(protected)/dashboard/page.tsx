import { UserMenuWithSession } from '@/features/auth/components/user-menu'
import React from 'react'

function DashBoardPage() {
  return (
    <div>
      DashBoardPage
      <UserMenuWithSession variant='compact' />
    </div>
  )
}

export default DashBoardPage