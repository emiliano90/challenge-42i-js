const coins = [5, 7, 1, 1, 2, 3, 22];

console.log(smallestNotChange(coins));

function smallestNotChange(coins) 
{
	coins.sort((a,b) => a - b);
	
	let sum = 0;
	for (let i = 0; i < coins.lenght; i++) 
	{
		if (coins[i] > sum + 1)
			return sum + 1;
		
		sum += coins[i];
	}
	
	return currentValue + 1;
}