import { fetchExchangeRates } from './api.js';

const displayExchangeRates = async () => {
  try {
    const data = await fetchExchangeRates();

    const brlRate = data.conversion_rates.BRL;
    const eurRate = data.conversion_rates.EUR;
    const jpyRate = data.conversion_rates.JPY;

    console.log('Taxas de câmbio do dólar americano (USD):');
    console.log(`1 USD = ${brlRate} BRL`);
    console.log(`1 USD = ${eurRate} EUR`);
    console.log(`1 USD = ${jpyRate} JPY`);
  } catch (error) {
    console.error('Erro ao exibir taxas de câmbio:', error);
  }
};

displayExchangeRates();
