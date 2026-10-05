<script lang="ts">
	import { toast } from '#lib';

	let newsletterEmail = $state('');

	function handleNewsletter(event: SubmitEvent) {
		event.preventDefault();
		const email = newsletterEmail.trim();
		if (!email) return;

		newsletterEmail = '';
		toast.show(
			'Parchment Subscribed',
			`Welcome to our dispatch, ${email}. We will notify you when Batch #04 blocks are ready.`
		);
	}

	function scrollToTop() {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
</script>

<footer class="bg-brand-charcoal text-brand-chalk border-t border-brand-slate pt-16 pb-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-brand-slate">
			<!-- Brand Identity & Millennial Manifesto -->
			<div class="md:col-span-5 space-y-4">
				<a href="/" class="block">
					<span class="font-serif text-3xl font-semibold tracking-wider text-white">WILDFLOWER</span>
					<span class="badge-stamp text-brand-lightstone block font-medium">Sustainable Modern Millinery</span>
				</a>
				<p class="text-xs text-brand-lightstone leading-relaxed max-w-sm font-light">
					Crafted for millennials who value slow aesthetics, heirloom walnut blocking, and zero synthetic
					shortcuts. Distributed exclusively through handpicked regional boutiques.
				</p>
				<div class="flex items-center space-x-4 text-sm text-brand-lightstone pt-2">
					<button
						type="button"
						onclick={() => toast.show('Instagram Dispatch', 'Redirecting to @wildflower.millinery journal.')}
						class="hover:text-white transition-colors"
						aria-label="Instagram"
					>
						<i class="fa-brands fa-instagram"></i>
					</button>
					<button
						type="button"
						onclick={() => toast.show('Pinterest Moodboard', 'Viewing our atelier palette.')}
						class="hover:text-white transition-colors"
						aria-label="Pinterest"
					>
						<i class="fa-brands fa-pinterest"></i>
					</button>
					<button
						type="button"
						onclick={() => toast.show('Spotify Studio Audio', 'Listening to Wildflower blocking room playlist.')}
						class="hover:text-white transition-colors"
						aria-label="Spotify"
					>
						<i class="fa-brands fa-spotify"></i>
					</button>
				</div>
			</div>

			<!-- Quick Links -->
			<div class="md:col-span-3 space-y-3 text-xs uppercase tracking-widest font-medium">
				<h4 class="text-white font-serif normal-case text-lg tracking-normal">Atelier Directory</h4>
				<ul class="space-y-2.5 text-brand-lightstone">
					<li><a href="/" class="hover:text-white transition-colors">Story & Values</a></li>
					<li><a href="/shop" class="hover:text-white transition-colors">Digital Catalogue</a></li>
					<li><a href="/about" class="hover:text-white transition-colors">Heirloom Craft Ethos</a></li>
					<li><a href="/locator" class="hover:text-white transition-colors">Find In Boutique</a></li>
					<li><a href="/privacy" class="hover:text-white transition-colors">Privacy & Data Ethics</a></li>
				</ul>
			</div>

			<!-- Seasonal Journal Dispatch (Newsletter Form) -->
			<div class="md:col-span-4 space-y-3">
				<h4 class="text-white font-serif text-lg">The Seasonal Dispatch</h4>
				<p class="text-xs text-brand-lightstone font-light leading-relaxed">
					We release only four hat runs per calendar year. Join our mailing parchment to receive batch
					announcements and boutique fitting schedules.
				</p>
				<form onsubmit={handleNewsletter} class="space-y-2 pt-1">
					<div class="flex items-center">
						<input
							type="email"
							bind:value={newsletterEmail}
							required
							placeholder="Enter your email address"
							class="bg-brand-slate/60 text-white placeholder-brand-lightstone text-xs px-4 py-3 rounded-l-full border border-brand-slate focus:outline-none focus:border-brand-oliveLight w-full"
						/>
						<button
							type="submit"
							class="bg-brand-oliveLight hover:bg-brand-olive text-white px-5 py-3 rounded-r-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
						>
							Join
						</button>
					</div>
					<p class="text-[10px] text-brand-stone">Zero marketing spam. You may cancel at any moment.</p>
				</form>
			</div>
		</div>

		<!-- Bottom Legal Row -->
		<div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-stone space-y-4 sm:space-y-0">
			<p>&copy; 2026 Wildflower Millinery Co. All rights reserved. Handcrafted with reverence.</p>
			<div class="flex space-x-6">
				<a href="/privacy" class="hover:text-brand-lightstone transition-colors">Privacy Policy</a>
				<span class="text-brand-slate">&bull;</span>
				<a href="/locator" class="hover:text-brand-lightstone transition-colors">Authorized Retailers</a>
				<span class="text-brand-slate">&bull;</span>
				<button type="button" onclick={scrollToTop} class="hover:text-brand-lightstone transition-colors">
					Back To Top &uarr;
				</button>
			</div>
		</div>
	</div>
</footer>
