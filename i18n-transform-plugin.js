const assert = require('assert');
const fs = require('fs');
const path = require('path');


const locales = ['en', 'es'];

const translations = {
    en: {
        hello: 'Hello',
        goodbye: 'Goodbye',
        thank_you: 'Thank you',
        world: 'World',
    },
    es: {
        hello: 'Hola',
        goodbye: 'Adiós',
        thank_you: 'Gracias',
        world: 'Mundo',
    },
};

module.exports = function urbnI18nSlugLoader(content) {
    const slugs = JSON.parse(content);

    const messages = {};
    locales.forEach((locale) => {
        messages[locale] = messages[locale] || {};

        slugs.forEach((slug) => {
            console.log(`Adding ${locale} translation for ${slug}...`);
            messages[locale][slug] = translations[locale][slug];
        });
    });

    return JSON.stringify(messages);
};
