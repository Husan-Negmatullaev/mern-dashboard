import * as React from "react";

type ActiveLinkStylesProps = {
	isActive: boolean;
	isPending: boolean;
};

export const activeLinkStyles =
	(color: string) =>
	(props: ActiveLinkStylesProps): React.CSSProperties => ({
		color: props.isActive ? color : "inherit",
		textDecoration: props.isActive ? "underline" : "none",
	});
