import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapView = ({ businesses, center = { lat: 20.5937, lng: 78.9629 }, zoom = 12 }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const mapStyles = { height: '400px', width: '100%' };

  // Add your Google Maps API key to .env file
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div className="text-red-500">Google Maps API key is missing</div>;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={zoom}
        center={center}
      >
        {businesses?.map(business => (
          <Marker
            key={business.id}
            position={business.location}
            onClick={() => setSelectedBusiness(business)}
          />
        ))}

        {selectedBusiness && (
          <InfoWindow
            position={selectedBusiness.location}
            onCloseClick={() => setSelectedBusiness(null)}
          >
            <div>
              <h3 className="font-semibold">{selectedBusiness.name}</h3>
              <p className="text-sm">{selectedBusiness.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
