import { Maybe, Nothing, Pair } from '../types/bepswap';

export const getSymbolPair = (symbolPair?: string): Pair => ({
  source: symbolPair?.split(':')[0]?.toUpperCase() ?? Nothing,
  target: symbolPair?.split(':')[1]?.toUpperCase() ?? Nothing,
});

export const getTickerFormat = (symbol?: Maybe<string>): string => {
  if (!symbol) return '';
  if (symbol.includes('.')) {
    return symbol
      .split('.')[1]
      .split('-')[0]
      .toLowerCase();
  }

  return symbol.split('-')[0].toLowerCase();
};

export const compareShallowStr = (str1: string, str2: string): boolean => {
  try {
    return str1.toLowerCase() === str2.toLowerCase();
  } catch (error) {
    return false;
  }
};

export const emptyString = '';
