import { useMemo, useEffect, useState, createContext, useContext } from 'react';

const CitiesContext = createContext();
const FAKE_SERVER_BASE_URL = 'http://localhost:8000';

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  // 도시 리스트 fetch
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
  // const value = useMemo(() => {
  //   return {
  //     cities,
  //     isLoading
  //   }
  // }, [cities, isLoading])

  // 특정 도시 데이터 fetch 함수
  async function getCity(id) {
    setIsLoading(true);
    try {
      const fetched = await fetch(`${FAKE_SERVER_BASE_URL}/cities/${id}`);
      const data = await fetched.json();
      setCurrentCity(data);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('PostContext was used outside of the PostProvider');
  return context;
}

export { CitiesProvider, useCities };
