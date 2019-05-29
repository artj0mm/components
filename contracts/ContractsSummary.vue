<template>
    <div>
        <h5><strong>Samenvatting</strong></h5>
        <div class="list-group">
            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Energie</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Energy').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Energy')"
                                :key="key"
                            >
                                <separated-list :items="contract" :presenter-name="'Energy'"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen energie contract
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Energy')"
                            :key="key"
                            :href="[`#energy-${contract.order}`]"
                            v-scroll-to="{
                                el: `#energy-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#energy-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('ENERGY')"
                            :href="[`#energy-${nextOrder('Energy')}`]"
                            v-scroll-to="{
                                el: `#energy-${nextOrder('Energy')}`,
                                container: '.main-panel'
                            }"
                            v-if="! contracts('Energy').length"
                        >
                            + Voeg contract toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Autoverzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Car').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Car')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Car"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen autoverzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Car')"
                            :key="key"
                            :href="[`#car-${contract.order}`]"
                            v-scroll-to="{
                                el: `#car-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#car-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('CAR')"
                            :href="[`#car-${nextOrder('Car')}`]"
                            v-scroll-to="{
                                el: `#car-${nextOrder('Car')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Fietsverzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Bike').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Bike')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Bike"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen fietsverzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Bike')"
                            :key="key"
                            :href="[`#bike-${contract.order}`]"
                            v-scroll-to="{
                                el: `#bike-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#bike-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('BIKE')"
                            :href="[`#bike-${nextOrder('Bike')}`]"
                            v-scroll-to="{
                                el: `#bike-${nextOrder('Bike')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Zorgverzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Health').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Health')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Health"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen zorgverzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Health')"
                            :key="key"
                            :href="[`#health-${contract.order}`]"
                            v-scroll-to="{
                                el: `#health-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#health-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('HEALTH')"
                            :href="[`#health-${nextOrder('Health')}`]"
                            v-scroll-to="{
                                el: `#health-${nextOrder('Health')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Motorverzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Motor').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Motor')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Motor"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen motorverzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Motor')"
                            :key="key"
                            :href="[`#motor-${contract.order}`]"
                            v-scroll-to="{
                                el: `#motor-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#motor-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('MOTOR')"
                            :href="[`#motor-${nextOrder('Motor')}`]"
                            v-scroll-to="{
                                el: `#motor-${nextOrder('Motor')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Brommer/scooter verzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Scooter').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Scooter')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Scooter"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen brommer/scooter verzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Scooter')"
                            :key="key"
                            :href="[`#scooter-${contract.order}`]"
                            v-scroll-to="{
                                el: `#scooter-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#scooter-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('SCOOTER')"
                            :href="[`#scooter-${nextOrder('Scooter')}`]"
                            v-scroll-to="{
                                el: `#scooter-${nextOrder('Scooter')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Internet  / Tv / Bellen</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Internet').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Internet')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Internet"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen internet  / tv / bellen contract
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Internet')"
                            :key="key"
                            :href="[`#internet-${contract.order}`]"
                            v-scroll-to="{
                                el: `#internet-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#internet-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('INTERNET')"
                            :href="[`#internet-${nextOrder('Internet')}`]"
                            v-scroll-to="{
                                el: `#internet-${nextOrder('Internet')}`,
                                container: '.main-panel'
                            }"
                            v-if="! contracts('Internet').length"
                        >
                            + Voeg contract toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Reisverzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Travel').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Travel')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Travel" />
                            </div>
                        </template>
                        <div v-else>
                            Geen reisverzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Travel')"
                            :key="key"
                            :href="[`#travel-${contract.order}`]"
                            v-scroll-to="{
                                el: `#travel-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#travel-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('TRAVEL')"
                            :href="[`#travel-${nextOrder('Travel')}`]"
                            v-scroll-to="{
                                el: `#travel-${nextOrder('Travel')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Woonhuisverzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('House').length > 0">
                            <div
                                v-for="(contract, key) in contracts('House')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="House" />
                            </div>
                        </template>
                        <div v-else>
                            Geen woonhuisverzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('House')"
                            :key="key"
                            :href="[`#house-${contract.order}`]"
                            v-scroll-to="{
                                el: `#house-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#house-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('HOUSE')"
                            :href="[`#house-${nextOrder('House')}`]"
                            v-scroll-to="{
                                el: `#house-${nextOrder('House')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-sm-3">
                        <strong>Huisdierverzekering</strong>
                    </div>
                    <div class="col-sm-6">
                        <template v-if="contracts('Pet').length > 0">
                            <div
                                v-for="(contract, key) in contracts('Pet')"
                                :key="key"
                            >
                                <separated-list :items="contract" presenter-name="Pet"/>
                            </div>
                        </template>
                        <div v-else>
                            Geen huisdierverzekering
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <a
                            v-for="(contract, key) in contracts('Pet')"
                            :key="key"
                            :href="[`#pet-${contract.order}`]"
                            v-scroll-to="{
                                el: `#pet-${contract.order}`,
                                container: '.main-panel'
                            }"
                            @click="openBlock(`#pet-${contract.order}`)"
                            role="button"
                            class="btn btn-block btn-xs btn-success"
                        >
                            Pas aan
                        </a>
                        <a
                            class="btn btn-block btn-xs btn-info btn-fill"
                            @click="addContract('PET')"
                            :href="[`#pet-${nextOrder('Pet')}`]"
                            v-scroll-to="{
                                el: `#pet-${nextOrder('Pet')}`,
                                container: '.main-panel'
                            }"
                        >
                            + Voeg verzekering toe
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="form-group">
                    <a href="/start" role="button" class="btn btn-success btn-fill btn-wd pull-right">
                        Opslaan
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { eventHub } from '@/app'
    import * as types from '@/store/mutationTypes'
    import SeparatedList from '../common/SeparatedList.vue'

    export default {
        components: {
            SeparatedList
        },

        computed: {

        },

        methods: {
            /**
             *
             * @param {string} contract
             * Contract parameter should be equal to the store module method
             * @return {Object}
             */
            contracts(contract) {
                return this.$store.getters[`get${contract}Contracts`].filter(contract => contract.id !== null)
            },

            /**
             *
             * @param {string} contract
             * Contract parameter should be in Uppercase
             * @return {void}
             */
            addContract(contract) {
                this.$store.commit(types[`ADD_${contract}_CONTRACT`])
            },

            openBlock(id) {
                eventHub.$emit('openEditSection', id)
            },

            nextOrder(contract) {
                return this.contracts(contract).length > 0 ? this.contracts(contract)[this.contracts(contract).length - 1].order + 1 : 0
            }
        }
    }
</script>

<style scoped>

</style>