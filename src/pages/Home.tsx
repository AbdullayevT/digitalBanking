import Container from "@/components/Home/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { faEthereum } from "@fortawesome/free-brands-svg-icons/faEthereum";
import { faBtc } from "@fortawesome/free-brands-svg-icons/faBtc";
import BaseLineChart from "@/components/Charts/BaseLineChart";
import { useAppSelector } from "@/hooks/hooks";

type Props = {};

export default function Home({}: Props) {
  const { areaData, marketData } = useAppSelector((state) => state.home);
  const {themeMode} = useAppSelector(state => state.main)
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="w-full">
          <Container title="Assets" showIcon={false} icon="" bgColor="" themeMode={themeMode}>
            <div className="flex flex-col gap-2">
              <div className="font-light text-sm">Your total balance</div>
              <div className="flex flex-row gap-2 items-center">
                <span className="font-bold text-lg">
                  $25,901.0.<span className="text-sm text-[#757575]">41</span>
                </span>
                <span className="bg-[#edffef] text-[#36b089] p-1 rounded-xl flex flex-row items-center gap-1">
                  <FontAwesomeIcon icon={faCaretUp} />
                  810%
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={400} key={Math.random()}>
              <AreaChart data={areaData}>
                <Tooltip wrapperStyle={{color: themeMode ? "black" : "black"}} />
                <XAxis dataKey="name" hide={true} />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4b94fe" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#cde1ff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Container>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <Container
              title="ETHUSDT"
              showIcon={true}
              icon={<FontAwesomeIcon icon={faEthereum} color="#b706d6" />}
              bgColor="bg-[#dff1ff]"
              themeMode={themeMode}
            >
              <div className="flex flex-row items-center">
                <div className="total-balance">$23,738</div>
                <BaseLineChart
                  height={100}
                  data={areaData}
                  xAxisDataKey="name"
                  hideXAxis={true}
                  dataKey="pv"
                  key={Math.random()}
                  strokeColor={themeMode ? "#8884d8" : "#e685ff"}
                  themeMode={themeMode}
                />
              </div>
              <div className="additional-line-content">
                <div className={`whitespace-nowrap pnl-daily ${!themeMode && "dark"}`}>
                  PNL Daily
                </div>
                <div className={`single-price-up ${!themeMode && "dark"} font-bold`}>+$189,91</div>
                <div className={`small-card price-small-card-container ${!themeMode && "dark"}`}>
                  +24.68%
                </div>
              </div>
            </Container>
          </div>
          <div className="w-full">
            <Container
              title="ETHUSDT"
              showIcon={true}
              icon={<FontAwesomeIcon icon={faEthereum} color="#b706d6" />}
              bgColor="bg-[#dff1ff]"
              themeMode={themeMode}
            >
              <div className="flex flex-row items-center">
                <div className="total-balance">$23,738</div>
                <BaseLineChart
                  height={100}
                  data={areaData}
                  xAxisDataKey="name"
                  hideXAxis={true}
                  key={Math.random()}
                  dataKey="pv"
                  strokeColor={themeMode ? "#8884d8" : "#f41c79"}
                  themeMode={themeMode}
                />
              </div>
              <div className="additional-line-content">
                <div className={`whitespace-nowrap pnl-daily ${!themeMode && "dark"}`}>
                  PNL Daily
                </div>
                <div className={`single-price-up ${!themeMode && "dark"} font-bold`}>+$189,91</div>
                <div className={`small-card price-small-card-container ${!themeMode && "dark"}`}>
                  +24.68%
                </div>
              </div>
            </Container>
          </div>
          <div className="w-full">
            <Container
              title="BTCUSDT"
              showIcon={true}
              icon={<FontAwesomeIcon icon={faBtc} color="#f99f01" />}
              bgColor="bg-[#fffce5]"
              themeMode={themeMode}
            >
              <div className="flex flex-row items-center">
                <div className="total-balance">$23,738</div>
                <BaseLineChart
                  height={100}
                  data={areaData}
                  xAxisDataKey="name"
                  hideXAxis={true}
                  key={Math.random()}
                  dataKey="pv"
                  strokeColor={themeMode ? "#8884d8" : "#fbaf29"}
                  themeMode={themeMode}
                />
              </div>
              <div className="additional-line-content">
                <div className={`whitespace-nowrap pnl-daily ${!themeMode && "dark"}`}>
                  PNL Daily
                </div>
                <div className={`single-price-down ${!themeMode && "dark"} font-bold`}>-$16.78</div>
                <div className={`small-card price-small-card-container ${!themeMode && "dark"}`}>
                  +14.67%
                </div>
              </div>
            </Container>
          </div>
          <div className="w-full">
            <Container
              title="ETHUSDT"
              showIcon={true}
              icon={<FontAwesomeIcon icon={faBtc} color="#f99f01" />}
              bgColor="bg-[#fffce5]"
              themeMode={themeMode}
            >
              <div className="flex flex-row items-center">
                <div className="total-balance">$23,738</div>
                <BaseLineChart
                  height={100}
                  data={areaData}
                  xAxisDataKey="name"
                  hideXAxis={true}
                  key={Math.random()}
                  dataKey="pv"
                  strokeColor={themeMode ? "#8884d8" : "#6588bc"}
                  themeMode={themeMode}
                />
              </div>
              <div className="additional-line-content">
                <div className={`whitespace-nowrap pnl-daily ${!themeMode && "dark"}`}>
                  PNL Daily
                </div>
                <div className={`single-price-up ${!themeMode && "dark"} font-bold`}>+$189,91</div>
                <div className={`small-card price-small-card-container ${!themeMode && "dark"}`}>
                  +24.68%
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className={`${themeMode ? "bg-white" : "bg-black text-white"} p-4 pt-6 rounded-md mt-4`}>
        <div className="grid grid-cols-2 items-center">
          <div className="font-bold">Markets</div>
          <div className="grid grid-cols-3">
            <div className="bg-[#f2f8ff] text-[#0261ff] market-button">All</div>
            <div className={`bg-[#f8f8f9] ${!themeMode && "text-white bg-[#757575]" } market-button`}>Meta</div>
            <div className={`bg-[#f8f8f9] ${!themeMode && "text-white bg-[#757575]" } market-button`}>Gaming</div>
          </div>
        </div>
        <div className="space-y-2">
          {marketData.map((item, i) => {
            return (
              <div key={i} className="grid grid-cols-3 mt-3 items-center">
                <div className="flex flex-row gap-4">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-[#757575] font-normal">
                    {item.description}
                  </div>
                </div>
                <div className="font-semibold">${item.currentPrice}</div>
                <div
                  className={`font-semibold w-fit py-1 px-2 gap-1 items-center flex rounded-lg price-container ${
                    item.differencePosition === "Up"
                      ? `price-up ${!themeMode && "dark"}`
                      : `price-down ${!themeMode && "dark"}`
                  } `}
                >
                  <div>{item.differencePosition === "Up" ? "+" : "-"}</div>
                  <div>{item.difference}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
