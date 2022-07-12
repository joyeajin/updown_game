//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 유저번호보다 작을 시 DOWN!
//랜덤번호 > 유저번호 UP!
//Reset 버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 끝남(더 이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.

let computerNum = 0;
let resultArea = document.querySelector('#result-area');
let chancesArea = document.querySelector('#chances-area');
let userInput = document.querySelector('#user-input');
let playBtn = document.querySelector('#play-btn');
let resetBtn = document.querySelector('#reset-btn');
let chances = 5;
let gameover = false;
let history=[];

playBtn.addEventListener('click',play);
resetBtn.addEventListener('click',reset);
userInput.addEventListener('focus',function(){
    userInput.value=''
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log('정답', computerNum)
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent = '1~100 사이의 값을 입력하세요.'
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = '중복된 숫자'
        return;
    }

    chances -- ;
    chancesArea.textContent = `남은 기회 : ${chances}회`

    if(userValue < computerNum){
        resultArea.textContent = 'up!'
    }else if(userValue > computerNum){
        resultArea.textContent = 'down!'
    }else{
        resultArea.textContent = '정답!'
        gameover = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances<1){
        gameover = true;
    }
    if(gameover == true){
        playBtn.disabled = true;
    }

}

function reset(){
    //유저 인풋창 정리
    userInput.value = ''
    //새로운 번호 생성
    pickRandomNum()
    resultArea.textContent = '결과가 나옴'
}
pickRandomNum();