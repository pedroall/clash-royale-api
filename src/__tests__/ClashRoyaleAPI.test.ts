import { ClashRoyaleAPI, IClanRiverRaceStanding } from '../'

type _foo = IClanRiverRaceStanding

let something: _foo | undefined
something == 1

describe('ClashRoyaleAPI', () => {
  const ClashRoyale = new ClashRoyaleAPI('sometoken')

  test('should have been successfully instantiated', () => {
    expect(ClashRoyale).toBeDefined()
  })

  test('should have leaderboard methods', () => {
    expect(ClashRoyale.getLeaderboards).toBeDefined()
    expect(ClashRoyale.getLeaderboardById).toBeDefined()
  })
})
