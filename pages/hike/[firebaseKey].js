/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleHike } from '../../api/hikesData';
import HikeCard from '../../components/HikeCard';
// import { useAuth } from '../../utils/context/authContext';

export default function IndHikePage() {
  const [hikeDetails, setHikeDetails] = useState();
  const router = useRouter();
  const { firebaseKey } = router.query;
  // const { user } = useAuth();

  useEffect(() => {
    getSingleHike(firebaseKey).then(setHikeDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="hike-card">
        <HikeCard
          hikeObj={hikeDetails}
        />
      </div>
    </>
  );
}
