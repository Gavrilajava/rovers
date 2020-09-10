

import 'mocha';
import { expect } from 'chai';
import Grid from '../../logic/Grid'


describe('Grid', () => { 
  describe('creation:', () => { 
    it('should be created with params', () => { 
      const grid = new Grid(5,6);
      expect(!!grid).to.equal(true); 
      expect(grid.x).to.equal(5); 
      expect(grid.y).to.equal(6); 
    }); 
  })
  describe('#last:', () => { 
    it('should return last instance', () => { 
      new Grid(3,8);
      const grid = new Grid(5,5);
      expect(Grid.last).to.equal(grid); 
    }); 
  })
  describe('.validate:', () => { 
    it('should valiadate coordinates in range', () => { 
      const grid = new Grid(5,5);
      expect(grid.validate([3,3])).to.equal(true); 
    }); 
    it('shouldn\'t valiadate coordinates out of range', () => { 
      const grid = new Grid(5,5);
      expect(grid.validate([7,3])).to.equal(false); 
    }); 
    it('shouldn\'t valiadate negative coordinates', () => { 
      const grid = new Grid(5,5);
      expect(grid.validate([-1,3])).to.equal(false); 
    }); 
  })
});
