import { ClashRoyaleAPI } from '../'
import {
  APIPagingResult,
  IClanRiverRaceLog,
  IClanRiverRaceEntry,
  IClanRiverRaceStanding,
  IRiverRaceClan,
} from '../interfaces'
import 'dotenv/config'

const token = process.env['TOKEN']
if (!token) throw new Error('Missing env variable "TOKEN" used in tests')

const apiUrl = process.env['API_URL']

const api = new ClashRoyaleAPI(token, apiUrl)
const mapleMiners = '#P9UCUYV2'

describe('Test river race functions', () => {
  it('Should request to get the river race logs of the maple miners clan and all of the standings must have the clan among them', async () => {
    const logs: APIPagingResult<IClanRiverRaceLog> =
      await api.getClanRiverRaceLog({ tag: mapleMiners, limit: 5 })

    const items: IClanRiverRaceEntry[] = logs.items

    items.forEach((log: IClanRiverRaceEntry) => {
      const standings: IClanRiverRaceStanding[] = log.standings
      const hasClanBeenFound = standings.find(
        (standing: IClanRiverRaceStanding) => {
          const clan: IRiverRaceClan = standing.clan
          return clan.tag == mapleMiners
        },
      )
      expect(hasClanBeenFound).toBeDefined()
    })
  })
})
