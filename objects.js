var myString="Hello";
var myObj ={};
console.log(myObj);
myObj.prop="Hello";
console.log(myObj);
myObj.prop2=123;
console.log("The 2nd property is"+myObj.prop2);
console.log("The 1st property is"+myObj.prop);

var myobj2={
    "prop":"hello2",
    "prop2":12345,
    "objprop":{
        "innerprop":"printing inner object property"
    }
};
console.log("The 2nd property is"+myobj2.prop2);
console.log("The 1st property is"+myobj2.prop);
console.log("Acessing a property that does not exist gives "+myobj2.prop99);
console.log("Acessing an object property "+myobj2.objprop.innerprop);
console.log("Acessing an object property "+myobj2[objprop.innerprop]);
