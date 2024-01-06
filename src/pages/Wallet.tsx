import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { useAppSelector } from "@/hooks/hooks";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Divider, Dropdown, Tooltip } from "antd";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons/faCircleDown";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons/faMoneyBillTransfer";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons/faFileInvoiceDollar";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons/faMoneyCheckDollar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import CreditCardMaster from "@/components/Wallet/CreditCardMaster";
import { isMobile } from "@/utils/devices";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Wallet({}: Props) {
  const { themeMode } = useAppSelector((state) => state.main);
  const dataForDiagram = [
    {
      name: "1",
      uv: 0,
    },
    {
      name: "2",
      uv: 2,
    },
    {
      name: "3",
      uv: 4,
    },
    {
      name: "4",
      uv: 2,
    },
    {
      name: "5",
      uv: 7,
    },
    {
      name: "6",
      uv: 6,
    },
    {
      name: "7",
      uv: 14,
    },
    {
      name: "8",
      uv: 11,
    },
    {
      name: "9",
      uv: 14,
    },
    {
      name: "10",
      uv: 15,
    },
    {
      name: "11",
      uv: 22,
    },
  ];

  const dataForBarDiagram = [
    {
      name: "0",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "100",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "600",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "700",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "800",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "900",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div className={`grid grid-cols-3 ${isMobile() && "grid-cols-1"} gap-6`}>
        <div
          className={`${
            themeMode ? "bg-white" : "bg-black"
          } col-span-1 py-4 pl-4 rounded-xl w-full`}
        >
          <div className="text-[#8f8f8f] text-base">Total balance</div>
          <div className="flex flex-row flex-wrap gap-2 items-center mt-2 relative">
            <div
              className={`font-semibold text-3xl ${
                themeMode ? "text-black" : "text-white"
              } `}
            >
              $31,082
              <span className="font-normal text-base text-[#8f8f8f]">.20</span>
            </div>
            <div
              className={`price-container price-up ${
                !themeMode && "dark"
              } rounded-xl flex flex-row gap-1 p-1 px-2 items-center`}
            >
              <FontAwesomeIcon icon={faCaretUp} />
              <span>810%</span>
            </div>
            <div className="bg-white w-11 h-11 shadow-gray-300 drop-shadow-lg p-2 rounded-full flex items-center justify-center absolute right-8 cursor-pointer">
              <FontAwesomeIcon icon={faBell} size="xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div
              className={`font-bold self-end ${
                themeMode ? "text-black" : "text-white"
              }`}
            >
              $1,208.24 <span className="text-red-500">(Today)</span>
            </div>
            <ResponsiveContainer width="100%" height={70} key={Math.random()}>
              <AreaChart data={dataForDiagram}>
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
          </div>
        </div>
        <div
          className={`${themeMode ? "bg-white" : "bg-black"} ${
            !isMobile() && "col-span-2"
          } py-4 pl-4 rounded-xl`}
        >
          <div
            className={`font-semibold text-xl ${
              themeMode ? "text-black" : "text-white"
            }`}
          >
            Markets
          </div>
          <div className="grid grid-cols-3 mt-4 gap-2 md:grid-cols-5 2xl:grid-cols-7 sm:grid-cols-3">
            {[
              {
                title: "Deposit",
                icon: <FontAwesomeIcon icon={faCircleDown} size="xl" />,
              },
              {
                title: "Send",
                icon: <FontAwesomeIcon icon={faPaperPlane} size="xl" />,
              },
              {
                title: "Receive",
                icon: <FontAwesomeIcon icon={faMoneyBillTransfer} size="xl" />,
              },
              {
                title: "Invoicing",
                icon: <FontAwesomeIcon icon={faFileInvoiceDollar} size="xl" />,
              },
              {
                title: "Checkout",
                icon: <FontAwesomeIcon icon={faMoneyCheckDollar} size="xl" />,
              },
              {
                title: "Deposit",
                icon: <FontAwesomeIcon icon={faCartShopping} size="xl" />,
              },
              {
                title: "More",
                icon: <FontAwesomeIcon icon={faEllipsis} size="xl" />,
              },
            ].map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-2 items-center cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 ${
                      themeMode
                        ? "bg-[#e3eeff] text-[#1a76fe]"
                        : "bg-[#051c3d] text-[#89b9fe]"
                    } rounded-full flex items-center justify-center`}
                  >
                    {el.icon}
                  </div>
                  <div className={`${themeMode ? "text-black" : "text-white"}`}>
                    {el.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-3 ${isMobile() && "grid-cols-1"} gap-6`}>
        <div className="col-span-1">
          <div
            className={`w-full ${
              themeMode ? "bg-white" : "bg-black"
            } py-4 px-4 rounded-xl flex flex-col gap-5`}
          >
            <div
              className={`flex flex-row justify-between ${
                themeMode ? "text-black" : "text-white"
              }`}
            >
              <div className="font-semibold">Card Lists</div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faGear} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <CreditCardMaster />
              <CreditCardMaster />
            </div>
          </div>
        </div>
        <div className={`${!isMobile() && "col-span-2"}`}>
          <div className="grid grid-rows-5 gap-6 h-full">
            <div
              className={`${
                themeMode ? "bg-white" : "bg-black"
              } py-4 px-4 rounded-xl flex flex-row w-full row-span-1 items-center`}
            >
              <div
                className={`flex flex-row gap-3 ${
                  isMobile() ? "!w-auto" : "w-[150px]"
                } items-center ${themeMode ? "text-black" : "text-white"}`}
              >
                <div className="flex flex-col items-start">
                  Last <span>30 days</span>
                </div>
                <FontAwesomeIcon icon={faCaretDown} />
                <Divider type="vertical" className="h-[50px]" />
              </div>
              <div className="flex flex-col  px-5 w-full ">
                {[
                  {
                    title: "Transactions",
                    value: "54",
                  },
                  {
                    title: "Total spent",
                    value: "$10,890.5",
                  },
                  {
                    title: "Total cashback",
                    value: "$20,120.2",
                  },
                ].map((el, i) => {
                  return (
                    <div className="flex flex-col gap-1" key={i}>
                      <div className="text-[#8f8f8f]">{el.title}</div>
                      <div
                        className={`font-semibold ${
                          themeMode ? "text-black" : "text-white"
                        }`}
                      >
                        {el.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`${
                themeMode ? "bg-white" : "bg-black"
              } py-4 px-4 rounded-xl row-span-4 h-full flex flex-col`}
            >
              <div className="px-4 flex flex-row justify-between">
                <div className="flex flex-row items-center gap-4">
                  <span
                    className={`font-semibold text-lg ${
                      themeMode ? "text-black" : "text-white"
                    }`}
                  >
                    Statistics
                  </span>
                  {isMobile() ? (
                    <Dropdown
                      menu={{
                        items: [
                          {
                            key: "1",
                            label: (
                              <div className="bg-[#f2f8ff] text-[#0261ff] market-button">
                                All
                              </div>
                            ),
                          },
                          {
                            key: "2",
                            label: (
                              <div
                                className={`bg-[#f8f8f9] ${
                                  !themeMode && "text-gray-600 bg-[#757575]"
                                } market-button`}
                              >
                                Money in
                              </div>
                            ),
                          },
                          {
                            key: "3",
                            label: (
                              <div
                                className={`bg-[#f8f8f9] ${
                                  !themeMode && "text-gray-600 bg-[#757575]"
                                } market-button`}
                              >
                                Money out
                              </div>
                            ),
                          },
                        ],
                      }}
                    >
                      <FontAwesomeIcon icon={faBars} color={themeMode ? "black" : "white"} />
                    </Dropdown>
                  ) : (
                    <div>
                      <div className="bg-[#f2f8ff] text-[#0261ff] market-button">
                        All
                      </div>
                      <div
                        className={`bg-[#f8f8f9] ${
                          !themeMode && "text-gray-600 bg-[#757575]"
                        } market-button`}
                      >
                        Money in
                      </div>
                      <div
                        className={`bg-[#f8f8f9] ${
                          !themeMode && "!text-gray-600 bg-[#757575]"
                        } market-button`}
                      >
                        Money out
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-[#f8f8f9] market-button flex gap-2">
                  <span className="font-bold">This week</span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={dataForBarDiagram}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="pv"
                    stackId="a"
                    fill={themeMode ? "#d01a28" : "#ff9b9b"}
                  />
                  <Bar
                    dataKey="uv"
                    stackId="a"
                    fill={themeMode ? "#7badd4" : "#81b9e4"}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
