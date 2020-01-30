<template>
  <div id="Main">
    <h2 class="title">{{ this.title }}</h2>
    <form @submit.prevent="onSubmit">
      <input
        required
        @change="show"
        id="input-1"
        type="text"
        placeholder="000.000.00.00"
        :class="{ 'mod-group-success': indexBool }"
      />
      <button type="submit">Get information</button>
    </form>
    <h2 class="title">Result</h2>
    <div style="max-width: 100%; overflow: auto;">
      <table class="result">
        <tr>
          <th>IP address</th>
          <th>Continent/code</th>
          <th>Country/code</th>
          <th>City</th>
          <th>Postcode</th>
          <th>Coordinates</th>
        </tr>
        <tr class="table_second-row">
          <td>{{ this.ip }}</td>
<!--          <td>-->
<!--            {{ getLocation.continent.names.en }}/{{-->
<!--              getLocation.continent.code-->
<!--            }}-->
<!--          </td>-->
<!--          <td>-->
<!--            {{ getLocation.country.names.en }}/{{-->
<!--              getLocation.country.iso_code-->
<!--            }}-->
<!--          </td>-->
<!--          <td>{{ getLocation.city.names.en }}</td>-->
<!--          <td>{{ getLocation.postal.code }}</td>-->
<!--          <td>-->
<!--            {{ parseFloat(getLocation.location.latitude).toFixed(1) }}/{{-->
<!--              parseFloat(getLocation.location.longitude).toFixed(1)-->
<!--            }}-->
<!--          </td>-->
        </tr>
      </table>
    </div>
    <h2 class="title">History</h2>
    <div style="max-width: 100%; overflow: auto;">
      <table class="history">
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
    <button class="clear">Clear history</button>
  </div>
</template>

<script>
import gql from "graphql-tag";

const GEO_LOCATION_QUERY = gql`
  query GetLocation($ip: String!) {
    getLocation(ip: $ip) {
      continent {
        names {
          en
          ru
        }
        code
      }
      country {
        names {
          en
          ru
        }
        iso_code
      }
      city {
        names {
          en
          ru
        }
      }
      postal {
        code
      }
      location {
        latitude
        longitude
      }
    }
  }
`;
export default {
  name: "Main",
  data() {
    return {
      ip: "161.185.160.93",
      indexBool: false,
      title: "IP Adress"
      // ip: ""
    };
  },
  methods: {
    onSubmit() {
      this.indexBool = false;
      this.title = "IP Adress";
      this.$apollo.queries.getLocation.refetch();
    },
    show(e) {
      this.ip = e.target.value;
    }
  },
  apollo: {
    getLocation: {
      query: GEO_LOCATION_QUERY,
      variables() {
        return { ip: this.ip };
      },
      result({ data}) {
        if (data.getLocation.city == null) data.getLocation.city = "-";
        else if (data.getLocation.continent.names.en == null)
          data.getLocation.city = "-";
        else if (data.getLocation.country.names.en == null) data.getLocation.city = "-";
        else if (data.getLocation.postal == null) data.getLocation.city = "-";
        else if (data.getLocation.location == null) data.getLocation.city = "-";
        console.log(data.getLocation);
      },
      error(error) {
        console.log(error);
        if (error) {
          this.indexBool = true;
          this.title = "Error";
        }
      }
    }
  }
};
</script>

<style scoped>
.mod-group-success {
  border-color: red;
}
#Main {
  background: #ffffff;
  box-shadow: 0 0 50px rgba(230, 230, 230, 0.8);
  padding: 48px;
  width: 70%;
  margin: 57px auto;
}

.title {
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  margin-bottom: 8px;
  margin-top: 48px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;
  width: 396px;
  height: 45px;
  margin-bottom: 18px;
  padding-left: 18px;

  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #454545;
}

button {
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

button:hover {
  box-shadow: 0px 0px 20px rgba(255, 108, 108, 0.7);
}

@media (max-width: 425px) {
  input {
    width: 100%;
  }
  button {
    width: 100%;
  }
}

input::placeholder {
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #ccc;
}

input:focus,
input:focus-within,
button:focus,
button:focus-within {
  box-shadow: none !important;
  outline: none;
}

.clear {
  margin-top: 18px;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;
}

.result {
  width: 99%;
}

.history {
  width: 396px;
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

table tr:first-child th:first-child {
  border-top-left-radius: 6px;
}

table tr:first-child th:last-child {
  border-top-right-radius: 6px;
}

table tr:last-child td:first-child {
  border-bottom-left-radius: 6px;
}

table tr:last-child td:last-child {
  border-bottom-right-radius: 6px;
}
</style>
