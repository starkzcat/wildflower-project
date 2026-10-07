<script lang="ts">
	import { catalogueData, teamData } from "#lib";
	import ProductCard from "#lib/components/catalogue/ProductCard.svelte";
	import TeamCard from "#lib/components/team/TeamCard.svelte";
	import SectionHeader from "#lib/components/ui/SectionHeader.svelte";

	// Highlight the first 3 hats for the home lookbook preview
	const teaserHats = catalogueData.slice(0, 3);
</script>

<svelte:head>
	<title>Wildflower — Sustainable Modern Millinery | Story & Home</title>
</svelte:head>

<!-- HERO SECTION: Split Editorial Story with prominent Craft & Catalogue CTA -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
		<!-- Narrative Left Column (Prioritizing Story & Philosophy) -->
		<div class="lg:col-span-7 space-y-6">
			<div
				class="inline-flex items-center space-x-2 bg-brand-oliveMuted px-3.5 py-1.5 rounded-full border border-brand-olive/20 text-brand-olive text-xs font-semibold uppercase tracking-wider"
			>
				<span class="w-2 h-2 rounded-full bg-brand-olive animate-pulse"
				></span>
				<span>Conscious Millinery &bull; Autumn 2026 Collection</span>
			</div>

			<h1
				class="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-brand-charcoal"
			>
				Modern silhouettes, blocked with <em
					class="italic font-serif font-light text-brand-stone"
					>ancestral patience.</em
				>
			</h1>

			<p
				class="text-base sm:text-lg text-brand-slate max-w-xl font-light leading-relaxed editorial-dropcap"
			>
				We founded Wildflower in rebellion against disposable culture.
				Our headwear is not churned out by factory conveyers; every brim
				is steamed, blocked over heritage wooden molds, and shaped by
				hand using 100% natural, regeneratively farmed fibers made to
				outlive passing trends.
			</p>

			<div
				class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
			>
				<a
					href="/shop"
					class="inline-flex justify-center items-center gap-3 bg-brand-charcoal hover:bg-brand-slate text-brand-chalk px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg"
				>
					<span>Explore the Collection</span>
					<i class="fa-solid fa-arrow-right text-xs"></i>
				</a>

				<a
					href="/about"
					class="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-brand-chalk/60 text-brand-charcoal border border-brand-lightstone px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
				>
					<span>Read Our Ethics</span>
				</a>
			</div>

			<!-- Quick Trust Badges -->
			<div
				class="pt-6 border-t border-brand-chalk grid grid-cols-3 gap-4 text-left"
			>
				<div>
					<span class="block font-serif text-2xl text-brand-charcoal"
						>100%</span
					>
					<span
						class="text-[11px] text-brand-stone uppercase tracking-wider font-semibold"
						>Zero-Plastic Fibers</span
					>
				</div>
				<div>
					<span class="block font-serif text-2xl text-brand-charcoal"
						>48 Hrs</span
					>
					<span
						class="text-[11px] text-brand-stone uppercase tracking-wider font-semibold"
						>Handcraft per Batch</span
					>
				</div>
				<div>
					<span class="block font-serif text-2xl text-brand-charcoal"
						>14</span
					>
					<span
						class="text-[11px] text-brand-stone uppercase tracking-wider font-semibold"
						>Partner Boutiques</span
					>
				</div>
			</div>
		</div>

		<!-- Hero Right Column: High Quality Editorial Visuals with Artisan Stamp -->
		<div class="lg:col-span-5 relative">
			<div
				class="rounded-2xl overflow-hidden border border-brand-lightstone/80 bg-white p-3 shadow-xl"
			>
				<div class="relative overflow-hidden rounded-xl aspect-[4/5]">
					<img
						src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=1000&q=80"
						alt="Model wearing handcrafted modern stone felt fedora"
						class="w-full h-full object-cover object-center filter grayscale-[20%] hover:scale-105 transition-transform duration-700"
						onerror={(e) => {
							const img = e.currentTarget as HTMLImageElement;
							img.src =
								"https://placehold.co/800x1000/282b2e/f7f6f3?text=Wildflower+Millinery";
						}}
					/>
				</div>

				<!-- Artisan Floating Stamp -->
				<div
					class="absolute -bottom-4 -left-4 bg-brand-charcoal text-brand-chalk p-4 rounded-2xl shadow-xl max-w-[210px] border border-brand-slate hidden sm:block"
				>
					<div class="flex items-center gap-2 mb-1">
						<i
							class="fa-solid fa-feather text-brand-oliveLight text-sm"
						></i>
						<span class="badge-stamp text-brand-lightstone"
							>Heritage Blocked</span
						>
					</div>
					<p class="text-[11px] text-brand-chalk leading-snug">
						Each piece bears the hand-stamped signature of the
						milliner who shaped it.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- BRAND VALUES / PHILOSOPHY STRIP -->
<section
	class="bg-brand-charcoal text-brand-chalk py-16 px-4 sm:px-6 lg:px-8 border-y border-brand-slate"
