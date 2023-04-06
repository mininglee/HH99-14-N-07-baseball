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
