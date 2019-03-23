<template>
    <div id="app">
        <HelloWorld />
        <button @click="setLocale('en')">English</button>
        <button @click="setLocale('es')">Espanol</button>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale;
        },
    },
};
</script>

