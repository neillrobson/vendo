<template>
    <component :is="$route.meta.layout || 'div'">
        <router-view />
    </component>
</template>

<script>
import { PENDO_IDENTIFY } from './store/types/auth';
import { mapActions } from 'vuex';

export default {
    created() {
        this.pendoIdentify();
    },
    methods: {
        ...mapActions({
            pendoIdentify: PENDO_IDENTIFY
        })
    }
};
</script>
