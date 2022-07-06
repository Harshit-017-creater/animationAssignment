import React from "react";
import img1 from "./Images/image1.jpg";
// import LoremIpsum from "react-lorem-ipsum";
import "./Mystyle.css";

export default function () {
	return (
		<div>
			<div className="ui-card">
				<img src={img1} />
				<div className="description">
					<h3>Mountains morning</h3>
					<a href="#">Read More</a>
				</div>
			</div>
		</div>
	);
}
