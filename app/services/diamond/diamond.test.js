import DiamondModule from './diamond'
import DiamondService from './diamond.service';

describe('Diamond', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));

  describe('Service', () => {
    // component/directive specs
    let service = DiamondService();

    it('has property: name' ,() => {
      expect(service).to.have.property('name');
    });

    it('the name property has the correct value', () => {
      expect(service.name).to.equal('diamond');
    });
  });
});
