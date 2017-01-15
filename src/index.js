export default class Hello {
  constructor(context, config) {
    this.config = config;
    this.context = context;
  }

  run(options) {
    console.log('hello world!')
  }
}
