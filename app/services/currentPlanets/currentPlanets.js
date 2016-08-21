import currentPlanetsService from './currentPlanets.service';

export default app => {
  app.factory('currentPlanets', currentPlanetsService);

  if (ENVIRONMENT === 'test') {
    require('./currentPlanets.test.js');
  }
}
