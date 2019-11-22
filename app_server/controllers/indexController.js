module.exports.index = (req, res) => {
   res.render('home', {
      title: 'Home',
      saluto1: 'HOLA!',
      saluto2: 'Soy un desarrollador',
      saluto3: 'contemporáneo!',
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