module.exports.index = (req, res) => {
   res.render('about', {
      title: 'About',
      mainTitle: 'ABOUT',
      history1: 'El Águila es un ave de alto vuelo.',
      history2: 'Representa la fuerza <br/> perseverancia y tenacidad.',
      history3: 'El ojo de águila puede ver más allá <br/> de lo que cualquier otra ave.',
      history4: 'Eagle Design está basada <br/> en estos principios, <br/> de modo que ve más allá <br/> de lo que todos pueden.',
      history5: 'Volando alto <br/> Llegando lejos',
      projectsTitle: 'Últimos Proyectos'
   });
};