import { Box, useMediaQuery } from "@mui/material";
import { DashboardBox } from "@/shared/ui/DashboardBox/DashboardBox.tsx";
import {
	KpiAreaChart,
	KpiBarChart,
	KpiLineChart,
	useGetAllKpisQuery,
} from "@/entities/Kpis";
import {
	gridLaptopTemplateNames,
	gridTabletTemplateNames,
} from "../../lib/gridDashboardTemplate/gridTemplateNames.ts";

export const DashboardPage = () => {
	const isAboveLaptopSize = useMediaQuery("(min-width: 1220px)");
	const { data } = useGetAllKpisQuery();

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
			gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
		>
			<DashboardBox gridArea="a">
				<KpiAreaChart kpiItemData={data} />
			</DashboardBox>
			<DashboardBox gridArea="b">
				<KpiLineChart kpiItemData={data} />
			</DashboardBox>
			<DashboardBox gridArea="c">
				<KpiBarChart kpiItemData={data} />
			</DashboardBox>
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
