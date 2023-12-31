import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.SECRET_KEY || "token.01010101";
const generateToken = (id) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2h",
    });
    return jwt;
};
const verifyToken = (jwt) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};
export { generateToken, verifyToken };
//# sourceMappingURL=jwt.handle.js.map