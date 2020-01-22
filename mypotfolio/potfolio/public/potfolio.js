const validate = (event) => {
    // name
    const nameInput = document.querySelector(".name");
    const reName = /^[A-Za-z\s]+$/;

    if (!reName.test(nameInput.value)) {
        document.querySelector("#nameSpan").innerHTML = "Name is Required";
        nameInput.style.border = "1px solid red";

    } else {
        document.querySelector("#nameSpan").innerHTML = "";
        nameInput.style.border = "1px solid green";

    }

    // email
    const emailInput = document.getElementById("email");
    if (emailInput.value == '') {
        document.getElementById("emailSpan").innerHTML = "Email is Required";
        emailInput.style.border = "1px solid red";

    } else {
        document.getElementById("emailSpan").innerHTML = "";
        emailInput.style.border = "1px solid green";
    }

    // subject
    const subject = document.getElementById("subject");
    const reSubject = /^[A-Za-z\s]+$/;
    if (!reSubject.test(subject.value)) {
        document.getElementById("subId").innerHTML = "Subject Required";
        subject.style.border = "1px solid red";;
    } else {
        document.getElementById("subId").innerHTML = "";
        subject.style.border = "1px solid green";
    }
    return false;

}