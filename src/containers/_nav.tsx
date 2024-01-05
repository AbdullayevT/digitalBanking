import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons/faChartPie";
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface _navTypes {
  _tag: string;
  name: string;
  auth: boolean;
  to: string;
  icon: React.ReactNode,
}

const _nav: _navTypes[] = [
  {
    _tag: "",
    name: "Home",
    auth: true,
    to: "/digitalBanking/home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    _tag: "",
    name: "Transaction",
    auth: true,
    to: "/digitalBanking/transaction",
    icon: <FontAwesomeIcon icon={faChartPie} />,
  },
  {
    _tag: "",
    name: "Wallet",
    auth: true,
    to: "/digitalBanking/wallet",
    icon: <FontAwesomeIcon icon={faWallet} />,
  },
];

export default _nav;
