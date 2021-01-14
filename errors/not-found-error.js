module.exports = class NotFoundError extends (
  Error
) {
  constructor(dataName, code = 422) {
    super(message);
    this.message = `${dataName} not found`;
    this.code = code;
  }
};
