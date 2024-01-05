export interface urlConfigs {
  url: string;
  method: string;
  mock: string;
}

export interface apiUrlsTypes {
  home: {
    areaData: urlConfigs;
    marketData: urlConfigs;
  };
}

export interface areaDataTypes {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface marketDataTypes {
  title: string;
  description: string;
  currentPrice: number;
  difference: number;
  differencePosition: string;
}

export interface homeDataState {
  areaData: areaDataTypes[];
  marketData: marketDataTypes[];
}
