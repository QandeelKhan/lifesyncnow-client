import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import eventsReducer from "./reducers/eventsSlice";
import themesReducer from "./themeSlice";
import dataReducer from "./dataSlice";
import authReducer from "./features/authSlice";
import { userAuthApi } from "./services/userAuthApi";
import orderReducer from "./features/orderSlice";
import ordersReducer from "./features/ordersSlice";
import taskIdReducer from "./taskSlice";

export const store = configureStore({
    reducer: {
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        events: eventsReducer,
        themes: themesReducer,
        data: dataReducer,
        auth: authReducer,
        order: orderReducer,
        orders: ordersReducer,
        taskId: taskIdReducer,
    },
    // middleware for rtkquery
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
