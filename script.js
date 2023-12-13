// const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
	let subarr = [], ans = [], tracker = 0;
	if(arr.length === 0) return [];
	for(let i = 0 ; i < arr.length; i++){
		if(tracker + arr[i] <= n){
			subarr.push(arr[i]);
			tracker += arr[i];
		}else{
			ans.push(subarr);
			subarr = [arr[i]];
			tracker = arr[i];
		}
	}

	ans.push(subarr);
	return ans;
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));