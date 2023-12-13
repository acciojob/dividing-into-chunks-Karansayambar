const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let subarr = [], ans = [], tracker = 0;
	for(int i =0 ; i< arr.length; i++){
		if(tracker + arr[i] <= n){
			subarr.push(arr[i]);
			tracking += arr[i];
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