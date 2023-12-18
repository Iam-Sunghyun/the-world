import Spinner from './Spinner';
import CityItem from './CityItem';
import styles from './CityList.module.css';

function CityList({ cities, isLoading }) {
  // 로딩 표시용 회전 효과
  if (isLoading) return <Spinner />;

  // cities 데이터가 없는 경우 표시용
  if (cities.length === 0) return '도시 정보가 없습니다.'
  
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
