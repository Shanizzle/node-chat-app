const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    newUsers = new Users();
    newUsers.users = [{
      id: '1',
      name: 'Ken',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Shannen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Morgan',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    let newUsers = new Users();
    let user = {
      id: '1234',
      name: 'Shannen',
      room: 'The Office Fans'
    };
    let resUser = newUsers.addUser(user.id, user.name, user.room);
    expect(newUsers.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = newUsers.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(newUsers.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = newUsers.removeUser(userId);

    expect(user).toBeFalsy();
    expect(newUsers.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = newUsers.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = newUsers.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for node course', () => {
    let userList = newUsers.getUserList('Node Course');

    expect(userList).toEqual(['Ken', 'Morgan']);
  });

  it('should return names for react course', () => {
    let userList = newUsers.getUserList('React Course');

    expect(userList).toEqual(['Shannen']);
  });
});
