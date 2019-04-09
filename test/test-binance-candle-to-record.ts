import test from 'ava'
import Record from 'timeseries-record'
import Candle from '@strong-roots-capital/binance-candle'

const tempBinance: Candle = {
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

const timeseries: Record = {
    Time: 1508328900000,
    Open: 0.05655000,
    High: 0.05656500,
    Low: 0.05613200,
    Close: 0.05632400,
    Volume: 68.88800000
}

/**
 * Library under test
 */

import binanceCandleToRecord from '../src/binance-candle-to-record'

test('returns a timeseries record from a binance record', t => {
    t.deepEqual(timeseries, binanceCandleToRecord(tempBinance))
})
