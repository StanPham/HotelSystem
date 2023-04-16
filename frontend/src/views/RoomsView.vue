<template>
    <v-data-table
      :headers="headers"
      :items="rooms"
      :sort-by="[{ key: 'roomNum', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Room Management</v-toolbar-title>
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
                New Room
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
                        v-model="editedItem.name"
                        label="Room ID"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.roomNum"
                        label="Type"
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
                        v-model="editedItem.res"
                        label="Res Status"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.condition"
                        label="Condition"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
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
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this room?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
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
  </template>


<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: 'Room ID',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Type', key: 'type' },
        { title: 'Room #', key: 'roomNum' },
        { title: 'Reservation Status', key: 'res' },
        
        { title: 'Condition', key: 'condition' },
        
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      rooms: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        type: '',
        roomNum: 0,
        res: 0,
        condition: 0,
        
      },
      defaultItem: {
        name: '',
        type: '',
        roomNum: 0,
        res: 0,
        condition: 0,
        
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
        this.rooms = [
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          {
            name: '643b1c93d2254f648e39ebf8',
            type: 'Queen',
            roomNum: '01',
            res: 'yes',
            condition: 'dirty',
            
          },
          
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.rooms.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.rooms.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.rooms.splice(this.editedIndex, 1)
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
          Object.assign(this.rooms[this.editedIndex], this.editedItem)
        } else {
          this.rooms.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>