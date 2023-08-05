const mongoose = require('mongoose');
const Gem = require('../models/Gem.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/local';

const gems = [
  {
    gemName: 'coffee',
    description: 'best ever coffee',
    location: 'Ohrid',
    imgUrl: 'https://i.postimg.cc/yNyfzvdX/coffee.jpg',
    category: 'drink',
    createdby: 'Biljana',
  },
  {
    gemName: 'coffee',
    description: 'best ever coffee',
    location: 'Madrid',
    imgUrl: 'https://i.postimg.cc/yNyfzvdX/coffee.jpg',
    category: 'drink',
    createdby: 'Agustin',
  },
  {
    gemName: 'coffee',
    description: 'best ever coffee',
    location: 'Paris',
    imgUrl: 'https://i.postimg.cc/yNyfzvdX/coffee.jpg',
    category: 'drink',
    createdby: 'Biljana',
  },
];

mongoose
  .connect(MONGO_URI)
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

// const mongoose = require('mongoose');
// const Product = require('../models/Gem.model');

// mongoose
//   .connect('mongodb://localhost:27017/local', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Mongo Connection Open');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const gems = [
//   {
//     gemName: 'coffee',
//     description: 'best ever coffee',
//     location: 'Ohrid',
//     imgUrl: 'https://i.postimg.cc/yNyfzvdX/coffee.jpg',
//     category: 'drink',
//     createdby: 'Biljana',
//   },
//   // Add more gems here as needed...
// ];

// const seedData = async () => {
//   try {
//     // Clear existing data (optional)
//     await Product.deleteMany({});

//     // Insert the new data
//     await Product.insertMany(gems);

//     console.log('Data seeding completed successfully.');
//   } catch (err) {
//     console.error('Error while seeding data:', err);
//   } finally {
//     // Close the database connection after seeding
//     mongoose.disconnect();
//   }
// };

// // Run the seed function
// seedData();
