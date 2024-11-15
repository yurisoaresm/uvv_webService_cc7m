import { User } from '../models/user';
import { horoscopeMessages } from '../utils/horoscopeData';

export class AstrologyService {
  static getHoroscope(user: User) {
    const signData =
      horoscopeMessages[user.zodiacSign.toLowerCase() as keyof typeof horoscopeMessages];

    if (!signData) {
      throw new Error('Signo inválido!');
    }

    if (user.plan === 'basic') {
      return { message: signData.basic };
    } else if (user.plan === 'premium') {
      return {
        message: signData.premium.message,
        luckyNumber: signData.premium.luckyNumber,
        luckyAnimal: signData.premium.luckyAnimal,
      };
    }
  }
}
