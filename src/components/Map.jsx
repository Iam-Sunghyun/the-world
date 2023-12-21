import { useParams, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css'

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const { id } = useParams();

  // console.log(searchParams);
  return (
    <div className={styles.map}>
      Position: { lat }, { lng }. { id }
      <button onClick={() => setSearchParams({ lat: 10, lng: 15})} >test</button>
    </div> 
  )
}

export default Map;