import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Media & Text //
const images = [
	'https://i.vimeocdn.com/video/590587169_530x315.jpg',
	'https://i.vimeocdn.com/video/589972810_530x315.jpg',
	'https://i.vimeocdn.com/video/595198868_505x160.jpg'
];
const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur..`;


// React Components //

function Section(title,body,side) {
	// body...
}

function App(){
	return(
		<div className="all" align="center">

			<div className="group">
				<div className="item right text">
					<h1>Monsoon III</h1>
					<p >{lorem}</p>
				</div>
				<div className="item left">
					<img src={images[2]} alt="Monsoon 3" />
				</div>
			</div>
			<div className="clear"></div>
			<div className="gradient">
					<div className="group">
						<div className="item left">
							<h1>Beams</h1>
							<p >{lorem}</p>
						</div>
						<div className="item right">
							<img src={images[1]} alt="Beams"/>
						</div>
					</div>
					<div className="clear"></div>
					<div className="group">
						<div className="item right">
							<h1>Move 2</h1>
							<p >{lorem}</p>
						</div>
						<div className="item left">
							<img src={images[0]} alt="Move 2" />
						</div>
					</div>
			</div>
		</div>
	);
}

// Render //

ReactDOM.render(
	<App />,
	document.getElementById('root')
);