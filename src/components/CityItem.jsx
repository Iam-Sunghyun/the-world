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
  const { cityName, emoji, date } = city;

  return (
    <li className={ styles.cityItem }>
      {/* ↓ 윈도우즈는 국기 이모티콘이 지원되지 않음 */}
      <span className={styles.emoji}>{emoji}</span> 
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{`(${formatDate(date)})`}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;