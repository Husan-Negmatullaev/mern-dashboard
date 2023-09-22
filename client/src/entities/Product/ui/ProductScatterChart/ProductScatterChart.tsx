import { FC, useMemo } from "react";
import {
	ResponsiveContainer,
	ScatterChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Scatter,
	ZAxis,
} from "recharts";
import { useTheme } from "@mui/material";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";
import { ProductItem } from "../../model/types/types.ts";

type ProductScatterChartProps = {
	productItemData?: ProductItem[];
};

export const ProductScatterChart: FC<ProductScatterChartProps> = (props) => {
	const { palette } = useTheme();
	const { productItemData } = props;

	const transformProductData = useMemo(
		() =>
			productItemData?.map(({ _id, price, expense }) => {
				return {
					price,
					expense,
					id: _id,
				};
			}),
		[productItemData],
	);
	console.log(transformProductData);
	return (
		<>
			<HeaderChartBox sideText="+4%" title="Product Prices vs Expenses" />
			<ResponsiveContainer width="100%" height="100%">
				<ScatterChart
					margin={{
						top: 20,
						left: -10,
						right: 25,
						bottom: 40,
					}}
				>
					<CartesianGrid stroke={palette.grey[800]} />
					<XAxis
						type="number"
						dataKey="price"
						name="price"
						axisLine={false}
						tickLine={false}
						fontSize="0.65rem"
						tickFormatter={(v) => `$${v}`}
					/>
					<YAxis
						type="number"
						dataKey="expense"
						name="expense"
						axisLine={false}
						tickLine={false}
						fontSize="0.65rem"
						tickFormatter={(v) => `$${v}`}
					/>
					<ZAxis type="number" range={[20]} />
					<Tooltip formatter={(v) => `$${v}`} />
					<Scatter
						name="Product Expense Ratio"
						data={transformProductData}
						fill={palette.tertiary[500]}
					/>
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
};
