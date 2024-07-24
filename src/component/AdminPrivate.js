import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

import Spinner from './Spinner'
import { AuthContext } from './Context/UserContext';
function AdminPrivate() {

    const [ok, setOk] = useState(false);
    const {user}=useContext(AuthContext);
 
    const getUser = async () => {
        try {
          const userData = await axios.get(
            `${
              process.env.REACT_APP_API
            }/api/v1/user/get-user`,
            {
              params:{
                email:user?.email
              }
            }
          );
    
          console.log(userData);
          if (userData?.data?.data?.role === "admin") {
            setOk(true);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        if (user?.email) {
          getUser();
        }
      }, [user]);
   
    console.log("dffdfdf",ok)
    return ok ? <Outlet /> : <Spinner path="" />
}

export default AdminPrivate

