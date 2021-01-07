//Puerto

process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento del token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//DEED de autenticacion
process.env.SEED = process.env.SEED || 'secret';


//Base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// Google client id
process.env.CLIENT_ID = process.env.CLIENT_ID || '842709961024-onaqcvu2c7nbr2b9v74qu3j6i7st4tpr.apps.googleusercontent.com';