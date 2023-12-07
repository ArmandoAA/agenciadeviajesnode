import { Viaje } from "../models/viaje.js";
import { Testimoniales } from "../models/testimoniales.js";

const paginaInicion = async (req, res) => {

    //consultar 3 viajes del modelo viajes

    const promiseBD = [];

    promiseBD.push(Viaje.findAll({limit: 3}));
    promiseBD.push(Testimoniales.findAll({limit: 4}));

    try{
        const resultado = await Promise.all(promiseBD)
        res.render('inicio', {
            pagina:'Inicio',
            clase:'home',
            viajes: resultado[0],
            testimoniales: resultado[1]

    
        });
    }catch(error){
        console.log(error);

    }
   
}

const paginaNosotros =   (req,res)=> {//req-loque enviamos : res- lo que express nos responde

    //const viajes = "Viajes a peru";
    res.render('nosotros',{
        Pagina: 'Nosotros'
    });
}

const paginaViajes = async (req,res)=>{//req-loque enviamos : res- lo que express nos responde

    const viajes = await Viaje.findAll();
    //console.log(viajes);

    //const viajes = "Viajes a peru";
    res.render('viajes', {
        Pagina: 'Próximos Viajes',
        viajes,
    });

}

const paginaTestimoniales = async (req,res)=>{//req-loque enviamos : res- lo que express nos responde
    try{
        const testimoniales = await Testimoniales.findAll();
         //const viajes = "Viajes a peru";
        res.render('testimoniales', {
            Pagina: 'Testimoniales',
            testimoniales
        });


    } catch(error){
        console.log(error);
    }
   

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) => {

    //console.log(req.params);
    const { slug } = req.params;

    try {

        const project = await Viaje.findOne({ where: { slug } });

        if (project === null) {
            console.log('Not found!');
          } else {
            console.log(project instanceof Viaje); // true
            console.log(project.slug); // 'My Title'
          }

        
        const resultado = await Viaje.findOne( { where : { slug } });
        //console.log(resultado);

        res.render('viaje', {
            Pagina: 'Información Viaje',
            resultado

        })


    } catch (error){
        console.log(error);


    }
   

}


export {
    paginaInicion,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}