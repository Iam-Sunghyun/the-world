import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Products';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        {/* path="요청 경로", element="컴포넌트가 반환하는 리액트 엘리먼트"   */}
        {/* 요청시 특정 path에 대응되는 컴포넌트가 화면에 렌더링되고 나머지는 무시된다*/}
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Product />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
