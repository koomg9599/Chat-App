import { ADD_ROOM, REMOVE_ROOM, JOIN_ROOM, SET_ROOMS } from './actions'
import { RoomsState, RoomsAction } from './types'

const initialState: RoomsState = []

function rooms(state: RoomsState = initialState, action: RoomsAction) {
  switch (action.type) {
    case ADD_ROOM:
      return state.concat({
        roomId: action.payload.roomId,
        members: [action.payload.member],
      })
    case REMOVE_ROOM:
      return state.filter(room => room.roomId !== action.payload)
    case JOIN_ROOM:
      return state.map(room =>
        room.roomId === action.payload.roomId
          ? {
              ...room,
              member: room.members.push({
                socketId: action.payload.socketId,
                name: action.payload.name,
              }),
            }
          : room,
      )
    case SET_ROOMS:
      return [...action.payload]
    default:
      return state
  }
}

export default rooms
