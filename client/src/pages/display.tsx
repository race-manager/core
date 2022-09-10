import { Box, Chip, Container, Typography } from '@mui/material'

import { trpc } from '../App'
import { ResultsTable } from '../components/table'
import { Timer } from '@mui/icons-material'

import { requestWrapper } from '../components/requestWrapper'
import { useEffect } from 'react'

let displayInterval: any

export const Display = () => {
  const rows = trpc.useQuery(['competitors.list'])
  const runCount = trpc.useQuery(['runs.count'])

  useEffect(() => {
    if (displayInterval) clearTimeout(displayInterval)
    displayInterval = setTimeout(() => {
      rows.refetch()
      runCount.refetch()
    }, 1000 * 5)
  }, [rows,runCount])

  let classes: string[] = []

  const requestErrors = requestWrapper(rows, runCount)
  if (requestErrors) return requestErrors
  if (!rows.data || typeof runCount.data == 'undefined') {
    console.warn('A function was called that should not be called')
    return null
  } // This will never be called, but it is needed to make typescript happy


  // Sort classes in class order as per the index value
  // in the timing software

  let maxClassIndex = 0

  rows.data.forEach(a => {
    if (a.classIndex > maxClassIndex) {
      maxClassIndex = a.classIndex
    }
  })

  for (let i = 1; i < maxClassIndex + 1; i++) {
    rows.data.forEach(row => {
      if (row.classIndex === i && !classes.includes((row.class))) {
        classes.push(row.class)
      }
    })
  }

  const classesList = classes.map((eventClass) => ({
    eventClass,
    drivers: rows.data.filter((data) => data.class === eventClass)
  }))

  return (
    <Container>
      {classesList.map((eventClass) => (
        <div key={eventClass.eventClass}>
          <Typography component='div'>
            <Box fontWeight='fontWeightMedium' display='inline' lineHeight='3'>
              {eventClass.eventClass}
            </Box>
          </Typography>
          <Chip
            label={'Class Record: ' + eventClass.drivers[0].classRecord}
            variant='outlined'
            color='info'
            size='medium'
            icon={<Timer />}
          />
          <p />
          <ResultsTable
            data={eventClass.drivers.sort(
              (a, b) =>
                Math.min(...a.times.map((time) => time?.time || 10000000)) -
                Math.min(...b.times.map((time) => time?.time || 10000000))
            )}
            keyKey={'number'}
            runCount={runCount.data as number}
          />
        </div>
      ))}
    </Container>
  )
}
