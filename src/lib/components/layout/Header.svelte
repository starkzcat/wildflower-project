<script lang="ts">
	import { page } from "$app/state";

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	const navLinks = [
		{ href: "/", label: "Story & Home" },
		{ href: "/shop", label: "Digital Catalogue" },
		{ href: "/about", label: "The Craft & Ethos" },
		{ href: "/locator", label: "Store Locator" },
		{ href: "/privacy", label: "Privacy" },
	];
</script>

<header
	class="sticky top-0 z-40 bg-brand-canvas/95 backdrop-blur-md border-b border-brand-chalk transition-all duration-300"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-20 gap-3">
			<!-- Mobile Menu Toggle Button -->
			<button
				type="button"
				class="lg:hidden p-2 text-brand-slate hover:text-brand-charcoal transition-colors"
				aria-label="Toggle Navigation"
				aria-expanded={mobileMenuOpen}
				onclick={toggleMobileMenu}
			>
				<i
					class="fa-solid {mobileMenuOpen
						? 'fa-xmark'
						: 'fa-bars'} text-xl"
				></i>
			</button>

			<!-- Brand Identity / Logotype -->
			<a
				href="/"
				class="flex flex-col items-center lg:items-start group"
				onclick={closeMobileMenu}
			>
				<span
					class="font-serif text-3xl sm:text-4xl tracking-wider font-semibold text-brand-charcoal group-hover:text-brand-olive transition-colors"
				>
					WILDFLOWER
				</span>
				<span
					class="badge-stamp text-brand-stone font-semibold tracking-widest -mt-1"
				>
					Sustainable Millinery
				</span>
			</a>

			<!-- Desktop Navigation Links -->
			<nav
				class="hidden lg:flex items-center space-x-6 text-xs font-semibold uppercase tracking-widest text-brand-slate"
			>
				{#each navLinks as link}
					{@const isActive =
						page.url.pathname === link.href ||
						(link.href !== "/" &&
							page.url.pathname.startsWith(link.href))}
					<a
						href={link.href}
						class="py-1 relative transition-colors {isActive
							? 'text-brand-olive font-bold border-b-2 border-brand-olive'
							: 'hover:text-brand-olive'}"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Header Actions: Catalogue CTA & In-Store Finder Quick Link -->
			<div class="flex items-center gap-3">
				<a
					href="/locator"
					class="hidden sm:flex items-center gap-2 text-xs font-medium text-brand-slate hover:text-brand-charcoal px-3 py-2 border border-brand-lightstone rounded-full transition-all hover:border-brand-charcoal"
				>
					<i class="fa-solid fa-location-dot text-brand-olive"></i>
					<span>Find In Boutique</span>
				</a>
				<a
					href="/shop"
					class="bg-brand-charcoal hover:bg-brand-slate text-brand-chalk text-xs uppercase font-medium tracking-wider px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
				>
					View Catalogue
				</a>
			</div>
		</div>
	</div>

	<!-- Mobile Drawer Navigation -->
	{#if mobileMenuOpen}
		<div
			class="lg:hidden bg-brand-canvas border-b border-brand-chalk px-6 py-6 transition-all duration-300"
		>
			<div
				class="flex flex-col space-y-4 text-sm uppercase tracking-widest font-semibold text-brand-slate"
			>
				{#each navLinks as link}
					{@const isActive = page.url.pathname === link.href}
					<a
						href={link.href}
						class="text-left py-2 border-b border-brand-chalk/60 transition-colors {isActive
							? 'text-brand-olive font-bold'
							: 'hover:text-brand-charcoal'}"
						onclick={closeMobileMenu}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
