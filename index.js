let passwordId=document.getElementById("password").value;
window.addEventListener("load", () => {
  
  function validate() {
   if (passwordId>=3) {
        text = "Greater than 4";
    } else {
        text = "no";
    }
    document.getElementById("result").innerHTML = text;
}
  
});
