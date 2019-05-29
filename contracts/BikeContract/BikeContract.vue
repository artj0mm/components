<template>
    <div class="row">
        <div class="col-sm-12">
            <template v-if="isShownContent">
                <template v-for="(contract, key) in getContracts">
                    <bike-contract-form
                        :key="key"
                        :contract="getContracts[key]"
                        route="informatie/contracts/bike"
                        @success="$emit('contract-refresh', $event)"
                    >
                        <button
                            v-if="isEditForm(contract)"
                            slot-scope="{ action }"
                            slot="edit-btn"
                            @click.stop.prevent="action"
                            class="btn btn-success btn-fill btn-wd mr-4"
                        >
                            Opslaan
                        </button>
                        <button
                            v-if="isEditForm(contract)"
                            slot-scope="{ action }"
                            slot="destroy-btn"
                            @click.stop.prevent="action"
                            class="btn btn-danger btn-fill btn-wd mr-4"
                        >
                            Verwijderen
                        </button>
                        <button
                            v-if="!isEditForm(contract)"
                            slot-scope="{ action }"
                            slot="store-btn"
                            @click.stop.prevent="action"
                            class="btn btn-success btn-fill btn-wd mr-4"
                        >
                            Opslaan
                        </button>
                        <button
                            v-if="!isEditForm(contract)"
                            slot-scope="{ action }"
                            slot="remove-btn"
                            @click.stop.prevent="action"
                            class="btn btn-danger btn-fill btn-wd mr-4"
                        >
                            Verwijderen
                        </button>
                    </bike-contract-form>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import BikeContractForm from './BikeContractForm'
    import * as BikePresenter from '@/presenters/contract/BikeContractPresenter'

    export default {
        components: {
            BikeContractForm
        },

        data() {
            return {
                isShownContent: true,
                presenter: BikePresenter
            }
        },

        computed: {
            getContracts() {
                return this.$store.getters.getBikeContracts
            }
        },

        created() {
            this.$on('contract-refresh', res => {
                if (res.body.hasOwnProperty('contract')) {
                    let contract = res.body.contract
                    this.$store.commit(
                        !contract.id ? 'STORE_BIKE_CONTRACT' : 'UPDATE_BIKE_CONTRACT',
                        this.presenter.present(contract, contract.order)
                    )
                }
                this.$store.dispatch('getProfile')
            })
        },

        methods: {
            isEditForm(contract) {
                return !!contract.id
            },
        }
    }

</script>