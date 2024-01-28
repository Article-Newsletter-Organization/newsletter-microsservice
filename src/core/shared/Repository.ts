export interface Repository<T> {
  add(data: T): Promise<T>;
  get(id: string): Promise<T | undefined>;
  update(data: T): Promise<T>;
  getAll(): Promise<T[]>;
  remove(id: string): Promise<T>;
}
