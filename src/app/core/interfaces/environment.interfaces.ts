export interface ICMetricsProdEnvironment {
    production: boolean;
    isOffileMode: boolean;
    currencyApi: string;
    accessKey: string;
}

export interface ICMetricsUAHCurrencyResponce {
    USD_UAH: { [key: string]: number };
    UAH_USD: { [key: string]: number };
}
