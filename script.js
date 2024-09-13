// document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-container img');
    const images2 = document.querySelectorAll('.image-container2 img');
    let currentIndex = 0;
    let currentIndex2 = 0;

    images[currentIndex].classList.add('fade-in-slow');
    images[currentIndex].style.display = 'block'; 
    images[currentIndex].addEventListener('click', showNextImage);

    function showNextImage() {
        images[currentIndex].classList.remove('fade-in-slow', 'fade-in', 'slide-up');
        images[currentIndex].style.display = 'none'; 
        currentIndex++;

        if (currentIndex < images.length) {
            if (currentIndex === 1) {
                images[currentIndex].classList.add('fade-in');  
            } else {
                images[currentIndex].classList.add('slide-up');  
            }
            images[currentIndex].style.display = 'block';  
            images[currentIndex].addEventListener('click', showNextImage);
        } else {
            document.querySelector('.image-container').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
        }
    }

    function showResult() {
        document.getElementById('quiz-container').style.display = 'none';
        document.querySelector('.image-container2').style.display = 'flex';  
        images2[currentIndex2].classList.add('fade-in');
        images2[currentIndex2].style.display = 'block';  
        images2[currentIndex2].addEventListener('click', showNextImage2);
    }

    function showNextImage2() {
        images2[currentIndex2].classList.remove('fade-in', 'slide-up');
        images2[currentIndex2].style.display = 'none';  
        currentIndex2++;

        if (currentIndex2 < images2.length) {
            images2[currentIndex2].classList.add('fade-in');  
            images2[currentIndex2].style.display = 'block';
            images2[currentIndex2].addEventListener('click', showNextImage2);
        } else {
            document.querySelector('.image-container2').style.display = 'none';
            showIntro();
        }
    }

    function showIntro() {
        document.getElementById('intro-container').classList.add('fade-in');
        document.getElementById('intro-container').style.display = 'block';
    }

    const questions = [
        "일과 중에 한번이라도 아무 의욕없이 축 늘어질 때가 있습니까?",
        "사무실의 서랍이나 집안 내에 당분이 많은 과자를 상비해두는 편입니까?",
        "종종 이유 없이 불안하고 공격적이 됩니까?",
        "물 대신 청량음료를 마시고 싶은 경우가 많습니까?",
        "아이스크림이나 초콜릿을 먹고 있는 사람이 부러울 때가 있습니까?"
    ];
    let currentQuestionIndex = 0;
    let score = 0;

    function startTest() {
        document.getElementById('intro-container').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        document.getElementById('question').innerText = questions[currentQuestionIndex];
    }

    // document.querySelector('.test-buttons').addEventListener('click', function(event) {
    //     if (event.target.tagName === 'BUTTON') {
    //         const isYes = event.target.innerText === '그렇다';
    //         answerQuestion(isYes);
    //     }
    // });

    function answerQuestion(answer) {
        console.log('score', score)
        if (answer) score++; 
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResultButtonPage(); // 질문이 끝나면 결과 보기 버튼 페이지로 이동
        }
    }

    function showResultButtonPage() {
        document.getElementById('test-container').style.display = 'none';
        document.getElementById('result-button-container').style.display = 'block'; // 결과 보기 버튼 페이지 표시
    }

    function showFinalResult() {
        document.getElementById('result-button-container').style.display = 'none';
        document.getElementById('final-result').style.display = 'block';
        document.getElementById('final-message').innerHTML = `
            체크한 항목 수: <span class="emphasis-blue">${score}</span>개<br>
            당신은 <span class="emphasis-red">설탕 중독 위험군</span>입니다.
        `;
    }

    document.querySelector('#quiz-container button').addEventListener('click', showResult);
    document.querySelector('.intro-button').addEventListener('click', startTest);
// });
