import animalsService from './animals.service';

export default app => {
  app.factory('animals', animalsService);

  if (ENVIRONMENT === 'test') {
    require('./animals.test.js');
  }
}
