/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getBicycles } from "../services/getBicycles";

const ReservationInfoContext = createContext();

const ReservationInfoProvider = ({ children }) => {
  const [bicycles, setBicycles] = useState([]);
  const [selectedBicycle, setSelectedBicycle] = useState();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchingData = getBicycles();
      setBicycles(fetchingData);
    }, 1500);
  }, []);

  return (
    <ReservationInfoContext.Provider
      value={{
        bicycles,
        selectedBicycle,
        setSelectedBicycle,
        reservations,
        setReservations,
      }}
    >
      {children}
    </ReservationInfoContext.Provider>
  );
};

export { ReservationInfoProvider };

export default ReservationInfoContext;
