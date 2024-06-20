import DegreeShowcase from "./DegreeShowcase";
import TodayHighlights from "./TodayHighlights";


const MainDegreeShowCase:React.FC = () => {
  return (
    <div className=" mt-3 ">
      <div className=" container grid grid-cols-12 gap-5">
        <DegreeShowcase />
        <TodayHighlights />
      </div>
    </div>
  );
};

export default MainDegreeShowCase;
