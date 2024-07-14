import { useState, useEffect } from "react";
import axios from "axios";

const useDashboardCourses = (userId) => {
  const [dashboardCourses, setDashboardCourses] = useState({
    completedCourses: [],
    coursesInProgress: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardCourses = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/course/dashboard-courses`,
          {
            params: { userId },
          }
        );
        setDashboardCourses({
          completedCourses: response?.data?.completedCourses || [],
          coursesInProgress: response?.data?.coursesInProgress || [],
        });

        console.log("dashboard courlsdjflkdsjl;fjdslfjdslf;", dashboardCourses);
      } catch (err) {
        console.error("Error fetching dashboard courses:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardCourses();
  }, [userId]);

  return { ...dashboardCourses, loading, error };
};

export default useDashboardCourses;
