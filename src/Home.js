import React from "react";

function Home() {
	return (
		<>
			<div className="content" id="home">
				<div className="intro">
					Hello, I'm <span className="myname">Srinivasan M</span>.
					<br />A full stack web developer.
				</div>
				<a
					href="https://drive.google.com/file/d/11ZJg8FvKYf4rXVpGZ-SuUCdiUtJ3zqUd/view"
					target="_blank"
					rel="noreferrer"
				>
					<button type="submit" className="btn btn1">
						View My Résumé
					</button>
				</a>
				<a href="./assets/CV.pdf">
					<button type="submit" className="btn btn2">
						Download Résumé
					</button>
				</a>
			</div>
		</>
	);
}

export default Home;
