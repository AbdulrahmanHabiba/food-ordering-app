
export const formatCurrency = (value: number) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return formattedValue.format(value);
};