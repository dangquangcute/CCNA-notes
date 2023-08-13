function run(arr1,arr2)
{
  if(arr1.length > 0)
  {
		var str = arr1.shift();
    if(arr2.length>0)
    {
        arr2.array.forEach(element => {
            if(element != str)
            {
                arr2.push(str)
            }
        });
    }
    else{
        arr2.push(str)
    }
    console.log("arr1 : "+ arr1);
    console.log("arr2 : " + arr2);
    return run(arr1,arr2);
  }
  return;
  
}
var arrkk = [];
run(['a','b','c','a','b'],arrkk);
console.log(arrkk)

