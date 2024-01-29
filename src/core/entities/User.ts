export class User {
  constructor(
    private readonly name: string,
    private readonly email: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
}
