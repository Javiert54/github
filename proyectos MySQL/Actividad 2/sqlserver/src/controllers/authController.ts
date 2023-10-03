import { Request, Response } from "express";
import { registNewUser, accessUser } from "../services/authService";

const registroCtrl = async({body}:Request, res: Response) => {
	const responseUser = await registNewUser(body)
	res.send(responseUser)

};

const accesoCtrl = async ({body}:Request, res: Response) =>{
	const {email, password} = body;
	const responseUser = await accessUser({email, password})
	if(responseUser === "Contraseña Incorrecta"){
		res.status(403);

	}else{
		res.send(responseUser)
	}
}


export {accesoCtrl, registroCtrl}