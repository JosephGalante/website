'use client'

import type {KeyboardEvent} from 'react'
import {useRef, useState} from 'react'
import type {Job} from '@/lib/site-data'

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
  const endLabel = job.end
    ? formatMonthYear(job.end.month, job.end.year)
    : 'Present'

  return `${formatMonthYear(job.start.month, job.start.year)} - ${endLabel} (${formatElapsedMonths(inclusiveMonths)})`
}

export function ExperienceTabs({jobs}: ExperienceTabsProps) {
  const [activeId, setActiveId] = useState(jobs[0]?.id ?? '')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeJob = jobs.find((job) => job.id === activeId) ?? jobs[0]

  if (!activeJob) {
    return null
  }

  const focusTab = (index: number) => {
    const normalizedIndex = (index + jobs.length) % jobs.length
    const nextJob = jobs[normalizedIndex]

    if (!nextJob) {
      return
    }

    setActiveId(nextJob.id)
    tabRefs.current[normalizedIndex]?.focus()
  }

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault()
        focusTab(index + 1)
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault()
        focusTab(index - 1)
        break
      case 'Home':
        event.preventDefault()
        focusTab(0)
        break
      case 'End':
        event.preventDefault()
        focusTab(jobs.length - 1)
        break
    }
  }

  return (
    <div className="experience-layout">
      <div
        className="experience-tablist"
        role="tablist"
        aria-label="Experience history"
      >
        {jobs.map((job, index) => (
          <button
            key={job.id}
            type="button"
            role="tab"
            id={`experience-tab-${job.id}`}
            aria-selected={job.id === activeJob.id}
            aria-controls={`experience-panel-${job.id}`}
            className={job.id === activeJob.id ? 'is-active' : ''}
            onClick={() => setActiveId(job.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            tabIndex={job.id === activeJob.id ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node
            }}
          >
            {job.companyName}
          </button>
        ))}
      </div>

      <div
        className="experience-panel"
        role="tabpanel"
        id={`experience-panel-${activeJob.id}`}
        aria-labelledby={`experience-tab-${activeJob.id}`}
        tabIndex={0}
      >
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
