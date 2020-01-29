<template>
  <div id="History">
    <h1>History</h1>
    <div style="max-width: 100%; overflow: auto;">
      <table>
        <tr>
          <th>IP address</th>
          <th>Country/code</th>
          <th>City</th>
        </tr>
        <tr class="table_second-row">
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <button>Clear history</button>
  </div>
</template>

<script>
export default {
  name: "History"
};
</script>

<style scoped>
#History {
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
  min-width: 100px;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  padding: 11px 10px;
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

@media (max-width: 425px) {
  button {
    width: 100%;
  }
}

button {
  margin-top: 18px;
  background: #ff5252;
  opacity: 0.85;
  border: none;
  border-radius: 8px;
  width: 254px;
  height: 48px;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
}

.disabled {
  background: #e6e6e6;
  opacity: 0.85;
}

input:focus,
input:focus-within,
button:focus,
button:focus-within {
  box-shadow: none !important;
  outline: none;
}

button:hover {
  box-shadow: 0 0 20px rgba(255, 108, 108, 0.7);
}
</style>
