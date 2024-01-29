export class Email {
  private to: string;
  private from: string;
  private subject: string;
  private message: string;
  private props: Record<string, unknown>;

  setTo(to: string): Email {
    this.to = to;
    return this;
  }

  getTo(): string {
    return this.to;
  }

  setFrom(from: string): Email {
    this.from = from;
    return this;
  }

  getFrom(): string {
    return this.from;
  }

  setSubject(subject: string): Email {
    this.subject = subject;
    return this;
  }

  getSubject(): string {
    return this.subject;
  }

  setMessage(message: string): Email {
    this.message = message;
    return this;
  }

  getMessage(): string {
    return this.message;
  }

  setProps(props: Record<string, unknown>): Email {
    this.props = props;
    return this;
  }

  getProps(): Record<string, unknown> {
    return this.props;
  }
}
