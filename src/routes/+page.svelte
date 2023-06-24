<script lang="ts">
	import { goto } from '$app/navigation'

	let points = 0

	async function route() {
		console.log(points)
		if (0 <= points && points <= 10) {
			await goto('/q/5')
		} else if (11 <= points && points <= 20) {
			await goto('/q/3')
		} else if (0 <= points && points <= 30) {
			await goto('/q/9')
		} else if (0 <= points && points <= 40) {
			await goto('/q/7')
		} else if (0 <= points && points <= 50) {
			await goto('/q/1')
		} else {
			await goto('/error')
		}
	}
</script>

<div class="w-full max-w-xs">
	<form class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="points">Vpišite število točk</label>
			<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="points" type="number" bind:value={points} />
		</div>

		<div class="flex items-center justify-between">
			<button
				on:click={route}
				class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				type="button"
			>
				Naprej
			</button>
		</div>
	</form>
</div>
