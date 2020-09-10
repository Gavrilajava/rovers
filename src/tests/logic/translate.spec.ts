

import 'mocha';
import { expect } from 'chai';
import Rover from '../../logic/Rover'
import Grid from '../../logic/Grid'
import translate from '../../logic/translate'


describe('translate', () => { 

  describe('Grid:', () => { 
    it('should create a grid with proper params', () => { 
      translate('5 5')
      expect(Grid.last.x).to.equal(5); 
      expect(Grid.last.y).to.equal(5); 
    }); 
    it('should return a message after create the grid', () => { 
      expect(translate('5 5')).to.equal('Grid created'); 
    }); 
    it('should return a error message if one parameter is negative', () => { 
      expect(translate('5 -1')).to.equal('Command not recognized'); 
    }); 
    it('should return a error message if one parameter is zero', () => { 
      expect(translate('5 0')).to.equal('Grids dimentions should be positive'); 
    }); 
  })

  describe('Rover:', () => { 
    before(() => {
      translate('5 5')
    })
    it('should create a rover with proper params', () => { 
      translate('3 3 W')
      expect(Rover.getLast().stringify()).to.equal('3 3 W'); 
    }); 
    it('should return a error message if pameters are improper', () => { 
      expect(translate('3 3 Z')).to.equal('Command not recognized'); 
    }); 
    it('should return a error message if coords is out af the grid', () => { 
      expect(translate('3 6 W')).to.equal('Coordinates are out of the grid'); 
    }); 
  })

  describe('Commands:', () => { 
    before(() => {
      translate('5 5')
      translate('5 3 S')
    })
    it('should move rover if cell is in the grid', () => { 
      translate('M')
      expect(Rover.getLast().stringify()).to.equal('5 2 S'); 
    }); 
    it('should return the message if cell is in the grid', () => { 
      expect(translate('M')).to.equal('5 1 S'); 
    }); 
    it('should turn the rover', () => { 
      expect(translate('L')).to.equal('5 1 E'); 
    }); 
    it('shouldn\'t move rover if cell is not the grid', () => { 
      translate('5 3 E')
      translate('M')
      expect(Rover.getLast().stringify()).to.equal('5 3 E'); 
    }); 
    it('should return a error message and stop if out of the grid', () => { 
      translate('3 3 E')
      expect(translate('MMMM')).to.equal('Incorrect move at 5 3 E'); 
    }); 
  })
  

});
