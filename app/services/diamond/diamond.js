import diamondService from './diamond.service';

export default app => {
  app.factory('diamond', diamondService);

  if (ENVIRONMENT === 'test') {
    require('./diamond.test.js');
  }
}
