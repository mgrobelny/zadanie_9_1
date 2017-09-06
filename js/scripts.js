// scripts.js

function getTriangleArea(a,h) {

if (a>0 && h>0) {
	return a*h/2;
} else {
	return 'Dane nieprawidłowe';
}
}

console.log( getTriangleArea(11,6) );

var triangle1Area = getTriangleArea(10,15);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(11,18);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(13,18);
console.log(triangle3Area)
