import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#073367',
        secondary: '#4086DA',
      },
    },
    options: { customProperties: true },
  },
});
