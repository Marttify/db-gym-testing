import express from 'express';
import { Pets, User } from './database.js';

import bodyParser from 'body-parser'
const app = express();
const port = process.env.PORT || 3000; // Set the port

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/get-users', async (req, res) => {
  let allUsers = await User.findAll()
  allUsers.map((users) => users.toJSON())
  res.send(allUsers);
});

app.get('/get-user/:id', async (req, res) => {
  const id = req.params.id;
  let user = await User.findByPk(id);
  if (!user) {
    res.status(404).send('Usuario no encontrado.');
    return;
  }
  user = user.toJSON();
  res.send(user);
});

app.get('/get-pets', async (req, res) => {
  let allPets = await Pets.findAll()
  allPets.map((pet) => pet.toJSON())
  res.send(allPets);
});

app.get('/get-pets/:id', async (req, res) => {
  const id = req.params.id;
  let pets = await Pets.findByPk(id);
  if (!pets) {
    res.status(404).send('Usuario no encontrado.');
    return;
  }
  pets = pets.toJSON();
  res.send(pets);
});


// Actualizar: 
// /update-user/:id para actualizar el usuario, que se pueda actualizar el nombre, y que el nombre se pase por el body en un tipo de request PUT
// /update-user/:id para actualizar el usuario, a travez del body se pueda actualizar el nombre, el email y la fecha de nacimiento

app.put('/update-user/:id', async (req, res) => {
  const id = req.params.id;
  let user = await User.findByPk(id);
  if (!user) {
    res.status(404).send('Usuario no encontrado.');
    return;
  }
  await user.update({ name: "Ema" });
  res.send('Usuario actualizado');
});

app.put('/update-pet/:id', async (req, res) => {
  const id = req.params.id;
  let pets = await Pets.findByPk(id);
  if (!pets) {
    res.status(404).send('Mascota no encontrado.');
    return;
  }
  // body
  await pets.update({ name: "Akira" });
  res.send('Mascota actualizada');
});

// Actualizar: 
// /update-pet/:id para actualizar el mascota, que se pueda actualizar el nombre, y que el nombre se pase por el body en un tipo de request PUT
// /update-pet/:id para actualizar el mascota, a travez del body se pueda actualizar el nombre, la raza y la fecha de nacimiento
app.put('/update-user/:id', async (req, res) => {
  const id = req.params.id;
  let user = await User.findByPk(id);
  if (!user) {
    res.status(404).send('Usuario no encontrado.');
    return;
  }
  await user.update({ name: req.body.name });
  res.send('Usuario actualizado');
});

app.put('/update-pet/:id', async (req, res) => {
  const id = req.params.id;
  let pets = await Pets.findByPk(id);
  if (!pets) {
    res.status(404).send('Mascota no encontrado.');
    return;
  }
  // body
  await pets.update({ name: req.body.name });
  res.send('Mascota actualizada');
});


// Eliminar
// /delete-user/:id para eliminar el usuario con el id que le estamos pasando
// /delete-pet/:id para eliminar la mascota con el id que le estamos pasando
app.delete('/delete-user/:id', async (req, res) => {
  const id = req.params.id;
  let user = await User.findByPk(id);
  if (!user) {
    res.status(404).send('Usuario no encontrado.');
    return;
  }
  await user.destroy();
  res.send('Usuario eliminado');
});

app.delete('/delete-pet/:id', async (req, res) => {
  const id = req.params.id;
  let pets = await Pets.findByPk(id);
  if (!pets) {
    res.status(404).send('Usuario no encontrado.');
    return;
  }
  await pets.destroy();
  res.send('Mascota eliminada');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



