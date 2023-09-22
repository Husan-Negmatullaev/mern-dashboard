import { Box, Button, Typography, useTheme } from "@mui/material";
import { useGetAllKpisQuery } from "@/entities/Kpis";
import { DashboardBox } from "@/shared/ui/DashboardBox/DashboardBox.tsx";
import { useMemo, useState } from "react";
import { FlexBetweenBox } from "@/shared/ui/FlexBetweenBox/FlexBetweenBox.tsx";
import {
	CartesianGrid,
	Label,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import regression, { DataPoint } from "regression";

export const PredictionsPage = () => {
	const { palette } = useTheme();
	const [isPredictions, setIsPredictions] = useState(false);
	const { data: kpiData } = useGetAllKpisQuery();

	const formattedData = useMemo(() => {
		if (!kpiData) return [];
		const monthData = kpiData[0].monthlyData;

		const formatted: Array<DataPoint> = monthData.map(
			({ revenue }, i: number) => {
				return [i, revenue];
			},
		);
		const regressionLine = regression.linear(formatted);

		return monthData.map(({ month, revenue }, i: number) => {
			return {
				name: month,
				"Actual Revenue": revenue,
				"Regression Line": regressionLine.points[i][1],
				"Predicted Revenue": regressionLine.predict(i + 12)[1],
			};
		});
	}, [kpiData]);

	return (
		<DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
			<FlexBetweenBox m="1rem 2.5rem" gap="1rem">
				<Box>
					<Typography variant="h3">Revenue and Predictions</Typography>
					<Typography variant="h6">
						charted revenue and predicted revenue based on a simple linear
						regression model
					</Typography>
				</Box>
				<Button
					onClick={() => setIsPredictions(!isPredictions)}
					sx={{
						color: palette.grey[900],
						backgroundColor: palette.grey[700],
						boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
					}}
				>
					Show Predicted Revenue for Next Year
				</Button>
			</FlexBetweenBox>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={formattedData}
					margin={{
						top: 20,
						right: 75,
						left: 20,
						bottom: 80,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
					<XAxis dataKey="name" fontSize="0.65rem" tickLine={false}>
						<Label value="Month" offset={-5} position="insideBottom" />
					</XAxis>
					<YAxis
						strokeWidth="0"
						tickFormatter={(v) => `$${v}`}
						fontSize="0.65rem"
						domain={[12000, 26000]}
					>
						<Label
							angle={-90}
							offset={-5}
							value="Revenue is USD"
							position="insideLeft"
						/>
					</YAxis>
					<Tooltip />
					<Legend verticalAlign="top" />
					<Line
						type="monotone"
						strokeWidth="0"
						dot={{ strokeWidth: 5 }}
						dataKey="Actual Revenue"
						stroke={palette.primary.main}
					/>
					<Line
						dot={false}
						type="monotone"
						dataKey="Regression Line"
						stroke={palette.tertiary[500]}
					/>
					{isPredictions && (
						<Line
							strokeDasharray="5 5"
							dataKey="Predicted Revenue"
							stroke={palette.secondary[500]}
						/>
					)}
				</LineChart>
			</ResponsiveContainer>
		</DashboardBox>
	);
};
