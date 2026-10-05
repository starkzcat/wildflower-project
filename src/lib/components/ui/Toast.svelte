<script lang="ts">
	import { toast } from '#lib';

	const current = $derived(toast.current);
</script>

<div
	id="toast"
	class="fixed bottom-6 right-6 z-50 transform transition-all duration-300 max-w-sm bg-brand-charcoal text-brand-chalk p-4 rounded-xl shadow-xl flex items-start space-x-3 pointer-events-auto {current.visible
		? 'translate-y-0 opacity-100'
		: 'translate-y-24 opacity-0 pointer-events-none'}"
	role="status"
	aria-live="polite"
>
	<div class="text-brand-oliveLight mt-0.5">
		<i class={current.icon}></i>
	</div>
	<div class="flex-1 text-xs">
		<h4 class="font-semibold text-white">{current.title}</h4>
		<p class="text-brand-lightstone mt-0.5 font-normal">{current.message}</p>
	</div>
	<button
		type="button"
		onclick={() => toast.hide()}
		class="text-brand-lightstone hover:text-white transition-colors"
		aria-label="Close notification"
	>
		<i class="fa-solid fa-xmark"></i>
	</button>
</div>
