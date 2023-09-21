import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KPIItem } from "../types/types.ts";

export const kpisApi = createApi({
	reducerPath: "kpisApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_BASE_URL,
	}),
	tagTypes: ["Kpis"],
	endpoints: (build) => ({
		getAllKpis: build.query<Array<KPIItem>, void>({
			query: () => "kpi/kpis/",
			providesTags: ["Kpis"],
		}),
	}),
});

export const { useGetAllKpisQuery } = kpisApi;
