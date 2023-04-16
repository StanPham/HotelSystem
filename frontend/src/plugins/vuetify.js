import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDataTable } from 'vuetify/labs/VDataTable'


// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VDataTable,
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
