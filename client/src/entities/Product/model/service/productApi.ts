import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductItem } from "../types/types.ts";

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_BASE_URL,
	}),
	tagTypes: ["Product"],
	endpoints: (build) => ({
		getAllProducts: build.query<Array<ProductItem>, void>({
			query: () => "/product/products/",
			providesTags: ["Product"],
		}),
	}),
});

export const { useGetAllProductsQuery } = productApi;
