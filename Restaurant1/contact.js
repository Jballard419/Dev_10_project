document.addEventListener('DOMContentLoaded',function(){

  // document.querySelector('select[name="contact"]').onchange=checkSelectHandler;
  document.querySelector('form[name="myForm"]').onchange=checkNameHandler; // onchange to wait until user is done with text based inputs

  //add format error messages 
  document.querySelector('input[name="email"]').onchange=checkFormatHandler;
  document.querySelector('input[name="phone"]').onchange=checkFormatHandler;



},false);




function checkNameHandler(event) {
  if(document.forms["myForm"].checkValidity()){
     if($("input:checkbox:checked").length!=0) {
       setTimeout(()=>{alert("Form info complete")},0);
       //Set timeout so message appears after a checkmark/radio is selected
     };
    // event.target.setAttribute("style", "border:2px  darkred solid");
  }

}

/* name:checkFormatHandler(event)
* purpose: display message if user input incorrect format

*/
function checkFormatHandler(event) {
  if(!event.target.checkValidity()){
    event.target.classList.add("is-invalid");
  }else {
      event.target.classList.remove("is-invalid");
  }

}
// conlose.log(document.form["myForm"]);
