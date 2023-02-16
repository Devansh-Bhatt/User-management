function getmessage()
{
   const message = document.getElementById("message").value;
   return message;
}

function addmessagediv()
{   
    let messagediv = document.createElement("div");
    messagediv.id = "messagediv";
    messagediv.innerText = getmessage();
    document.getElementById("message").value = "";
    // const message_body = document.getElementById("message-body");
    document.body.appendChild(messagediv);
}

console.log("working");
