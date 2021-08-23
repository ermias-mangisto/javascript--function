var firstName=document.getElementById("firstName");
 var lastName=document.getElementById("lastName");
 var birth=document.getElementById("birth");
 var id=document.getElementById("iden");
 var local=document.getElementById("city")
 var btn=document.getElementById("btn");
 var table=document.getElementById("table");
var patients=[{firstname:"avi",
    lastname:"gmang",
    dateofbirth:"fgds",
    Id:1 ,
    City:"kjhg",}
    ,{firstname:"gfds",
    lastname:"gfds",
    dateofbirth:"fgds",
    Id:2 ,
    City:"kjhg",},
    {firstname:"gfds",
    lastname:"gfds",
    dateofbirth:"fgds",
    Id:3 ,
    City:"kjhg",}]
btn.addEventListener("click",function(){
    
    var obj={
        firstname:firstName.value,
        lastname:lastName.value,
        dateofbirth:birth.value,
        Id:Number(id.value) ,
        City:local.value,
        dateOfCheck:new Date(),
        hourOfCheck:new Date().getHours(),
      }
      var flag=0;
   for(var i=0;i<patients.length;i++){
        if(patients[i].Id == Number(obj.Id)){
         flag=1
         break;
        }}
         if(flag==0){
             patients.push(obj)
         }else{
             console.log("sorry");
         }
    
   console.log(patients)
   table.innerHTML+=`<tr><td>${obj.firstname}</td>
   <td>${obj.lastname}</td><td>${obj.dateofbirth}</td>
   <td>${obj.Id}</td><td>${obj.city}</td><td>${obj.dateOfCheck}</td>
   <td>${obj.hourOfCheck}</td></tr>`
   
})

firstName.oninput=function(){
   firstName.value=firstName.value.toUpperCase()
}
lastName.oninput=function(){
   lastName.value=lastName.value.toUpperCase()
}
city.oninput=function(){
   city.value=city.value.toUpperCase()
}
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var ser=document.getElementById("ser");
var print=document.getElementById("print");
btn2.addEventListener("click",function(){
    var flag=0;
    for(var i=0;i<patients.length;i++){
         if(patients[i].firstname == ser.value){
          flag=i+1
          break;
         }}
          if(flag==0){
             print.innerHTML=`doesnt exist`
            }
            else{
              print.innerHTML+=`${patients[flag-1].firstname} ${patients[flag-1].lastname}`
              
          }
        })
btn3.addEventListener("click",function(){
    var flag=0;
        for(var i=0;i<patients.length;i++){
          if(patients[i].Id == ser.value){
           flag=i+1
           break;
          }}
           if(flag==0){
              print.innerHTML=`doesnt exist`
             }
             else{
               print.innerHTML+=`${patients[flag-1].firstname} ${patients[flag-1].lastname}`
               
           }})


