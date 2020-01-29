<template>
  <div id="Result">1
<!--    <h1>Result</h1>-->
<!--    <div style="max-width: 100%; overflow: auto;">-->
<!--      <table>-->
<!--        <tr>-->
<!--          <th>IP address</th>-->
<!--          <th>Continent/code</th>-->
<!--          <th>Country/code</th>-->
<!--          <th>City</th>-->
<!--          <th>Postcode</th>-->
<!--          <th>Coordinates</th>-->
<!--        </tr>-->
<!--        <tr class="table_second-row">-->
<!--          <td></td>-->
<!--          <td></td>-->
<!--          <td></td>-->
<!--          <td></td>-->
<!--          <td></td>-->
<!--          <td></td>-->
<!--        </tr>-->
<!--      </table>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Result",
};
</script>

<style scoped>
#Result {
  margin-top: 48px;
}

h1 {
  font-family: Open San, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  margin-bottom: 15px;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  width: 99%;
  text-align: center;
}

table tr th {
  padding: 11px;
  background: #656bf2;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
}

table tr td {
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  padding: 11px 11px;
}
table tr th:first-child,
table tr td:first-child {
  border-left: 1px solid #bbb;
}

/* top-left border-radius */
table tr:first-child th:first-child {
  border-top-left-radius: 6px;
}

/* top-right border-radius */
table tr:first-child th:last-child {
  border-top-right-radius: 6px;
}

/* bottom-left border-radius */
table tr:last-child td:first-child {
  border-bottom-left-radius: 6px;
}

/* bottom-right border-radius */
table tr:last-child td:last-child {
  border-bottom-right-radius: 6px;
}
</style>
