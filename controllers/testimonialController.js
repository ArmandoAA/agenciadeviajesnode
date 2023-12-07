import { Testimoniales } from '../models/testimoniales.js'

const guardarTestimoniales = async (req, res) =>{

    // Validar
    //console.log(req.body);
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje:"El nombre Esta Vacio"});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: "El correo Esta Vacio"});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje:"El mensaje Esta Vacio"});
    }
    console.log(errores);
    if(errores.length>0) {

        //Consultar testimoniales existentes
        const testimoniales = await Testimoniales.findAll();

        //Mostrarla vista de errores
        res.render('testimoniales',{
            pagina: 'testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
            //Alamcenar en la base de datos
            try{
                await Testimoniales.create({
                    nombre,
                    correo,
                    mensaje
                });

                res.redirect('/testimoniales');

            }catch(error){
                console.log(error);

            }
    }
}

export {
    guardarTestimoniales
}