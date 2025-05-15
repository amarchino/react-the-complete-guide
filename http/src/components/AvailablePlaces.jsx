import Places from './Places.jsx';
import ErrorPage from './ErrorPage.jsx';

import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const { isFetching, error, fetchedData: availablePlaces, setFetchedData: setAvailablePlaces } = useFetch(fetchAvailablePlaces, []);

  // navigator.geolocation.getCurrentPosition(position => {
  //         const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
  //         setAvailablePlaces(sortedPlaces);
  //         setIsFetching(false);
  //       })

  if(error) {
    return <ErrorPage title="An error occurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText={"Fetching place data..."}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
