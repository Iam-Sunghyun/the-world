import { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';
import { useGeolocation } from '../hooks/useGeolocaion';
import { useUrlPosition } from '../hooks/useURLPosition';
import Button from './Button';
import styles from './Map.module.css';

function Map() {
  // const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([37, 127]);
  const { isLoading, error, position, getPosition } = useGeolocation();
  const { lat: mapLat, lng: mapLng } = useUrlPosition();

  // 지도 클릭하여 쿼리스트링에 좌표가 업데이트되면
  // 해당 좌표로 mapPosition 업데이트
  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  // 내 위치 가져오기 버튼으로(getPosition 함수 호출) position에 내 위치가 업데이트 되면
  // positioin(현재 위치 값)으로 mapPosition(지도 위치) 업데이트
  useEffect(() => {
    if (position) setMapPosition(position);
  }, [position]);

  return (
    <div className={styles.mapContainer}>
      <Button type='position' onClick={ getPosition }>
        {isLoading ? '가져오는 중...' : '내 위치 가져오기'}
      </Button>
      <MapContainer className={styles.map} center={mapPosition} zoom={6} scrollWheelZoom={true}>
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
        <ChangeMarker position={mapPosition} />
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
