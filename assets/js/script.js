const quiz = new Quiz(sorular);
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
        ui.quizBox.classList.add("active");
        startTimer(10);
        this.classList.add("hide");
        ui.soruGoster(quiz.soruGetir());
});

ui.btnNext.addEventListener("click", function () {
    if(quiz.sorular.length > quiz.soruIndex + 1){
        quiz.soruIndex+=1;
        ui.soruGoster(quiz.soruGetir());
        ui.optionList.style.pointerEvents = "auto";
        ui.btnNext.classList.remove("show");
        ui.timer.innerHTML = `
        <div class="timer_text">Kalan Süre</div>
        <div class="time_second"></div>
        `;
        startTimer(10);
    }else{
    ui.scoreText.innerText = `Puanınız: ${quiz.score} / ${quiz.sorular.length}`;
    ui.quizBox.classList.remove("active");
    ui.scoreBox.classList.add("active");
    }
});
ui.btnReplay.addEventListener("click", function () {
    quiz.soruIndex = 0;
    quiz.score = 0;
    ui.btnNext.classList.remove("show");
    ui.scoreBox.classList.remove("active");
    ui.soruGoster(quiz.soruGetir());
    ui.btnNext.innerText = "Sonraki Soru";
    ui.optionList.style.pointerEvents = "auto";
    ui.quizBox.classList.add("active");
    ui.timer.innerHTML = `
    <div class="timer_text">Kalan Süre</div>
    <div class="time_second"></div>
    `;
    clearInterval(counter);
    startTimer(10);
});

ui.quizOver.addEventListener("click", function () {
    window.location.reload();
});

function optionSelected(answer) {
    clearInterval(counter);
    if(answer.querySelector("span b").innerText === quiz.soruGetir().dogruCevap){
        quiz.score+=1;
        answer.classList.add("correct");
        answer.querySelector(".icon").innerHTML = `${ui.correctIcon}`;
        answer.parentElement.style.pointerEvents = "none";
        ui.btnNext.classList.add("show");
    }else{
        answer.classList.add("incorrect");
        answer.querySelector(".icon").innerHTML = `${ui.incorrectIcon}`;
        answer.parentElement.style.pointerEvents = "none";
        ui.btnNext.classList.add("show");
    }
    if(quiz.sorular.length == quiz.soruIndex + 1){
        ui.btnNext.innerText = "Bitir";
    };
}
let counter;
function startTimer(time) {
    counter = setInterval(timer,1000);
    document.querySelector(".time_second").innerText = time
    function timer() {
        document.querySelector(".time_second").innerText = time;
        time--;
        if(time < 0){
            ui.timer.innerHTML = `<div class="timer_text">Süre Bitti</div>`;
            clearInterval(counter);
            ui.optionList.style.pointerEvents = "none";
            let cevap = quiz.soruGetir().dogruCevap
            for (let i = 0; i < ui.optionList.children.length; i++) {
                if(ui.optionList.children[i].querySelector("span b").innerText === cevap){
                    ui.optionList.children[i].classList.add("correct");
                    ui.optionList.children[i].querySelector(".icon").innerHTML = `${ui.correctIcon}`;
                }else {
                    ui.optionList.children[i].classList.add("incorrect");
                    ui.optionList.children[i].querySelector(".icon").innerHTML = `${ui.incorrectIcon}`;
                }
            }
            if(quiz.sorular.length == quiz.soruIndex + 1){
                ui.btnNext.innerText = "Bitir";
            };
            ui.btnNext.classList.add("show");
            
        }
    }
}