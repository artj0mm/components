<template>
    <div class="card" :id="[`bike-${contract.order}`]" v-show="isContentShown">
        <div class="content">
            <h5>
                <i
                    class="fa"
                    :class="{
                        'fa-chevron-up': !isContentShown,
                        'fa-chevron-down': isContentShown
                    }"
                ></i>

                <span @click="isContentShown = !isContentShown" class="profile-chevron">
                    <strong>Fiets contracten - {{ contract.insurance ? contract.insurance : '' }}</strong>
                </span>
            </h5>

            <transition name="fade-down">
                <form v-if="isContentShown">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="bike_type">
                                    Type fiets
                                </label>
                                <select
                                    name="bike_type"
                                    id="bike_type"
                                    v-model="contract.bike_id"
                                    class="form-control border-input car-select error-wrap"
                                    v-validate="'required'"
                                >
                                    <option selected disabled value="">
                                        Kies een fiets soort
                                    </option>
                                    <option v-for="(item, key) in bikeTypes" :value="item.id" :key="key">
                                        {{ item.label }}
                                    </option>
                                </select>

                                <div v-if="errors.has('bike_type:required')" class="form-error-text">
                                    Fiets is vereist
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="insurance">
                                    Huidige verzekeraar
                                </label>
                                <select
                                    name="insurance"
                                    id="insurance"
                                    v-model="contract.insurance"
                                    class="form-control border-input car-select error-wrap"
                                    v-validate="'required'"
                                >
                                    <option selected value="" disabled>
                                        Kies een verzekeraar
                                    </option>
                                    <option v-for="(item, key) in insurers" :value="item.value" :key="key">
                                        {{ item.name }}
                                    </option>
                                    <option value="Overig">
                                        Overig
                                    </option>
                                </select>

                                <div v-if="errors.has('insurance:required')" class="form-error-text">
                                    Verzekeraar is vereist
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>
                                    De verzekering stopt:
                                </label>
                                <div>
                                    <u-radio
                                        v-for="item in dateRadioButtons"
                                        name="has_date"
                                        v-model="dateToggle"
                                        view="inline"
                                        :label="item.name"
                                        :value="item.value"
                                        :key="item.value"
                                    />
                                </div>
                            </div>
                            <div class="form-group" v-if="hasDate">
                                <label>Afloopdatum</label>
                                <datepicker
                                    :date.sync="date"
                                    :config="{
                                        setMinDateNotFuture: contract.expiration_date
                                            ? contract.expiration_date
                                            : new Date(),
                                    }"
                                />

                                <div v-if="errors.has('datepicker:required')" class="form-error-text">
                                    Afloopdatum is vereist
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="price">
                                    Prijs
                                </label>
                                <div class="input-group border-input">
                                    <span class="input-group-addon">
                                        €
                                    </span>
                                    <input
                                        id="price"
                                        type="text"
                                        v-model="contract.price"
                                        placeholder="Prijs per maand"
                                        name="price"
                                        v-validate="{ regex:/^[0-9.]+$/, required: 'required' }"
                                        class="form-control border-input"
                                    >
                                </div>

                                <div v-if="errors.has('price:required')" class="form-error-text">
                                    Prijs is vereist
                                </div>

                                <div v-if="errors.has('price:regex')" class="form-error-text">
                                    Prijs moet numeriek zijn in het formaat (15.5 of 15)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group text-right">
                                <slot name="destroy-btn" :action="destroy"></slot>

                                <slot name="edit-btn" :action="edit"></slot>

                                <slot name="remove-btn" :action="remove"></slot>

                                <slot name="store-btn" :action="store"></slot>
                            </div>
                        </div>
                    </div>
                </form>
            </transition>
        </div>
    </div>
</template>

<script>
    import { eventHub } from '@/app'
    import * as BikeModel from '@/models/bike/BikeModel.js'
    import BaseContractForm from '../BaseContractForm.vue'
    import * as BikeContractPresenter from '@/presenters/contract/BikeContractPresenter'

    export default {
        extends: BaseContractForm,

        props: {
            route: {
                type: String,
                required: true
            },
            contract: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                isContentShown: false,
                insurers: BikeModel.insurers,
                bikeTypes: BikeModel.types,
                presenter: BikeContractPresenter
            }
        },

        created() {
            eventHub.$on('openEditSection', (id) => {
                this.isContentShown = (id === `#bike-${this.contract.order}`)
            })
        },

        methods: {
            remove() {
                this.$store.commit('REMOVE_BIKE_CONTRACT', this.contract.order)
            },

            hideForm() {
                this.isContentShown = false
            }
        }
    }
</script>

<style scoped>

</style>