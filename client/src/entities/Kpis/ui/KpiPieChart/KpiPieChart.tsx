import { FC, useMemo } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";
import { KPIItem } from "@/entities/Kpis";
import { FlexBetweenBox } from "@/shared/ui/FlexBetweenBox/FlexBetweenBox.tsx";

type KpiPieChartProps = {
	kpiItemData?: KPIItem[];
};

export const KpiPieChart: FC<KpiPieChartProps> = (props) => {
	const { palette } = useTheme();
	const { kpiItemData } = props;

	const pieColors = useMemo(
		() => [palette.primary[800], palette.primary[300]],
		[palette.primary],
	);

	const transformKPIData = useMemo(() => {
		if (kpiItemData) {
			const totalExpenses = kpiItemData[0].totalExpenses;
			return Object.entries(kpiItemData[0].expensesByCategory).map(
				([key, value]) => {
					return [
						{
							name: key,
							value: value,
						},
						{
							name: `${key} of Total`,
							value: totalExpenses - value,
						},
					];
				},
			);
		}
	}, [kpiItemData]);

	return (
		<>
			<HeaderChartBox title="Expense Breakdown By Category" sideText="+4%" />
			<FlexBetweenBox mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
				{transformKPIData?.map((kpiData, i) => (
					<Box key={`${kpiData[0].name}-${i}`}>
						<PieChart width={110} height={100}>
							<Pie
								stroke="none"
								data={kpiData}
								dataKey="value"
								innerRadius={18}
								outerRadius={35}
								paddingAngle={2}
							>
								{kpiData.map((_, index) => (
									<Cell key={`cell-${index}`} fill={pieColors[index]} />
								))}
							</Pie>
						</PieChart>
						<Typography variant="h5">{kpiData[0].name}</Typography>
					</Box>
				))}
			</FlexBetweenBox>
		</>
	);
};
