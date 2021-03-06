import React from "react";

function About() {
	return (
		<>
			<svg
				preserveAspectRatio="none"
				viewBox="0 0 100 100"
				height="100"
				width="100%"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
                id="about"
			>
				<path
					d="M0 0 L50 97 L100 0"
					fill="hsl(210, 10%, 15%)"
					stroke="hsl(210, 10%, 15%)"
				></path>
			</svg>
			<div className="abt">
				<div className="about1">
					<div className="card">ABOUT</div>
					<div className="cardline"></div>
					<div className="about_content flex">
						<img
							src="./assets/pic.png"
							alt="myimage"
							className="image"
						/>
						<div>
							<h3>Who's this guy?</h3>
							<div className="about_me">
								Lives in Erode, Tamilnadu.
								<br />
								Looking for a web developer job
								<br />
								where I learn more and contribute
								<br />
								my knowledge to the organization.
							</div>
						</div>
					</div>
					<div className="about_content flex">
						<div>
							<div className="hexagon">
								<i className="far fa-tachometer-alt"></i>
							</div>
							<h2>Fast</h2>
							<div className="about_me">
								Fast load times and lag free interaction, my
								highest priority.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
