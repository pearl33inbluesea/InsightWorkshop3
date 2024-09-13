const textElement = document.getElementById('text');
const inputText = document.getElementById('inputText');
const submitButton = document.getElementById('submitButton');
const storedTextsContainer = document.getElementById('stored-texts');

const colors = ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'white'];

let letters = [];

// 메인 텍스트 업데이트 함수
function updateText(newText) {
    textElement.textContent = '';
    letters = newText.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);
        return span;
    });
}

// 색상 변경 함수
function changeColors() {
    letters.forEach(span => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        span.style.color = color;
    });
    // 저장된 텍스트들의 색상도 변경
    document.querySelectorAll('.stored-text span').forEach(span => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        span.style.color = color;
    });
}

// 저장된 텍스트를 랜덤 위치에 추가하는 함수
function addStoredText(text) {
    const storedTextElement = document.createElement('div');
    storedTextElement.classList.add('stored-text', 'black-han-sans-regular');

    // 랜덤 위치 설정
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    storedTextElement.style.left = `${x}px`;
    storedTextElement.style.top = `${y}px`;

    // 텍스트 스팬 생성
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        storedTextElement.appendChild(span);
    });

    document.body.appendChild(storedTextElement);
}

// 초기 텍스트 설정
updateText('글자가 깜빡거려요!');

// 확인 버튼 클릭 시 이벤트 처리
submitButton.addEventListener('click', () => {
    const newText = inputText.value.trim();
    if (newText) {
        addStoredText(newText);
        inputText.value = '';
        updateText(''); // 메인 텍스트 초기화
    }
});

// 색상 변경 반복
setInterval(changeColors, 500);
