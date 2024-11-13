import React from 'react'
import ReuseablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/app/functions/state/api'

const Urgent = () => {
  return (
    <ReuseablePriorityPage priority={Priority.Backlog}/>
  )
}

export default Urgent