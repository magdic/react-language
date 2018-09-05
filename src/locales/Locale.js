import en from './en.json';
import es from './es.json';

const locales = {en, es};

class Locale {
  constructor(language) {
    this.strings = locales[language];
    this.subscriptions = [];
  }

  setLanguage(language) {
    this.strings = locales[language];
    this.subscriptions.forEach(cb => cb());
  }

  subscribe(callback) {
    this.subscriptions.push(callback);
  }
}

export default Locale;