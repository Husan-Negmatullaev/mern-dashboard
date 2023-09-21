import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { AppStoreScheme } from "./AppStore.ts";
import { kpisApi } from "@/entities/Kpis";
import { setupListeners } from "@reduxjs/toolkit/query";

export function createReduxStore(initialState?: AppStoreScheme) {
	const rootReducer: ReducersMapObject<AppStoreScheme> = {
		[kpisApi.reducerPath]: kpisApi.reducer,
	};

	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(kpisApi.middleware),
	});
}

export const store = createReduxStore();

setupListeners(store.dispatch);

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
