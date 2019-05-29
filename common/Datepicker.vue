<template>
    <div class="input-group date">
        <input
            ref="inputDate"
            type="text"
            :data-value="date"
            :value="date"
            class="form-control"
            name="datepicker"
        >
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
        </span>
    </div>
</template>

<script>
    import DateTime from '@/adapters/DateTime'

    export default {
        props: {
            date: {
                required: true,
            },
            format: {
                type: String,
                default: 'DD-MM-YYYY',
            },
            config: {
                setDisabledDates: {
                    type: Array,
                    default: []
                },
                setDisabledHours: {
                    type: Array,
                    default: []
                },
                setMinDate: {
                    type: String | Object,
                    default: ''
                },
                setMinDateNotFuture: {
                    type: String | Object,
                    default: ''
                },
                disableRangeDate: {
                    from: {
                        type: String,
                        default: ''
                    },
                    to: {
                        type: String,
                        default: ''
                    }
                }
            },
        },

        data() {
            return {
                defaultDate: new Date(),
                locale: 'nl',
                disabledDates: []
            }
        },

        mounted() {
            this.initDatepicker()
            if (this.config) {
                for (let key in this.config) {
                    this[key](this.config[key])
                }
            }

            if (this.disabledDates) {
                $(this.$el).data('DateTimePicker').disabledDates(this.disabledDates)
            }

            $(this.$el).on('dp.change', () => {
                this.$emit('update:date', this.$refs.inputDate.value)
            })
        },

        methods: {
            initDatepicker() {
                $(this.$el).datetimepicker({
                    locale: this.locale,
                    format: this.format,
                    defaultDate: this.defaultDate
                })

                this.$emit('update:date', this.$refs.inputDate.value)
            },
            setMinDate(date) {
                $(this.$el).data('DateTimePicker').minDate(DateTime.getMoment(date, this.format, 'day'))
            },
            setMinDateNotFuture(date) {
                let today = new Date()
                if (DateTime.isAfter(date, today, 'day', this.format, this.format)) {
                    this.setMinDate(today)
                } else {
                    this.setMinDate(date)
                }
            },
            setDisabledDates(dates) {
                this.mergeArrays(dates)
            },
            setDisabledHours(hours) {
                $(this.$el).data('DateTimePicker').disabledHours(hours)
            },
            disableRangeDate(dateRange) {
                let dates = DateTime.getRange(dateRange.from, dateRange.to, this.format)
                this.mergeArrays(dates)
            },
            mergeArrays(data) {
                if (!this.disabledDates) {
                    this.disabledDates = data
                } else {
                    data.forEach(item => {
                        if (!this.disabledDates.includes(item)) {
                            this.disabledDates.push(item)
                        }
                    })
                }
            }
        },

    }
</script>
