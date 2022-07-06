import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// import PropTypes from "prop-types";
import Indexcard from "./Indexcard";
import Indexpara from "./Indexpara";
function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}
const Header = () => {
	const [value, setVaule] = useState();
	return (
		<div>
			<HideOnScroll>
				<AppBar>
					<Toolbar>
						<AddShoppingCartIcon></AddShoppingCartIcon>
						<Tabs
							textcolor="inherit"
							vaule={value}
							onChange={(e, value) => {
								setVaule(value);
							}}
							indicatorColor="secondary"
						>
							<Tab label="Products" />
							<Tab label="services" />
							<Tab label="contact US" />
							<Tab label="Career" />
						</Tabs>
						<Button sx={{ marginLeft: "auto" }} variant="contained">
							Login
						</Button>
						<Button sx={{ marginLeft: "10px" }} variant="contained">
							SignUp
						</Button>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Indexcard />
			<br />
			<br />

			<Indexpara />
			<Indexcard />
			<Indexcard />
		</div>
	);
};
export default Header;
