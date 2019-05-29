<template>
    <div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-simple content">
                    <contracts-summary />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <energy-contract />
                <pet-contract />
                <bike-contract />
                <house-contract />
                <car-contract />
                <internet-contract />
                <scooter-contract />
                <travel-contract />
                <motor-contract />
                <health-contract />
            </div>
        </div>
    </div>
</template>

<script>
    import BikeContract from './BikeContract/BikeContract'
    import ContractsSummary from './ContractsSummary'
    import HouseContract from './HouseContract/HouseContract'
    import EnergyContract from './EnergyContract/EnergyContract'
    import CarContract from './CarContract/CarContract'
    import PetContract from './PetContract/PetContract'
    import TravelContract from './TravelContract/TravelContract'
    import InternetContract from './InternetContract/InternetContract'
    import MotorContract from './MotorContract/MotorContract'
    import ScooterContract from './ScooterContract/ScooterContract'
    import HealthContract from './HealthContract/HealthContract'
    
    export default {
        components: {
            ContractsSummary,
            PetContract,
            EnergyContract,
            HouseContract,
            CarContract,
            MotorContract,
            BikeContract,
            TravelContract,
            ScooterContract,
            InternetContract,
            HealthContract,
        },
    }
</script>

<style scoped>

</style>