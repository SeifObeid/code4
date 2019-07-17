function pluck1(list , propertyName){
var sol = [];
for(var i in list){
        if(list[i][propertyName]){
            
            sol.push(list[i][propertyName]);
        }
    }

    return sol;
}
var list =  [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

console.log(pluck1(list , 'age'));

//*****************************************************************
function indexOf(list, value) {
return list.indexOf(value);
}
var num = [1, 2, 3];
console.log(indexOf(num,3));
//***************************************
function getFirstTwoLettersOfEachWord(list) {
	var list3 = [];
	for (var i  =0 ; i<list.length;i++){
		list3.push(list[i].substr(0,2))

	}
return list3;
}
var list2=  ['hello', 'goodbye', 'excellent'];
console.log(getFirstTwoLettersOfEachWord(list2));
//*************************************************
var str ="Hello Gharam";
function reverseString(str) {
var split = str.split("");
var reverse = split.reverse();
var join = reverse.join("");
return join;

}
console.log(reverseString(str));

//**********************************************
function contains(list, value) {
return list.includes(value)
}
var numbers = [1, 2, 3];

console.log(contains(numbers, 3));








