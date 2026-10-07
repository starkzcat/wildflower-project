<script lang="ts">
	import type { Hat } from '#lib';
	import { hatModal } from '#lib';

	interface Props {
		hat: Hat;
		compact?: boolean;
	}

	let { hat, compact = false }: Props = $props();
</script>

<div
	class="bg-white rounded-2xl p-4 border border-brand-lightstone/80 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
>
	<div>
		<div
			class="relative overflow-hidden rounded-xl aspect-[3/4] bg-brand-canvas mb-4 cursor-pointer"
			onclick={() => hatModal.open(hat)}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					hatModal.open(hat);
				}
			}}
			role="button"
			tabindex="0"
			aria-label="Inspect {hat.title}"
		>
			<img
				src={hat.image}
				alt={hat.title}
				class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
				onerror={(e) => {
					const img = e.currentTarget as HTMLImageElement;
					img.src = `https://placehold.co/600x800/282b2e/f7f6f3?text=${encodeURIComponent(hat.title)}`;
				}}
			/>
			<!-- Material Tag -->
			<span
				class="absolute top-3 left-3 bg-brand-charcoal/90 text-brand-chalk text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
			>
				{hat.tag}
			</span>

			<!-- Available In Store Label -->
			<span
				class="absolute top-3 right-3 bg-brand-canvas text-brand-olive text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full border border-brand-olive/25 shadow-xs flex items-center gap-1.5"
			>
				<span class="w-1.5 h-1.5 rounded-full bg-brand-olive"></span>
				Available In Store
			</span>
		</div>

		<div class="space-y-1">
			<div class="flex items-center justify-between">
				<h3 class="font-serif text-xl text-brand-charcoal">{hat.title}</h3>
				{#if compact}
					<span class="text-xs font-medium text-brand-stone">{hat.color}</span>
				{/if}
			</div>
			{#if !compact}
				<span class="text-xs text-brand-olive font-medium block">{hat.color}</span>
			{/if}
			<p class="text-xs text-brand-stone leading-relaxed font-light mt-1">{hat.shortDesc}</p>
		</div>

		<!-- Store Information Row -->
		<div
			class="mt-3 pt-2.5 border-t border-brand-chalk/80 flex items-center justify-between text-[11px] text-brand-stone"
		>
			<span class="flex items-center gap-1.5">
				<i class="fa-solid fa-location-dot text-brand-olive text-[10px]"></i>
				<span>In {hat.stockists.length} partner boutiques</span>
			</span>
			<a
				href="/locator"
				class="text-brand-charcoal hover:text-brand-olive font-semibold transition-colors flex items-center gap-1"
			>
				<span>Find Store</span>
				<i class="fa-solid fa-arrow-right text-[9px]"></i>
			</a>
		</div>
	</div>

	{#if compact}
		<button
			type="button"
			onclick={() => hatModal.open(hat)}
			class="w-full mt-4 py-2.5 px-4 bg-brand-canvas hover:bg-brand-charcoal hover:text-white text-brand-charcoal text-xs font-medium rounded-xl transition-colors border border-brand-chalk text-center"
		>
			Inspect Craftsmanship
		</button>
	{:else}
		<div class="mt-4 pt-3 border-t border-brand-chalk flex items-center gap-2">
			<button
				type="button"
				onclick={() => hatModal.open(hat)}
				class="flex-1 py-2.5 px-3 bg-brand-canvas hover:bg-brand-charcoal hover:text-white text-brand-charcoal text-xs font-medium rounded-xl transition-colors border border-brand-lightstone/60 text-center"
			>
				Inspect Story & Specs
			</button>
			<a
				href="/locator"
				class="p-2.5 bg-brand-chalk hover:bg-brand-lightstone text-brand-charcoal text-xs rounded-xl transition-colors flex items-center justify-center"
				title="Locate In Store"
				aria-label="Locate In Store"
			>
				<i class="fa-solid fa-location-dot"></i>
			</a>
		</div>
	{/if}
</div>
