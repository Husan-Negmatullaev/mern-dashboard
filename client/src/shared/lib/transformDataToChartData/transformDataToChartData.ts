export function transformDataToChartData<T>(
	item: T,
	name: string,
	firstKeyValue: keyof T,
	secondKeyValue: keyof T,
) {
	return {
		name,
		[firstKeyValue]: item[firstKeyValue],
		[secondKeyValue]: item[secondKeyValue],
	};
}
