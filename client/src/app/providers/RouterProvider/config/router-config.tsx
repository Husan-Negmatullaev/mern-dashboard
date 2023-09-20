import {createBrowserRouter} from "react-router-dom";
import {Layout} from "@/widgets/Layout";
import {DashboardPage} from "@/pages/DashboardPage";
import {PredictionsPage} from "@/pages/PredictionsPage";


export enum AppRoute {
    dashboard = "/",
    predictions = "/predictions",
}

export const configRouter = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: DashboardPage,
            },
            {
                path: "predictions",
                Component: PredictionsPage,
            }
        ]
    }
]);

if (import.meta.hot) {
    import.meta.hot.dispose(() => configRouter.dispose());
}
