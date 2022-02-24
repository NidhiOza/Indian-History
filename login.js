var login_username="nidhi@proj.ca";
var login_password="123";
var startTime;

function authenticate_login()
{
  var v1, v2;
  v1 = document.getElementById("user").value;
  //v1 = document.form1.firstname.value;
  v2 = document.getElementById("pwd").value;
	if ((v1 == login_username) &&
	    (v2 == login_password))
	{
	  alert('Welcome to our website');
	  parent.frames.Menu_Frame.location.href ="Menu.htm";
	  parent.frames.Content_Frame.location.href ="Content.htm";
	 
	}
	else
	{
	  alert('Invalid User or Password Login (use admin and 12345)');
	  document.getElementById("pwd").value="";
	  document.getElementById("pwd").focus();
	  parent.frames.Menu_Frame.location.href ="index.htm";
	}
}


function authenticate_logout()
{
  alert('Thank you!');
  document.getElementById("user").value="";
  document.getElementById("pwd").value="";
  document.getElementById("user").focus();
  parent.frames.Menu_Frame.location.href ="MenuT.htm";
  parent.frames.Content_Frame.location.href ="Content.htm";
}
function setCookie(cname, cvalue, exdays) 
{
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) 
{
	let name = cname + "=";
	let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++)
		{
			let c = ca[i];
			while (c.charAt(0) == ' ') 
			{
				c = c.substring(1);
			}

      if (c.indexOf(name) == 0)
		  {
			return c.substring(name.length, c.length);
		  }
	}

    return "";

}

function runTime() {
	startTime = Date.now();
}

function storeCookie() {
	setCookie("firstName", window.frames['Content_Frame'].document.getElementById("firstName").value,8);
	setCookie("lastName", window.frames['Content_Frame'].document.getElementById("lastName").value,8);
	setCookie("address", window.frames['Content_Frame'].document.getElementById("address").value,8);
	setCookie("phoneNumber", window.frames['Content_Frame'].document.getElementById("phoneNumber").value,8);
	setCookie("email",window.frames['Content_Frame'].document.getElementById("email").value,8);
	
	setCookie("time", (Date.now() - startTime)/1000, 8);
}

function showCookie(){
window.frames['Content_Frame'].document.getElementById("firstName").innerHTML=getCookie("firstName");
window.frames['Content_Frame'].document.getElementById("lastName").innerHTML=getCookie("lastName");
window.frames['Content_Frame'].document.getElementById("address").innerHTML=getCookie("address");
window.frames['Content_Frame'].document.getElementById("phoneNumber").innerHTML=getCookie("phoneNumber");
window.frames['Content_Frame'].document.getElementById("email").innerHTML=getCookie("email");
window.frames['Content_Frame'].document.getElementById("time").innerHTML=getCookie("time");
}
function validateForm() {
		let fname = document.forms["myForm"]["firstName"].value;
		if (fname == "") {
		alert(" First Name must be filled out");
		return false;
		}
		else if(!(/^[a-zA-Z]+$/.test(fname))) { alert("Please only enter alpha characters"); return false; }
  
		let lname = document.forms["myForm"]["lastName"].value;
		if (lname == "") {
		alert(" Last Name must be filled out");
		return false;
}	
		else if(!(/^[a-zA-Z]+$/.test(lname))) { alert("Please only enter alpha characters"); return false; }
	let address = document.forms["myForm"]["address"].value;
		if (address == "") {
		alert(" address must be filled out");
		return false;
}	
	let number = document.forms["myForm"]["phoneNumber"].value;
		if (number.length < 10) {
		alert(" Enter 10 digit");
		return false;
}	
<!--else if(!(/^[789][0-9]{9}$/.test(number))) { alert("Please enter 10 digit"); return false; }-->

	let eid = document.forms["myForm"]["email"].value;
		if (eid == "") {
		alert(" Enter email id");
		return false;
}	

else if(!(/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(eid))) { alert("Please enter valid format like abc12@gmail.com"); return false; }
let password = document.forms["myForm"]["password"].value;
		if (password == "") {
		alert(" Enter the password");
		return false;
}	
else if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-za-Z0-9!@#$%^&*]{8,16}$/.test(password))) { alert("Please enter password in required format (special character,one lowercase,one upper case,1 digit and no less than 8 character)"); return false; }
	}