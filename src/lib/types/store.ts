export interface Store {
	id: number;
	name: string;
	city: string;
	neighborhood: string;
	address: string;
	hours: string;
	phone: string;
	leadTime: string;
}

export type StoreCityFilter = 'all' | 'New York' | 'Paris' | 'London' | 'Tokyo' | 'Los Angeles';
