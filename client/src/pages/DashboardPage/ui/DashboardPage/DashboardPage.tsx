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
import {
	ProductLineChart,
	ProductPieChart,
	ProductScatterChart,
	ProductTableGrid,
	useGetAllProductsQuery,
} from "@/entities/Product";
import {
	TransactionTableGrid,
	useGetAllTransactionsQuery,
} from "@/entities/Transaction";

export const DashboardPage = () => {
	const isAboveLaptopSize = useMediaQuery("(min-width: 1220px)");
	const { data: kpiData } = useGetAllKpisQuery();
	const { data: productData } = useGetAllProductsQuery();
	const { data: transactionData } = useGetAllTransactionsQuery();

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
				<KpiAreaChart kpiItemData={kpiData} />
			</DashboardBox>
			<DashboardBox gridArea="b">
				<KpiLineChart kpiItemData={kpiData} />
			</DashboardBox>
			<DashboardBox gridArea="c">
				<KpiBarChart kpiItemData={kpiData} />
			</DashboardBox>
			<DashboardBox gridArea="d">
				<ProductScatterChart productItemData={productData} />
			</DashboardBox>
			<DashboardBox gridArea="e">
				<ProductLineChart kpiItemData={kpiData} />
			</DashboardBox>
			<DashboardBox gridArea="f">
				<ProductPieChart kpiItemData={kpiData} />
			</DashboardBox>
			<DashboardBox gridArea="g">
				<TransactionTableGrid transactionItemData={transactionData} />
			</DashboardBox>
			<DashboardBox gridArea="h">H</DashboardBox>
			<DashboardBox gridArea="k">
				<ProductTableGrid productItemData={productData} />
			</DashboardBox>
			<DashboardBox gridArea="i">I</DashboardBox>
		</Box>
	);
};
