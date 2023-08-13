function run(arr1,arr2)
{
  if(arr1.length > 0)
  {
		var str = arr1.pop();
    arr2.push(arr1.find(function(item){return  item !=str ? str : "" }))
    delete arr1[length-1];
    console.log("arr1 : "+ arr1);
    console.log("arr2 : " + arr2);
    return run(arr1,arr2);
  }
  return;
  
}
var arrkk = [];
run(['a','b','c','a','b'],arrkk);
console.log(arrkk)

