
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('billing-toggle');
    const prices = {
        starter: { monthly: 2.80, yearly: 26.88 },
        standard: { monthly: 4.20, yearly: 40.32 },
        supreme: { monthly: 7.00, yearly: 67.2 }
    };

    function updatePrices() {
        const isYearly = toggle.checked;
        document.getElementById('starter-price').textContent = `$${isYearly ? prices.starter.yearly.toFixed(2) : prices.starter.monthly.toFixed(2)}/${isYearly ? 'year' : 'month'}`;
        document.getElementById('standard-price').textContent = `$${isYearly ? prices.standard.yearly.toFixed(2) : prices.standard.monthly.toFixed(2)}/${isYearly ? 'year' : 'month'}`;
        document.getElementById('supreme-price').textContent = `$${isYearly ? prices.supreme.yearly.toFixed(2) : prices.supreme.monthly.toFixed(2)}/${isYearly ? 'year' : 'month'}`;
    }

    toggle.addEventListener('change', updatePrices);
    updatePrices();
});
