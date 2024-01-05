import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

type Props = {
  data: any;
  height: number;
  xAxisDataKey: string;
  hideXAxis: boolean;
  dataKey: string;
  strokeColor: string;
  themeMode: boolean;
};

export default function BaseLineChart({
  data,
  height,
  xAxisDataKey,
  hideXAxis,
  dataKey,
  strokeColor,
  themeMode,
}: Props) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <XAxis dataKey={xAxisDataKey} hide={hideXAxis} />
        <Tooltip wrapperStyle={{ color: themeMode ? "black" : "black" }} />
        <Line type="monotone" dataKey={dataKey} stroke={strokeColor} />
      </LineChart>
    </ResponsiveContainer>
  );
}
