import { NavLink } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';
import styles from './CityItem.module.css';

// 날짜 형식 정리 함수
const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity } = useCities();

  return (
    <li>
      <NavLink to={ `/app/cities/${id}?lat=${position.lat}&lng=${position.lng}` }
        // 선택된 도시 항목이면 styles['cityItem--active'] 추가하여 테두리 설정
        className={ `${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`}>
        {/* ↓ 윈도우즈는 국기 이모티콘이 지원되지 않음 */}
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{`(${formatDate(date)})`}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </NavLink>
    </li>
  );
}

export default CityItem;
