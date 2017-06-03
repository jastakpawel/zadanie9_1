function getTriangleArea(a, h) {
	
	if( (a <= 0) || (h <= 0) ) {
		return ('Nieprawidłowe dane')
	} else {
		return a * h / 2
	}
}

console.log( getTriangleArea(10, 6) )

var triangle1Area = getTriangleArea(10, 15); 
var triangle2Area = getTriangleArea(15, 48);
var triangle3Area = getTriangleArea(45, 69);

console.log ('Pole trójkąta wynosi ' + triangle1Area);
console.log ('Pole trójkąta wynosi ' + triangle2Area);
console.log ('Pole trójkąta wynosi ' + triangle3Area);