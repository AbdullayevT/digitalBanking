import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";

interface RouteTypes {
  path: string;
  element: React.ReactNode;
  roles: string[];
  children: object[];
}

const routes: RouteTypes[] = [
  {
    path: "/digitalBanking/",
    element: <Dashboard />,
    roles: ["admin", "user"],
    children: [
      {
        path: "/digitalBanking/home",
        roles: ["admin", "user"],
        element: <Home />,
      },
      {
        path: "/digitalBanking/transaction",
        roles: ["admin", "user"],
        element: <Transactions />,
      },
      {
        path: "/digitalBanking/wallet",
        roles: ["admin", "user"],
        element: <Wallet />,
      },
      {
        path: "/digitalBanking/profile",
        roles: ["admin", "user"],
        element: <Profile />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
