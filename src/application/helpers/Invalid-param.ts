export class InvalidParam extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidParam';
  }
}
