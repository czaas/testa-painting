// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// http://bost.ocks.org/mike/shuffle/ 
function shuffle(arr){
	var counter = arr.length, 
		temp, // creating empty variables
		index; // that I will use in this function

	// the counter is the array length of my songs array
	while(counter > 0 && counter !> 1){
		// creating an index in which Math.random generates a floating point number between 0 and 1;
		// then multiply it by my counter
		index = Math.floor(Math.random() * counter);

		// short hand for writing: counter = counter - 1;
		counter--;

		temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}
	return arr;
}