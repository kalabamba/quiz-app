function UI() {
    this.quizBox = document.querySelector(".quiz_box"),
    this.scoreBox = document.querySelector(".score_box"),
    this.scoreText = document.querySelector(".score_text"),
    this.optionList = document.querySelector(".option_list"),
    this.btnNext = document.querySelector(".btn_next"),
    this.btnStart= document.querySelector(".btn_start"),
    this.questionCounter = document.querySelector(".question_counter"),
    this.correctIcon = '<i class="fas fa-check"></i>',
    this.incorrectIcon = '<i class="fas fa-times"></i>',
    this.btnReplay = document.querySelector(".btn_replay"),
    this.quizOver = document.querySelector(".btn_quiz_over"),
    this.timer = document.querySelector(".timer")
}

UI.prototype.soruGoster= function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for (let option in soru.cevapSecenekleri) {
        options +=
        `<div class="option">
        <span><b>${option}</b>: ${soru.cevapSecenekleri[option]}</span>
        <div class="icon"></div>
        </div>`;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.optionList.innerHTML = options;

    const allOption = this.optionList.querySelectorAll(".option");
    for (let i = 0; i < allOption.length; i++) {
        allOption[i].setAttribute("onclick", "optionSelected(this)");
    }

    this.questionCounter.innerHTML = `${quiz.soruIndex + 1} / ${quiz.sorular.length}`;
}