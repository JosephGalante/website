'use client'

import { useState } from 'react'
import type { Job } from '@/lib/site-data'

type ExperienceTabsProps = {
  jobs: Job[]
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function formatMonthYear(month: number, year: number) {
  return `${MONTH_NAMES[month - 1]} ${year}`
}

function formatElapsedMonths(totalMonths: number) {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`)
  }

  return parts.join(' ')
}

function formatDuration(job: Job) {
  const now = new Date()
  const end = job.end ?? {
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  }
  const inclusiveMonths =
    (end.year - job.start.year) * 12 + (end.month - job.start.month) + 1
  const endLabel = job.end ? formatMonthYear(job.end.month, job.end.year) : 'Present'

  return `${formatMonthYear(job.start.month, job.start.year)} - ${endLabel} (${formatElapsedMonths(inclusiveMonths)})`
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
        <p className="experience-stack">{activeJob.stack}</p>
        <p className="experience-duration">{formatDuration(activeJob)}</p>
        <ul className="experience-tasks">
          {activeJob.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
