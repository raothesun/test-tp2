var UserRepository = require('../../../src/repository/UserRepository');


describe("UserRepository", function() {
    it("should call db.write", function(){
        var mockDb = jasmine.createSpyObj('db', ['get', 'push', 'write']);
        mockDb.get.and.returnValue(mockDb);
        mockDb.push.and.returnValue(mockDb);

        var repository = new UserRepository(mockDb);
        repository.create({
            id : 1,
            firstname: 'John',
            lastname : 'Doe',
            birthday : '2000-01-01'
        });

        expect(mockDb.push).toHaveBeenCalledWith({
            id : 1,
            firstname: 'John',
            lastname : 'Doe',
            birthday : '2000-01-01'
        });
        expect(mockDb.write).toHaveBeenCalledTimes(1);
    });

    //Create Exceptions
    it("should throw exception undefined", function(){
        var repository = new UserRepository({});
        var f = function(){
            repository.create();
        };

        expect(f).toThrow('User object is undefined')
    });

    it("should throw exception missing information", function(){
        var repository = new UserRepository({});
        var f = function(){
            repository.create({
                'id' : 1
            });
        };

        expect(f).toThrow('User object is missing information')
    });

    //Find Exception
    it("should throw exception undefined", function(){
        var repository = new UserRepository({});
        var f = function(){
            repository.findOneById();
        };

        expect(f).toThrow('Id is undefined')
    });

    //Update Exception
    it("should throw exception undefined", function(){
        var repository = new UserRepository({});
        var f = function(){
            repository.update();
        };

        expect(f).toThrow('User object is undefined')
    });

    it("should throw exception missing information", function(){
        var repository = new UserRepository({});
        var f = function(){
            repository.update({
                'id' : 1
            });
        };

        expect(f).toThrow('User object is missing information')
    });

    //Delete Exception
    it("should throw exception undefined", function(){
        var repository = new UserRepository({});
        var f = function(){
            repository.delete();
        };

        expect(f).toThrow('Id is undefined')
    });

});