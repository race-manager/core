import { config } from '../config'
import { EventDB, getEventDatabases } from '../dbUtils'
import { TRPCError } from '@trpc/server'
import { CompetitorList, TimeInfoList } from './objects'
import { nullToUndefined } from '../utils'
import { getPersonalBestSectors } from '../utils/competitors'

export let { event, eventData, online } = getEventDatabases(config.eventId)

export function setNewEvent(eventDB: EventDB) {
  event = eventDB.event
  eventData = eventDB.eventData
  online = eventDB.online
}

export async function getCompetitorJSON() {
  let tCOMPETITORSTable
  const heats = []

  if (!event || !eventData) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Event database not found',
    })
  }

  try {
    tCOMPETITORSTable = await event.tCOMPETITORS.findMany()
  } catch (e) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to load competitor list',
      // optional: pass the original error to retain stack trace
      cause: e,
    })
  }

  try {
    heats.push(await eventData.tTIMEINFOS_HEAT1.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT2.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT3.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT4.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT5.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT6.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT7.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT8.findMany())
    heats.push(await eventData.tTIMEINFOS_HEAT9.findMany())
    // eslint-disable-next-line no-empty
  } catch (e) {}

  const competitors: CompetitorList = tCOMPETITORSTable.map((competitor) => ({
    number: competitor.C_NUM || -1,
    lastName: competitor.C_FIRST_NAME || 'N/A',
    firstName: competitor.C_LAST_NAME || 'N/A',
    class: competitor.C_I29 || 'N/A',
    classIndex: competitor.C_I21 || 0,
    vehicle: competitor.C_COMMITTEE || 'N/A',
    classRecord: competitor.C_TEAM || '0.00',
    special: nullToUndefined(competitor.C_I28),
    miscAward: nullToUndefined(competitor.C_I30),
    times: [],
    outright: -1,
  }))

  for (let i = 0; i < competitors.length; i++) {
    heats.forEach((heat, index) => {
      if (heat.length === 0) {
        return
      }

      const run: TimeInfoList = heat
        .filter((timedRun) => competitors[i].number === timedRun.C_NUM)
        .map((timedRun) => ({
          run: index + 1,
          status: timedRun.C_STATUS || 0,
          ...(timedRun.C_STATUS === 3
            ? { time: 0, split1: 0, split2: 0 }
            : {
                time: timedRun.C_TIME || 0,
                split1: timedRun.C_INTER1 || 0,
                split2: timedRun.C_INTER2 || 0,
              }),
        }))
      competitors[i].times = [...competitors[i].times, ...run]
    })
  }

  return competitors
    .map((c) => ({
      c,
      bestSectors: getPersonalBestSectors(c),
    }))
    .sort((a, b) => a.bestSectors.bestFinish - b.bestSectors.bestFinish)
    .map((c, index) => ({ ...c.c, outright: index + 1 }))
}
