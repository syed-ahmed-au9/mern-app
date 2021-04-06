import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Syed',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Ahmed',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'iPhone XR 1',
            category: 'Mobiles',
            image: '/images/p1.jpg',
            price: '36000',
            countInStock: 10,
            brand: 'iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'iPhone XR 2',
            category: 'Mobiles',
            image: '/images/p1.jpg',
            price: '36000',
            countInStock: 20,
            brand: 'iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'iPhone XR 3',
            category: 'Mobiles',
            image: '/images/p1.jpg',
            price: '36000',
            countInStock: 0,
            brand: 'iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'iPhone XR 4',
            category: 'Mobiles',
            image: '/images/p1.jpg',
            price: '36000',
            countInStock: 15,
            brand: 'iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'iPhone XR 5',
            category: 'Mobiles',
            image: '/images/p1.jpg',
            price: '36000',
            countInStock: 5,
            brand: 'iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'iPhone XR 6',
            category: 'Mobiles',
            image: '/images/p1.jpg',
            price: '36000',
            countInStock: 12,
            brand: 'iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
    ],
};
export default data;