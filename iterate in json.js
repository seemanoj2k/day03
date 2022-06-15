var obj=[{"name":"ravi","age":"13","rollno":"12"},
         {"name":"vamsi","age":"13","rollno":"13"}];  
         
   //for loop 
   for(var i=0;i<obj.length;i++){
   console.log(obj[i].name+" "+obj[i].age+" "+obj[i].rollno);
   }
   
   //for in loop 
   for(var key in obj){
   console.log(obj[key].name+" "+obj[key].age+" "+obj[key].rollno);
   } 
   
   //for of loop 
   for(var key of obj){
   console.log(key.name+" "+key.age+" "+key.rollno);
   } 
   
   //forEach loop 
   obj.forEach(element => {
   console.log(element.name+" "+element.age+" "+element.rollno)
   }); 