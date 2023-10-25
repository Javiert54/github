import { verifyToken } from "../utils/jwt.handle";
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ")[1];
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }
        else {
            req.user = isUser;
            next();
        }
    }
    catch (e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};
export { checkJwt };
//# sourceMappingURL=session.js.map