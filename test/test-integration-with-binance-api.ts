import test from 'ava'
import Binance from 'binance-api-node'
import Record from 'timeseries-record'
import Candle from '@strong-roots-capital/binance-candle'

const binance = Binance()

/**
 * Library under test
 */

import binanceCandleToRecord from '../src/binance-candle-to-record'

test.only('should convert fresh candles from binance into records', async t => {

    const candles: Candle[] = await binance.candles({
        symbol: 'ETHBTC',
        interval: '5m',
        limit: 1

    })

    const record: Record = binanceCandleToRecord(candles[0])
    t.is(candles[0].openTime, record.Time)
    t.is(parseFloat(candles[0].open), record.Open)
    t.is(parseFloat(candles[0].high), record.High)
    t.is(parseFloat(candles[0].low), record.Low)
    t.is(parseFloat(candles[0].close), record.Close)
})
