export interface ICurrentRiverRace {
  state: string
  clan: IRiverRaceClan
  clans: IRiverRaceClan[]
  sectionIndex: number
}
export interface IRiverRaceClan {
  tag: string
  clanScore: number
  badgeId: number
  name: string
  fame: number
  repairPoints: number
  finishTime: string
  participants: IRiverRaceParticipant[]
}
export interface IRiverRaceParticipant {
  fame: number
  name: string
  repairPoints: number
  tag: string
}
export interface IClanRiverRaceStanding {
  rank: number
  trophyChange: number
  clan: IRiverRaceClan
}
export interface IClanRiverRaceEntry {
  standings: IClanRiverRaceStanding[]
  seasonId: number
  createdDate: string
  sectionIndex: number
}
export type IClanRiverRaceLog = IClanRiverRaceEntry[]
export interface IClanRiverRaceLogParams {
  tag: string
  limit: number
  after?: string
  before?: string
}
