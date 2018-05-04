import Vue from 'vue';
import VueI18n from 'vue-i18n';
import langEn from './i18n/en.json';
import langRu from './i18n/ru.json';

Vue.use(VueI18n);

export default  new VueI18n({
    locale: 'ru',
    messages: {
        en: langEn,
        ru: langRu,
    },
});
