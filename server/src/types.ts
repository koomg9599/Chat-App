type State = 'on-line' | 'off-line'

export type User = {
  socketId: string
  state: State
  user: string
}

export type Room = {
  roomId: string
  members: string[]
}

export type Message = {
  roomId: string
  msgId: string
  writer: string
  message: string
  date: Date
}
