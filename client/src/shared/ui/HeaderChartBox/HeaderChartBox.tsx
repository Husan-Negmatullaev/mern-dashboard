import { FC, ReactNode } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { FlexBetweenBox } from "../FlexBetweenBox/FlexBetweenBox.tsx";

type HeaderChartBoxProps = {
	icon?: ReactNode;
	title?: string;
	subtitle?: string;
	sideText?: string;
};

export const HeaderChartBox: FC<HeaderChartBoxProps> = (props) => {
	const { title, sideText, subtitle, icon } = props;
	const { palette } = useTheme();

	return (
		<FlexBetweenBox color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
			<FlexBetweenBox>
				{icon}
				<Box>
					<Typography variant="h4" mb="-0.1rem">
						{title}
					</Typography>
					<Typography variant="h6">{subtitle}</Typography>
				</Box>
			</FlexBetweenBox>
			<Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
				{sideText}
			</Typography>
		</FlexBetweenBox>
	);
};
