import {
  Area,
  AreaChart,
  DotProps,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { FullWeatherData, hourlyStatementsData } from "../Redux/ApiCall";

// const data = [
//   {
//     name: "12 PM",
//     uv: 80,
//     c: 1,
//   },
//   {
//     name: "12 PM",
//     uv: 90,
//     c: 80,
//   },
//   {
//     name: "12 PM",
//     uv: 95,
//     c: 65,
//   },
//   {
//     name: "12 PM",
//     uv: 60,
//     c: 70,
//   },
//   {
//     name: "12 PM",
//     uv: 70,
//     c: 82,
//   },
//   {
//     name: "12 PM",
//     uv: 90,
//     c: 46,
//   },
//   {
//     name: "12 PM",
//     uv: 100,
//     c: 10,
//   },
// ];

interface IProps {
  data: FullWeatherData | null;
}

interface CustomDotProps extends DotProps {
  payload: {
    temp: number;
  };
}

const CustomDot: React.FC<CustomDotProps> = (props) => {
  const { cx, cy, payload } = props;

  if (cx === undefined || cy === undefined || payload === undefined) return null;

  return (
    <text x={cx} y={cy} dy={-10} fill="white" textAnchor="middle">
      {Math.ceil(payload.temp)}°
    </text>
  );
};

const HourlyForcast = ({ data }: IProps) => {
  const couter = 5;
  let hourlyStatementsData: hourlyStatementsData[] = [];
  if (!data) {
    console.log("data didn't fetched yet. Wait.............");
  } else {
    hourlyStatementsData = data.hourlyStatementsData;
  }

  couter == 5
    ? (hourlyStatementsData = hourlyStatementsData.slice(0, 8))
    : hourlyStatementsData.slice(9, 16);

  return (
    <div className="container mt-5">
      <div>
        <h1 className=" font-semibold uppercase text-white mb-2 ">
          Hourly Forecast
        </h1>
        <div
          style={{ width: "100%", height: "30vh" }}
          className=" rounded-md bg-custom-color"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              // width={1050}
              // height={450}
              data={hourlyStatementsData}
              margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="1%" stopColor="red" stopOpacity={0.7} />
                  <stop offset="65%" stopColor="orange" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="splitedTimeFromHourly"
                tick={{ fill: "white" }}
                tickMargin={5}
                axisLine={{ stroke: "white", strokeWidth: 1 }}
                fontSize={12}
              />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Tooltip
                formatter={(value) => [`${value}°C`, "Temperature measured"]}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="temp"
                fillOpacity={1}
                fill="url(#colorUv)"
                dot={<CustomDot />}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HourlyForcast;
