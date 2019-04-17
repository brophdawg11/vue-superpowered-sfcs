import Vue from 'vue';
import VueI18n from 'vue-i18n'

import App from './App.vue';
import HelloWorld from './HelloWorld.vue';

console.log(`
Compiled Component:
-------------------
${JSON.stringify({
    ...HelloWorld,
    render: HelloWorld.render.toString(),
}, null, '    ')}
`);

console.log(`\
Generated i18n Messages:
------------------------
${JSON.stringify(JSON.parse(HelloWorld.__i18n[0]), null, '    ')}
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
