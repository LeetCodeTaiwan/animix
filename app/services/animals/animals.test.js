import AnimalsModule from './animals'
import AnimalsService from './animals.service';

describe('Animals', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));

  describe('Service', () => {
    // component/directive specs
    let service = AnimalsService();

    it('has property: name' ,() => {
      expect(service).to.have.property('name');
    });

    it('the name property has the correct value', () => {
      expect(service.name).to.equal('animals');
    });
  });
});
