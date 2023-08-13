function run(arr1)
{
	var arr2 =[];
  if(arr1.length > 0)
  {
		var str = arr1.pop();
    arr2.push(arr1.find(function(item){item ==str}))
    arr1.pop();
    return run(arr1);
  }
  return arr2;
  
}

var arr2 = run(['a','b','c','a','b']);
console.log(arr2)

