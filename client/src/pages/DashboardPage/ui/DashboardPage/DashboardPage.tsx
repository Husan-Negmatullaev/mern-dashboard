import { Box, useMediaQuery } from "@mui/material";
import {
	gridLaptopTemplateNames,
	gridTabletTemplateNames,
} from "./gridTemplateNames.ts";
import { DashboardBox } from "@/shared/ui/DashboardBox/DashboardBox.tsx";

export const DashboardPage = () => {
	const isAboveLaptopSize = useMediaQuery("(min-width: 1220px)");

	return (
		<Box
			width="100%"
			gap="1.5rem"
			height="100%"
			display="grid"
			gridTemplateAreas={
				isAboveLaptopSize ? gridLaptopTemplateNames : gridTabletTemplateNames
			}
			gridAutoRows={isAboveLaptopSize ? "60px" : "80px"}
			gridTemplateColumns="repeat(auto-fit, minmax(370px, 1fr))"
		>
			<DashboardBox gridArea="a">A</DashboardBox>
			<DashboardBox gridArea="b">B</DashboardBox>
			<DashboardBox gridArea="c">C</DashboardBox>
			<DashboardBox gridArea="d">D</DashboardBox>
			<DashboardBox gridArea="e">E</DashboardBox>
			<DashboardBox gridArea="f">F</DashboardBox>
			<DashboardBox gridArea="g">G</DashboardBox>
			<DashboardBox gridArea="h">H</DashboardBox>
			<DashboardBox gridArea="k">K</DashboardBox>
			<DashboardBox gridArea="i">I</DashboardBox>
		</Box>
	);
};
