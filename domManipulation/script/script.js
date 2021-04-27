import { Title, HorizontalLine } from './header.js';

//const root = document.querySelector("#root");

//Title
Title({
    text:'JavaScript Quiz',
    fontFamily: 'Arial',
    textAlign: 'center'
});

// line - that separates body and header
HorizontalLine({
    attribute: ['width', '100%'],
    color: '#f4f3f3'
});
