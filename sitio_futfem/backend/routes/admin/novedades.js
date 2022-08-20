var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre, 
    novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  }) //cierra render
}) //cierra get

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades')
    } else {
        res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true,
          message: 'Todos los campos son requeridos'
        })
    }
  } catch (error) {
      console.log(error)
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se cargo la novedad'
      });
  }
});

/* Para eliminar una novedad */
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
}); //cierra get de eliminar


// para listar UNA SOLA NOVEDAD BY ID -modificar

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var novedad = await novedadesModel.getNovedadesById(id);

  console.log(req.params.id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  })
});


// para modificar la novedad 
router.post('/modificar', async (req, res, next) => {
  try {

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)

    await novedadesModel.modificarNovedadesById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error)
    res.render('/admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la novedad'
    })
  }
})


module.exports = router;