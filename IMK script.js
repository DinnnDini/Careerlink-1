const container = document.getElementById("question-container");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const questionsPerPage = 10;

function showQuestions() {

    container.innerHTML = "";

    let end = Math.min(currentIndex + questionsPerPage, questions.length);

    for (let i = currentIndex; i < end; i++) {

        container.innerHTML += `
            <div class="question-box">

                <p>${i + 1}. ${questions[i].question}</p>

                <label>
                    <input type="radio" name="q${i}" value="yes">
                    Ya
                </label>

                <label>
                    <input type="radio" name="q${i}" value="no">
                    Tidak
                </label>

            </div>
        `;
    }

}

showQuestions();

nextBtn.addEventListener("click", () => {

    currentIndex += questionsPerPage;

    if(currentIndex < questions.length){

        showQuestions();

    }else{

        alert("Quiz selesai!");

    }

});