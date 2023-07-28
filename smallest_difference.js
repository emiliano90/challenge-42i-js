const a = [1, 3, 15, 11, 2];
const b = [23, 127, 235, 19, 8];

console.log(smallestDifference(a, b)); 
console.log(smallestDifferenceV2(a, b));

function smallestDifference(a, b)
{
	let smallest = 0;
	let first = true;
	for (let i = 0; i < a.length; i++) 
	{
		for (let e = 0; e < b.length; e++)
		{
			let difference = Math.abs(a[i] - b[e]);
			if(difference < smallest || first)
			{
				smallest = difference;
				first = false;
			}
		} 
	} 
	return smallest;
}

//idem mas eficiente
function smallestDifferenceV2(a, b)
{
	
	//ordeno los arrays
	a.sort((a1, a2) => a1 - a2);
	b.sort((b1, b2) => b1 - b2);

	let i = 0, e = 0;

	let first = true;
	let smallest = 0;

	while (i < a.length && e < b.length)
	{
		let diff = Math.abs(a[i] - b[e]);
		if (diff < smallest || first)
		{
			smallest = diff;
			first = false;
		}
		//voy moviendo los valores mas chicos
		if (a[i] < b[e])
			i++;
		else
			e++;
	}

	return smallest;
}