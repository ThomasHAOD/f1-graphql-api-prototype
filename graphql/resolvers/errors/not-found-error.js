module.exports = class NotFoundError extends (
  Error
) {
  constructor(dataName, code) {
    super(message);
    this.message = `${dataName} not found`;
    this.code = code;
  }
};
