import * as Moment from 'moment'
import * as MomentRange from 'moment-range'

const moment = MomentRange.extendMoment(Moment)

moment.locale('nl')

export default class DateTime {
    /***
     * @param {string} outFormat
     * @param {object} date
     * @returns {string}
     */
    static getDate(outFormat = 'DD-MM-YYYY', date = new Date()) {
        return this.moment(date, 'YYYY-MM-DD').format(outFormat)
    }

    /***
     *
     * @param {string} date
     * @param {string} inFormat
     * @return {*}
     */
    static getDayOfWeek(date = new Date(), inFormat = 'YYYY-MM-DD HH:mm') {
        return this.getMoment(date, inFormat).day()
    }

    /***
     *
     * @param {string} IsoDate
     * @param {string} outFormat
     * @returns {string}
     */
    static convertFromIso(IsoDate, outFormat = 'YYYY-MM-DD HH:mm:ss') {
        return this.moment(IsoDate).format(outFormat)
    }

    /***
     * @param {string} date
     * @param {string} inFormat
     * @param {string} outFormat
     * @returns {string}
     */
    static convertFromTo(date, inFormat, outFormat) {
        return this.moment(date, inFormat).format(outFormat)
    }

    /**
     *
     * @returns {string}
     */
    static getCurrentIsoDate() {
        return this.moment().format()
    }

    /**
     *
     * @param {string} date
     * @param {string} inFormat
     * @param {string} outFormat
     * @return {moment} moment
     */
    static getCurrentDateTime(date = new Date(), inFormat = 'YYYY-MM-DD HH:mm', outFormat = 'YYYY-MM-DD HH:mm') {
        return this.moment(date, inFormat).format(outFormat)
    }

    /**
     *
     * @param {string} isoDate
     * @returns {string}
     */
    static convertToIso(isoDate) {
        if (!this.moment(isoDate).isValid()) {
            throw new Error(`Datetime format is not valid: ${isoDate}`)
        }

        if (isoDate.includes('T')) {
            return isoDate
        }

        return new Date(isoDate).toISOString()
    }

    /***
     * @return {moment.Moment}
     */
    static get moment() {
        return moment
    }

    /***
     *
     * @param {string} date
     * @param {string} inFormat
     * @param {string} start [year|month|quarter|week|isoWeek|day|date|hour|minute|second]
     * @return {moment} moment
     */
    static getMoment(date = new Date(), inFormat = 'YYYY-MM-DD HH:mm', start = '') {
        return this.moment(date, inFormat).startOf(start)
    }

    /***
     *
     * @param {string} dateBefore
     * @param {Date} dateAfter
     * @param {string} precision [year|month|week|isoWeek|day|hour|minute|second]
     * @param {string} inFormat
     * @returns {boolean}
     */
    static isAfter(
        dateBefore,
        dateAfter = new Date(),
        precision = 'second',
        inFormat = 'YYYY-MM-DD'
    ) {
        return this.moment(dateBefore, inFormat).isSameOrAfter(this.moment(dateAfter, inFormat), precision)
    }

    /***
     * @param {string} start in date format
     * @param {string} end in date format
     * @param {string} format
     * @param {string} range_by
     * @return {array}
     */
    static getRange(start, end, format = 'DD-MM-YYYY', range_by = 'days') {
        let range = moment.range(moment(start, format), moment(end, format))
        let time_units = Array.from(range.by(range_by)).map(m => m.format(format))

        return time_units
    }
}