<template>
    <SuperTable
        :showMap="true"
        :model="superTableModel"
        @clickRow="openRecord"
        :displayMapField="false"
        :parentKeyValuePair="parentKeyValuePair"
        :fetchFlags="fetchFlags"
        :templateListGrid="templateListGrid"
        :viewAs="{
          show: [],
          default: 'grid'
        }"
        :allowedFilters="[]"
        :gridColWidth="colWidth"
    />
</template>

<script>
import { SuperTable } from 'wizweb-fe'
import Job from 'src/models/orm-api/Job'

export default {
  name: 'Job-list',
  components: {
      SuperTable,
  },


  data() {
    return {
      templateListGrid: {
        cols: [
          {
            width: 12,
            class: "q-pa-md q-col-gutter-sm",
            cols: [
              {
                width: 12,
                dataPoint: {
                  field: "school",
                },
              },
              {
                width: 12,
                dataPoint: {
                  field: "user",
                },
              },
              {
                width: 12,
                dataPoint: {
                  hideLabel: true,
                  field: "actions",
                },
              },
            ]
          },
        ],
      }
    }
  },
  props: {
    colWidth: {
      type: Number,
      default: () => {
        return 3
      }
    },
      parentKeyValuePair: {
          type: Object,
          default: () => ({})
      },
      fetchFlags: {
          type: Object,
          default: () => ({})
      }
  },

  computed: {
      superTableModel() {
          return Job
      },
  },
  methods: {
      openRecord(pVal, item, router) {
          router.push({
              name: '/lists/jobs/:rId/:rName',
              params: {
                  rId: pVal,
                  rName: pVal,
              },
          })
      },
  },
}
</script>
