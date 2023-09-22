import { kpisApi } from "@/entities/Kpis";
import { transactionsApi } from "@/entities/Transaction";
import { productApi } from "@/entities/Product";

export interface AppStoreScheme {
	// @ts-ignore
	[kpisApi.reducerPath]: kpisApi.reducer;
	// @ts-ignore
	[transactionsApi.reducerPath]: transactionsApi.reducer;
	// @ts-ignore
	[productApi.reducerPath]: productApi.reducer;
}
