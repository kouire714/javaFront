// 받아오기
// import logo from './logo.svg';
import './App.css';

// javaScript 주석
// 컴포넌트(함수)의 첫글자는 대문자
function App() {
  // react는 return에서 부터 프로그램이 시작됨
  // jsx란 return명령 안의 html code를 말함
  return (
    // <div></div> jsx 영역의 시작
    // className = html의 class
    <div className="App">
      {/* jsx 주석 */}
      <div className='title'>React</div>
    </div>
  );
}

// 내보내기
export default App;
