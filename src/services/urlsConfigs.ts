import { apiUrlsTypes } from "@/utils/interfaces";

export const apiUrls:apiUrlsTypes = {
  home: {
    areaData: {
      url: "home/area-data",
      method: "get",
      mock: "/digitalBanking/mocks/areaData.json",
    },
    marketData: {
        url: "home/market-data",
        method: "get",
        mock: "/digitalBanking/mocks/marketData.json",
      },
  },
};
