module.exports.index = (req, res) => {
   res.render('about', {
      title: 'About',
      mainTitle: 'ABOUT',
      history1: 'El Águila es un ave de alto vuelo.',
      history2: 'Representa la fuerza',
      history3: 'El ojo de águila puede ver más allá',
      history4: 'Eagle Design está basada',
      history5: 'Volando alto',
      history6: 'Llegando lejos',
      projectsTitle: 'Últimos Proyectos'
   });
};