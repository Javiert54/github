import Archivo from "../models/storageModel";
const registerUpload = async ({ fileName, idUser, path }) => {
    const responseItem = await Archivo.create({ fileName, idUser, path });
    return responseItem;
};
export { registerUpload };
//# sourceMappingURL=storage-service.js.map