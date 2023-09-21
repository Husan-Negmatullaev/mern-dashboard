import { kpisApi } from "@/entities/Kpis";

export interface AppStoreScheme {
	// @ts-ignore
	[kpisApi.reducerPath]: kpisApi.reducer;
}
