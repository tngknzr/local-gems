const mongoose = require('mongoose');
const Gem = require('../models/Gem.model');

const MONGO_URI = process.env.MONGODB_URI

// const MONGO_URI = process.env.MONGODB_URI;

const gems = [
  {
    gemName: 'Coffee',
    description: 'best ever coffee',
    location: 'Ohrid',
    venueName: 'Steve Cafe',
    imgUrl: 'https://i.postimg.cc/yNyfzvdX/coffee.jpg',
    category: 'drink',
    createdby: 'Biljana',
  },
  {
    gemName: 'Ancient Theatre',
    description: 'breathtaking views',
    location: 'Ohrid',
    venueName: 'Ancient Theatre of Ohrid',
    imgUrl: 'https://i.postimg.cc/RhjdbQ7W/amphitheater.jpg',
    category: 'historical site',
    createdby: 'Sara',
  },
  {
    gemName: 'SUP',
    description: 'The best standup paddleboarding',
    location: 'Ohrid',
    venueName: 'SUP Club Ohrid',
    imgUrl: 'https://i.postimg.cc/6qjrDVCr/sups.png',
    category: 'water activity',
    createdby: 'Goce',
  },
  {
    gemName: 'Flamenco Dance',
    description: 'Traditional spanish flamenco show',
    location: 'Madrid',
    venueName: 'Flamenco Ramblas',
    imgUrl: 'https://i.postimg.cc/J0pVj6SC/flamenco-madrid.jpg',
    category: 'entertainment',
    createdby: 'Maria',
  },
  {
    gemName: 'Tapas',
    description: 'Best tapas tour in the city',
    location: 'Madrid',
    venueName: 'Wine and Tapas',
    imgUrl: 'https://i.postimg.cc/d36krFqQ/wine-tapas-madrid.jpg',
    category: 'food',
    createdby: 'Mateo',
  },
  {
    gemName: 'Paella',
    description: 'Most delicious paella Ive eaten',
    location: 'Madrid',
    venueName: 'Restaurante Rodriguez',
    imgUrl: 'https://i.postimg.cc/85x0R8zv/paella-madrid.png',
    category: 'food',
    createdby: 'Diego',
  },
];

mongoose
  .connect("mongodb+srv://agustin2:1234@cluster1.hyph5r4.mongodb.net/local-gems"  )
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Gem.create(gems);
  })
  .then((gemsFromDB) => {
    console.log(`Created ${gemsFromDB.length} gems`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch((err) => {
    console.log(`An error occurred while creating gems from the DB: ${err}`);
  });
