import _nav from "@/containers/_nav";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  themeMode: boolean;
};

export default function Footer({ themeMode }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div
      className={`w-full h-auto p-2 ${themeMode ? "bg-white" : "bg-black"} bottom-0 fixed flex flex-row justify-around items-center px-2`}
    >
      {_nav.map((item, i) => {
        return (
          <div
            key={i}
            className={`font-bold text-[#757575] ${
              item.to === pathname &&
              `${themeMode ? " !text-[#1573fe]" : " !text-[#89b9ff]"}`
            } p-2 flex flex-col items-center`}
            onClick={() => {
              handleNavigation(item.to);
            }}
          >
            <div className="text-2xl">{item.icon}</div>
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}
