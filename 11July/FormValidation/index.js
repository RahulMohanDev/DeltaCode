const errorHolder = document.querySelector("#errors-holder");
const resultHolder = document.querySelector("#result-holder");
const button = document.querySelector("button");
let age = 0;


function ageChange(e){
       resultHolder.innerText=null;
       age = e.target.value;   
       if(Number.parseInt(age)<5) {
              errorHolder.innerText = "You need to be atleast 5 years old to participate";
              button.setAttribute("disabled",true);
       } else {
              errorHolder.innerText = null;
              button.removeAttribute("disabled")
       }
}

function handleSubmit(e){
       errorHolder.innerText = null;
       e.preventDefault();
       age = Number.parseInt(document.querySelector("#q_age").value);
       console.log(age,"age");
       const hasPhone = document.querySelector("#q_owns_phone").checked;
       console.dir(hasPhone);
       if(age==0) {
         errorHolder.innerText = "Please choose age";  
         return;   
       }

       if(age<13 && hasPhone) {
              resultHolder.innerText="You are too young to have a phone"
              return;
       }
       if(age<13 && !hasPhone){
              resultHolder.innerText="You will get a phone soon";
              return;
       }
       if(age>13 && hasPhone) {
              resultHolder.innerText = "Use your phone in moderation";
              return;
       }
       if(age>13 && !hasPhone) {
              resultHolder.innerText = "You should get a phone";
              return;
       }
}