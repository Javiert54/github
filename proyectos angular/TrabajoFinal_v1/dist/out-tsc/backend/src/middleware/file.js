import multer, { diskStorage } from "multer";
const PATH_STORAGE = `${process.cwd()}/storage`;
const storage = diskStorage({
    destination(req, file, cb) {
        cb(null, PATH_STORAGE);
    },
    filename(req, file, cb) {
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    },
});
const multerMiddleware = multer({ storage });
export default multerMiddleware;
//# sourceMappingURL=file.js.map