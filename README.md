
# **MyStore - Simple E-Commerce Frontend**

## **Project Overview**

**MyStore** is a simple, responsive e-commerce web application built using **React.js**, **Bootstrap**,Material-UI and **JavaScript**. The application allows users to browse products, view detailed information about each product, and add/remove products from the shopping cart. The cart functionality is handled using React's state management, making the app interactive without requiring a backend.

### **Key Features**
- **Product Grid**: Displays a list of products in a grid layout using Bootstrap cards.
- **Product Details**: Allows users to view detailed information about each product via dynamic routing.
- **Shopping Cart**: Users can add products to their cart and remove them as needed. The cart is managed using React state, and updates are reflected in real-time.
- **Wishlist**: Users can add products to their wishlist from the product grid or product detail page and remove products from the wishlist with a single click.
- **Responsive Design**: The UI is built using Bootstrap, ensuring the app looks great on devices of all screen sizes.

---

## **Technologies Used**

- **Frontend**:
  - **React.js**: A JavaScript library for building user interfaces. Used to create components and manage state.
  - **React Router**: A library for handling dynamic routing in React applications. Used to navigate between the Home, Product Detail, and Cart pages.
  - **Bootstrap**: A front-end framework that helps with creating responsive and aesthetically pleasing layouts. It’s used here for styling and grid layout.
  - **JavaScript**: Programming language used to handle business logic and interactivity in the app.

- **State Management**: React's built-in state is used to handle adding and removing products from the shopping cart.

---

## **Project Structure**

Here is an overview of the project’s folder structure:

```
src/
├── components/
│   ├── Cart.jsx             # Displays products in the cart and allows removal
│   ├── Home.jsx             # Displays the product grid with Add to Cart and Add to Wishlist buttons
│   ├── ProductDetail.jsx    # Displays detailed information about a single product
│   ├── Wishlist.jsx         # Displays the products in the wishlist with Remove button
│   └── Navbar.jsx           # Contains the navigation bar with links to Home, Cart, and Wishlist
├── data/
│   └── products.js          # Contains product data for the e-commerce site (static data)
├── App.js                   # Main component, holds the routing logic and state for the cart and wishlist
└── index.js                 # Entry point for the React app
```
---

## **How to Run the Project**

### **Prerequisites**
Make sure you have the following tools installed on your system:

- **Node.js** (v14.x or higher) - Download from [Node.js official website](https://nodejs.org/).
- **npm** (comes with Node.js)

### **Steps to Run the Project Locally**

1. **Clone the repository**:
   If you haven't cloned the repository yet, run the following command:
   ```bash
   git clone https://github.com/your-username/mystore.git
   cd mystore
   ```

2. **Install dependencies**:
   In the project directory, run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Start the development server**:
   Once the dependencies are installed, start the development server by running:
   ```bash
   npm start
   ```
   This will launch the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## **Features in Detail**

### **1. Product Grid**
The **Home** page displays a grid of products. Each product is displayed using a **Bootstrap Card**, which includes:
- Product Name
- Product Image
- Product Price
- "Add to Cart" Button

### **2. Product Detail Page**
By clicking on a product, users are directed to the **ProductDetail** page. This page shows:
- Detailed product information (name, description, price, etc.)
- "Add to Cart" button to add the product to the cart.

### **3. Shopping Cart**
On the **Cart** page, users can see all the products they have added to their cart, with the following functionalities:
- **Remove Item**: Clicking on the "Remove" button next to a product will remove it from the cart.
- The cart is dynamically updated in real-time as products are added or removed.

### **4. Responsive Design**
The UI is responsive, meaning the layout adapts based on the screen size. Whether you're on a mobile device, tablet, or desktop, the app will provide a consistent experience.

---

## **Future Enhancements**

While this project is fully functional as a static front-end, here are some potential improvements:
- **Backend Integration**: Integrating a backend API (using Node.js, Express.js, and MySQL) to handle product data and persist shopping cart data.
- **Authentication**: Allow users to create accounts and log in to save their cart or order history.
- **Payment Integration**: Add a payment gateway (e.g., Stripe or PayPal) for users to complete their purchase.
- **Search and Filter**: Implement search functionality to allow users to search for products based on name or category.

## **License**

This project is licensed under the MIT License.
