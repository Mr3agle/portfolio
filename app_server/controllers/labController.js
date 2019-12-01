module.exports.index = (req, res) => {
   res.render('lab', {
      title: 'Lab',
      mainTitle: 'LAB',
      introtext: 'Siéntete libre de modificar lo que sea, como quieras y cuando estés satisfecho usa el código donde necesites ',
   });
};