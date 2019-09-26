export interface SignInResponse {
    invalidPassword: boolean;
    token: string;
}

export interface Round {
    id: string, name: string, tense: string
}

export interface Action {
    description: string,
    df: number;
    visibility: string;
    type: string;
    delegate: string,
    delegation: string,
    keyword: string,
    result: string,
    targetCountry: string,
}

export interface SelectRow {
    value: string;
    name: string;
}

export interface DelegateRound {
    availableMainActions: number,
    delegationId: string
}

export interface RoundInfo {
    name: string,
    country: string,
    deadline: string,
    leader: string,
    presentRound: boolean,
    availableDf: number,
    message: string
}