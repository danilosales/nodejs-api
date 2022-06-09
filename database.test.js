const db = require('./database');

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

test('create person', async () => {
  expect.assertions(1);
  const person = await db.User.create({
    id: 1,
    name: 'Bobbie',
    email: 'bobbie@email.com'
  });
  expect(person.id).toEqual(1);
});

test('get person', async () => {
  expect.assertions(2);
  const person = await db.User.findByPk(1);
  expect(person.name).toEqual('Bobbie');
  expect(person.email).toEqual('bobbie@email.com');
});

test('delete person', async () => {
  expect.assertions(1);
  await db.User.destroy({
    where: {
      id: 1
    }
  });
  const person = await db.User.findByPk(1);
  expect(person).toBeNull();
});

afterAll(async () => {
  await db.sequelize.close();
});
