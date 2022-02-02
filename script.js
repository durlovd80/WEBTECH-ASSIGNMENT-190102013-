const calculate = () => {

    // Getting input from user into height variable.
    let chemistry = document.querySelector("#chemistry").value;
    let assamese = document.querySelector("#assamese").value;
    let maths = document.querySelector("#maths").value;
    let phy = document.querySelector("#phy").value;
    let grades = "";

    // Input is string so typecasting is necessary. */
    let totalgrades =
        parseFloat(chemistry) +
        parseFloat(assamese) +
        parseFloat(maths) +
        parseFloat(phy);

    // Checking the condition for the providing the 
    // grade to student based on percentage
    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 90) {
        grades = "A";
    } else if (percentage <= 89 && percentage >= 75) {
        grades = "B";
    } else if (percentage <= 74 && percentage >= 65) {
        grades = "C";
    } else if (percentage <= 64 && percentage >= 55) {
        grades = "D";
    } else if (percentage <= 54 && percentage >= 40) {
        grades = "E";
    } else {
        grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (chemistry == "" || assamese == ""
        || maths == "" || phy == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {

        // Checking the condition for the fail and pass
        if (percentage > 100) {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` You are out of your mind `;
        } else {

            if (percentage >= 39.5) {
                document.querySelector(
                    "#showdata"
                ).innerHTML =
                    ` Out of 400 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Pass. `;
            } else {
                document.querySelector(
                    "#showdata"
                ).innerHTML =
                    ` Out of 400 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Fail. `;
            }
        }
    }
};