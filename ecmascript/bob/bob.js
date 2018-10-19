const hasLowerCase = str => /[a-z\u00e4\u00f6\u00fc]/u.test(str);
const hasUpperCase = str => /[A-Z\u00c4\u00d6\u00dc]/u.test(str);
const isScreaming = msg => hasUpperCase(msg) && !hasLowerCase(msg);

class Bob {
  hey(message) {
    unescape(message);
    let answer;
    if (isScreaming(message)) {
      answer = 'Whoa, chill out!';
    } else if (message.slice(-1) === '?') {
      answer = 'Sure.'
    } else if (!message.trim()) {
      answer = 'Fine. Be that way!'
    } else {
      answer = 'Whatever.';
    }
    return answer;
  }
}

export default Bob;

