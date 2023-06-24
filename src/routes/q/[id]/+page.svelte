<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="w-full">
	<form class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
		<div class="mb-2 block pb-8 text-sm font-bold text-gray-700">
			{data.id.toString() + '. ' + data.question}
		</div>

		<div class="flex items-center justify-between">
			{#if data.answer != undefined && data.answer.length === 1}
				<a
					class="inline-block border border-gray-300 bg-gray-200 px-10 py-4 align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
					href={data.answer[0].toString()}>Pojdi</a
				>
			{/if}
			{#if data.answer != undefined && data.answer.length === 2}
				<a
					class="inline-block border border-gray-300 bg-gray-200 px-10 py-4 align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
					href={data.answer[0].toString()}>Da</a
				>
				<a
					class="inline-block border border-gray-300 bg-gray-200 px-10 py-4 align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
					href={data.answer[1].toString()}>Ne</a
				>
			{/if}
			{#if data.answer != undefined && data.answer.length === 4}
				<a
					class="inline-block border border-gray-300 bg-gray-200 px-10 py-4 align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
					href={data.answer[1].toString()}>{data.answer[0]}</a
				>
				<a
					class="inline-block border border-gray-300 bg-gray-200 px-10 py-4 align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
					href={data.answer[3].toString()}>{data.answer[2]}</a
				>
			{/if}
		</div>
	</form>
</div>
