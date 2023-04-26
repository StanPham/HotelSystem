// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'

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
