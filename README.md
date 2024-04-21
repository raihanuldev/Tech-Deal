# E-Shop

E-Shop is an Online Shop Web Application that facilitates buying and selling products. It provides a platform for buyers to browse and purchase products, sellers to add new products, and administrators to manage users, products, and payments.

## Features

- **Buyer Features:**
  - Browse products
  - Add products to cart
  - View cart and proceed to checkout
  - Make payments using various payment methods (Bkash, Nagad, Rocket, Upai)
  - View order history

- **Seller Features:**
  - Add new products
  - Update existing products
  - View sales reports
  - Manage orders

- **Admin Features:**
  - View all products
  - Manage users (e.g., block/unblock users)
  - Handle payments
  - View and manage orders
  
## Technologies Used

- **Frontend:**
  - TypeScript
  - Next.js

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

## Payment Gateways

- Bkash
- Nagad
- Rocket
- Upai

## Installation

1. Clone the repository: `git clone https://github.com/raihanuldev/E-Shop.git`
2. Navigate to the project directory: `cd E-Shop`
3. Install dependencies:
   - For frontend: `cd frontend && npm install`
   - For backend: `cd backend && npm install`
4. Set up environment variables:
   - Create a `.env` file in the backend directory and add necessary environment variables (e.g., MongoDB connection string, payment gateway credentials)
5. Start the backend server: `cd backend && npm start`
6. Start the frontend server: `cd frontend && npm run dev`

## Contributors

- [Raihanul Islam](https://github.com/raihanuldev)

## License

This project is licensed under the [MIT License](LICENSE).

