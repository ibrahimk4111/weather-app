
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "12 PM",
    uv: 80,
    c: 1,
  },
  {
    name: "12 PM",
    uv: 90,
    c: 80,
  },
  {
    name: "12 PM",
    uv: 95,
    c: 65,
  },
  {
    name: "12 PM",
    uv: 60,
    c: 70,
  },
  {
    name: "12 PM",
    uv: 70,
    c: 82,
  },
  {
    name: "12 PM",
    uv: 90,
    c: 46,
  },
  {
    name: "12 PM",
    uv: 100,
    c: 10,
  },
];


const HourlyForcast = () => {
  return (
    <div className="container mt-5">
      <div >
        <h1 className=" font-semibold uppercase text-white mb-2 ">
          Hourly Forecast
        </h1>
        <div style={{ width: "100%", height: "30vh" }} className=" rounded-md bg-custom-color p-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              // width={1050}
              // height={450}
              data={data}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="orange" stopOpacity={0.8} />
                  <stop offset="45%" stopColor="yellow" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tick={{ fill: "white" }}
                tickMargin={5}
                axisLine={{ stroke: "white", strokeWidth: 3 }}
              />
              <YAxis
                dataKey={"c"}
                stroke="white"
                tickMargin={5}
                axisLine={{ stroke: "white", strokeWidth: 3 }}
              />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Tooltip
                formatter={(value) => [`${value}°C`, "Temperature measured"]}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="red"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HourlyForcast;
