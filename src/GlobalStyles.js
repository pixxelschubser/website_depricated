import { createGlobalStyle } from 'styled-components';
import './Montserrat.css';

export default createGlobalStyle`
	:root {
		--col-white: rgba(220,220,220,1);
		--col-white-trans: rgba(220,220,220,0.3);
		--col-grey: rgba(76,76,76,1);
		--col-black: rgba(15,15,15,1);
		--col-black-trans: rgba(0,0,0,0.7);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
		color: var(--col-white);
		line-height: 1.5;
		scroll-behavior: smooth;
		cursor: default;
	}

	body {
		height: 100vh;
		background-color: #000;
	}
`;
