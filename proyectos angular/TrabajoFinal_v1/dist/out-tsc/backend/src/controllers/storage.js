import { registerUpload } from "../services/storage-service";
import { handleHttp } from "../utils/error.handle";
const getFile = async (req, res) => {
    try {
        const { user, file } = req;
        const dataToRegister = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        };
        const response = await registerUpload(dataToRegister);
        res.send(response);
    }
    catch (e) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
};
export { getFile };
//# sourceMappingURL=storage.js.map