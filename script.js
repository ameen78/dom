function validation(){
    // First name
    var fn = document.getElementById("nam").Value;
    if(fn==""){
        document.getElementById("jam").innerHTML="First name cannot be empty"
        return false
    }
}