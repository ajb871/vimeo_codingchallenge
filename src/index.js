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

// Section Components //
class Section extends React.Component {
	render () {
		return (
		<div>
			<div className={"item " + this.props.floatText}>
				<h1>{this.props.title}</h1>
				<p >{this.props.body}</p>
			</div>
			<div className={"item " + this.props.floatImage}>
			<img src={this.props.image} alt={this.props.alt} />
			</div>
		</div>
		)
	}
}

class App extends React.Component{

	render(){
		return(
			<div align="center">
				<div className="group">
				<Section
					title= 'Monsoon III' 
					body= {lorem}
					image= {images[2]}
					alt= 'Monsoon 3'
					floatImage = 'left'
					floatText = 'right'
				 />
				 </div>

				 <div className="gradient">
					 <div className="group">
					 <Section 
					 	title= 'Beams' 
						body= {lorem}
						image= {images[1]}
						alt= 'Beams' 
						floatImage = 'right'
						floatText = 'left'
					 />
					 </div>

					 <div className="group">
					  <Section 
					 	title= 'Move 2' 
						body= {lorem}
						image= {images[0]}
						alt= 'Move 2' 
						floatImage = 'left'
						floatText = 'right'
					 />
					 </div>
				 </div>

				 <div className="carousel">

				 
				 </div>


			</div>
		);
	}
}

// Render //
ReactDOM.render(
	<App />,
	document.getElementById('root')
);