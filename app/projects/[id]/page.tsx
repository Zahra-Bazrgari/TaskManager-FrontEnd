'use client'

import React, { useState, useEffect } from 'react'
import ProjectHeader from '../ProjectHeader'
import Board from '../BoardView'

type Props = {
  params: Promise<{ id: string }>
}

const Project = ({ params }: Props) => {
  const [id, setId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("Board")
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

  useEffect(() => {
    params.then(resolvedParams => setId(resolvedParams.id))
  }, [params])

  if (!id) return <div>Loading...</div>

  return (
    <div>
      {/* modal new tasks */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab == "Board" && (<Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>)}
    </div>
  )
}

export default Project
