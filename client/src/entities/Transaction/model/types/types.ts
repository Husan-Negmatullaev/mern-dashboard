export interface TransactionItem {
	id: string;
	_id: string;
	__v: number;
	buyer: string;
	amount: number;
	productIds: Array<string>;
	createdAt: string;
	updatedAt: string;
}
