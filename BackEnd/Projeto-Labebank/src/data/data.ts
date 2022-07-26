import { UsersAccount } from "../Types/TypesUse";

export let accountUsers: UsersAccount[] = [
    {
        name: "Mingau",
        cpf: "00000000001",
        birthDate: "20/09/2021",
        saldo: 100,
        extrato:
        [
            {
                value: 0,
                date: "01/01/2022",
                description: "Inicio da conta"
            }
        ]
    },
    {
        name: "Marie",
        cpf: "00000000002",
        birthDate: "20/03/2016",
        saldo: 200,
        extrato:
        [
            {
                value: 0,
                date: "01/01/2017",
                description: "Inicio da conta"
            }
        ]
    }
]