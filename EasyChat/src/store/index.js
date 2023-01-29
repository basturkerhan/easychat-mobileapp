import {configureStore} from "@reduxjs/toolkit";
import selectedRoomSlice from "./slices/selectedRoom";

export const store = configureStore({
    reducer: {
        selectedRoom: selectedRoomSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        });
    }
});