import type { Hat } from '../types/catalogue';

export const catalogueData: Hat[] = [
	{
		id: 1,
		title: 'The Arden Teardrop Fedora',
		category: 'felt',
		color: 'Natural Slate Grey',
		image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80',
		tag: 'Organic Merino Wool',
		shortDesc: 'Wide stiff brim with pinched teardrop crown, finished with upcycled olive cord.',
		story:
			'The Arden is blocked over a 1954 cherrywood mold preserved from an Oregon millinery studio. Steamed for 40 minutes and cured for two days, it offers architectural structure with a feather-weight feel on the head.',
		crown: '11.5 cm',
		brim: '8.2 cm (Bound edge)',
		grade: '20-Micron Merino Felt',
		cureTime: '48 Hours',
		stockists: ['SoHo Flagship (NY)', 'The Marais Atelier (Paris)', 'Mayfair Studio (London)']
	},
	{
		id: 2,
		title: 'The Solstice Crown',
		category: 'straw',
		color: 'Parchment Grey & Raw Natural',
		image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80',
		tag: 'Grade 8 Toquilla Palm',
		shortDesc: 'Airy handwoven straw providing natural UPF 50+ protection with raw edge fringe.',
		story:
			'Hand-plaited over three weeks by women-led weaving cooperatives in coastal Ecuador, then finished in our studio with cold-press steam to lock the crown geometry. Lightweight, pliable, and resilient.',
		crown: '10.0 cm',
		brim: '9.5 cm (Raw edge)',
		grade: 'Grade 8 Sustainable Toquilla',
		cureTime: '36 Hours',
		stockists: ['Abbot Kinney Outpost (LA)', 'Daikanyama Gallery (Tokyo)', 'SoHo Flagship (NY)']
	},
	{
		id: 3,
		title: 'The Camden Baker Boy',
		category: 'caps',
		color: 'Charcoal Herringbone',
		image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80',
		tag: 'Reclaimed British Tweed',
		shortDesc: 'Eight-panel slouch silhouette lined with organic brushed cotton and veg-tan peak.',
		story:
			'Sourced entirely from remnant deadstock bolts discarded by bespoke tailors. Each Camden cap repurposes heritage British wool tweed, preserving generational weaving patterns that would otherwise go to incineration.',
		crown: 'Slouch Fitted',
		brim: '5.5 cm (Reinforced bill)',
		grade: '100% Upcycled Tweed',
		cureTime: 'Manual Stitch 6 Hours',
		stockists: ['Mayfair Studio (London)', 'The Marais Atelier (Paris)', 'SoHo Flagship (NY)']
	},
	{
		id: 4,
		title: 'The Rowan Wide Brim',
		category: 'felt',
		color: 'Deep Charcoal Stone',
		image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80',
		tag: 'Organic Merino Wool',
		shortDesc: 'Flat stiffened brim with minimalist leather loop and hand-stitched crown crease.',
		story:
			'Designed for dramatic silhouette lines. The Rowan utilizes a high-density felt formulation that withstands seasonal rainfall without losing brim rigidity. Finished with non-toxic tree resin stiffener.',
		crown: '12.0 cm',
		brim: '10.0 cm (Flat pressed)',
		grade: 'Heavyweight 240g Merino',
		cureTime: '72 Hours',
		stockists: ['SoHo Flagship (NY)', 'Abbot Kinney Outpost (LA)', 'Daikanyama Gallery (Tokyo)']
	},
	{
		id: 5,
		title: 'The Sylvan Boater',
		category: 'straw',
		color: 'Pale Stone Tint',
		image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=800&q=80',
		tag: 'Wheatgrass Braid',
		shortDesc: 'Flat top telescope boater accented by a sage green vegetable-dyed linen wrap.',
		story:
			'Inspired by vintage Edwardian river millinery, updated with a wider contemporary brim. The straw is conditioned with organic flaxseed oil for natural water resistance and amber sheen.',
		crown: '9.0 cm (Flat telescope)',
		brim: '8.5 cm',
		grade: 'Organic Wheatgrass Braid',
		cureTime: '24 Hours',
		stockists: ['The Marais Atelier (Paris)', 'Mayfair Studio (London)']
	},
	{
		id: 6,
		title: 'The Valen Fisherman Cap',
		category: 'caps',
		color: 'Heather Stone Grey',
		image: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?auto=format&fit=crop&w=800&q=80',
		tag: 'Recycled Wool Knit',
		shortDesc: 'Double-rolled brim watch cap knit in a dense rib with zero synthetic elastane.',
		story:
			'Spun from 100% post-consumer discarded wool knitwear in Prato, Italy. Cleaned with rainwater baths and spun into dense two-ply yarn that naturally regulates head temperature in bitter winds.',
		crown: 'Roll adjustable',
		brim: 'Knitted cuff',
		grade: 'Post-Consumer Reclaimed Wool',
		cureTime: 'Seamless Flatbed Knit',
		stockists: [
			'SoHo Flagship (NY)',
			'Abbot Kinney Outpost (LA)',
			'Daikanyama Gallery (Tokyo)',
			'The Marais Atelier (Paris)'
		]
	}
];
