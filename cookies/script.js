/*------Cookie functions--------*/
mycookie={}
function addtocookie()
{
    mycookie["_firstname"]=document.getElementById("firstname").value;
    mycookie["_lastname"]=document.getElementById("lastname").value;
    mycookie["_email"]=document.getElementById("email").value;
    mycookie["_phone"]=document.getElementById("phone").value.toString();
    console.log(mycookie);
    document.cookie="";
    var expiry=" expires=Thu, 10 Feb 2022 12:00:00 UTC";
    var cookiestring="";
    for(var key in mycookie)
    {
        cookiestring=key+"="+mycookie[key]+';'+expiry+";"+" path=/;";
        document.cookie=cookiestring;
        console.log(cookiestring);
    }
    
}

function removethecookie()
{
    mycookie["_firstname"]=document.getElementById("firstname").value;
    mycookie["_lastname"]=document.getElementById("lastname").value;
    mycookie["_email"]=document.getElementById("email").value;
    mycookie["_phone"]=document.getElementById("phone").value.toString();
    console.log(mycookie);
    document.cookie="";
    var expiry=" expires=Wed, 29 Dec 2021 12:00:00 UTC";
    var cookiestring="";
    for(var key in mycookie)
    {
        cookiestring=key+"="+mycookie[key]+';'+expiry+";"+" path=/;";
        document.cookie=cookiestring;
        //console.log(cookiestring);
    }
}


function getCookie()
{
    var i
    var message = ""
    var list = document.cookie.split(';')
    for(i = 0; i < list.length; i++)
    {
        message += list[i].split('=')[0] + ": " + list[i].split('=')[1] + "\n"
    }
    alert(message)
}



/*------Local Storage functions--------*/

function addtols()
{
    _lsfname=document.getElementById("firstname").value;
    _lslname=document.getElementById("lastname").value;
    _lsemail=document.getElementById("email").value;
    _lsphone=document.getElementById("phone").value.toString();
    localStorage.setItem('firstname', _lsfname)
    localStorage.setItem('lastname', _lslname)
    localStorage.setItem('email', _lsemail)
    localStorage.setItem('phone', _lsphone)
}

function removethels(){
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
}

/*Session Storage functions*/

function addtoss(){
  
    _ssfname=document.getElementById("firstname").value;
    _sslname=document.getElementById("lastname").value;
    _ssemail=document.getElementById("email").value;
    _ssphone=document.getElementById("phone").value.toString();
    sessionStorage.setItem('firstname', _ssfname)
    sessionStorage.setItem('lastname', _sslname)
    sessionStorage.setItem('email', _ssemail)
    sessionStorage.setItem('phone', _ssphone)
}


function removethess(){
    sessionStorage.removeItem('firstname')
    sessionStorage.removeItem('lastname')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('phone')
}