import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
    const auth = getAuth();
    
    const [verify, setVerify] = useState(false);

    const data = useSelector(state => (state.userInfo.value))

onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) {
    setVerify(true);
  } 
});

    return (
        <div>
            {
                verify ? <p>home</p> : <p>Please verify your email</p>
            }
        </div>
    );
};

export default Home;