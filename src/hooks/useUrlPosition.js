import { useSearchParams } from "react-router-dom";

// URL 쿼리스트링에서 위치 정보 가져오는 커스텀 훅
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return { lat, lng };
}