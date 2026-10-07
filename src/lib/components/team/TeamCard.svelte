<script lang="ts">
	import type { TeamMember } from '#lib';

	interface Props {
		member: TeamMember;
	}

	let { member }: Props = $props();
</script>

<div
	class="bg-white rounded-2xl p-6 border border-brand-lightstone/70 shadow-sm flex flex-col justify-between"
>
	<div>
		<div class="relative overflow-hidden rounded-xl aspect-square mb-6 bg-brand-stone/10">
			<img
				src={member.image}
				alt="{member.name} - {member.role}"
				class="w-full h-full object-cover object-top"
				onerror={(e) => {
					const img = e.currentTarget as HTMLImageElement;
					img.src = `https://placehold.co/600x600/44484d/e9eae8?text=${encodeURIComponent(member.name)}`;
				}}
			/>
			<div
				class="absolute bottom-2 right-2 bg-brand-charcoal/90 text-white text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider"
			>
				{member.badge}
			</div>
		</div>
		<h3 class="font-serif text-2xl text-brand-charcoal">{member.name}</h3>
		<p class="text-xs uppercase font-semibold text-brand-olive tracking-wider mt-0.5 mb-3">
			{member.role}
		</p>
		<p class="text-xs text-brand-slate leading-relaxed font-light">
			{member.bio}
		</p>
	</div>
	<div class="mt-6 pt-4 border-t border-brand-chalk text-[11px] text-brand-stone italic font-serif">
		"{member.quote}"
	</div>
</div>
