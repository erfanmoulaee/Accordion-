const question = document.getElementsByClassName("question");
const btn = document.getElementsByClassName("question-btn");

for (var i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("active");
    btn.nextSibling.innerHtml = `<i class="far fa-minus-square"></i>`;
  });
}
