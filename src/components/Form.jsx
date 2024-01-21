import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUrlPosition } from '../hooks/useURLPosition';
import Button from './Button';
import styles from './Form.module.css';
import Spinner from './Spinner';

// 국기 이모티콘 코드로 변환하는 함수. 윈도우는 국기 이모티콘 대신 국가 도메인명으로 나옴
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

// 역 지오코딩 api URL
const REVERSE_GEOCODING_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
  const navigate = useNavigate();
  // const [country, setCountry] = useState('');
  const { lat: mapLat, lng: mapLng } = useUrlPosition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState();
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState(new Date());
  const [countryCode, setContryCode] = useState('KR');
  const [notes, setNotes] = useState('');

  // URL의 쿼리스트링(위치 좌표)으로 지역 정보를 가져오는 역 지오코딩
  useEffect(() => {
    async function fetchCityData() {
      setIsLoadingGeocoding(true);
      try {
        const res = await fetch(`${REVERSE_GEOCODING_URL}?latitude=${mapLat}&longitude=${mapLng}`);
        const data = await res.json();

        // 바다 같은 곳 클릭시 에러 처리
        if (!data.countryCode) {
          throw new Error('잘못된 위치입니다.');
        }
        setCityName(data.city);
        setContryCode(data.countryCode);
        setGeocodingError('');
      } catch (e) {
        setGeocodingError(e.message);
      }
      setIsLoadingGeocoding(false);
    }
    fetchCityData();
  }, [mapLat, mapLng]);

  // Effect 데이터 로딩 표시
  if (isLoadingGeocoding) {
    return <Spinner></Spinner>;
  }

  // 도시가 아닌 곳 클릭시 에러메시지
  if (geocodingError) {
    return <span>{geocodingError}</span>;
  }

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input id='cityName' onChange={(e) => setCityName(e.target.value)} value={cityName} />
        <span className={styles.flag}>{countryCode}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        <input id='date' onChange={(e) => setDate(e.target.value)} value={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor='notes'>Notes about your trip to {cityName}</label>
        <textarea id='notes' onChange={(e) => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>추가</Button>
        <Button
          type='back'
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          이전
        </Button>
      </div>
    </form>
  );
}

export default Form;
