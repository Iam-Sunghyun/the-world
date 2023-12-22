// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import styles from './Form.module.css';

// 국기 이모티콘 코드로 변환하는 함수. 윈도우는 국기 이모티콘 대신 국가 도메인명으로 나옴
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();

  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input id='cityName' onChange={(e) => setCityName(e.target.value)} value={cityName} />
        {/* <span className={styles.flag}>{emoji}</span> */}
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
