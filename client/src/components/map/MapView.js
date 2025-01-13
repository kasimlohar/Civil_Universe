import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapView = ({ businesses, center, zoom = 12 }) => {
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);
  const mapStyles = { height: '400px', width: '100%' };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={zoom}
        center={center}
      >
        {businesses.map(business => (
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
