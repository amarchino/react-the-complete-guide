import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './ErrorPage.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [ availablePlaces, setAvailablePlaces ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/places');
        if(!response.ok) {
          throw new Error('Failed to fetch places');
        }
        const resData = await response.json();
        setAvailablePlaces(resData.places);
      } catch(error) {
        setError({ message: error.message || 'Could not fetch places, please try again later.' });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

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
