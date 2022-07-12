//랜덤번호지정(1~100) -//
//인풋창에 값 입력하고 고고 버튼 누르면 결과 창에 업다운 알려줌-//
//기회는 7번이고 한번 게임 돌릴때마다 기회 한번씩 사라짐-//
//기회 7번 다 쓰면 고고 버튼 비활성화-//
//입력했던 값 또 입력하거나 1~100 외의 값 입력하면 결과창에 메세지 띄우고 기회 안사라짐-//
//리셋버튼 누르면 랜덤번호 다시 지정됨-//
//중간에 정답 맞추면 고고 버튼 비활성화-//
//인풋창 누르면 값 사라지게 (사용자편의)//

let randomNum = 0;
let resultArea = document.querySelector('.result-area');
let chancesArea = document.querySelector('.chances-area');
let inputArea = document.querySelector('.input-area');
let goBtn = document.querySelector('.go-btn');
let resetBtn = document.querySelector('.reset-btn');
let chances = 7;
let gameover=false;
let history=[];

goBtn.addEventListener('click',play);
resetBtn.addEventListener('click',reset);
inputArea.addEventListener('focus',function(){
    inputArea.value = ''
})

function computerNum(){
    randomNum = Math.floor(Math.random()*100)+1;
    console.log('정답',randomNum)
}

function play(){
    inputValue = inputArea.value;
    
    if(inputValue<1 || inputValue>100){
        resultArea.textContent = '1~100까지의 값 입력바람';
        return;
    }

    if(history.includes(inputValue)){
        resultArea.textContent = '중복값';
        return;
    }

    history.push(inputValue);

    chances--;
    chancesArea.textContent = `남은기회 : ${chances}회`

    

    if(inputValue<randomNum){
        resultArea.textContent = 'up';
    }else if(inputValue>randomNum){
        resultArea.textContent = 'down';
    }else{
        resultArea.textContent = '정답';
        gameover=true;
    }
    if(chances<1){
        gameover=true;
    }
    if(gameover == true){
        goBtn.disabled = true;
    }

    
}

function reset(){
    computerNum();
    inputArea.value = ''
    resultArea.textContent = '결과!';
}


computerNum();