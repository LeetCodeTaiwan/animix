import currentPlanetsService from './currentPlanets/currentPlanets';
import diamondService from './diamond/diamond';
import animalsService from './animals/animals';
import usersService from './users/users';

export default app => {
  INCLUDE_ALL_MODULES([usersService, diamondService, animalsService, currentPlanetsService], app);
}
