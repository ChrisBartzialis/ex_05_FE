'use strict';
// validation
function validateForm(event){
    const fullname = document.getElementById('fullname').value.trim();
    const email =document.getElementById('email').value.trim();
    const checkboxes = document.querySelectorAll('input[name="interests"]:checked');

    const errorPanel = document.getElementById('errorPanel');
    const errorList = document.getElementById('errorList');

    errorList.innerHTML= '';
    let hasError = false;

    // empty name field check & greek char check
    const greekPattern = /[α-ωΑ-Ωάέήίόύώϊϋΐΰ]/ // <-  used AI for this

    if(fullname === "") {
        const li = document.createElement('li');
        li.textContent = "Παρακαλώ εισάγετε Ονοματεπώνυμο";
        errorList.appendChild(li);
        hasError = true }
            else if(greekPattern.test(fullname)){
                const li = document.createElement('li');
                li.textContent = "Παρακαλώ συμπληρώστε το Ονοματεπώνυμο με λατινικούς χαρακτήρες";
                errorList.appendChild(li);
                hasError = true;
            }
   

    // email ".gr" format check
    if(email ==="" || !email.endsWith(".gr")){
        const li = document.createElement('li');
        li.textContent = "Παρακαλώ εισάγετε διεύθυνση email με κατάληξη \".gr\"";
        errorList.appendChild(li);
        hasError = true;
    }

    // checkbox selection validation
    if(checkboxes.length === 0){
        const li = document.createElement('li');
        li.textContent = "Παρακαλώ επιλέξτε τουλάχιστον μια επιλογή από Τομέα Ενδιαφέροντος";
        errorList.appendChild(li);
        hasError = true;
    }

    // error check
    if(hasError){
        return false;
    } else{
        return true;}
}        


// clearing error messages
function clearErrors(){
    document.getElementById('errorList').innerHTML = "";
}

// data.html 
function loadResults(){
    const outputDiv = document.getElementById('output');

    if (!outputDiv) return; 

    const params = new URLSearchParams(window.location.search); //get data from URL

    const name = params.get('fullname');
    const region = params.get('region');
    const email = params.get('email');

    const interests = params.getAll('interests'); //getAll bc multiple may be selected


    let htmlContent = "";
    htmlContent = htmlContent + "<p>-" + name + "</p>";
    htmlContent = htmlContent + "<p>-" + region + "</p>";
    htmlContent = htmlContent + "<p>-" + email + "</p>";
    htmlContent = htmlContent + "<p>-" + interests.join(' , ') + "</p>";

    outputDiv.innerHTML = htmlContent;
}
