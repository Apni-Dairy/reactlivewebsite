import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Anant',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'High Quality Milk',
        category: 'Milk',
        image: '/images/shutterstock_568076731-4.png',
        price: 50,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Medium Quality Milk',
        category: 'Milk',
        image: '/images/shutterstock_1922943683.png',
        price: 45,
        countInStock: 20,
        rating: 4.0,
        numReviews: 10,
        description: 'medium quality product',
      },
      {
        name: 'Normal Quality Milk',
        category: 'Milk',
        image: '/images/shutterstock_1720735771.png',
        price: 40,
        countInStock: 0,
        rating: 4.8,
        numReviews: 17,
        description: 'normal quality product',
      },
      {
        name: 'Low Quality Milk',
        category: 'Milk',
        image: '/images/shutterstock_721417984.png',
        price: 35,
        countInStock: 15,
        rating: 4.5,
        numReviews: 14,
        description: 'low quality product',
      },
    ],
  };
  export default data;