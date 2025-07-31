let btn=document.getElementsByTagName("button");
btn[0].onclick=function checkVoter() {
  let age = Number(document.getElementById("age").value);
  let result;
  if (age >= 18) {
    result = "You are eligible to vote ";
  } 
  else {
    result = "You are NOT eligible to vote ";
  }
  // Display result
  document.getElementById("voterResult").innerText = result;
}
