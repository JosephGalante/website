'use client'

import { useState } from 'react'
import type { Job } from '@/lib/site-data'

type ExperienceTabsProps = {
  jobs: Job[]
}

export function ExperienceTabs({ jobs }: ExperienceTabsProps) {
  const [activeId, setActiveId] = useState(jobs[0]?.id ?? '')
  const activeJob = jobs.find((job) => job.id === activeId) ?? jobs[0]

  if (!activeJob) {
    return null
  }

  return (
    <div className="experience-layout">
      <div className="experience-tablist" role="tablist" aria-label="Experience history">
        {jobs.map((job) => (
          <button
            key={job.id}
            type="button"
            role="tab"
            aria-selected={job.id === activeJob.id}
            className={job.id === activeJob.id ? 'is-active' : ''}
            onClick={() => setActiveId(job.id)}
          >
            {job.companyName}
          </button>
        ))}
      </div>

      <div className="experience-panel" role="tabpanel">
        <h3>
          {activeJob.title} <span>@</span>{' '}
          <a href={activeJob.companySite} target="_blank" rel="noreferrer">
            {activeJob.companyName}
          </a>
        </h3>
        <p className="experience-duration">{activeJob.duration}</p>
        <ul className="experience-tasks">
          {activeJob.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
