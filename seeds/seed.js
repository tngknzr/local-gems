const mongoose = require('mongoose');
const Product = require('../models/Gem.model');

mongoose
  .connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo Connection Open');
  })
  .catch((err) => {
    console.log(err);
  });

const gems = [
  {
    gemName: 'coffee',
    description: 'best ever coffee',
    location: 'Ohrid',
    imgUrl: 'https://i.postimg.cc/yNyfzvdX/coffee.jpg',
    category: 'drink',
    createdby: 'Biljana',
  },
  // Add more gems here as needed...
];

const seedData = async () => {
  try {
    // Clear existing data (optional)
    await Product.deleteMany({});

    // Insert the new data
    await Product.insertMany(gems);

    console.log('Data seeding completed successfully.');
  } catch (err) {
    console.error('Error while seeding data:', err);
  } finally {
    // Close the database connection after seeding
    mongoose.disconnect();
  }
};

// Run the seed function
seedData();
