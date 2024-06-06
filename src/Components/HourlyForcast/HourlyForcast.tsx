
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
      <div className=" bg-custom-color/80 backdrop-blur-sm rounded-md p-5 space-y-3">
        <h1 className=" font-semibold uppercase text-xl text-white ">
          Hourly Forecast
        </h1>
        <div style={{ width: "100%", height: "40vh" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              // width={1050}
              // height={450}
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="1%" stopColor="orange" stopOpacity={0.8} />
                  <stop offset="45%" stopColor="green" stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tick={{ fill: "white" }}
                tickMargin={15}
                axisLine={{ stroke: "white", strokeWidth: 3 }}
              />
              <YAxis
                dataKey={"c"}
                stroke="white"
                tickMargin={20}
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
