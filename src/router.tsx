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
    path: "/",
    element: <Dashboard />,
    roles: ["admin", "user"],
    children: [
      {
        path: "/home",
        roles: ["admin", "user"],
        element: <Home />,
      },
      {
        path: "/transaction",
        roles: ["admin", "user"],
        element: <Transactions />,
      },
      {
        path: "/wallet",
        roles: ["admin", "user"],
        element: <Wallet />,
      },
      {
        path: "/profile",
        roles: ["admin", "user"],
        element: <Profile />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
