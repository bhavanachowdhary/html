function createCookies()
{
    var phone = document.getElementById("phone").value
    var email = document.getElementById("email").value
    if((phone.trim() != "")  && (email.trim() != ""))
    {
        document.cookie = "Phone=" + phone + ";expires=Sun, 30 Jan 2022 00:00:00 UTC;"
        document.cookie = "email=" + email + ";expires=Sun, 30 Jan 2022 00:00:00 UTC;"
        localStorage.setItem('Phone',phone)
        localStorage.setItem('email', email)
        window.location.reload()
    }
    else
    {
        alert("Form Incomplete")
    }
}