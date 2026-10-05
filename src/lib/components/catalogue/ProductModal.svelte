<script lang="ts">
	import { hatModal } from '#lib';

	const modalState = $derived(hatModal.current);
	const hat = $derived(modalState.hat);

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && modalState.isOpen) {
			hatModal.close();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			hatModal.close();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if modalState.isOpen && hat}
	<div
		class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
		onclick={handleBackdropClick}
		onkeydown={(e) => {
			if (e.key === 'Escape') hatModal.close();
		}}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
	>
		<div
			class="bg-brand-canvas max-w-3xl w-full rounded-3xl shadow-2xl border border-brand-lightstone overflow-hidden relative transform transition-all my-8"
		>
			<!-- Close button -->
			<button
				type="button"
				onclick={() => hatModal.close()}
				class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-charcoal text-white flex items-center justify-center hover:bg-brand-slate transition-colors"
				aria-label="Close modal"
			>
				<i class="fa-solid fa-xmark text-sm"></i>
			</button>

			<div class="grid grid-cols-1 md:grid-cols-12">
				<!-- Modal Image -->
				<div class="md:col-span-5 bg-white p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-chalk">
					<div class="rounded-2xl overflow-hidden aspect-[4/5] w-full max-h-[380px]">
						<img
							src={hat.image}
							alt={hat.title}
							class="w-full h-full object-cover object-center filter grayscale-[10%]"
							onerror={(e) => {
								const img = e.currentTarget as HTMLImageElement;
								img.src = `https://placehold.co/600x800/282b2e/f7f6f3?text=${encodeURIComponent(hat.title)}`;
							}}
						/>
					</div>
				</div>

				<!-- Modal Information & Craftsmanship Story -->
				<div class="md:col-span-7 p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
					<div>
						<span class="badge-stamp text-brand-olive font-semibold">{hat.tag}</span>
						<h3 id="modal-title" class="font-serif text-3xl text-brand-charcoal font-normal mt-1">
							{hat.title}
						</h3>
						<p class="text-xs text-brand-stone font-medium">Finished Color: {hat.color}</p>
					</div>

					<div class="border-t border-b border-brand-chalk py-3">
						<h4 class="text-xs uppercase font-bold text-brand-charcoal tracking-wider mb-1">
							Craftsmanship & Origin Story
						</h4>
						<p class="text-xs text-brand-slate leading-relaxed font-light">
							{hat.story}
						</p>
					</div>

					<!-- Technical Specs Table -->
					<div class="grid grid-cols-2 gap-3 text-xs bg-white p-3.5 rounded-xl border border-brand-lightstone/60">
						<div>
							<span class="text-brand-stone block text-[10px] uppercase font-semibold">Crown Height</span>
							<span class="font-medium text-brand-charcoal">{hat.crown}</span>
						</div>
						<div>
							<span class="text-brand-stone block text-[10px] uppercase font-semibold">Brim Width</span>
							<span class="font-medium text-brand-charcoal">{hat.brim}</span>
						</div>
						<div>
							<span class="text-brand-stone block text-[10px] uppercase font-semibold">Fiber Grade</span>
							<span class="font-medium text-brand-charcoal">{hat.grade}</span>
						</div>
						<div>
							<span class="text-brand-stone block text-[10px] uppercase font-semibold">Blocking Time</span>
							<span class="font-medium text-brand-charcoal">{hat.cureTime}</span>
						</div>
					</div>

					<!-- Stockist Availability Prompt -->
					<div class="pt-2">
						<h4 class="text-xs uppercase font-bold text-brand-charcoal tracking-wider mb-2">
							Available At Stockists:
						</h4>
						<div class="flex flex-wrap gap-2">
							{#each hat.stockists as stockist}
								<span
									class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-chalk/80 text-brand-charcoal rounded-lg text-[11px] font-medium border border-brand-lightstone/60"
								>
									<i class="fa-solid fa-store text-brand-olive text-[10px]"></i>
									{stockist}
								</span>
							{/each}
						</div>
					</div>

					<div class="pt-2 flex gap-3">
						<a
							href="/locator"
							onclick={() => hatModal.close()}
							class="flex-1 bg-brand-charcoal hover:bg-brand-slate text-brand-chalk text-xs uppercase font-semibold tracking-wider py-3 px-4 rounded-xl text-center transition-all"
						>
							Locate In Store &rarr;
						</a>
						<button
							type="button"
							onclick={() => hatModal.copyLink()}
							class="px-4 py-3 bg-brand-chalk text-brand-charcoal hover:bg-brand-lightstone text-xs rounded-xl font-medium transition-colors"
							title="Copy Hat Reference"
						>
							<i class="fa-regular fa-copy"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
