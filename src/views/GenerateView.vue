<template>
    <div>
        {{password}}
    </div>
</template>
<script>
import { mapState } from 'pinia';
import { usePasswordStore } from '../stores/password';

export default {
    computed: {
        ...mapState(usePasswordStore, ['password'])
    }
}
</script>
<style>
    
</style>