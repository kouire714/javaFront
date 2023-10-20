// test9.js
// 문자함수 연습
'use strict';

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg';
let test2 = '   ABC BCABC   GHI JKLAB........  ABC......... OPQ'

// length :  길이 
// substring() : 특정위치의 문자열 추출
// indexOf() : 문자열 검색(인덱스값 반환, 없으면 -1 반환)
// includes() : 문자열 검색(true/false반환)
// concat() : 문자열 결합
// slice() : 지정된 인덱스 위치부터 문자열 가져오기
// trim() : 문자열의 앞뒤 공백 절삭
// demo.innerHTML = text1;
// demo.innerHTML = text1.length;

let str = "1234567890123456789<br/>";
str += text1.substring(5);

// str += text

demo.innerHTML = str;