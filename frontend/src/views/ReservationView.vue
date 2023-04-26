<template>
  <NavbarComponent/>
  <div>
  <v-container >
  <v-data-table
    :headers="headers"
    :items="reservation"
    :sort-by="[{ key: 'CustomerID', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Manage Reservations</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              New Reservation
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.ReservationID"
                      label="ReservationID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.CustomerID"
                      label="CustomerID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.datestart"
                      label="Date Start"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dateEnd"
                      label="Date End"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.status"
                      label="Status"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.roomNum"
                      label="Room #"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.customerCheckIn"
                      label="Customer Reserve"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.employeeCheckIn"
                      label="Employee Reserve"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-edit>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-edit>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-edit>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-edit>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    
    <template v-slot:[`item.edit`]="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item.raw)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item.raw)"
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </v-container>
  </div>
</template>
<script>
  import NavbarComponent from '../components/NavbarComponent.vue';
  import dayjs from 'dayjs';

  export default {

    components:{
      NavbarComponent
    },

    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: 'Reservation ID',
          align: 'start',
          sortable: false,
          key: 'ReservationID',
        },
        { title: 'Customer ID', key: 'CustomerID' },
        { title: 'Date Start', key: 'datestart' },
        { title: 'Date End', key: 'dateEnd' },
        { title: 'Reservation Status', key: 'status' },
        { title: 'Room Number', key: 'roomNum'},
        { title: 'Customer Reservation', key: 'customerCheckIn' },
        { title: 'Employee Reservation', key: 'employeeCheckIn' },
        { title: 'Edit Entries', key: 'edit', sortable: false },
      ],
      reservation: [],
      editedIndex: -1,
      editedItem: {
        ReservationID: 0,
        CustomerID: 0,
        datestart: '',
        dateEnd: '',
        status: '',
        roomNum: 0,
        customerCheckIn: '',
        employeeCheckIn: '',
      },
      defaultItem: {
        ReservationID: 0,
        CustomerID: 0,
        datestart: '',
        dateEnd: '',
        status: '',
        roomNum: 0,
        customerCheckIn: '',
        employeeCheckIn: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Reservation' : 'Edit Reservation'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    

    methods: {
      initialize () {
        this.reservation = [
          {
            ReservationID: 1,
            CustomerID: 1,
            datestart: this.formatDate(this.formatDate('4/25/2023')),
            dateEnd: this.formatDate(this.formatDate('5/4/2023')),
            status: 'Pending',
            roomNum: 1001,
            customerCheckIn: 'Yes',
            employeeCheckIn: 'N/A',
          },
          {
            ReservationID: 2,
            CustomerID: 2,
            datestart: this.formatDate('4/26/2023'),
            dateEnd: this.formatDate('4/27/2023'),
            status: 'Reserved',
            roomNum: 2004,
            customerCheckIn: 'No',
            employeeCheckIn: 'Employee 1',
          },
          {
            ReservationID: 3,
            CustomerID: 3,
            datestart: this.formatDate('4/28/2023'),
            dateEnd: this.formatDate('4/29/2023'),
            status: 'Reserved',
            roomNum: 1016,
            customerCheckIn: 'No',
            employeeCheckIn: 'Employee 2',
          },
          {
            ReservationID: 4,
            CustomerID: 4,
            datestart: this.formatDate('4/27/2023'),
            dateEnd: this.formatDate('4/30/2023'),
            status: 'Pending',
            roomNum: 2004,
            customerCheckIn: 'Yes',
            employeeCheckIn: 'N/A',
          },
          {
            ReservationID: 5,
            CustomerID: 5,
            datestart: this.formatDate('4/30/2023'),
            dateEnd: this.formatDate('5/2/2023'),
            status: 'Reserved',
            roomNum: 2023,
            customerCheckIn: 'No',
            employeeCheckIn: 'Employee 3',
          },
          {
            ReservationID: 6,
            CustomerID: 6,
            datestart: this.formatDate('5/1/2023'),
            dateEnd: this.formatDate('5/4/2023'),
            status: 'Reserved',
            roomNum: 1012,
            customerCheckIn: 'No',
            employeeCheckIn: 'Employee 4',
          },
          {
            ReservationID: 7,
            CustomerID: 7,
            datestart: this.formatDate('4/28/2023'),
            dateEnd: this.formatDate('5/10/2023'),
            status: 'Reserved',
            roomNum: 1018,
            customerCheckIn: 'No',
            employeeCheckIn: 'Employee 5',
          },
          {
            ReservationID: 8,
            CustomerID: 8,
            datestart: this.formatDate('4/27/2023'),
            dateEnd: this.formatDate('4/30/2023'),
            status: 'Pending',
            roomNum: 2019,
            customerCheckIn: 'Yes',
            employeeCheckIn: 'N/A',
          },
          {
            ReservationID: 9,
            CustomerID: 9,
            datestart: this.formatDate('4/25/2023'),
            dateEnd: this.formatDate('4/27/2023'),
            status: 'Reserved',
            roomNum: 1017,
            customerCheckIn: 'No',
            employeeCheckIn: 'Employee 6',
          },
          {
            ReservationID: 10,
            CustomerID: 10,
            datestart: this.formatDate('4/27/2023'),
            dateEnd: this.formatDate('4/28/2023'),
            status: 'Reserved',
            roomNum: 2014,
            customerCheckIn: 'No',
            employeeCheckIn: 'Employee 7',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.reservation.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.reservation.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.reservation.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.reservation[this.editedIndex], this.editedItem)
        } else {
          this.reservation.push(this.editedItem)
        }
        this.close()
      },

      formatDate(dateString) {
            const date = dayjs(dateString);
                // Then specify how you want your dates to be formatted
            return date.format('MM/DD/YYYY');
        }
    
      
    },
  }
</script>