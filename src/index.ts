import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'benny', age:26 });

user.on('change', () => {
  console.log(user)
});

user.fetch();
