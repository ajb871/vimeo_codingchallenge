import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Media & Text //
const images = [
	'https://i.vimeocdn.com/video/595198868_505x160.jpg',
	'https://i.vimeocdn.com/video/589972810_530x315.jpg',
	'https://i.vimeocdn.com/video/590587169_530x315.jpg'
];
const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur..`;
const slides = [
	{
		image: 'http://de.web.img3.acsta.net/c_215_290/pictures/17/01/09/14/41/554358.jpg',
		title: 'The Fourth Phase',
		desc: lorem
	},
	{
		image: 'https://i.pinimg.com/originals/e3/88/4c/e3884c83d3663fa7ea9ebf8ce6c3295a.jpg',
		title: 'Vice Versa',
		desc: lorem
	},
	{
		image: 'https://berkeleylibrarysc.org/wp-content/uploads/2018/02/Every-Day-Movie-poster.jpg',
		title: 'Full Moon',
		desc: lorem
	}
];
// Components //
class Section extends React.Component {
	// Component for text/image sections
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

class Carousel extends React.Component {
	// Component for Carousel / slideshow
	constructor(props){
		super(props);
		this.state = {
			index: 0,
			slides: {slides},
		};
	}

	// Slide movement functions
	prevSlide(e){
		e.preventDefault();

		let currSlide = this.state.index;
		let { slides } = this.props;
		let slidesLength = slides.length - 1;

		if(currSlide === 0){
			currSlide = slidesLength;
		} else {
			currSlide = currSlide - 1;
		}
		this.setState({
			index: currSlide
		});
	}

	nextSlide(e){
		e.preventDefault();

		let currSlide = this.state.index;
		let { slides } = this.props;
		let slidesLength = slides.length - 1;

		if (currSlide < slidesLength){
			currSlide = currSlide + 1;
		} else {
			currSlide = 0
		}
		this.setState({
			index: currSlide
		});
	}

	render(){
		return(
		<div className="carousel"> 
			<div className="group slides">
				<div className="slide">
					<img src={slides[this.state.index].image} alt={slides[this.state.index].title} />
					<div className="info">
					<h1>{slides[this.state.index].title}</h1>
					<p>{slides[this.state.index].desc}</p>
					<div className="buttons">
						<button id="buy">Buy Now</button>
						<button className="trailer">Watch Trailer</button>
					</div>
					</div>
				</div>
			</div>
			<div className="arrowspan">
				<a href="#" className="arrows prev" onClick={e=> this.prevSlide(e)}>&#10094;</a>
	      		<a href="#" className="arrows next"  onClick={e => this.nextSlide(e)}>&#10095;</a>
      		</div>
			

		</div>
		)
	}
}

class App extends React.Component{

	render(){
		return(
			<div align="center">
				
				<Carousel slides={slides} />

				<div className="group">
				<Section
					title= 'Monsoon III' 
					body= {lorem}
					image= {images[0]}
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
						image= {images[2]}
						alt= 'Move 2' 
						floatImage = 'left'
						floatText = 'right'
					 />
					 </div>
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