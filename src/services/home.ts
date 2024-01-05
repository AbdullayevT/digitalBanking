import api from "@/api/axios";
import { apiUrls } from "./urlsConfigs";

export const getAreaData = () => {
  return api.get(apiUrls.home.areaData.mock);
};

export const getMarketData = () => {
  return api.get(apiUrls.home.marketData.mock);
};
