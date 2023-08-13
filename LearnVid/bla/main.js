function run(arr1,arr2)
{
  if(arr1.length > 0)
  {
		var str = arr1.shift();
    arr2.push(arr2.find(function(item){return  item !=str ? "" : str }))
    console.log("arr1 : "+ arr1);
    console.log("arr2 : " + arr2);
    return run(arr1,arr2);
  }
  return;
  
}
var arrkk = [];
run(['a','b','c','a','b'],arrkk);
console.log(arrkk)

