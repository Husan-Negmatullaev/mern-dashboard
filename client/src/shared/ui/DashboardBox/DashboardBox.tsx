import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const DashboardBox = styled(Box)(({ theme }) => ({
	borderRadius: "1rem",
	backgroundColor: theme.palette.background.light,
	boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));
