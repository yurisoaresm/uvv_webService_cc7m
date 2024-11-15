import 'dotenv/config'; // Importa as variáveis de ambiente

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export const fetchExchangeRates = async () => {
  try {
    const response = await fetch(BASE_URL);
    
    if (!response.ok) {
      throw new Error('Status da resposta: ' + response.status);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
