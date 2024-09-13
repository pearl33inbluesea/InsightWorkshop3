const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].style.transform = 'translateY(-100%)'; // 현재 슬라이드를 위로 밀어냄
    slides[currentSlide].classList.remove('active'); // 현재 슬라이드에서 active 클래스 제거

    currentSlide = (currentSlide + 1) % slides.length; // 다음 슬라이드 인덱스 계산

    slides[currentSlide].style.transform = 'translateY(0)'; // 다음 슬라이드를 제자리로 옮김
    slides[currentSlide].classList.add('active'); // 다음 슬라이드에 active 클래스 추가
}

// 초기 슬라이드 위치 세팅
slides.forEach((slide, index) => {
    if (index !== 0) {
        slide.style.transform = 'translateY(100%)'; // 초기 상태에서 화면 아래로 배치
    }
});

// 클릭 시 슬라이드 변경
slides.forEach((slide) => {
    slide.addEventListener('click', showNextSlide);
});
