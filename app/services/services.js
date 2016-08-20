import diamondService from './diamond/diamond';
import usersService from './users/users';

export default app => {
  INCLUDE_ALL_MODULES([usersService, diamondService], app);
}
