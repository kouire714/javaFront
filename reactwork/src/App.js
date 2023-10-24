// 받아오기
// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/home';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';
// 여러개인 경우 {}로 묶음
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Param1 from './component/Param1';
import Param2 from './component/Param2';

// javaScript 주석
// 컴포넌트(함수)의 첫글자는 대문자
function App() {
  // react는 return에서 부터 프로그램이 시작됨
  // jsx란 return명령 안의 html code를 말함
  return (
    // <div></div> jsx 영역(둘러싸는 태그)은 하나만 존재해야함
    // className = html의 class, 컴포넌트 이름과 동일하게 쓰되 class임으로 첫 글자를 소문자로 작성
    <div className="App">
      {/* jsx 주석 */}
      {/* BrowserRouter 링크 태그를 보여주는 작업 */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* path 들어오는 방식 element 들어오는곳 */}
          <Route path="/" element={<Home />} />
          <Route path="/abc" element={<Comp1 />} />
          <Route path="/comp2" element={<Comp2 />} />
          <Route path="/comp3" element={<Comp3 />} />
          <Route path="/param/:mid" element={<Param1 />} /> {/* /param/뒤에 변수(값)이 넘어올때 처리됨 */}
          <Route path="/param" element={<Param2 />} />    {/* /param 뒤에 QueryString(?변수=값&변수=값)으로 값이 전송될때 처리됨 */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// 내보내기
export default App;
