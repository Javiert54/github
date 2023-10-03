import { hash, compare } from "bcryptjs";

const encriptar = async(pass: string) => {
	const passwordHash = await hash(pass, 8)
	return passwordHash;
}
const verificar = async(pass: string, passHash: string) => {
	const esCorrecto = await compare(pass, passHash);
	return esCorrecto;
}

export { encriptar, verificar }
