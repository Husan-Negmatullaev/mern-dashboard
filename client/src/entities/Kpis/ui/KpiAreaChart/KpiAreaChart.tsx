import { FC, useMemo } from "react";
import { KPIItem } from "../../model/types/types.ts";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { transformDataToChartData } from "@/shared/lib/transformDataToChartData";
import { useTheme } from "@mui/material";

type KpiAreaChartProps = {
	kpiItemData?: KPIItem[];
};

export const KpiAreaChart: FC<KpiAreaChartProps> = (props) => {
	const { palette } = useTheme();
	const { kpiItemData } = props;

	const transformKPIData = useMemo(
		() =>
			kpiItemData?.[0].monthlyData.map((month) =>
				transformDataToChartData<typeof month>(
					month,
					month.month.substring(0, 3),
					"revenue",
					"expenses",
				),
			),
		[kpiItemData],
	);

	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				width={500}
				height={400}
				data={transformKPIData}
				margin={{
					top: 15,
					left: -10,
					right: 25,
					bottom: 60,
				}}
			>
				<defs>
					<linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopOpacity={0.5}
							stopColor={palette.primary[300]}
						/>
						<stop
							offset="95%"
							stopColor={palette.primary[300]}
							stopOpacity={0}
						/>
					</linearGradient>
					<linearGradient id="colorExpenses" x1="0" x2="0" y1="0" y2="1">
						<stop
							offset="5%"
							stopColor={palette.primary[300]}
							stopOpacity={0.5}
						/>
						<stop
							offset="95%"
							stopColor={palette.primary[300]}
							stopOpacity={0}
						/>
					</linearGradient>
				</defs>
				<XAxis dataKey="name" fontSize="0.65rem" tickLine={false} />
				<YAxis
					dataKey="name"
					strokeWidth="0"
					tickLine={false}
					fontSize="0.65rem"
					domain={[8000, 23000]}
				/>
				<Tooltip />
				<Area
					dot={true}
					type="monotone"
					fillOpacity={1}
					dataKey="revenue"
					fill="url(#colorRevenue)"
					stroke={palette.primary.main}
				/>
				<Area
					dot={true}
					type="monotone"
					fillOpacity={1}
					dataKey="expenses"
					fill="url(#colorExpenses)"
					stroke={palette.primary.main}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};
