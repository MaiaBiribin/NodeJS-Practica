import express from 'express' // express, framework de nodejs
// import ejs from 'ejs' = express ya tiene ejs por defecto, por lo que no es necesario importarlo 
import {dirname, join} from 'path' //traje del modulo path la funcion dirname, nos permite crear rutas absolutas
                                    //funcion join, nos permite concatenar directorios y evitar pensar si estamos en windows, mac, linux... 
import {fileURLToPath} from 'url' // traje del modulo url la funcion fileURLToPath

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url)) //forma dinamica de nodejs que viene del modulo url, para obtener la ruta absoluta = C:\\Users\maiab\OneDrive\Escritorio\nodejs-first-project\src
                                                        //import.meta.url objeto global 
console.log(join(__dirname, 'views'))

app.set('views', join(__dirname, 'views')) //usando join concatenamos las rutas de carpetas, con la sintaxis que usa el SO que tengamos 
app.set('view engine', 'ejs') //.set = antes de que se ejecute la ruta se le pasa la siguiente configuracion. Indica al servidor que caractiristicas quiero que utilice  
                        // 'view engine' = Motor de plantillas, aquellos modulos que nos permiten extender el html, y nos permite aniadir logida de programacion dentro del html

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

//express.static = metodo (necestia un root: ruta de carpeta por la cual leer) estoy hablando de archivos estaticos, la carpeta public tiene el codigo de css
//(join(__dirname, 'public')) = 'Voy a unir el directorio __dirname con la carpeta public' . El __dirname llegaba hasta la carpeta \src


app.listen(3000)
console.log('Server is listening on port', 3000)