import { useSelector } from "react-redux"

export const useSelectedRoomName = () => useSelector(state => state.selectedRoom.roomName);
export const useSelectedRoomId = () => useSelector(state => state.selectedRoom.roomId);