 
function nonEmptyLogin(){
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");

    if(email.value.trim()=="")
    {
        alert("Email cannot be empty");
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("Password cannot be empty");
        return false;
    }
    else if(!checkEmailFormat(email))
    {
        return false;
    }
    else if(!checkPasswordLength(password))
    {
        return false;
    }
    return true;
}

function checkEmailFormat(email){
    //let email = document.getElementById("exampleInputEmail1");
    let regex = /^([A-Za-z0-9\.\*\&\%\#\ \_\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3}?)$/;

    if(!regex.test(email.value.trim()))
    {
        alert("Email not as per recommended formats");
        return false;
    }

    return true;
}

function checkPasswordLength(password){
 if((password.value.length >= 8) && (password.value.length <= 16))  
 {
     return true
 }
 else
 {
     alert("Password does not match the expectations");
 }
 return false;
}

function checkPhoneFormat(PhoneNumber)
{
    let regexp = /^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(!regexp.test(PhoneNumber.value))
    {
        alert("Phone number length not valid");
        return false;
    }

return true;
}

function checkPasswordFormat(password)
{
    let passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*_|><])(?=.*[A-Z]).{8,16}$/;
   
    if(passreg.test(password.value.trim()))
    {
        return true;
    }
    else{
        return false;
    }
}

function ShowPwdStrength()
{
    let passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*_|><])(?=.*[A-Z]).{8,16}$/;
    let weakReg = /^(?=.*[a-z]).{1,4}$/;
    let slightlystrong = /^(?=.*[a-z])(?=.*[A-Z]).{4,12}$/;
    let stronger = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    let meter = document.getElementById("password-strength-meter");
    let para = document.getElementById("password-strength-text");
    let password = document.getElementById("inputPassword4");
    
    meter.removeAttribute("hidden","true");
    if(passreg.test(password.value.trim()))
    {
        meter.setAttribute("value","10");
        console.log("Strongest");
        para.innerText = "Strongest! You did it";
       
        return true;
    }
    else if(stronger.test(password.value.trim()))
    {
        console.log("Stronger");
        meter.setAttribute("value","8");
        para.innerText = "Stronger; You can do better";
        return false;
    }
    else if(slightlystrong.test(password.value.trim()))
    {
        meter.setAttribute("value","6");
        console.log("Slightly better");
        para.innerText = "Slighly better; You can do much better";
        return false;
    }
    else if(weakReg.test(password.value.trim()))
    {
        meter.setAttribute("value","5");
        console.log("Weak");
        para.innerText = "Weak";
        return false;
    }



}


function nonEmptySignup(){
    email = document.getElementById("inputEmail4");
    password = document.getElementById("inputPassword4");
    inputAddress = document.getElementById("inputAddress");
    inputAddress2 = document.getElementById("inputAddress2");
    inputCity = document.getElementById("inputCity");
    PhoneNumber = document.getElementById("PhoneNumber");
   
    if(email.value==""||password.value=="" || PhoneNumber.value=="" || inputAddress.value==""||inputAddress2.value==""||inputCity=="")
    {
        alert("Fields cannot be empty");
        return false;
    }
    else if(!checkEmailFormat(email))
    {
        return false;
    }
    else if(!checkPasswordFormat(password))
    {
        return false;
    }
    else if(!checkPhoneFormat(PhoneNumber))
    {
        return false;
    }   

    return true;
}


function nonEmptyAddBook(){
    
    title = document.getElementById('Title');
    author = document.getElementById('Author');
    genre = document.getElementById('Genre');
    image = document.getElementById('Image');

    if(title.value==""||author.value=="" || genre.value=="" || image.value=="")
    {
        alert("Fields cannot be empty");
        return false;
    }
    return true;

}

function nonEmptyAddAuthor()
{
  nam = document.getElementById('Name');
  genre = document.getElementById('Genre');
  image = document.getElementById('Image');
  desc = document.getElementById('Desc');

  if(nam.value==""||genre.value=="" || image.value=="" || desc.value=="")
  {
      alert("Fields cannot be empty");
      return false;
  }

  return true;

}
