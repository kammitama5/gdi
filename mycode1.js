//Homeworks

//==========================================================================

//Homework Week one

//1. The Fortune Teller

var numberOfChildren1 = '3';
var partnersName1 = 'Victor Brownson ';
var location1 = ' Switzerland ';
var jobTitle1 = 'Consultant ';

console.log('You will be a ' + jobTitle1 + ' in ' + location1 +
	 ' and married to ' + partnersName1 + ' with ' + numberOfChildren1 +
	  ' kids.');


//===========================================================================

//2. The Calculator

//Write a function called squareNumber 
//that will take one argument (a number)
//, square that number, and return the result.

//squareNumber (a)
function squareNumber(num)
{
	
	return num * num;
}

num = 65;

console.log('The result of squaring the number ' + num + 
	' is ' + squareNumber(num) + '.');

//============================================================================

//squareNumber (b)
function squareNumber1(numa)
{
	console.log('The result of squaring the number ' + numa + 
	' is ' + (numa * numa) + '.');

}

squareNumber1(55);



//===========================================================================

//Write a function called halfNumber that will take one argument
//divide it by 2 and return the result.

//halfNumber (a)

function halfNumber(num1)
{
	return num1 / 2.0;
}

num1 = 105;

console.log('Half of ' + num1 + ' is ' + halfNumber(num1) + '.');

//===========================================================================

//halfNumber (b)

function halfNumber1(numb)
{
	console.log('Half of ' + numb + ' is ' + (numb / 2.0) + '.');
}

halfNumber1(45343434345);

//============================================================================

//Write a function that takes two numbers and figures out a percent age of b

//PercentOf (a)

function percentOf(firstNum, secondNum)
{
	return ((firstNum/secondNum) * 100);
}

firstNum = 2;
secondNum = 4;

console.log(firstNum + ' is ' + percentOf(firstNum, secondNum) + '% ' +
 'of ' + secondNum + '.');

//=============================================================================

//PercentOf (b)

function percentOf1(firstNum1, secondNum1)
{
	console.log(firstNum1 + ' is ' + ((firstNum1 / secondNum1) * 100)
		 + '%' + ' of ' + secondNum1 + '.' );
}

percentOf1(2, 8);

//==============================================================================

//Write a function called areaOfCircle that will take one argument 
//and calculate the area of a circle based on that
//Round to two digits after decimal point only

//areaOfCircle (a)


function areaCircle(radius)
{
	
	return ((Math.PI * (radius * radius)).toFixed(2) + 'cm.');
}

radius = 20;

console.log('The area of the circle with radius ' + radius + ' is ' +
 areaCircle(radius));


//=====================================================================

//areaCircle (b)

function areaCircle1(radius1)
{

	console.log('The area of the circle with radius ' + 
		radius1 + ' is ' + ((Math.PI * (radius1 * radius1)).toFixed(2))
		+ 'cm.');
}

areaCircle1(5);

//4.

//Calculate what percentage of that area is of the squared result(#3)

function percentageOf(numberForOperations)
{
	
	//calculate the area
	area2 = ((Math.PI * (numberForOperations * numberForOperations)).toFixed(2));

	//calculate the number squared
	squared2 = numberForOperations * numberForOperations;

	//calculate the percentage of the ((area / squared result)/100.0);
	percentageOf2 = ((squared2 / area2) * 100).toFixed(2);

	console.log(' The squared result is ' + squared2 + ' and ' + percentageOf2 + 
		'% of the area ' + area2 + '.');


}
 percentageOf(20);

 //=================================================================================

//What number is bigger?

 function greaterThan(number3, number4)
 {

 	if (number3 > number4)
 	{
 		console.log(number3 + ' is greater than ' + number4 + '.');
 	}
 	else if (number3 == number4)
 	{
 		console.log(number3 + ' is equal to ' + number4 + '.');
 	}
 	else
 	{
 		console.log(number3 + ' is less than ' + number4 + '.');
 	}
}

 //test numbers

 greaterThan(4, 5);
 greaterThan(6, 4);
 greaterThan(4, 4);

//====================================================================================

//Pluralize 

function pluralize(num3, word3)
{
	if ((!(num3 == 1)) && (!(word3 == 'goose')) && (!(word3 == 'deer')))
	{
		console.log(num3 + ' ' + word3 + 's.');

	}

	else if ((!(num3 == 1)) && ((word3 == 'goose')))
	{
		console.log(num3 + ' ' + 'geese.');
	}

	else if ((!(num3 == 1)) && ((word3 == 'deer')))
	{
		console.log(num3 + ' ' + 'deer.');
	}

	else 
	{
		console.log(num3 + ' ' + word3 + '.');
	}
}

pluralize(5, 'cat');
pluralize(7, 'turtle');
pluralize(6, 'deer');
pluralize(13, 'goose');

//======================================================================================

//Even/Odd Counter in for loop from 0 to 20

for (m = 0; m < 21; m++)
{
	if ((m % 2) == 0)
	{
		console.log(m + ' is even.');
	}
	else 
	{
		console.log(m + ' is odd.');
	}
}


//======================================================================================

//Top Choice




