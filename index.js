var password = "12345";

function passcheck() {

if(document.petElementById('projectheroshima').value != password)  {
alert('Wrong Password, Try Again.');   
return false;
}

if(document.petElementById('projectheroshima').value == password)  {
alert('Correct Password. Click OK to enter webpage');   
}
}