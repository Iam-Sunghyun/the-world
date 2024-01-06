import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';
import Button from './Button';
import styles from './City.module.css';
import Spinner from './Spinner';

// 날짜 형식 정리 함수
const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCity, currentCity, isLoading } = useCities();
  const { emoji, cityName, notes, date } = currentCity;

  // 현재 URL의 id로 도시 데이터 가져오기
  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading === true) {
    return <Spinner></Spinner>;
  }

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${cityName}`} target='_blank' rel='noreferrer'>
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <Button type={'back'} onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </div>
    </div>
  );
}

export default City;
