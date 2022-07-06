import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Mystylepara.css";
const Indexpara = () => {
	const [state] = useState({
		title: "Forward ",
		titleTwo: "Forwarding",
	});
	return (
		<div>
			<div className="home">
				<div className="home-intro">
					<h2>
						<div className="title">{state.title}</div>
						<div className="titleTwo">{state.titleTwo}</div>
					</h2>
					<div className="text">
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
								delay: 40,
								string: [
									"I am Harshit Sharma",
									"I am a webDeveloper by profesion",
								],
							}}
						></Typewriter>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Indexpara;
