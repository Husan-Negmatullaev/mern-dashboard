import { Box, Typography, useTheme } from "@mui/material";
import { HeaderChartBox } from "@/shared/ui/HeaderChartBox/HeaderChartBox.tsx";

export const TransactionProgressBar = () => {
	const { palette } = useTheme();

	return (
		<>
			<HeaderChartBox
				title="Overall Summary and Explanation Data"
				sideText="+15%"
			/>
			<Box
				height="15px"
				borderRadius="1rem"
				bgcolor={palette.primary[800]}
				margin="1.25rem 1rem 0.4rem 1rem"
			>
				<Box
					height="15px"
					bgcolor={palette.primary[600]}
					borderRadius="1rem"
					width="40%"
				></Box>
			</Box>
			<Typography margin="0 1rem" variant="h6">
				Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
				ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas molestie
				volutpat et. Malesuada quis pretium aliquet lacinia ornare sed. In
				volutpat nullam at est id cum pulvinar nunc.
			</Typography>
		</>
	);
};
