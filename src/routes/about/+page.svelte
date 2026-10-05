<script lang="ts">
	import { milestoneData } from '#lib';
</script>

<svelte:head>
	<title>Wildflower — The Craft & Ethos | Sustainable Modern Millinery</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Editorial Header -->
	<div class="text-center max-w-3xl mx-auto mb-16">
		<span class="badge-stamp text-brand-olive font-semibold">Our Millinery Manifesto</span>
		<h1 class="font-serif text-4xl sm:text-6xl text-brand-charcoal mt-2">
			The Architecture of Slow Fashion
		</h1>
		<div class="w-16 h-0.5 bg-brand-olive mx-auto my-6"></div>
		<p class="text-base sm:text-lg text-brand-slate font-light leading-relaxed">
			In an era of mass-produced caps stamped from non-biodegradable synthetic polyesters,
			Wildflower honors the centuries-old lineage of European and American blocking.
		</p>
	</div>

	<!-- Feature Split Story 1: Heirloom Wood Blocks -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16">
		<div class="lg:col-span-6 space-y-5">
			<span class="badge-stamp text-brand-stone">Technique 01 &bull; Steam & Tension</span>
			<h2 class="font-serif text-3xl sm:text-4xl text-brand-charcoal">
				The Sculptor's Wooden Block
			</h2>
			<p class="text-sm sm:text-base text-brand-slate font-light leading-relaxed">
				Every hat begins as a loose hood of organic merino fleece or raw hand-plaited Toquilla straw.
				Instead of high-heat automated metal stampers that burn natural fibers, our milliners use
				gentle pressurized steam.
			</p>
			<p class="text-sm text-brand-slate font-light leading-relaxed">
				The steamed hood is manually pulled over aged walnut blocks, locked with cotton webbing, and
				allowed to cure at room temperature for 36 hours. This deliberate pace retains the wool's
				natural lanolin and elasticity, resulting in headwear that conforms to your skull over time.
			</p>
			<div
				class="p-4 bg-brand-chalk/60 rounded-xl border-l-4 border-brand-olive text-xs text-brand-slate italic"
			>
				"We don't force the fiber; we invite it into its permanent geometry." &mdash; Clara Vance
			</div>
		</div>
		<div class="lg:col-span-6">
			<div class="rounded-2xl overflow-hidden shadow-lg border border-brand-lightstone/80">
				<img
					src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80"
					alt="Artisan hands shaping hat felt"
					class="w-full h-[400px] object-cover filter grayscale-[15%]"
				/>
			</div>
		</div>
	</div>

	<!-- Feature Split Story 2: Sustainable Circularity -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16 lg:flex-row-reverse">
		<div class="lg:col-span-6 lg:order-2 space-y-5">
			<span class="badge-stamp text-brand-stone">Technique 02 &bull; Soil to Soil</span>
			<h2 class="font-serif text-3xl sm:text-4xl text-brand-charcoal">
				Closed-Loop Botanical Pigments
			</h2>
			<p class="text-sm sm:text-base text-brand-slate font-light leading-relaxed">
				Synthetic dyes leach heavy metal mordants into surrounding river basins. At Wildflower, our
				charcoal and stone grey colors are derived through controlled mineral baths, iron water, and
				upcycled walnut hulls sourced from orchard waste.
			</p>
			<p class="text-sm text-brand-slate font-light leading-relaxed">
				Even our interior sweatbands are crafted from vegetable-tanned goat hide or undyed organic
				hemp tape, stitched with unbleached cotton thread. If a Wildflower hat is ever laid to rest,
				it returns completely to the earth within twelve months.
			</p>
			<div class="grid grid-cols-2 gap-4 pt-2">
				<div class="bg-white p-3.5 rounded-xl border border-brand-lightstone/70">
					<span class="block text-brand-olive font-bold text-xs uppercase">OEKO-TEX 100</span>
					<span class="text-[11px] text-brand-stone">Certified harmless to skin</span>
				</div>
				<div class="bg-white p-3.5 rounded-xl border border-brand-lightstone/70">
					<span class="block text-brand-olive font-bold text-xs uppercase">Regenerative Wool</span>
					<span class="text-[11px] text-brand-stone">Carbon-negative pastures</span>
				</div>
			</div>
		</div>
		<div class="lg:col-span-6 lg:order-1">
			<div class="rounded-2xl overflow-hidden shadow-lg border border-brand-lightstone/80">
				<img
					src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80"
					alt="Raw natural textiles and botanicals"
					class="w-full h-[400px] object-cover filter grayscale-[25%]"
				/>
			</div>
		</div>
	</div>

	<!-- Brand Timeline / Heritage Milestone -->
	<div
		class="bg-brand-charcoal text-white rounded-3xl p-8 sm:p-14 my-16 border border-brand-slate"
	>
		<h3 class="font-serif text-3xl text-center mb-12">The Wildflower Milestones</h3>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			{#each milestoneData as item}
				<div class="border-t border-brand-slate pt-4">
					<span class="text-brand-oliveLight font-serif text-2xl font-bold">{item.year}</span>
					<h4 class="font-serif text-lg text-white mt-1">{item.title}</h4>
					<p class="text-xs text-brand-lightstone mt-2 font-light">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
