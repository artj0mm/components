<script>
    import * as ContractsModel from '@/models/contracts/ContractsModel.js'
    import HttpAdapter from '@/adapters/HttpAdapter'
    import Notification from '@/classes/Notification'

    export default {
        data() {
            return {
                date: this.contract.expiration_date,
                dateRadioButtons: ContractsModel.dateRadioButtons,
                dateToggle: 'off',
                canceledDateValue: ContractsModel.canceledDateValue,
                http: HttpAdapter,
                alert: new Notification,
                presenter: ''
            }
        },

        computed: {
            hasDate() {
                return this.dateToggle === 'on'
            }
        },

        created() {
            if (this.contract.hasOwnProperty('isShown')) {
                this.isContentShown = true
            }
        },

        methods: {
            setDate() {
                if (!this.hasDate) {
                    this.contract.expiration_date = this.canceledDateValue
                } else {
                    this.contract.expiration_date = this.date
                }
            },

            edit() {
                if (this.validate) {
                    this.setDate()
                    this.contract = this.presenter.transformToStore(this.contract)
                    this.http.put(
                        `${this.route}/${this.contract.id}`,
                        {
                            ...this.contract,
                            '_token': window.Laravel.csrfToken,
                        },
                        (res) => {
                            this.$emit('success', res)
                            this.loading = false
                            this.alert.success('Success')
                            this.hideForm()
                        },
                        (err) => {
                            this.$emit('error', err)
                            this.alert.error('Error')
                        }
                    )
                }
            },

            store() {
                if (this.validate) {
                    this.setDate()
                    this.contract = this.presenter.transformToStore(this.contract)
                    this.http.post(
                        this.route,
                        {
                            ...this.contract,
                            '_token': window.Laravel.csrfToken,
                        },
                        (res) => {
                            this.$emit('success', res)
                            this.loading = false
                            this.alert.success('Success')
                            this.hideForm()
                        },
                        (err) => {
                            this.$emit('error', err)
                            this.alert.error('Error')
                        }
                    )
                }
            },

            destroy() {
                if (this.validate) {
                    this.http.delete(
                        `${this.route}/${this.contract.id}`,
                        {
                            '_token': window.Laravel.csrfToken,
                        },
                        (res) => {
                            this.$emit('success', res)
                            this.loading = false
                            this.alert.success('Success')
                            this.hideForm()
                        },
                        (err) => {
                            this.$emit('error', err)
                            this.alert.error('Error')
                        }
                    )
                }
            },

            validate() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        return result
                    }
                })
            },
        }
    }
</script>