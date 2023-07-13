import { useEffect, useId } from 'react';
import P5 from 'p5';
import './site.css';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';

let m=0, n=0, a=1, b=1, v=1, N=0;

let particles: Particle[] = [];

let sliders: {
	m : P5.Element,
	n : P5.Element,
	a : P5.Element,
	b:  P5.Element,
	v : P5.Element,
	num : P5.Element
}

let minWalk = 0.002;

const settings = {
	nParticles : 20000,
	canvasSize : [600, 600],
	drawHeatmap : false
}
const pi = 3.1415926535;

const chladni = (x: number, y: number, a: number, b: number, m: number, n: number) => a * Math.sin(pi*n*x) * Math.sin(pi*m*y) + b * Math.sin(pi*m*x) * Math.sin(pi*n*y);

class Particle {
	x: number;
	y: number;
	stochasticAmplitude: number;
	xOff: number = 0;
	yOff: number = 0;
	p5: P5;

	constructor(p5: P5) {
		this.p5 = p5;
		this.x = Math.random();
		this.y = Math.random();
		this.stochasticAmplitude = Math.random() * 0.1;

		this.updateOffsets();
	}

	move() {
		// what is our chladni value i.e. how much are we vibrating? (between -1 and 1, zeroes are nodes)
		let eq = chladni(this.x, this.y, a, b, m, n);

		// set the amplitude of the move -> proportional to the vibration
		this.stochasticAmplitude = v * Math.abs(eq);

		if (this.stochasticAmplitude <= minWalk) this.stochasticAmplitude = minWalk;

		// perform one random walk
		this.x += Math.random() * (this.stochasticAmplitude * 2) - this.stochasticAmplitude;
		this.y += Math.random() * (this.stochasticAmplitude * 2) - this.stochasticAmplitude;
		
		this.updateOffsets();
	}

	updateOffsets() {
		// handle edges
		if (this.x <= 0) this.x = 0;
		if (this.x >= 1) this.x = 1;
		if (this.y <= 0) this.y = 0;
		if (this.y >= 1) this.y = 1;

		// convert to screen space
		this.xOff = this.p5.width * this.x; // (this.x + 1) / 2 * width;
		this.yOff = this.p5.height * this.y; // (this.y + 1) / 2 * height;
	}

	show() {
		this.p5.point(this.xOff, this.yOff);
	}
}

const updateParams = () => {
	m = sliders.m.value() as number;
	n = sliders.n.value() as number;
	a = sliders.a.value() as number;
	b = sliders.b.value() as number;
	v = sliders.v.value() as number;
	N = sliders.num.value() as number;
}

const wipeScreen = (p5: P5) => {
	p5.background(30);
	p5.stroke(255);
}

function sketch(p5: P5) {
	p5.setup = () => {
		p5.createCanvas(settings.canvasSize[0], settings.canvasSize[1]);

		sliders = {
            m : p5.select('#mSlider') as P5.Element, // freq param 1
            n : p5.select('#nSlider') as P5.Element, // freq param 2
            a : p5.select('#aSlider') as P5.Element, // freq param 3
            b:  p5.select('#bSlider') as P5.Element, // freq param 4
            v : p5.select('#vSlider') as P5.Element, // velocity
            num : p5.select('#numSlider') as P5.Element, // number
        }

		for (let i = 0; i < settings.nParticles; i++) {
            particles[i] = new Particle(p5);
        }
	}

	p5.draw = () => {
		wipeScreen(p5);
		updateParams();

		let movingParticles = particles.slice(0, N);

		for (let particle of movingParticles) {
			particle.move();
			particle.show();
		}
	}
}

const CymaticsSimulatorPage = () => {
	const sketchContainerId = useId();

	useEffect(() => {
		const p5Instance = new P5(sketch, document.getElementById(sketchContainerId) as HTMLElement);
		return () => p5Instance.remove();
	}, [sketchContainerId]);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://polyfill.io/v3/polyfill.min.js?features=es6";
		document.head.appendChild(script);
	})

	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML";
		script.async = true;
		script.type = "text/javascript";
		document.head.appendChild(script);
	})

	return (
		<>
		<header className="black center">
        	<Navbar/>
        	<h1>Cymatics Simulator - Chladni</h1>
        	<form id="settings">
            	<p>Attempt at simulating cymatic patterns on a chladni plate.</p>
            	<p>Inspired from <a style={{color: "yellow"}} href="https://www.youtube.com/watch?v=Q3oItpVa9fs">this video.</a></p>
				<p>Sound wave equation: \[f(x) = a\sin(\pi nx) \sin(\pi my) + b\sin(\pi mx) \sin(\pi ny)\]</p>
				<fieldset>
					<p>Experiment!</p>
					<label htmlFor="mSlider">m</label>
					<input type="range" min="1" max="10" defaultValue="1" className="slider" id="mSlider" />
					<br/>
					<label htmlFor="nSlider">n</label>
					<input type="range" min="1" max="10" defaultValue="1" className="slider" id="nSlider" />
					<br/>
					<label htmlFor="aSlider">a</label>
					<input type="range" min="1" max="10" defaultValue="1" className="slider" id="aSlider" />
					<br/>
					<label htmlFor="bSlider">b</label>
					<input type="range" min="1" max="10" defaultValue="1" className="slider" id="bSlider" />
					<br/>
					<label htmlFor="vSlider">v</label>
					<input type="range" min="0" max="0.1" defaultValue="0.01" step="0.001" className="slider" id="vSlider" />
					<br/>
					<label htmlFor="numSlider">num</label>
					<input type="range" min="0" max="20000" defaultValue="20000" step="100" className="slider" id="numSlider" />
				</fieldset>
			</form>
		</header>
		<div className="container black center padding-64">
			<div id={sketchContainerId}></div>
			<p>Warning: Reloading the page might result in the appearance of a black screen to the left of the simulation.</p>
			<p>I couldn't find a way to solve this problem, so kindly forgive me for the inconvenience.</p>
		</div>
		<Footer/>
		</>
	)
}

export default CymaticsSimulatorPage;