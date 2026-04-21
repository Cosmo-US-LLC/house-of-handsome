import { useState, useEffect } from "react";

function useGeolocation() {
  const [state, setState] = useState({ coords: null, loading: true, error: null });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({ coords: null, loading: false, error: "Geolocation not supported" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          coords: { lat: position.coords.latitude, lng: position.coords.longitude },
          loading: false,
          error: null,
        });
      },
      (err) => {
        setState({ coords: null, loading: false, error: err.message });
      },
      { timeout: 10000 }
    );
  }, []);

  return state;
}

export default useGeolocation;
