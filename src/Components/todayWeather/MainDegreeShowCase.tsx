import { WeatherData } from "../../App";
import DegreeShowcase from "./DegreeShowcase";
import TodayHighlights from "./TodayHighlights";

interface IProps {
  data: WeatherData | null;
}

const MainDegreeShowCase = ({data}: IProps) => {
  return (
    <div className=" mt-3 ">
      <div className=" container grid grid-cols-12 gap-5">
        <DegreeShowcase data={data} />
        <TodayHighlights />
      </div>
    </div>
  );
};

export default MainDegreeShowCase;
