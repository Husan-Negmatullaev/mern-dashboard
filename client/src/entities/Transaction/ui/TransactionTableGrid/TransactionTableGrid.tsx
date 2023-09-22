import { FC, useMemo } from "react";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { TransactionItem } from "../../model/types/types.ts";

interface TransactionTableGridProps {
	transactionItemData?: TransactionItem[];
}

export const TransactionTableGrid: FC<TransactionTableGridProps> = (props) => {
	const { palette } = useTheme();
	const { transactionItemData } = props;

	const transactionColumns = useMemo<GridColDef<TransactionItem>[]>(
		() => [
			{
				flex: 1,
				field: "_id",
				headerName: "id",
			},
			{
				flex: 0.67,
				field: "buyer",
				headerName: "Buyer",
			},
			{
				flex: 0.35,
				field: "amount",
				headerName: "Amount",
				renderCell: (params: GridCellParams) => `$${params.value}`,
			},
			{
				flex: 0.1,
				field: "productIds",
				headerName: "Count",
				renderCell: (params: GridCellParams) => String(params.value).length,
			},
		],
		[],
	);

	return (
		<>
			<HeaderChartBox
				title="Recent Orders"
				sideText={`${transactionItemData?.length} products`}
			/>
			<Box
				mt="1rem"
				p="0 0.5rem"
				height="80%"
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
					columns={transactionColumns}
					rows={transactionItemData || []}
				/>
			</Box>
		</>
	);
};
