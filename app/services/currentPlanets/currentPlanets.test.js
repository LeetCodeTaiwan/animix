import CurrentPlanetsModule from './currentPlanets'
import CurrentPlanetsService from './currentPlanets.service';

describe('CurrentPlanets', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));

  describe('Service', () => {
    // component/directive specs
    let service = CurrentPlanetsService();

    it('has property: name' ,() => {
      expect(service).to.have.property('name');
    });

    it('the name property has the correct value', () => {
      expect(service.name).to.equal('currentPlanets');
    });
  });
});
