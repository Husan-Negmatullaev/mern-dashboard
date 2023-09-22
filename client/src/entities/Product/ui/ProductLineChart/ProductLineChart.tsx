import { FC, useMemo } from "react";
import {
	XAxis,
	YAxis,
	Line,
	Tooltip,
	LineChart,
	CartesianGrid,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { useTheme } from "@mui/material";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";
import { KPIItem } from "@/entities/Kpis";

type ProductLineChartProps = {
	kpiItemData?: KPIItem[];
};

export const ProductLineChart: FC<ProductLineChartProps> = (props) => {
	const { palette } = useTheme();
	const { kpiItemData } = props;

	const transformKPIData = useMemo(
		() =>
			kpiItemData?.[0].monthlyData.map(
				({ month, operationalExpenses, nonOperationalExpenses }) => {
					return {
						name: month.substring(0, 3),
						"Operational Expenses": operationalExpenses,
						"Non Operational Expenses": nonOperationalExpenses,
					};
				},
			),
		[kpiItemData],
	);

	return (
		<>
			<HeaderChartBox
				sideText="+4"
				title="Operational vs Non-Operational Expenses"
			/>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={transformKPIData}
					margin={{
						top: 20,
						right: 0,
						left: -10,
						bottom: 55,
					}}
				>
					<CartesianGrid vertical={false} stroke={palette.grey[800]} />
					<XAxis dataKey="name" fontSize="0.65rem" tickLine={false} />
					<YAxis
						yAxisId="left"
						axisLine={false}
						tickLine={false}
						orientation="left"
						fontSize="0.65rem"
					/>
					<YAxis
						yAxisId="right"
						axisLine={false}
						tickLine={false}
						fontSize="0.65rem"
						orientation="right"
					/>
					<Tooltip />
					<Legend
						height={20}
						wrapperStyle={{
							margin: "0 0 0.65rem 0",
						}}
					/>
					<Line
						yAxisId="right"
						type="monotone"
						stroke={palette.primary.main}
						dataKey="Operational Expenses"
					/>
					<Line
						yAxisId="left"
						type="monotone"
						stroke={palette.tertiary[500]}
						dataKey="Non Operational Expenses"
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};
