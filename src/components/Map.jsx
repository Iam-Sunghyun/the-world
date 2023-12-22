import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const { id } = useParams();

  // console.log(searchParams);
  return (
    <div className={styles.map} onClick={() => navigate('form')}>
      Position: {lat}, {lng}. {id}
    </div>
  );
}

export default Map;
