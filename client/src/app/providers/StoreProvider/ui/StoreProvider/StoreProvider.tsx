import React from "react";
import { Provider } from "react-redux";
import { AppStoreScheme } from "../../config/AppStore.ts";
import { createReduxStore } from "../../config/store.ts";

interface StoreProviderProps {
	children: React.ReactNode;
	initialState?: AppStoreScheme;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { initialState, children } = props;

	const store = createReduxStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};
