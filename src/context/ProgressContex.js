// ProgressContext.js
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProgressContext = createContext();

export const useProgressContext = () => {
  return useContext(ProgressContext);
};

export const ProgressProvider = ({ children }) => {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProgressCount = async (userId, chapterId) => {
    try {
     
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/progress`,
        {
          params: {
            userId,
            chapterId,
          },
        }
      );
      setError(null);
      setProgressData(response?.data?.data?.isCompleted)
    } catch (error) {
      console.error("Error fetching progress count:", error);
      setError("Failed to load progress count.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProgressCount();
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        loading,
        error,
        getProgressCount,
        progressData,
        setProgressData,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
