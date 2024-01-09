import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';
import styles from './Map.module.css';

function Map() {
  // const navigate = useNavigate();
  const { cities, currentCity } = useCities();

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={[currentCity.position?.lat || 37, currentCity.position?.lng || 127]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {/* 지도 마커 */}
        {cities.map(({ id, position, cityName, emoji, notes }) => (
          <Marker key={id} position={[position.lat, position.lng]}>
            <Popup>
              <span>{emoji}</span>
              {cityName}
            </Popup>
          </Marker>
        ))}
        <ChangeMarker
          position={[currentCity.position?.lat || 37, currentCity.position?.lng || 127]}
        />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

// 도시 항목 클릭시 위치 이동 커스텀훅
function ChangeMarker({ position }) {
  const map = useMap(); // leaflet Map 객체 반환
  map.setView(position); // 지도 위치 설정
  return null;
}

// Map 객체에 이벤트 핸들러 등록을 위한 커스텀훅
function DetectClick() {
  const navigate = useNavigate();

  // Map 객체에 이벤트 핸들러 등록
  useMapEvents({
    click: (e) => {
      // form으로 이동하면서 이벤트 객체(LeafletEventHandlerFnMap)의 클릭 위치 값을 쿼리스트링으로 전달 
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
