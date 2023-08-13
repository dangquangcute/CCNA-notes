
var arr2 = ['a','c']
var str = 'f'
arr2.push(arr2.find(item => {
    console.log('item : ' + item);
    console.log('str : ' + str);
    if(!(str == item)) {
        return str
    
    } }))
console.log(arr2);