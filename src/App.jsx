import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const FAKE_SERVER_BASE_URL = 'http://localhost:8000';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fake json 데이터 fetch
  useEffect(() => {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const fetched = await fetch(`${FAKE_SERVER_BASE_URL}/cities`);
        const data = await fetched.json();
        setCities(data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    }
    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path="요청 경로", element="컴포넌트가 반환하는 리액트 엘리먼트"   */}
          {/* 요청시 특정 path에 대응되는 컴포넌트가 화면에 렌더링되고 나머지는 무시된다*/}
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/app' element={<AppLayout />}>
            <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path='cities/:id' element={<City />} />
            <Route path='countries' element={<Countries cities={cities} isLoading={isLoading} />} />
            <Route path='form' element={<Form />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
