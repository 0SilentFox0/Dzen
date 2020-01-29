<template>
  <div id="form">
    <h2>IP Address</h2>
    <form @submit.prevent="onSubmit">
      <input
        id="input-1"
        v-model="IP"
        type="text"
        required
        placeholder="000.000.00.00"
        v-mask="'###.###.##.##'"
      />
      <button>Get information</button>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";

const GEO_LOCATION_QUERY = gql`
  query GetLocation($ip: String!) {
    getLocation(ip: $ip) {
      country {
        names {
          en
        }
        geoname_id
        iso_code
      }
      location {
        latitude
        longitude
      }
    }
  }
`;

export default {
  name: "Form",
  data() {
    return {
      ip: "189.59.228.170"
    };
  },
  methods: {
    onSubmit() {
      this.IP = null;
    }
  }
};
</script>

<style scoped>
#form {
  font-family: Open San, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
}

h2 {
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  margin-bottom: 8px;
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

button:hover {
  box-shadow: 0px 0px 20px rgba(255, 108, 108, 0.7);
}
</style>
