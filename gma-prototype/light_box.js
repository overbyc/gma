// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function action_show() {
document.getElementById('action_box').style.display = "block";
}
function evidence_show() {
document.getElementById('evidence_box').style.display = "block";
}
function reference_show() {
document.getElementById('reference_box').style.display = "block";
}
function information_show() {
document.getElementById('information_box').style.display = "block";
}
function variant_show() {
    document.getElementById('variant_box').style.display = "block";
}
function setHeight() {
    parent.document.getElementById('reference_iframe').style.height = document['body'].offsetHeight + 'px';
}
//Function to Hide Popup
function action_hide(){
document.getElementById('action_box').style.display = "none";
}
function evidence_hide(){
document.getElementById('evidence_box').style.display = "none";
}
function reference_hide(){
document.getElementById('reference_box').style.display = "none";
}
function information_hide(){
document.getElementById('information_box').style.display = "none";
}
function variant_hide(){
    document.getElementById('variant_box').style.display = "none";
}