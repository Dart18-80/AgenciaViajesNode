import express from 'express'
import router from './routes/index.js';

const app = express();

//Definir el puerto 
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Agregar Router 
app.use('/', router);


app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})