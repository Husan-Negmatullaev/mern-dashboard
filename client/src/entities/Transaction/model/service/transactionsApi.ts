import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TransactionItem } from "../types/types.ts";

export const transactionsApi = createApi({
	reducerPath: "transactionsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_BASE_URL,
	}),
	tagTypes: ["Transaction"],
	endpoints: (build) => ({
		getAllTransactions: build.query<Array<TransactionItem>, void>({
			query: () => "/transaction/transactions/",
			providesTags: ["Transaction"],
		}),
	}),
});

export const { useGetAllTransactionsQuery } = transactionsApi;
