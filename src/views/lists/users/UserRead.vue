<template>

            <SuperRecord
                :model="superRecordModel"
                :id="+$route.params.rId"
                :displayMapField="true"
                @initialLoadHappened="$emit('initialLoadHappened')"
                :templateOverview="templateListGrid"
                hideRelations
            >
            </SuperRecord>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import User from 'src/models/User'
import {computed} from "vue";
import VueCookies from "vue-cookies";

export default {
    name: 'User-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return User
        },
    },
  data(){
      return {

        templateListGrid: {
          class: "q-pa-md q-col-gutter-md",
          cols: [
            {
              width: 12,
              dataPoint: {
                type: "function",
                function: (item) => `${item.name}`,
                label: "",
                tag: "div",
                class: "text-h6",
                hideLabel: true,
              },
            },
            {
              width: 3,
              dataPoint: {
                type: "function",
                function: (item) => `${item.email}`,
                label: "Email",
                // xOrientation: true,
              },
            },
          ],
        },
      }
  }
}
</script>

<style scoped></style>
