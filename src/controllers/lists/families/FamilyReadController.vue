<template>
  <div>

    <q-card class="q-mb-md" style="overflow: hidden;">
      <!--hideRelations-->
      <familyRead
        :id="id"
        :templateOverview="templateListGrid"
        @initialLoadHappened="initialLoadHappened = true"
      />
    </q-card>
    <div
      v-show="initialLoadHappened"
    >

      <div class="row  q-col-gutter-md">

        <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12">

          <q-card class="">
            <q-expansion-item
              label="Calendar"
              expand-separator
              class="bordered-expansion-item"
              @show="renderSection2=true"
            >
              <div class="q-pa-md">
                <FamilyReadCalendarController
                  v-if="renderSection2"
                />
              </div>
            </q-expansion-item>
          </q-card>
        </div>
        <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12">

          <q-card class="">
            <q-expansion-item
              label="Attendances"
              expand-separator
              class="bordered-expansion-item"
              @show="renderSection1=true"
            >
              <div class="q-pa-md">

                <attendanceList
                  v-if="renderSection1"
                  :parentKeyValuePair="{
                    parentFKey: 'family_id',
                    parentFVal: +this.$route.params.rId,
                    parentItem: {},
                  }"
                />
                <!--:colWidth="6"-->
              </div>
            </q-expansion-item>
          </q-card>

        </div>
        <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12">

          <q-card class="">
            <q-expansion-item
              label="Children"
              expand-separator
              class="bordered-expansion-item"
              @show="renderSection1=true"
            >
              <div class="q-pa-md">
                <child-list
                  v-if="renderSection1"
                  :parentKeyValuePair="{
                    parentFKey: 'family_id',
                    parentFVal: +this.$route.params.rId,
                    parentItem: {},
                  }"
                  :colWidth="6"

                />
              </div>
            </q-expansion-item>
          </q-card>

        </div>
        <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12">

          <q-card class="">
            <q-expansion-item
              label="Family Ties"
              expand-separator
              class="bordered-expansion-item"
              @show="renderSection1=true"
            >
              <div class="q-pa-md">
                <FamilyTyList
                  v-if="renderSection1"
                  :parentKeyValuePair="{
                    parentFKey: 'family_id',
                    parentFVal: +this.$route.params.rId,
                    parentItem: {},
                  }"
                  :colWidth="6"

                />
              </div>
            </q-expansion-item>
          </q-card>

        </div>

        <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12">

          <q-card class="">
            <q-expansion-item
              label="School Enrollments"
              expand-separator
              class="bordered-expansion-item"
              @show="renderSection1=true"
            >
              <div class="q-pa-md">

                <schoolFamilyEnrollmentList
                  v-if="renderSection1"
                  :parentKeyValuePair="{
                    parentFKey: 'family_id',
                    parentFVal: +this.$route.params.rId,
                    parentItem: {},
                  }"
                  :colWidth="6"

                />
              </div>
            </q-expansion-item>
          </q-card>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import familyRead from 'src/views/lists/families/FamilyRead.vue'
import SchoolFamilyEnrollmentList from "src/views/lists/school-family-enrollments/SchoolFamilyEnrollmentList.vue";
import ChildList from "src/views/lists/children/ChildList.vue";
import FamilyTyList from "src/views/lists/family-ties/FamilyTyList.vue";
import attendanceList from "src/views/lists/attendances/AttendanceList.vue";
import FamilyReadCalendarController from "src/views/lists/families/FamilyReadCalendar.vue";

export default {
    name: 'Family-read-controller',
    components: {
      FamilyReadCalendarController,
      attendanceList,
      FamilyTyList,
      ChildList,
      SchoolFamilyEnrollmentList,
        familyRead,
    },

    data() {
        return {
          initialLoadHappened: false,
          renderSection1: false,
          renderSection2: false,
            id: +this.$route.params.rId,
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
                // {
                //   width: 3,
                //   dataPoint: {
                //     type: "function",
                //     function: (item) => `${item.email}`,
                //     label: "Email",
                //     // xOrientation: true,
                //   },
                // },
              ],
            }
        }
    },
}
</script>
