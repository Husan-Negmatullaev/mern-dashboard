import { NavBar } from "../NavBar/NavBar.tsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const Layout = () => {
	return (
		<Box width="100%" height="100%" padding="1rem 2rem 4rem">
			<NavBar />
			<Outlet />
		</Box>
	);
};
