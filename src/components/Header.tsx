import _nav from "@/containers/_nav";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { Avatar, Badge, Button, Dropdown, MenuProps, Switch } from "antd";
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { useAppDispatch } from "@/hooks/hooks";
import { setThemeMode } from "@/features/main";

type Props = {
  themeMode: boolean;
  showNotification: boolean;
};

export default function Header({ themeMode, showNotification }: Props) {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedItem = _nav?.find((item) => item.to === pathname);
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const profileItems: MenuProps["items"] = [
    {
      label: (
        <div
          className="flex flex-row items-center gap-2 shadow-sm"
          onClick={() => {
            handleNavigation("/digitalBanking/profile");
          }}
        >
          <Avatar icon={<FontAwesomeIcon icon={faUser} />} />
          <span>Tapdig Abdullayev</span>
        </div>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faGear} />
          <span>Setting and confidentionally</span>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Log out</span>
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <div
      className={`w-full h-16 ${
        themeMode ? "text-black" : "text-white"
      } p-7 pt-9 flex justify-between items-center`}
    >
      <div className="font-bold text-2xl">
        {selectedItem ? selectedItem?.name : "Profile"}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Switch
          className={`${
            themeMode ? "!bg-[#e3eeff] text-black" : "!bg-[#030e1e] text-white"
          }`}
          checkedChildren={<FontAwesomeIcon icon={faLightbulb} color="black" />}
          unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
          onChange={(checked) => {
            dispatch(setThemeMode(checked));
          }}
          checked={themeMode}
        />
        <Button
          shape="circle"
          icon={<FontAwesomeIcon icon={faSearch} />}
          size="large"
          type="text"
          className={`${
            themeMode ? "!bg-[#e3eeff] text-black" : "!bg-[#030e1e] text-white"
          }`}
        ></Button>
        {showNotification && (
          <Button
            shape="circle"
            size="large"
            type="text"
            className={`${
              themeMode
                ? "!bg-[#e3eeff] text-black"
                : "!bg-[#030e1e] text-white"
            }`}
            icon={
              <Badge dot={true}>
                <FontAwesomeIcon
                  icon={faBell}
                  color={`${themeMode ? "black" : "white"}`}
                />
              </Badge>
            }
          ></Button>
        )}
        <Dropdown
          menu={{ items: profileItems }}
          overlayStyle={{ paddingTop: "10px" }}
          trigger={["click"]}
        >
          <div
            className={`flex items-center gap-3 ${
              themeMode
                ? "!bg-[#e3eeff] text-black"
                : "!bg-[#030e1e] text-white"
            } p-2 rounded-full cursor-pointer`}
          >
            <Avatar icon={<FontAwesomeIcon icon={faUser} />} />
            <span>Tapdig Abdullayev</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
