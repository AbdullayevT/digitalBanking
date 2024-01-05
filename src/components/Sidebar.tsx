import headerLogo from "/logo.png";
import { Divider } from "antd";
import _nav from "@/containers/_nav";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";

type Props = {
  themeMode: boolean;
};

export default function Sidebar({ themeMode }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div
      className={`flex flex-col justify-between h-full w-[15rem] ${
        themeMode ? "bg-white" : "bg-black"
      } p-7`}
    >
      <div className="flex flex-row items-center gap-2">
        <img src={headerLogo} className="w-6 h-6" />
        <span
          className={`font-bold text-xl ${themeMode ? "text-black" : "text-white"}`}
        >
          FinX
        </span>
      </div>
      <Divider />
      <div className="space-y-3 h-full">
        {_nav.map((item, i) => {
          return (
            <div
              key={i}
              className={`text-base font-semibold text-[#757575] ${
                item.to === pathname &&
                `${
                  themeMode
                    ? "bg-[#e3eeff] !text-[#1573fe]"
                    : "bg-[#082e66] !text-[#89b9ff]"
                }`
              } p-3 rounded-lg flex flex-row items-center cursor-pointer gap-2 hover:text-[#1573fe] transition-all ease-out`}
              onClick={() => {
                handleNavigation(item.to);
              }}
            >
              <span className="p-1">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div>
        <Divider
          className={`${themeMode ? "!border-[#f9f9f9]" : "!border-[#616161]"}`}
        />
      </div>
      <div className="flex flex-col space-y-6">
        <div
          className={`flex flex-row gap-4 items-center cursor-pointer ${
            themeMode ? "text-black" : "text-white"
          } hover:text-[#1573fe]`}
        >
          <FontAwesomeIcon icon={faCircleQuestion} />
          <span>Help</span>
        </div>
        <div
          className={`flex flex-row gap-4 items-center cursor-pointer ${
            themeMode ? "text-black" : "text-white"
          } hover:text-[#1573fe]`}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
}
