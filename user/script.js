function logIn()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
}

function register()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rPassword = document.getElementById("rpassword").value;

    if (password != rPassword)
    {
        var log = document.getElementById("log-info").innerHTML = "Password doesn't Match!";
    }
}