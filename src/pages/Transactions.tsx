import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons/faBitcoin";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faDroplet } from "@fortawesome/free-solid-svg-icons/faDroplet";
import { faGasPump } from "@fortawesome/free-solid-svg-icons/faGasPump";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";
import { Divider } from "antd";
import { useAppSelector } from "@/hooks/hooks";

type Props = {};

export default function Transactions({}: Props) {
  const { themeMode } = useAppSelector((state) => state.main);
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div className={`flex flex-row gap-3 ${!themeMode && "text-white"}`}>
        <div className="tab-item item-active">History</div>
        <div className="tab-item">Scheduled</div>
        <div className="tab-item">Requested</div>
      </div>
      <div
        className={`${
          themeMode ? "bg-white" : "bg-black"
        }  py-4 pl-4 rounded-xl`}
      >
        <div className="grid grid-cols-5 items-center px-2 pr-8">
          {[
            {
              title: "Name/Business",
              icon: <FontAwesomeIcon icon={faArrowDown} />,
            },
            {
              title: "Date/time",
              icon: null,
            },
            {
              title: "Amount",
              icon: null,
            },
            {
              title: "Fee",
              icon: null,
            },
            {
              title: "Channel",
              icon: null,
            },
          ].map((item, i) => {
            return (
              <div
                key={i}
                className={`flex flex-row items-center gap-2 text-[#9e9e9e] ${
                  item.icon && "cursor-pointer"
                }`}
              >
                <div>{item.title}</div>
                <div>{item.icon && item.icon}</div>
              </div>
            );
          })}
        </div>
        <div className="space-y-2 mt-4">
          {[
            {
              title: "Car loans",
              icon: <FontAwesomeIcon size="lg" icon={faCar} />,
              desc: "Witdraw",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "13.10",
              fee: "1.1",
              channel: "Offline",
              color: "bg-[#e3f4e1]",
            },
            {
              title: "Bitcoin buy 1,000",
              icon: <FontAwesomeIcon size="lg" icon={faBitcoin} />,
              desc: "Investment",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "24.800.15",
              fee: "0.0",
              channel: "Internet",
              color: "bg-[#fffce5]",
            },
            {
              title: "Mortgate real state",
              icon: <FontAwesomeIcon size="lg" icon={faHouse} />,
              desc: "Relax and life",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "512.21",
              fee: "1.5",
              channel: "House office",
              color: "bg-[#efefff]",
            },
            {
              title: "Starbuck coffee",
              icon: <FontAwesomeIcon size="lg" icon={faMugSaucer} />,
              desc: "Relax and life",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "3.10",
              fee: "2.0",
              channel: "Offline",
              color: "bg-[#e3f4e1]",
            },
            {
              title: "Facebook charge",
              icon: <FontAwesomeIcon size="lg" icon={faFacebook} />,
              desc: "Advertisting",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "515.04",
              fee: "4.2",
              channel: "Internet",
              color: "bg-[#e3f4e1]",
            },
            {
              title: "Bank of Merica",
              icon: <FontAwesomeIcon size="lg" icon={faDollarSign} />,
              desc: "Fee charged",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "513.16",
              fee: "1.2",
              channel: "Bank",
              color: "bg-[#e3f4e1]",
            },
            {
              title: "Water bills",
              icon: <FontAwesomeIcon size="lg" icon={faDroplet} />,
              desc: "Relax and life",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "19.65",
              fee: "0.1",
              channel: "Internet by app",
              color: "bg-[#e3f4e1]",
            },
            {
              title: "Gas",
              icon: <FontAwesomeIcon size="lg" icon={faGasPump} />,
              desc: "Witdraw",
              date: "Jan 29, 2022",
              time: "At 8:00 AM",
              amount: "10.40",
              fee: "0.8",
              channel: "Offline",
              color: "bg-[#e3f4e1]",
            },
          ].map((el, i) => {
            return (
              <div key={i} className="flex flex-col">
                <div className="flex flex-row w-full justify-between items-center px-2 pr-7">
                  <div className="flex flex-row gap-4 items-center w-full">
                    <div
                      className={`p-4 ${el.color} w-13 h-13 flex items-center justify-center rounded-full`}
                    >
                      {el.icon}
                    </div>
                    <div
                      className={`flex flex-col gap-1 ${
                        !themeMode && "text-white"
                      }`}
                    >
                      <span className="font-semibold">{el.title}</span>
                      <span className="text-xs">{el.desc}</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <span className={`${!themeMode && "text-white"}`}>
                      {el.date}
                    </span>
                    <span className="text-xs pl-8 text-[#9e9e9e]">
                      {el.time}
                    </span>
                  </div>
                  <div
                    className={`w-full ${
                      themeMode ? "text-[#3b89fe]" : "text-[#80adef]"
                    } font-bold`}
                  >
                    ${el.amount}
                  </div>
                  <div className={`w-full ${!themeMode && "text-white"}`}>
                    ${el.fee}
                  </div>
                  <div className={`w-full ${!themeMode && "text-white"}`}>
                    {el.channel}
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      color={themeMode ? "black" : "white"}
                    />
                  </div>
                </div>
                <div className="px-6">
                  <Divider />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
