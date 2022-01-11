//requiere express
const path = require('path');

const express = require('express');
const favicon = require('serve-favicon');

// ejecutamos servidor
const app = express();

//agraga archivo estatico
//app.use(express.static('public'));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.use(favicon(path.resolve(__dirname,'favicon.ico')));
//console.log((path.resolve(__dirname,'favicon.ico')));
//console.log(path.join(__dirname,'./public/favicon.ico'))
//----------servidor corriendo en puerto 3030
const port = 3030;
// se ejecuta un callback de confirmación. 
app.listen(process.env.PORT||port,() => console.log(`Servidor corriendo en puerto ${port}`));

//--------- Rutas de acceso
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
})

//console.log(path.resolve(__dirname,'./views/index.html'))

//-----------ruta en caso de no encontrar las paginas anteriores (switch default)
app.get('*', (req, res) => {
    res.status(404).send('404 not found');
})

