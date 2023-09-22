import { FC, useMemo } from "react";
import { KPIItem } from "../../model/types/types.ts";
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

type KpiLineChartProps = {
	kpiItemData?: KPIItem[];
};

export const KpiLineChart: FC<KpiLineChartProps> = (props) => {
	const { palette } = useTheme();
	const { kpiItemData } = props;

	const transformKPIData = useMemo(
		() =>
			kpiItemData?.[0].monthlyData.map(({ month, revenue, expenses }) => {
				return {
					revenue,
					profit: (revenue - expenses).toFixed(2),
					name: month.substring(0, 3),
				};
			}),
		[kpiItemData],
	);

	return (
		<>
			<HeaderChartBox
				sideText="+4"
				title="Profit and Revenue"
				subtitle="top line represents revenue, bottom line represents expenses"
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
						fontSize="0.65rem"
					/>
					<YAxis
						yAxisId="right"
						orientation="right"
						axisLine={false}
						tickLine={false}
						fontSize="0.65rem"
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
						dataKey="revenue"
						stroke={palette.primary.main}
					/>
					<Line
						yAxisId="left"
						type="monotone"
						dataKey="profit"
						stroke={palette.tertiary[500]}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};
