import { ProductItem } from "../../model/types/types.ts";
import { FC, useMemo } from "react";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";

interface ProductTableGridProps {
	productItemData?: ProductItem[];
}

export const ProductTableGrid: FC<ProductTableGridProps> = (props) => {
	const { palette } = useTheme();
	const { productItemData } = props;

	const productColumns = useMemo<GridColDef<ProductItem>[]>(
		() => [
			{
				flex: 1,
				field: "_id",
				headerName: "id",
			},
			{
				flex: 0.5,
				field: "expense",
				headerName: "Expense",
				renderCell: (params: GridCellParams) => `$${params.value}`,
			},
			{
				flex: 0.5,
				field: "price",
				headerName: "Price",
				renderCell: (params: GridCellParams) => `$${params.value}`,
			},
		],
		[],
	);

	return (
		<>
			<HeaderChartBox
				title="List of Products"
				sideText={`${productItemData?.length} products`}
			/>
			<Box
				mt="0.5rem"
				p="0 0.5rem"
				height="75%"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
						color: palette.grey[300],
					},
					"& .MuiDataGrid-cell": {
						borderBottom: `1px solid ${palette.grey[800]} !important`,
					},
					"& .MuiDataGrid-columnHeaders": {
						borderBottom: `1px solid ${palette.grey[800]} !important`,
					},
					"& .MuiDataGrid-columnSeparator": {
						visibility: "hidden",
					},
				}}
			>
				<DataGrid
					rowHeight={35}
					hideFooter={true}
					columnHeaderHeight={25}
					columns={productColumns}
					rows={productItemData || []}
				/>
			</Box>
		</>
	);
};
