import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { formatPrice } from "../../constants/formate";
import { AuthContext } from "../Context/UserContext";
import { useParams } from "react-router-dom";
export const CourseEnrollButton = ({ price, courseId }) => {
  console.log(courseId);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/purchase/checkout/multiple-courses`,
        {
          userId: user?.email,
          courseIds: [courseId],
        }
      );
      console.log(response);
      window.location.assign(response.data.url);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      Enroll for {formatPrice(price)}
    </button>
  );
};
