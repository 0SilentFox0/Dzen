<template>
	<div id="Main">
		<Header/>
		<section>
			<div class="container">
				<h2 class="title">{{this.title}}</h2>
				<form class="main__form" @submit.prevent="onSubmit">
					<input
						required
						id="input-1"
						type="text"
						placeholder="000.000.00.00"
						class="form__input"
						v-model="ip"
						v-mask="'###.###.##.##'"
						:class="{ 'mod-group-error': error }"
					/>
					<Button :text="$t('message.getInfo')"/>
				</form>
				<Results/>
				<History/>
			</div>
		</section>
	</div>
</template>

<script>
	import Button from "../components/Button"
	import History from "../components/History";
	import Results from "../components/Results";
	import Header from "./Header";
	import gql from "graphql-tag";
	import {mapState} from "vuex";

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
		components: {
			History,
			Results,
			Header,
			Button
		},
		data() {
			return {
				ip: null,
				error: false,
				title: this.$t('message.ipAdress'),
			};
		},
		computed: {
			...mapState(["ipInfo"]),
		},
		methods: {
			async onSubmit() {
				this.title = this.$t('message.ipAdress');
				this.error = false;
				try {
					const result = await this.$apollo.query({
						variables: {ip: this.ip},
						query: GEO_LOCATION_QUERY,
					});
					this.$store.commit('setIpInfo', {...result.data.getLocation, ip: this.ip});
					this.ip = null;
				} catch {
					this.error = true;
					this.title = this.$t('message.error');
				}
			}
		},
	};
</script>

<style>
	.mod-group-error {
		border-color: red !important;
	}

	.container {
		max-width: 1000px;
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

	.main__form {
		display: flex;
		flex-direction: column;
	}

	.form__input {
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

	input::placeholder {
		font-family: Open Sans, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 22px;
		color: #ccc;
	}

	input:focus,
	input:focus-within {
		box-shadow: none !important;
		outline: none;
	}

	@media (max-width: 425px) {
		.form__input {
			width: 100%;
		}
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
		border-right: 1px solid #bbb;
		border-bottom: 1px solid #bbb;
		padding: 11px 12px 11px 16px;
		min-width: 130px;
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

	.defoult__td {
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
		color: #969696;
		padding: 11px 12px 11px 16px;
	}
</style>
