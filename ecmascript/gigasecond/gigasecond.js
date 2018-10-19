class GigaSecond {
  constructor(birthday) {
    this.birthday = birthday;
  }
  date() {
    return new Date(this.birthday.getTime() + 10**12);
  }
}

export default GigaSecond;
