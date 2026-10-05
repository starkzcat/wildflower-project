export type HatCategory = 'felt' | 'straw' | 'caps';

export interface Hat {
	id: number;
	title: string;
	category: HatCategory;
	color: string;
	image: string;
	tag: string;
	shortDesc: string;
	story: string;
	crown: string;
	brim: string;
	grade: string;
	cureTime: string;
	stockists: string[];
}

export type FilterCategory = 'all' | HatCategory;
