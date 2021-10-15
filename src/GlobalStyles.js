import { createGlobalStyle } from 'styled-components';
import './Montserrat.css';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
		color: rgba(220,220,220,1);
		line-height: 1.5;
		scroll-behavior: smooth;
	}

	body {
		height: 100vh;
		background-color: rgba(15,15,15,1);
	}
`;
