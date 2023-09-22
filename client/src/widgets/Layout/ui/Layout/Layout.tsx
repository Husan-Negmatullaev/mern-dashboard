import { NavBar } from "../NavBar/NavBar.tsx";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

export const Layout = () => {
	const isAboveLaptopSize = useMediaQuery("(min-width: 1220px)");

	return (
		<Box
			width="100%"
			height="100%"
			padding={`1rem ${isAboveLaptopSize ? "2" : "1"}rem 4rem`}
		>
			<NavBar />
			<Outlet />
		</Box>
	);
};
