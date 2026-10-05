<script lang="ts">
	interface Props {
		badge: string;
		title: string;
		subtitle?: string;
		centered?: boolean;
		theme?: 'light' | 'dark';
	}

	let { badge, title, subtitle, centered = false, theme = 'light' }: Props = $props();
</script>

<div class={centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}>
	<span
		class="badge-stamp font-semibold {theme === 'dark'
			? 'text-brand-oliveLight'
			: 'text-brand-olive'}"
	>
		{badge}
	</span>
	<h2
		class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mt-1 {theme === 'dark'
			? 'text-white'
			: 'text-brand-charcoal'}"
	>
		{title}
	</h2>
	{#if subtitle}
		<p
			class="text-sm sm:text-base mt-3 font-light leading-relaxed {theme === 'dark'
				? 'text-brand-lightstone'
				: 'text-brand-slate'}"
		>
			{subtitle}
		</p>
	{/if}
</div>
