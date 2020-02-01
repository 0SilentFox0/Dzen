<template>
	<div id="Results">
		<h2 class="title">{{ $t('message.result')}}</h2>
		<div style="max-width: 100%; overflow: auto;">
			<table class="result__table">
				<tr>
					<th>{{ $t('message.ipAdress')}}</th>
					<th>{{ $t('message.continent')}}</th>
					<th>{{ $t('message.country')}}</th>
					<th>{{ $t('message.city')}}</th>
					<th>{{ $t('message.postcode')}}</th>
					<th>{{ $t('message.coords')}}</th>
				</tr>
				<tr class="table_second-row" v-if="'ip' in ipInfo">
					<td>{{ ipInfo.ip || '-' }}</td>
					<td>
						{{ipInfo.continent ? ipInfo.continent.names[$i18n.locale] : '-' }} /
						{{ipInfo.continent ? ipInfo.continent.code : '-' }}
					</td>
					<td>
						{{ ipInfo.country ? ipInfo.country.names[$i18n.locale] : '-' }} /
						{{ ipInfo.country ? ipInfo.country.iso_code : '-' }}
					</td>
					<td>{{ ipInfo.city ? ipInfo.city.names[$i18n.locale] : '-' }}</td>
					<td>{{ ipInfo.postal ? ipInfo.postal.code : '-' }}</td>
					<td>
						{{ipInfo.location ? parseFloat(ipInfo.location.latitude ).toFixed(1) : '-' }} /
						{{ipInfo.location ? parseFloat(ipInfo.location.longitude).toFixed(1) : '-' }}
					</td>
				</tr>
				<tr v-else>
					<td class="defoult__td">000.000.00.00</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import {mapState} from "vuex";
	export default {
		name: "Results",
		computed: {
			...mapState({
				ipInfo: state => {
					if (state.ipInfo.length)
						return state.ipInfo[0];
					return {}
				}
			})
		},
	}
</script>

<style scoped>
	.result__table {
		width: 100%;
	}
</style>