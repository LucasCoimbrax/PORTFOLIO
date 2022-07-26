export type ExtratoDetail = {
    value: number,
    date: string,
    description: string
};

export type UsersAccount = {
    name: string,
    cpf: string | number,
    birthDate: number | string | undefined,
    saldo: number,
    extrato: ExtratoDetail[]
};
