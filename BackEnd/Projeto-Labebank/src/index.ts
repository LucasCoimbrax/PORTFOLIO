import express, { Request, Response } from "express";
import { AddressInfo } from "net";

import { accountUsers } from "./data/data";
import { UsersAccount, ExtratoDetail } from "./Types/TypesUse";

const app = express();
app.use(express.json());

// =========================================================
app.post("/createAccount", (req: Request, res: Response) => {          
    let errorCode = 500;
    
    try {
      const {name, cpf, birthDate} = req.body;

      const user = accountUsers.find((item) => item.cpf === cpf);

      if(user){
        errorCode = 400;
        throw new Error("Usuário já possui conta!");
      }

      if(!name || !cpf || !birthDate){
        errorCode = 422;
        throw new Error("Faltam parâmetros a serem passados no body!");
      }

      const newUser: UsersAccount = {
        name: name,
        cpf: cpf,
        birthDate: birthDate,
        saldo: 0,
        extrato: []
      };

      accountUsers.push(newUser);

      res.status(201).send(accountUsers);
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
})


// =========================================================
app.get("/getAllUsers", (req: Request, res: Response) => {
  let errorCode = 500;

  try{
    
    res.status(200).send(accountUsers)
  }catch(error: any){
    res.status(errorCode).send(error.message)
  }
})


// =========================================================
app.get("/getBalance", (req: Request, res: Response) => {
  let errorCode = 500;

  try{
    const name = req.query.name as string;
    const cpf = req.query.cpf as string;

    const user = accountUsers.find((item) => item.cpf === cpf && item.name.toLowerCase() === name.toLowerCase());

    if(!user){
      errorCode = 404;
      throw new Error("Usuário não encontrado!")
    }

    res.status(200).send(user)
  }catch(error: any){
    res.status(errorCode).send(error.message)
  }
});


// =========================================================
app.put("/addBalance", (req: Request, res: Response) => {
    let errorCode = 500;

    try {
      const {cpf, saldo} = req.body;

      const user = accountUsers.find((item) => item.cpf === cpf);

      if(!user){
        errorCode = 404;
        throw new Error("Usuário não encontrado!")
      }

      if(!saldo || !cpf ){
        errorCode = 422;
        throw new Error("Faltam parâmetros a serem passados no body!");
      }

      for(let i = 0; i < accountUsers.length; i++){
        if(cpf === accountUsers[i].cpf){
          accountUsers[i].saldo = Number(accountUsers[i].saldo) + Number(saldo);
        };
      };
      res.status(200).send(user);
    } catch (error: any) {
      res.status(errorCode).send(error.message);
    };
});


// =========================================================
app.put("/payAccount", (req: Request, res: Response) => {
  let errorCode = 500;

  try {
    const {cpf, conta, date, description} = req.body;
    let newDate: string;

    const user = accountUsers.find((item) => item.cpf === cpf);

    if(!user){
      errorCode = 404;
      throw new Error("Usuário não encontrado!")
    };

    if(!cpf ){
      errorCode = 422;
      throw new Error("Faltam parâmetros a serem passados no body!");
    };

    if(!date){
      newDate = new Date().toString();
    }else{
      newDate = date;
    };

    for(let i = 0; i < accountUsers.length; i++){
      if(cpf === accountUsers[i].cpf){

        const saldoDisponivel = accountUsers[i].saldo;
        const saldoFinal = Number(saldoDisponivel) - Number(conta);

        if(saldoFinal < 0){
          errorCode = 400;
          throw new Error("Saldo na conta insuficiente para realizar a operação!");
        };

        if(conta == 0){
          errorCode = 404;
          throw new Error("Conta nula não computada!");
        }

        const newConta: ExtratoDetail = {
          value: conta,
          date: newDate,
          description: description
        }

        accountUsers[i].extrato.push(newConta)

        accountUsers[i] = {...accountUsers[i],
          saldo: Number(saldoDisponivel) - Number(conta),
          extrato: [...accountUsers[i].extrato]
        }
      };
    };

    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  };
});


// =========================================================
app.put("/transfer", (req: Request, res: Response) => {
  let errorCode = 500;

  try {
    const {name, cpf, nameDestinatario, cpfDestinatario, value} = req.body;

    const userTransfer = accountUsers.find((item) => item.cpf === cpf && item.name.toLowerCase() === name.toLowerCase());
    const userDestinatario = accountUsers.find((item) => item.cpf === cpfDestinatario && item.name.toLowerCase() === nameDestinatario.toLowerCase());

    if(!userTransfer){
      errorCode = 422;
      throw new Error("Conta de usuário inexistente, verifique seus dados!")
    };

    if(!userDestinatario){
      errorCode = 404;
      throw new Error("Conta de destinatário não encontrada, verifique os dados!")
    };


    for(let i = 0; i < accountUsers.length; i++){
      if(accountUsers[i].cpf === cpf && accountUsers[i].name.toLowerCase() === name.toLowerCase()){

        const saldoDisponivel = accountUsers[i].saldo;
        const saldoFinal = Number(saldoDisponivel) - Number(value);

        if(saldoFinal < 0){
          errorCode = 400;
          throw new Error("Saldo Insuficiente!")
        };

        let newDescription = `Pagamento realizado ao ${userDestinatario.name}`;

        const newConta: ExtratoDetail = {
          value: value,
          date: new Date().toString(),
          description: newDescription
        };

        accountUsers[i].extrato.push(newConta)

        accountUsers[i] = {...accountUsers[i],
          saldo: Number(saldoDisponivel) - Number(value),
          extrato: [...accountUsers[i].extrato]
        };
      }
    };
    
    for(let i = 0; i < accountUsers.length; i++){
      if(accountUsers[i].cpf === cpfDestinatario && accountUsers[i].name.toLowerCase() === nameDestinatario.toLowerCase()){

        const saldoDisponivel = accountUsers[i].saldo;
        const saldoFinal = Number(saldoDisponivel) + Number(value);

        const userDestinatario: UsersAccount = {
          ...accountUsers[i],
          saldo: saldoFinal
        };

        accountUsers.push(userDestinatario);
      }
    }

    res.status(200).send(userDestinatario)
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  };
})

















const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;