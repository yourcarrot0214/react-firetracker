import { Icon } from "@iconify/react";
import LocationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="locatino-marker" onClick={onClick}>
      <Icon icon={LocationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
