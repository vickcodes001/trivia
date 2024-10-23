// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    
    const option = document.querySelectorAll("#btn_container .answer_option")
    const option_incorrect = option[4]
    const btn_result = document.getElementById("feedback_btn")


    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener('click', function() {
           for (let j = 0; j < option.length; j++) {
               option[j].style.backgroundColor = "";
           }
           if (this === option_incorrect) {
                this.style.backgroundColor = 'green'
                btn_result.innerHTML = "Correct"
                btn_result.style.display = "block"
           }
           else {
                this.style.backgroundColor = 'red'
                btn_result.innerHTML = "Incorrect"
                btn_result.style.display = "block"
           }
        });
    }


    
    // check for the answer of the input field
    const answer_p = document.getElementById("check_answer_btn");
    
    document.querySelector('#check_btn_answer').addEventListener('click', function() {
        let input = document.querySelector('input');
           if (input.value === 'Switzerland') {
               input.parentElement.querySelector("#check_answer_btn").innerHTML = 'Correct!';
               answer_p.style.display = "block";
           }
           else if (input.value != 'Switzerland'){
               input.parentElement.querySelector("#check_answer_btn").innerHTML = 'Incorrect';
               answer_p.style.display = "block";
           }
           else  {
                input.innerHTML = 'blank';
           }
    });
});



// const questions = [
    // {
        // ""
    // }
// ]

