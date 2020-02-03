<template>
  <div id="History">
    <h2 class="title">{{ $t("message.history") }}</h2>
    <div style="max-width: 100%; overflow: auto;">
      <table class="history__table">
        <tr>
          <th>{{ $t("message.ipAdress") }}</th>
          <th>{{ $t("message.country") }}</th>
          <th>{{ $t("message.city") }}</th>
        </tr>
        <tr v-if="!ipInfos.length">
          <td class="defoult__td">000.000.00.00</td>
          <td></td>
          <td></td>
        </tr>
        <tr
          class="table_second-row"
          v-for="(ipInfo, index) in ipInfos"
          :key="index"
        >
          <td>{{ ipInfo.ip || "-" }}</td>
          <td>
            {{ ipInfo.country ? ipInfo.country.names[$i18n.locale] : "-" }} /
            {{ ipInfo.country ? ipInfo.country.iso_code : "-" }}
          </td>
          <td
            v-if="
              $i18n.locale == 'ru' &&
                ipInfo.city &&
                ipInfo.city.names.ru == null
            "
          >
            {{ ipInfo.city.names.en }}
          </td>
          <td v-else-if="ipInfo.city">{{ ipInfo.city.names[$i18n.locale] }}</td>
          <td v-else>-</td>
        </tr>
      </table>
    </div>
    <Button
      style="margin-top: 18px"
      :text="$t('message.clear')"
      :clickCallback="() => this.$store.commit('clear')"
      :disabled="!ipInfos.length"
    />
  </div>
</template>

<script>
import Button from "./Button";
import { mapState } from "vuex";

export default {
  name: "History",
  components: {
    Button
  },
  computed: {
    ...mapState({
      ipInfos: state => state.ipInfo
    })
  }
};
</script>

<style scoped>
.history__clear {
  margin-top: 18px;
}

.history__table {
  width: 396px;
}

button:disabled {
  background: #e6e6e6;
  opacity: 0.85;
}

button:disabled:hover {
  box-shadow: none;
}
</style>
