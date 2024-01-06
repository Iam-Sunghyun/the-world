import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CitiesProvider } from './contexts/CitiesContext';
import City from './components/City';
import CityList from './components/CityList';
import Countries from './components/CountriesList';
import Form from './components/Form';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          {/* path="요청 경로", element="컴포넌트가 반환하는 리액트 엘리먼트"   */}
          {/* 요청시 특정 path에 대응되는 컴포넌트가 화면에 렌더링되고 나머지는 무시된다*/}
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/app' element={<AppLayout />}>
            <Route index element={<Navigate replace={true} to='cities' />} />
            <Route path='cities' element={<CityList />} />
            <Route path='cities/:id' element={<City />} />
            <Route path='countries' element={<Countries />} />
            <Route path='form' element={<Form />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
