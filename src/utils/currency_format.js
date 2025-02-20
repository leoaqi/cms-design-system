export const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-Id', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};