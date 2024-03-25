const mongoose = require('mongoose');
const uri_db = 'mongodb://localhost:27017/db_Emily';

mongoose.connect(uri_db)
.then(()=>{
    console.log("Conexion existosa");
})
.catch((err) =>{
    console.log("No jalo")
})

//schemas
const esquema_alumnos = new mongoose.Schema(
    {
        name:{
            type: String
        },
        apepat:{
            type: String
        },
        apemat:{
            type: String
        },
        telnumber:{
            type: Number
        },
        fecnac:{
            type: Date
        }
    }
)

//model
const alumnos = new mongoose.model('Tabla de registro de los alumnos', esquema_alumnos)

alumnos.create(
    {
        name:'Jesus',
        apepat:'Hernandez',
        apemat:'Moreno',
        telnumber:12234566,
        fecnac: new Date('2000, 02, 23')
    }
)