>
	<div class="max-w-7xl mx-auto">
		<SectionHeader
			badge="Our Guiding Conviction"
			title="Elegance is measured by what we leave behind."
			subtitle="We design specifically for millennials who seek enduring personal expression without contributing to landfill devastation."
			centered={true}
			theme="dark"
		/>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
			<!-- Value 1 -->
			<div
				class="bg-brand-slate/40 border border-brand-slate p-8 rounded-2xl relative group hover:border-brand-oliveLight transition-all"
			>
				<div
					class="w-12 h-12 rounded-xl bg-brand-charcoal border border-brand-slate flex items-center justify-center text-brand-oliveLight text-xl mb-6"
				>
					<i class="fa-solid fa-seedling"></i>
				</div>
				<h3 class="font-serif text-2xl text-white mb-2">
					Regenerative Sourcing
				</h3>
				<p
					class="text-sm text-brand-lightstone leading-relaxed font-light"
				>
					Our raw felts come from heritage wool farms practicing
					rotational grazing in the Pacific Northwest and organic
					Toquilla palm harvested sustainably in Ecuador.
				</p>
				<div
					class="mt-4 pt-4 border-t border-brand-slate/60 text-[11px] font-semibold tracking-wider uppercase text-brand-oliveLight"
				>
					100% Certified Traceability
				</div>
			</div>

			<!-- Value 2 -->
			<div
				class="bg-brand-slate/40 border border-brand-slate p-8 rounded-2xl relative group hover:border-brand-oliveLight transition-all"
			>
				<div
					class="w-12 h-12 rounded-xl bg-brand-charcoal border border-brand-slate flex items-center justify-center text-brand-oliveLight text-xl mb-6"
				>
					<i class="fa-solid fa-shapes"></i>
				</div>
				<h3 class="font-serif text-2xl text-white mb-2">
					Heirloom Wooden Blocks
				</h3>
				<p
					class="text-sm text-brand-lightstone leading-relaxed font-light"
				>
					We refuse plastic molds. Crowns and brims are manually
					steamed and stretched over carved walnut blocks dating back
					to the mid-century, ensuring unique curvature and
					durability.
				</p>
				<div
					class="mt-4 pt-4 border-t border-brand-slate/60 text-[11px] font-semibold tracking-wider uppercase text-brand-oliveLight"
				>
					Zero Toxic Glues or Resins
				</div>
			</div>

			<!-- Value 3 -->
			<div
				class="bg-brand-slate/40 border border-brand-slate p-8 rounded-2xl relative group hover:border-brand-oliveLight transition-all"
			>
				<div
					class="w-12 h-12 rounded-xl bg-brand-charcoal border border-brand-slate flex items-center justify-center text-brand-oliveLight text-xl mb-6"
				>
					<i class="fa-solid fa-shop"></i>
				</div>
				<h3 class="font-serif text-2xl text-white mb-2">
					Slow Boutique Distribution
				</h3>
				<p
					class="text-sm text-brand-lightstone leading-relaxed font-light"
				>
					By intentionally keeping sales in physical partner boutiques
					rather than rapid direct-to-door mailers, we protect local
					retail culture and eliminate excessive shipping emissions.
				</p>
				<div
					class="mt-4 pt-4 border-t border-brand-slate/60 text-[11px] font-semibold tracking-wider uppercase text-brand-oliveLight"
				>
					Intentional In-Person Fitting
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CURATED CATALOGUE TEASER -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
	<div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
		<div>
			<span class="badge-stamp text-brand-olive font-semibold"
				>Seasonal Lookbook</span
			>
			<h2
				class="font-serif text-3xl sm:text-5xl text-brand-charcoal mt-1"
			>
				Curated Hat Silhouettes
			</h2>
			<p class="text-sm text-brand-stone mt-2 max-w-lg font-normal">
				A brief preview of our current atelier collection. Every item
				can be inspected in detail or tried on at our partner retailers.
			</p>
		</div>
		<a
			href="/shop"
			class="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-charcoal border-b-2 border-brand-charcoal pb-1 hover:text-brand-olive hover:border-brand-olive transition-colors"
		>
			<span>Browse Full Catalogue (6 Styles)</span>
			<i class="fa-solid fa-arrow-right"></i>
		</a>
	</div>

	<!-- 3 Highlight Cards -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		{#each teaserHats as hat}
			<ProductCard {hat} compact={true} />
		{/each}
	</div>
</section>

<!-- ABOUT THE TEAM SECTION -->
<section class="bg-brand-chalk/50 py-20 border-t border-brand-chalk">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeader
			badge="The People Behind The Blocks"
			title="Meet The Makers"
			subtitle="Wildflower is guided by three craft practitioners dedicated to proving that millennial fashion can honor heritage techniques and ecological limits."
			centered={true}
		/>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
			{#each teamData as member}
				<TeamCard {member} />
			{/each}
		</div>
	</div>
</section>

<!-- CALL TO ACTION BANNER: Retail Store Locator Invitation -->
<section
	class="bg-brand-canvas py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-lightstone/60"
>
	<div
		class="max-w-5xl mx-auto bg-brand-charcoal text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden"
	>
		<div class="relative z-10 max-w-xl">
			<span class="badge-stamp text-brand-oliveLight"
				>Try On In Person</span
			>
			<h2 class="font-serif text-3xl sm:text-4xl mt-2 font-normal">
				Experience the texture of slow craftsmanship.
			</h2>
			<p
				class="text-brand-lightstone text-sm sm:text-base mt-4 font-light leading-relaxed"
			>
				We believe a proper hat fit is intimate. Visit one of our 14
				certified retail partner stockists across New York, Paris,
				Tokyo, London, and Los Angeles.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a
					href="/locator"
					class="bg-brand-oliveLight hover:bg-brand-olive text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
				>
					Find Your Nearest Boutique
				</a>
				<a
					href="/shop"
					class="bg-transparent border border-brand-lightstone text-brand-chalk hover:bg-white/10 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
				>
					View All Hats First
				</a>
			</div>
		</div>

		<div
			class="absolute -right-10 -bottom-10 opacity-10 text-9xl text-white pointer-events-none font-serif"
			aria-hidden="true"
		>
			<i class="fa-solid fa-compass"></i>
		</div>
	</div>
</section>
