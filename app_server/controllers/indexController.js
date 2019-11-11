module.exports.index = (req, res) => {
   res.render('home', {
      title: 'Home',
      saluto1: 'HOLA!',
      saluto2: 'Soy un desarrollador',
      saluto3: 'contemporáneo!',
      projectsTitle: 'Últimos Proyectos'
   });
};
module.exports.about = (req, res) => {
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
module.exports.projects = (req, res) => {
   res.render('projects', {
      title: 'Projects'
   });
};
module.exports.lab = (req, res) => {
   res.render('lab', {
      title: 'Lab'
   });
};