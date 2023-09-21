export interface ExpensesByCategory {
	salaries: number;
	supplies: number;
	services: number;
}

export interface Month {
	id: string;
	month: string;
	revenue: number;
	expenses: number;
	nonOperationalExpenses: number;
	operationalExpenses: number;
}

export interface Day {
	id: string;
	date: Date;
	revenue: number;
	expenses: number;
}

export interface ProductItem {
	id: string;
	_id: string;
	__v: number;
	price: number;
	expense: number;
	transactions: Array<string>;
	createdAt: string;
	updatedAt: string;
}

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

export interface KPIItem {
	id: string;
	_id: string;
	__v: number;
	totalProfit: number;
	totalRevenue: number;
	totalExpenses: number;
	expensesByCategory: ExpensesByCategory;
	monthlyData: Array<Month>;
	dailyData: Array<Day>;
	createdAt: string;
	updatedAt: string;
}