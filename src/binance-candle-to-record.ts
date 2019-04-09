/**
 * binance-candle-to-record
 * Map a Binance candle to a talib record
 */
import binanceCandle from '@strong-roots-capital/binance-candle'
import Record from 'timeseries-record'
/**
 * Transform a Binance Candle output to a timeseries record.
 *
 * @param candle - Candle to convert into Record
 * @return 'Candle as Record
 */
export default function binanceCandleToRecord(candle: binanceCandle): Record {
    return {
        Time: candle.openTime,
        Open: parseFloat(candle.open),
        High: parseFloat(candle.high),
        Low: parseFloat(candle.low),
        Close: parseFloat(candle.close),
        Volume: parseFloat(candle.volume)
    }
}
