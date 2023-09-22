import { FlexBetweenBox } from "@/shared/ui/FlexBetweenBox/FlexBetweenBox.tsx";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { routerPaths } from "@/shared/config/router-config/router-config.ts";
import { activeLinkStyles } from "@/widgets/Layout/lib/activeLinkStyles.ts";
import { useMemo } from "react";
import { SxProps } from "@mui/system/styleFunctionSx";

export const NavBar = () => {
	const color = useTheme();
	const isAboveLaptopSize = useMediaQuery("(min-width: 340px)");

	const boxStyled = useMemo<SxProps<typeof color>>(
		() => ({ "&:hover": { color: color.palette.primary[100] } }),
		[color.palette.primary],
	);

	return (
		<FlexBetweenBox
			mb="0.25rem"
			p="0.5rem 0rem"
			color={color.palette.grey[300]}
		>
			<FlexBetweenBox gap="0.75rem">
				<PixIcon fontSize={"large"} />
				<Typography title={"h4"} fontSize="16px" hidden={!isAboveLaptopSize}>
					Finanseer
				</Typography>
			</FlexBetweenBox>
			<FlexBetweenBox gap="2rem">
				<Box sx={boxStyled}>
					<NavLink
						to={routerPaths.main}
						style={activeLinkStyles(color.palette.grey[700])}
					>
						Dashboard
					</NavLink>
				</Box>
				<Box sx={boxStyled}>
					<NavLink
						to={routerPaths.dashboard}
						style={activeLinkStyles(color.palette.grey[700])}
					>
						Predictions
					</NavLink>
				</Box>
			</FlexBetweenBox>
		</FlexBetweenBox>
	);
};
