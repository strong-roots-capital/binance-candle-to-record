# binance-candle-to-record [![Build status](https://travis-ci.org/strong-roots-capital/binance-candle-to-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/binance-candle-to-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/binance-candle-to-record.svg)](https://npmjs.org/package/@strong-roots-capital/binance-candle-to-record) [![codecov](https://codecov.io/gh/strong-roots-capital/binance-candle-to-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/binance-candle-to-record)

> Map a Binance candle to a talib record

## Install

```shell
npm install @strong-roots-capital/binance-candle-to-record
```

## Use

```typescript
import binanceCandleToRecord from '@strong-roots-capital/binance-candle-to-record'

const binanceRecord = {
    openTime: 1508328900000,
    open: '0.05655000',
    high: '0.05656500',
    low: '0.05613200',
    close: '0.05632400',
    volume: '68.88800000',
    closeTime: 1508329199999,
    quoteAssetVolume: '2.29500857',
    trades: 85,
    baseAssetVolume: '40.61900000'
}

binanceCandleToRecord(binanceRecord)
//=> {
    Time: 1508328900000,
    Open: 0.05655000,
    High: 0.05656500,
    Low: 0.05613200,
    Close: 0.05632400,
    Volume: 68.88800000
}
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
- [to-binance-timeframe](https://github.com/strong-roots-capital/to-binance-timeframe)
