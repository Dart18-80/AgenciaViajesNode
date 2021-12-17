const paginaInicio = (req, res) =>{// req - lo que enviamos : res - lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio'
    });
};

const paginaNosotros = (req, res) =>{// req - lo que enviamos : res - lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros',
    });
};

const paginaViajes = (req, res) =>{// req - lo que enviamos : res - lo que express nos responde
    res.render('viajes', {
        pagina: 'Viajes',
    });
};

const paginaTestimoniales = (req, res) =>{// req - lo que enviamos : res - lo que express nos responde
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}