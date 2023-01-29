import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    roomName: null,
    roomId: null,
}

export const selectedRoomSlice = createSlice({
    name: "selectedRoom",
    initialState,
    reducers: {
        setRoomName: (state, action) => {
            state.roomName = action.payload;
        },
        setRoomId: (state, action) => {
            state.roomId = action.payload;
        },
    }
});

export const {setRoomName, setRoomId} = selectedRoomSlice.actions;
export default selectedRoomSlice.reducer;