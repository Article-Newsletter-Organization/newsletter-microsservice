export interface UseCase<I, O> {
  execute(i: I): Promise<O>;
}
