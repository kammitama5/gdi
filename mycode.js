console.log("hello world");

var potato = "hello ";
var head = "Krystal"
console.log(potato + head);

//=====================================================================

function fullName(first, last)
{
	console.log('Hello ' + first + last + '.');

}

fullName('Waynie ', 'Robinson'); //outputs Hello Waynie Robinson
fullName('Michelle ', "Watabe"); //outputs Hello Michelle Watabe


function full_Name(first, last)
{
	var full_name = first + last
	return full_name;
}

console.log(full_Name('Monica ', 'Oppenheimer '));
console.log(full_Name('Drew ', 'Wilmington '));

//==========================================================================

//if and then simple

var temperature = 35;



if (temperature <= 20)
{
	console.log('Brr it is cold!');
}
else if (temperature <= 35 )
{
	console.log('Not too bad today!');
}
else if (temperature <= 50)
{
	console.log('Dang it is not in here!');
}
else
{
	console.log('You just broke the thermometer!');
}

//============================================================================

// if and then with logical operaters

var temperature1 = 55;

if ((temperature1 > 20) && (temperature1 < 35))
{
	console.log('The perfect beach day!');
}
else
{
	console.log('Just stay home. Not worth it to go out today!');
}

//==========================================================================

// nine times table

for (i = 1; i <= 12; i++)
{
	console.log(i + ' x times 9 =' + i * 9);
}

//==========================================================================

//all times table (nested for-loop) from 1 to 12

for (a = 1; a <= 12; a++)
{
	for (b = 1; b <= 12; b++)
	{
		console.log(a + ' x ' + b + ' = ' + a * b);
	}
}


//==========================================================================

//Arrays

var favouriteFoods = ['ice-cream', 'yams', 'mochi', 'taro', 'tea', 'cabbage'];

console.log(favouriteFoods); // print array
console.log(favouriteFoods.sort()); //sort array alpha
console.log(favouriteFoods.reverse()); //reverse array alpha

console.log(favouriteFoods.length); //length of array

var firstFood = favouriteFoods[0]; //first element


console.log(firstFood); //print first element
console.log(favouriteFoods.pop()); //print last element using Pop

//=========================================================================

//for loop through your list of items in array

var favouriteFoods = ['ice-cream', 'yams', 'mochi', 'taro', 'tea', 'cabbage'];

for (x = 0; x <  favouriteFoods.length; x ++ )
{
	console.log(favouriteFoods[x]);
}


//=========================================================================


// End of in-class exercises

