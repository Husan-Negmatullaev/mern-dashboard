import { FC, useMemo } from "react";
import { KPIItem } from "../../model/types/types.ts";
import {
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	CartesianGrid,
	Legend,
	Bar,
} from "recharts";
import { useTheme } from "@mui/material";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";

type KpiBarChartProps = {
	kpiItemData?: KPIItem[];
};

export const KpiBarChart: FC<KpiBarChartProps> = (props) => {
	const { palette } = useTheme();
	const { kpiItemData } = props;

	const transformKPIData = useMemo(
		() =>
			kpiItemData?.[0].monthlyData.map(({ month, revenue }) => {
				return {
					revenue,
					name: month.substring(0, 3),
				};
			}),
		[kpiItemData],
	);

	return (
		<>
			<HeaderChartBox
				sideText="+4"
				title="Revenue Month by Month"
				subtitle="graph representing the revenue month by month"
			/>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					margin={{
						top: 17,
						left: -5,
						right: 15,
						bottom: 58,
					}}
					data={transformKPIData}
				>
					<defs>
						<linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="5%"
								stopOpacity={0.8}
								stopColor={palette.primary[300]}
							/>
							<stop
								offset="95%"
								stopColor={palette.primary[300]}
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid vertical={false} stroke={palette.grey[800]} />
					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						fontSize="0.65rem"
					/>
					<YAxis axisLine={false} tickLine={false} fontSize="0.65rem" />
					<Tooltip />
					<Legend />
					<Bar dataKey="revenue" fill="url(#colorRevenue)" />
				</BarChart>
			</ResponsiveContainer>
		</>
	);
};
