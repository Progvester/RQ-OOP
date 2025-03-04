import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';
import config from '../config.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static async getRandomQuoteViaAPI() {
    const url = `${config.publicApiURL}/api/quotes/random`;
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await fetch(url, options);
      const { id, quote, author } = await res.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }
  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.ownApiURL}/quotes/random-single`;
    const options = {
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      const res = await fetch(url, options);
      const { id, text, author } = await res.json();
      return new Quote(id, text, author);
    } catch (error) {
      console.error('Custom error: ' + error);
    }
  }
}

export default RandomQuote;
