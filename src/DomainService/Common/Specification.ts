export default interface Specification<T>  {
    IsValid(T):boolean;
}