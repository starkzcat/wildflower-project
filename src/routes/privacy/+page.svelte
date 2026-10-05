<script lang="ts">
	import { toast } from '#lib';

	function handleAcknowledge() {
		toast.show(
			'Privacy Acknowledged',
			'Your browser preferences remain strictly local and private.'
		);
	}
</script>

<svelte:head>
	<title>Wildflower — Privacy & Data Ethics Policy | Sustainable Modern Millinery</title>
</svelte:head>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<div class="border-b border-brand-chalk pb-6 mb-10">
		<span class="badge-stamp text-brand-olive font-semibold">Transparency & Compliance</span>
		<h1 class="font-serif text-4xl sm:text-5xl text-brand-charcoal mt-2">
			Privacy & Data Ethics Policy
		</h1>
		<p class="text-xs text-brand-stone mt-2">
			Effective Date: October 2026 &bull; Compliant with GDPR, CCPA, and Global Consumer Rights
		</p>
	</div>

	<div class="space-y-8 text-sm text-brand-slate leading-relaxed font-light">
		<section>
			<h2 class="font-serif text-2xl text-brand-charcoal font-normal mb-2">
				1. Our Non-Commercial Tracking Philosophy
			</h2>
			<p>
				At Wildflower Millinery ("Wildflower", "we", "our"), our commitment to sustainability
				extends to your personal data. We do not operate invasive advertising trackers, pixel
				beacons, or data broker integrations. This website functions primarily as an informational
				catalogue to support our physical retail partners.
			</p>
		</section>

		<section>
			<h2 class="font-serif text-2xl text-brand-charcoal font-normal mb-2">
				2. Information We Collect
			</h2>
			<p>
				Because we do not conduct financial transactions on this website, the information collected
				is minimal:
			</p>
			<ul class="list-disc pl-5 mt-2 space-y-1">
				<li>
					<strong>Email Communications:</strong> When you subscribe to our Seasonal Batch Journal, we
					collect your email address solely to deliver announcements of new hat collections and workshop
					events.
				</li>
				<li>
					<strong>Store Fitting Inquiries:</strong> When you request assistance locating a partner boutique,
					your zip code or city is processed locally within your browser and is not retained on our servers.
				</li>
				<li>
					<strong>Technical Telemetry:</strong> Essential server logs (such as IP addresses and browser
					types) are stored strictly for 14 days to mitigate cyber attacks and ensure site stability.
				</li>
			</ul>
		</section>

		<section>
			<h2 class="font-serif text-2xl text-brand-charcoal font-normal mb-2">
				3. Zero Third-Party Advertising Disclosures
			</h2>
			<p>
				We do not sell, rent, monetize, or trade your contact data. We never share subscriber records
				with programmatic ad brokers. Your data is accessed only by authorized Wildflower staff
				members (Clara Vance, Marcus Reed, and Elena Ortiz) for operational updates.
			</p>
		</section>

		<section>
			<h2 class="font-serif text-2xl text-brand-charcoal font-normal mb-2">
				4. Cookie Declaration
			</h2>
			<p>
				This website utilizes only essential functional cookies to remember your browsing preferences
				(such as selected catalogue filters). No behavioral profiling cookies are set.
			</p>
		</section>

		<section>
			<h2 class="font-serif text-2xl text-brand-charcoal font-normal mb-2">
				5. Your Data Rights
			</h2>
			<p>
				Under European GDPR and California CCPA regulations, you have the right to inspect, correct,
				export, or permanently delete any email record associated with you. To execute this, contact
				our data steward at:
				<br />
				<span class="font-medium text-brand-charcoal mt-1 inline-block">
					steward@wildflowermillinery.com &bull; 142 Mercer Street, New York, NY 10012
				</span>
			</p>
		</section>
	</div>

	<div class="mt-12 pt-8 border-t border-brand-chalk flex justify-between items-center">
		<a
			href="/"
			class="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-olive transition-colors"
		>
			&larr; Return to Brand Story
		</a>
		<button
			type="button"
			onclick={handleAcknowledge}
			class="bg-brand-charcoal hover:bg-brand-slate text-white text-xs px-5 py-2.5 rounded-full font-medium transition-colors"
		>
			Acknowledge Terms
		</button>
	</div>
</section>
