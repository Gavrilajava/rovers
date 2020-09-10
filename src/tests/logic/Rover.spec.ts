

import 'mocha';
import { expect } from 'chai';
import Rover from '../../logic/Rover'
import Grid from '../../logic/Grid'


describe('Rover', () => { 
  before(() => {
    new Grid(10,10);
  })
  describe('creation:', () => { 
    it('should be created with params', () => { 
      const rover = new Rover(5,6,"W", Grid.last);
      expect(!!rover).to.equal(true); 
      expect(rover.x).to.equal(5); 
      expect(rover.y).to.equal(6); 
      expect(rover.direction).to.equal("W"); 
      expect(rover.grid).to.equal(Grid.last); 
    }); 
  })
  describe('#last:', () => { 
    it('should return last instance', () => { 
      const rover = new Rover(5,6,"W", Grid.last);
      expect(Rover.getLast()).to.equal(rover); 
    }); 
  })
  describe('.stringify', () => { 
    it('should return coordinates and direction', () => { 
      const rover = new Rover(5,6,"W", Grid.last);
      expect(rover.stringify()).to.equal("5 6 W"); 
    }); 
  })
  describe('.move', () => { 
    it('should move rover west', () => { 
      const rover = new Rover(5,5,"W", Grid.last);
      rover.move()
      expect(rover.x).to.equal(4); 
    }); 
    it('should move rover east', () => { 
      const rover = new Rover(5,5,"E", Grid.last);
      rover.move()
      expect(rover.x).to.equal(6); 
    }); 
    it('should move rover south', () => { 
      const rover = new Rover(5,5,"S", Grid.last);
      rover.move()
      expect(rover.y).to.equal(4); 
    }); 
    it('should move rover north', () => { 
      const rover = new Rover(5,5,"N", Grid.last);
      rover.move()
      expect(rover.y).to.equal(6); 
    }); 
    it('should not move rover outside the west border', () => { 
      const rover = new Rover(0,10,"W", Grid.last);
      rover.move()
      expect(rover.x).to.equal(0); 
    }); 
    it('should not move rover outside the north border', () => { 
      const rover = new Rover(10,10,"N", Grid.last);
      rover.move()
      expect(rover.y).to.equal(10); 
    }); 
    it('should not move rover outside the east border', () => { 
      const rover = new Rover(10,0,"E", Grid.last);
      rover.move()
      expect(rover.x).to.equal(10); 
    }); 
    it('should not move rover outside the south border', () => { 
      const rover = new Rover(0,0,"S", Grid.last);
      rover.move()
      expect(rover.y).to.equal(0); 
    }); 
  })
  describe('.turn', () => { 
    it('left should turn rover from west to south', () => { 
      const rover = new Rover(5,5,"W", Grid.last);
      rover.turn("L")
      expect(rover.direction).to.equal("S"); 
    }); 
    it('left should turn rover from east to north', () => { 
      const rover = new Rover(5,5,"E", Grid.last);
      rover.turn("L")
      expect(rover.direction).to.equal("N"); 
    }); 
    it('left should turn rover from south to east', () => { 
      const rover = new Rover(5,5,"S", Grid.last);
      rover.turn("L")
      expect(rover.direction).to.equal("E"); 
    }); 
    it('left should turn rover from north to west', () => { 
      const rover = new Rover(5,5,"N", Grid.last);
      rover.turn("L")
      expect(rover.direction).to.equal("W"); 
    }); 
    it('right should turn rover from west to north', () => { 
      const rover = new Rover(5,5,"W", Grid.last);
      rover.turn("R")
      expect(rover.direction).to.equal("N"); 
    }); 
    it('right should turn rover from east to south', () => { 
      const rover = new Rover(5,5,"E", Grid.last);
      rover.turn("R")
      expect(rover.direction).to.equal("S"); 
    }); 
    it('right should turn rover from south to west', () => { 
      const rover = new Rover(5,5,"S", Grid.last);
      rover.turn("R")
      expect(rover.direction).to.equal("W"); 
    }); 
    it('right should turn rover from north to east', () => { 
      const rover = new Rover(5,5,"N", Grid.last);
      rover.turn("R")
      expect(rover.direction).to.equal("E"); 
    }); 
    it('incorrect direction shouldn\'t turn the rover', () => { 
      const rover = new Rover(5,5,"N", Grid.last);
      rover.turn("F")
      expect(rover.direction).to.equal("N"); 
    }); 
  })

});
