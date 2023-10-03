import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/UserModel";
import { User } from "../interfaces/usuario.interface";
import { encriptar, verificar } from "../utils/bcryptjs.handle";
import { generarToken } from "../utils/jwt.handle";


const registNewUser = async ({email, password, name}: User) => {
	const CheckIs= await UserModel.findOne({ email })
	if(CheckIs) return "Ya existe el usuario"
	const passHash = await encriptar(password);
	const registroNuevoUser = await UserModel.create({email, password: passHash, name})
	return registNewUser;
}
const accessUser = async({email, password}: Auth) =>{
	const checkIs = await UserModel.findOne({email})
	if(!checkIs) return 'El usuario no existe';
	const passwordHash = checkIs.password;
	const esCorrecto = await verificar(password, passwordHash)

	if(!esCorrecto) return "Contraseña Incorrecta";
	const token = generarToken(checkIs.email)
	const data = {
		token,
		user: checkIs
	}
	return data;
}


export {registNewUser, accessUser}