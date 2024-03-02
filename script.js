document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        const title = question.querySelector('.question-title');
        const answer = question.querySelector('.answer');

        title.addEventListener('click', function() {
            answer.classList.toggle('show');
        });
    });
});
  