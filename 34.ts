//Scopes
var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  //12
console.log(Numbers.sval)   //static variable  //10
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val)  //13