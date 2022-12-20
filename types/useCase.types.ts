export interface FloidResponse {
    data: {
        code: string;
        msg: string;
        caseid: string;
        products?: Products;
    }
}

export interface Products {
    accounts: [
        type: string,
        number: number,
        currency: string,
        balance: number,
    ];
    cards: [
        number: string,
        type: string,
        name: string,
        CLP: CLP,
        USD: USD,
    ];
    lines: [
        number: number,
        CLP: {
            total: number;
            used: number;
            available: number;
        },
    ];
}
interface CLP {
    total: number;
    used: number;
    available: number;
}

interface USD {
    total: number;
    used: number;
    available: number;
}

export interface userBody {
    id: string;
    password: number;
}

