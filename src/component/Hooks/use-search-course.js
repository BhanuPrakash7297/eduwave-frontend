import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const useSearchCourses = (searchParams) => {
  const { title, categoryId, userId } = searchParams;

  // Ensure searchParams are stable using useMemo
  const params = useMemo(
    () => ({
      title,
      categoryId,
      userId,
    }),
    [title, categoryId, userId]
  );

  // State variables for data fetching
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/course/search`,
          { params }
        );
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [params]); // Only update useEffect when `params` change

  // Return data, loading state, and error state
  return { data, loading, error };
};

export default useSearchCourses;
