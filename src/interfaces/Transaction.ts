export interface Transaction {
    id: number,
    place: string,
    date: string,
    type: string,
    currency: string,
    sum: number,
    isXEPPTBank?: boolean,
}