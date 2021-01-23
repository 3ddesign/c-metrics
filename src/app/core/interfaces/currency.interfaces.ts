export interface ICMetricsUAHCurrencyResponce {
  USD_UAH: { [key: string]: number };
  UAH_USD: { [key: string]: number };
  EUR_UAH: { [key: string]: number };
  UAH_EUR: { [key: string]: number };
}

export interface ICMetricsCurrencyReport {
  currency: string;
  position: number;
  value: number;
}

export interface ICMetricsCurrencyData {
  currentUAHCurrency: number;
  currentUSDCurrency: number;
  currentEURCurrency: number;
  currentEURUAHCurrency: number;
  prevEURCurrency: number;
  prevEURUAHCurrency: number;
  prevUAHCurrency: number;
  prevUSDCurrency: number;
}
