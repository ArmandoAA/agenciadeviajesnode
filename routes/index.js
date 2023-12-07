import express from 'express';
import { paginaInicion, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from '../controllers/paginaController.js';
import {guardarTestimoniales} from '../controllers/testimonialController.js';

const router = express.Router();


router.get('/',paginaInicion);

router.get('/nosotros',paginaNosotros);

router.get('/viajes', paginaViajes );

router.get('/viajes/:slug', paginaDetalleViaje );

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);

/*router.get('/contacto', (req,res)=>{//req-loque enviamos : res- lo que express nos responde
    res.send('Contacto');

});*/

export default router;