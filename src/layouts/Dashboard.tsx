import { Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ProtectedRoute from "@/containers/ProtectedRoute";
import "@/assets/styles/main.scss";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import { useAppSelector } from "@/hooks/hooks";
import { isMobile } from "@/utils/devices";
import Footer from "@/components/Footer";

export const loading = (
  <div className="h-screen flex justify-center items-center">
    <h1>
      <img src={""} alt="Logo" className=" !h-20 p-2 text-5xl" />
    </h1>
  </div>
);

type Props = {};

export default function Dashboard({}: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { themeMode, showNotification } = useAppSelector((state) => state.main);
  useEffect(() => {
    pathname === "/digitalBanking/" && navigate("/digitalBanking/home");
  }, []);

  return (
    <Suspense fallback={loading}>
      <ProtectedRoute>
        <div
          className={`flex flex-row h-full ${
            themeMode ? "bg-[#f3f8ff]" : "bg-[#202020]"
          }  text-black`}
        >
          {!isMobile() && (
            <div>
              <Sidebar themeMode={themeMode} />
            </div>
          )}
          <div className="h-full w-full overflow-auto">
            <Header themeMode={themeMode} showNotification={showNotification} />
            <div
              className={`w-full flex-1 ${
                isMobile()
                  ? "h-[calc(100vh_-_10rem)]"
                  : "h-[calc(100vh_-_3rem)]"
              } overflow-auto p-7 custom-scroll`}
            >
              <Outlet />
            </div>
            {isMobile() && <Footer themeMode={themeMode} />}
          </div>
        </div>
      </ProtectedRoute>
    </Suspense>
  );
}
