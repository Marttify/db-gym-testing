


// copilot create 30 pets for my database, this is a development seed file

import { Pets } from './database.js';

const pets = [
  { name: 'Firulais', breed_names: 'Pitbull', birthday: '2019-01-01' },
  { name: 'Rex', breed_names: 'Bulldog', birthday: '2019-01-01' },
  { name: 'Scooby', breed_names: 'Labrador', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Goofy', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
  { name: 'Dino', breed_names: 'Chihuahua', birthday: '2019-01-01' },
  { name: 'Odie', breed_names: 'Beagle', birthday: '2019-01-01' },
  { name: 'Snoopy', breed_names: 'Pug', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Droopy', breed_names: 'Bulldog', birthday: '2019-01-01' },
  { name: 'Spike', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
  { name: 'Scooby', breed_names: 'Labrador', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Goofy', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
  { name: 'Dino', breed_names: 'Chihuahua', birthday: '2019-01-01' },
  { name: 'Odie', breed_names: 'Beagle', birthday: '2019-01-01' },
  { name: 'Snoopy', breed_names: 'Pug', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Droopy', breed_names: 'Bulldog', birthday: '2019-01-01' },
  { name: 'Spike', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
  { name: 'Scooby', breed_names: 'Labrador', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Goofy', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
  { name: 'Dino', breed_names: 'Chihuahua', birthday: '2019-01-01' },
  { name: 'Odie', breed_names: 'Beagle', birthday: '2019-01-01' },
  { name: 'Snoopy', breed_names: 'Pug', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Droopy', breed_names: 'Bulldog', birthday: '2019-01-01' },
  { name: 'Spike', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
  { name: 'Scooby', breed_names: 'Labrador', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Goofy', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
  { name: 'Dino', breed_names: 'Chihuahua', birthday: '2019-01-01' },
  { name: 'Odie', breed_names: 'Beagle', birthday: '2019-01-01' },
  { name: 'Snoopy', breed_names: 'Pug', birthday: '2019-01-01' },
  { name: 'Pluto', breed_names: 'Dalmata', birthday: '2019-01-01' },
  { name: 'Droopy', breed_names: 'Bulldog', birthday: '2019-01-01' },
  { name: 'Spike', breed_names: 'Pastor Aleman', birthday: '2019-01-01' },
]

await Pets.bulkCreate(pets);

console.log('Pets created');

// copilot create 30 users for my database, this is a development seed file

import { User } from './database.js';

const users = [
  { name: 'Alice Johnson', email: 'alice@example.com', birthday: '1990-03-15' },
  { name: 'Bob Smith', email: 'bob@example.com', birthday: '1988-05-20' },
  { name: 'Charlie Brown', email: 'charlie@example.com', birthday: '1995-11-10' },
  { name: 'David Miller', email: 'david@example.com', birthday: '1987-09-25' },
  { name: 'Emma Wilson', email: 'emma@example.com', birthday: '1993-02-18' },
  { name: 'Frank Thomas', email: 'frank@example.com', birthday: '1984-07-08' },
  { name: 'Grace Lee', email: 'grace@example.com', birthday: '1991-12-30' },
  { name: 'Henry Wang', email: 'henry@example.com', birthday: '1986-06-05' },
  { name: 'Ivy Chen', email: 'ivy@example.com', birthday: '1992-04-12' },
  { name: 'Jackie Jones', email: 'jackie@example.com', birthday: '1989-08-22' },
  { name: 'Kevin Davis', email: 'kevin@example.com', birthday: '1994-10-28' },
  { name: 'Linda Martinez', email: 'linda@example.com', birthday: '1983-01-07' },
  { name: 'Michael Brown', email: 'michael@example.com', birthday: '1996-07-19' },
  { name: 'Nancy White', email: 'nancy@example.com', birthday: '1982-09-14' },
  { name: 'Olivia Adams', email: 'olivia@example.com', birthday: '1997-03-04' },
  { name: 'Peter Taylor', email: 'peter@example.com', birthday: '1981-11-26' },
  { name: 'Rachel Clark', email: 'rachel@example.com', birthday: '1998-05-31' },
  { name: 'Samuel Hall', email: 'samuel@example.com', birthday: '1980-02-09' },
  { name: 'Tina Garcia', email: 'tina@example.com', birthday: '1999-09-23' },
  { name: 'Victor Lopez', email: 'victor@example.com', birthday: '1979-12-12' },
];

await User.bulkCreate(users);

console.log('Users created');
