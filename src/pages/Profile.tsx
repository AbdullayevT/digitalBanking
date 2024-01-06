import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons/faAddressCard";
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faLanguage } from "@fortawesome/free-solid-svg-icons/faLanguage";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons/faCircleHalfStroke";
import { faShield } from "@fortawesome/free-solid-svg-icons/faShield";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons/faCircleQuestion";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setShowNotification, setThemeMode } from "@/features/main";
import { isMobile } from "@/utils/devices";

type Props = {};

type PanelContainerTypes = {
  height: string;
  children: React.ReactNode;
  themeMode: boolean;
};

type PanelContentType = {
  icon: React.ReactNode;
  title: string;
  additionalFunc: React.ReactNode;
  themeMode: boolean;
};

const PanelContainer = ({
  height,
  themeMode,
  children,
}: PanelContainerTypes) => {
  return (
    <div
      className={`${isMobile() ? "w-full" : "w-[670px]"} ${height} ${
        themeMode ? "bg-white" : "bg-black"
      } mt-5 p-4 flex flex-col justify-center space-y-4 rounded-xl`}
    >
      {children}
    </div>
  );
};

const PanelConttent = ({
  icon,
  title,
  additionalFunc,
  themeMode,
}: PanelContentType) => {
  return (
    <div
      className={`flex flex-row justify-between items-center ${
        themeMode ? "text-black" : "text-white"
      }`}
    >
      <div className="gap-2 grid grid-flow-col">
        <span className="w-5">{icon}</span>
        <span>{title}</span>
      </div>
      {additionalFunc && additionalFunc}
    </div>
  );
};

export default function Profile({}: Props) {
  const dispatch = useAppDispatch();
  const { themeMode, showNotification } = useAppSelector((state) => state.main);
  const handleThemeMode = () => {
    dispatch(setThemeMode(!themeMode));
  };
  const handleShowNotification = () => {
    dispatch(setShowNotification(!showNotification));
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div
        className={`${isMobile() ? "w-full mt-10" : "w-[670px]"} h-[170px] ${
          themeMode ? "bg-white" : "bg-black text-white"
        } rounded-xl relative`}
      >
        <div className="image-container">
          <div className="w-24 h-24 rounded-full bg-red-400 hover:bg-green-500 transition-all ease-in-out duration-150"></div>
        </div>
        <div className="image-container top-[60%] flex flex-col items-center justify-center whitespace-nowrap gap-2">
          <div className="font-semibold">Tapdig Abdullayev</div>
          <div
            className={`flex flex-row ${
              isMobile() && "flex-wrap justify-center"
            } gap-2 font-medium`}
          >
            <div>abdullayevtapdiq2@gmail.com</div>
            {!isMobile() && <div>|</div>}

            <div>+994 12312323</div>
          </div>
        </div>
      </div>
      <PanelContainer height="h-[160px]" themeMode={themeMode}>
        {[
          {
            title: "Edit profile information",
            icon: <FontAwesomeIcon icon={faAddressCard} />,
            additionalFunc: null,
          },
          {
            title: "Notifications",
            icon: <FontAwesomeIcon icon={faBell} />,
            additionalFunc: (
              <div
                className="text-[#1573fe] cursor-pointer"
                onClick={handleShowNotification}
              >
                {showNotification ? "Off" : "On"}
              </div>
            ),
          },
          {
            title: "Language",
            icon: <FontAwesomeIcon icon={faLanguage} />,
            additionalFunc: (
              <div className="text-[#1573fe] cursor-pointer">English</div>
            ),
          },
        ].map((item, el) => {
          return (
            <PanelConttent
              key={el}
              icon={item.icon}
              title={item.title}
              additionalFunc={item.additionalFunc}
              themeMode={themeMode}
            />
          );
        })}
      </PanelContainer>
      <PanelContainer height="h-[140px]" themeMode={themeMode}>
        {[
          {
            title: "Security",
            icon: <FontAwesomeIcon icon={faShield} />,
            additionalFunc: null,
          },
          {
            title: "Theme",
            icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
            additionalFunc: (
              <div
                className="text-[#1573fe] cursor-pointer"
                onClick={handleThemeMode}
              >
                {themeMode ? "Light mode" : "Dark mode"}
              </div>
            ),
          },
        ].map((item, el) => {
          return (
            <PanelConttent
              key={el}
              icon={item.icon}
              title={item.title}
              additionalFunc={item.additionalFunc}
              themeMode={themeMode}
            />
          );
        })}
      </PanelContainer>
      <PanelContainer height="h-[160px]" themeMode={themeMode}>
        {[
          {
            title: "Help & Support",
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            additionalFunc: null,
          },
          {
            title: "Contact us",
            icon: <FontAwesomeIcon icon={faHeadset} />,
            additionalFunc: null,
          },
          {
            title: "Privacy policy",
            icon: <FontAwesomeIcon icon={faLock} />,
            additionalFunc: null,
          },
        ].map((item, el) => {
          return (
            <PanelConttent
              key={el}
              icon={item.icon}
              title={item.title}
              additionalFunc={item.additionalFunc}
              themeMode={themeMode}
            />
          );
        })}
      </PanelContainer>
    </div>
  );
}
