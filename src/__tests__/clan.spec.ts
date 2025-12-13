import { ClashRoyaleAPI } from '../'
import 'dotenv/config'

const token = process.env['TOKEN']
if (!token) throw new Error('Missing env variable "TOKEN" used in tests')

const api = new ClashRoyaleAPI(token)
const mapleMiners = '#P9UCUYV2'
describe('Test river race functions', () => {
  it('Should request to get the river race logs of the maple miners clan and all of the standings must have the clan among them', async () => {
    const logs = (await api.getClanRiverRaceLog({ tag: mapleMiners, limit: 5 }))
      .items
    logs.forEach(log => {
      expect(log.standings.find(finish => finish.clan.tag == mapleMiners))
    })
  })
})
