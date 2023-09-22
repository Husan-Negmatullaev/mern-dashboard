import { FC, useMemo } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";
import { KPIItem } from "@/entities/Kpis";
import { FlexBetweenBox } from "@/shared/ui/FlexBetweenBox/FlexBetweenBox.tsx";

type ProductPieChartProps = {
	kpiItemData?: KPIItem[];
};

const pieData = [
	{ name: "Group A", value: 600 },
	{ name: "Group B", value: 800 },
];
export const ProductPieChart: FC<ProductPieChartProps> = () => {
	const { palette } = useTheme();
	// const { kpiItemData } = props;

	const pieColors = useMemo(
		() => [palette.primary[800], palette.primary[300]],
		[palette.primary],
	);

	// const transformKPIData = useMemo(
	// 	() =>
	// 		kpiItemData?.[0].monthlyData.map(
	// 			({ month, operationalExpenses, nonOperationalExpenses }) => {
	// 				return {
	// 					name: month.substring(0, 3),
	// 					"Operational Expenses": operationalExpenses,
	// 					"Non Operational Expenses": nonOperationalExpenses,
	// 				};
	// 			},
	// 		),
	// 	[kpiItemData],
	// );

	return (
		<>
			<HeaderChartBox sideText="+4%" title="Campaigns and Targets" />
			<FlexBetweenBox mt="0.25rem" gap="1.5rem" pr="1rem">
				<PieChart
					width={100}
					height={100}
					margin={{
						top: 0,
						left: 10,
						bottom: 0,
						right: -10,
					}}
				>
					<Pie
						stroke="none"
						fill="#8884d8"
						dataKey="value"
						innerRadius={18}
						outerRadius={38}
						paddingAngle={2}
						data={pieData}
					>
						{pieData?.map((_, index) => (
							<Cell key={index} fill={pieColors[index]} />
						))}
					</Pie>
				</PieChart>
				<Box flex="1 1 35%" textAlign="center">
					<Typography variant="h5">Sales</Typography>
					<Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
						83
					</Typography>
					<Typography variant="h6">
						Finance goals of the campaign that is desired
					</Typography>
				</Box>
				<Box flex="1 1 auto">
					<Typography variant="h5">Losses is Revenue</Typography>
					<Typography variant="h6">Losses are down 25%</Typography>
					<Typography variant="h5" mt="0.4rem">
						Profit Margins
					</Typography>
					<Typography variant="h6">
						Margins are up by 30% from last month .
					</Typography>
				</Box>
			</FlexBetweenBox>
		</>
	);
};
