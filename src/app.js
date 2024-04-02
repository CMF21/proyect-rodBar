// Importa Express, que es un framework para crear aplicaciones web y APIs de manera sencilla.
const express = require('express');
// Requeriendo las funionalidades de express
const app = express();
// Importa path, que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');

//RUTAS
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/productCart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'))
})

app.get('/productDetail',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'))
})



//Define la ruta del directorio público donde se encuentran los archivos estáticos.
const publicPath = path.resolve(__dirname, "../public");
//Configura Express para servir archivos estáticos desde el directorio público.
app.use(express.static(publicPath));



//Inicia el servidor Express en el puerto 3001.
app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3001");
});