import Vue from 'vue';
import VueI18n from 'vue-i18n'

import App from './App.vue';
import HelloWorld from './HelloWorld.vue';

console.log(`


Compiled Component:
---------------------
${JSON.stringify(HelloWorld, null, '    ')}

Generated i18n Messages:
------------------------
${JSON.stringify(JSON.parse(HelloWorld.__i18n), null, '    ')}
`);

if (typeof window !== undefined) {
    Vue.use(VueI18n);
    const i18n = new VueI18n({ locale: 'en' });
    new Vue({
        el: '#app',
        i18n,
        render(h) {
            return h(App);
        },
    });
}
