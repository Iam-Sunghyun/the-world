// MDN GeoLocationAPI https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API
import { useState } from 'react';

// GeoLocation API를 통해 위치 정보 가져오는 커스텀 훅
export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState([37, 127]);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) return setError('Your browser does not support geolocation');

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        alert('실패');
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
