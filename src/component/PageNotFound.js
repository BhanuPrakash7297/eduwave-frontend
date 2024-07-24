import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to the home page after a short delay
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mt-[300px] flex justify-center items-center">
      <div className="">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
