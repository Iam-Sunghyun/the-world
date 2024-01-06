import { useCities } from '../contexts/CitiesContext';
import styles from './CountriesList.module.css';
import CountryItem from './CountryItem';
import Spinner from './Spinner';

function CountriesList() {
  const { cities, isLoading } = useCities();

  // 로딩 표시용 회전 효과
  if (isLoading) return <Spinner />;

  // cities 데이터가 없는 경우 표시용
  if (cities.length === 0) return '국가 정보가 없습니다.';

  // cities props에서 중복되지 않는 국가 리스트 생성
  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [
        ...acc,
        {
          country: city.country,
          emoji: city.emoji,
          id: city.id,
          position: {
            lat: city.position.lat,
            lng: city.position.lng,
          },
        },
      ];
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
