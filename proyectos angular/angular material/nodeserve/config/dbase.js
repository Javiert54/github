// const mongoose = require('mongoose');
// const DB_URI = 'mongodb://localhost:27017/appweb';


// module.exports = () => {
// 	const connect = () => {
// 		mongoose.connect(DB_URI,
// 			{
// 				keepAlive: true,
// 				useNewUrlParse: true,
// 				useUnifieldTopology: true
// 			}
// 		)
// 			.then(() => {
// 				console.log("Conexión Correcta")
// 			})
// 			.catch((err) => {
// 				console.log('DB: ERROR !!')
// 			});
// 	}

// 	connect();
// }



const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO2,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('BD Conectada');    
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }
}
module.exports = conectarDB

