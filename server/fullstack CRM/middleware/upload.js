// npm i multer moment
// объенкт для загрузки файлов
const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cbFunction){
        cbFunction(null, 'uploads/'); // null - нет ошибок (стандарт) 'uploads/' - путь до папки куда будут загрудатся файлы
    },
    filename(req, file, cbFunction){
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        cbFunction(null, `${date}-${file.originalname}`); //
    }
});

const fileFilter = (req, file, cbFunction) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cbFunction(null, true);
    }else {
        cbFunction(null, false);
    }
};

const limits = {
    fileSize: 1024 * 1024 * 5
}

module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
})
