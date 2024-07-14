import { useContext } from "react";
import { AuthContext } from "./Context/UserContext";
import useDashboardCourses from "./Hooks/use-dashboard-courses";
import { UserDashboardCoursesList } from "./UserDashboardCoursesList";
import { useNavigate } from "react-router-dom";
import BannerCard from "./BannerCard";
import { InfoCard } from "./InforCard";
import { CheckCircle, Clock, InfoIcon } from "lucide-react";

export default function UserDashboard() {
  const { user } = useContext(AuthContext);
  const userId = user?.email;
  const Navigate=useNavigate();
 


  const { completedCourses, coursesInProgress } = useDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <BannerCard
          icon={InfoIcon}
          label="Welcome to the dashboard"
          description={`This is where you can see your progress 
            and continue your courses. This is a demonstration LMS and as such, all courses are free and Stripe is in test
             mode. To enroll in a course, enter dummy data in the Stripe form. Contact me from
             folio.kendev.co to obtain admin access`}
        />
     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={completedCourses.length}
          variant="success"
        />
        </div>
      </div>
      <UserDashboardCoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
