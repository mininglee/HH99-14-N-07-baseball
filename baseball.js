// 예시
// 컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!
// 1번째 시도 : 123
// 0B0S
// 2번째 시도 : 238
// 1B1S
// 3번째 시도 : 280
// 3S
// 3번만에 맞히셨습니다.
// 게임을 종료합니다.


// node.js readline library
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// -- node.js readline library


const comNum = autoNumberCreate(3);   // 컴퓨터가 3자리 숫자를 생성하는 함수 호출
// 컴퓨터가 n자리 숫자를 생성하는 함수
function autoNumberCreate(n) {
    let arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let pickedNumbers = [];
    let result = '';
    for (let i = 0; i < n; i++) {
        let randomIndex = Math.floor(Math.random() * arrNumbers.length);
        pickedNumbers.push(arrNumbers[randomIndex]);
        arrNumbers.splice(randomIndex, 1);
    }
    result = (pickedNumbers.join(''))
    return result;
}


let count = 1;   // 도전횟수 카운트 변수 선언 및 초기값 할당
console.log(`컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요! (${comNum})`)
rl.setPrompt(`${count}번째 시도 : `);
rl.prompt();
rl.on(`line`, (input) => {
    if (input === comNum) {                      // 입력받은 값이 비교할 값과 같은 경우
        console.log(compare(comNum, input));
        rl.setPrompt(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
        rl.prompt();
        rl.close();
    } else {                                                 // 입력받은 값이 비교할 값과 다른 경우
        count++;
        console.log(compare(comNum, input));
        rl.setPrompt(`${count}번째 시도 : `);
        rl.prompt();
    }
});


// // 컴퓨터숫자와 입력받은 숫자 비교하는 함수
function compare(comNum, inputNum) {
    // 컴퓨터가 만든 숫자 배열로 전환
    let arrComNum = String(comNum).split('');
    // 입력받은 숫자 배열로 전환
    let arrInputNum = String(inputNum).split('');
    // S와 B를 카운트할 변수 선언 및 초기화
    let countS = 0;
    let countB = 0;
    // 컴퓨터숫자 배열길이만큼 반복하면서
    // 컴퓨터숫자 배열[0]자리 숫자와 입력숫자 배열[0]자리 숫자 비교
    // 같으면 s, 틀리면 b를 stringSB
    for (let i = 0; i < arrComNum.length; i++) {
        (arrComNum[i] === arrInputNum[i]) ? countS++ : countB++;
    }
    // 출력 조건문
    if (countS === 0) {            // S가 없으면 B만 출력
        return `${countB}B`;
    } else if (countB === 0) {    // B가 없으면 S만 출력
        return `${countS}S`;
    } else {                            // 외 모두 출력
        return `${countB}B${countS}S`;
    }
}