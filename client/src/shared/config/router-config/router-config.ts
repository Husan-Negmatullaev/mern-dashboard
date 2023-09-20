enum AppRoute {
	MAIN = "main",
	PREDICTIONS = "dashboard",
}

export const routerPaths: Record<AppRoute, string> = {
	[AppRoute.MAIN]: "/",
	[AppRoute.PREDICTIONS]: "/predictions",
};
