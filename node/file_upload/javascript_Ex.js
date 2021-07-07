// Javascript의 함수는 일급 객체이다.

// 1-1. 무명의 리터럴로 표현이 가능하다.
// 1-2. 변수나 데이터 구조안에 담을 수 있다.
var increase = function(num){
    return num + 1;
}

var decrease = function(num){
    return num - 1 ;    
}

var obj = {
    increase : increase,
    decrease : decrease
}

// 2. 함수의 파라미터로 전달할 수 있다.
function cal(func, num){
    return func(num);
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));

// 3. 반환값(return value)으로 사용할 수 있다.
function cal(mode){
    var funcs = {
        'plus' : function(left, right){
            return left + right
        },
        'minus' : function(left, right){
            return left - right
        }
    }
    return funcs[mode]
}

console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1));