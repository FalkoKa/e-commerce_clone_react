# E-commerce clone

## General Information

This is my final project as part of the Software Engineering Immersive at General Assembly - my first attempt to build a full-stack e-commerce store ([Zalando](https://zalando.com/) Clone). The project is built with the MERN stack.

[link to backend REST-API repository](https://github.com/FalkoKa/e-commerce_clone_API)

The frontend is built with ReactJS and CSS. Some react components are imported from Material UI (MUI)

Technologies used:

- ReactJS
- NodeJS
- ExpressJS
- HTML
- CSS
- MongoDB
- Stripe

User can put items into the cart without logging in. The items in the cart will be stored in localStorage. If the user signs up and logs in, items will be stored in the database (MongoDB). Only when logged in, the user can checkout. The checkout process will guide the user through contact information, payment method and finally the order confirmation. For the payment (at this point, PayPal is not implemented yet), the user will be redirected to Stripe. After the payment, the user will be redirected to the successful checkout page. In the user profile, the user can see his past orders.

#### To Do List

- [ ] PayPal Checkout
- [ ] Search Function
- [ ] Add items stored in local storage to user cart upon login
- [ ] Dropdown menus (profile and cart)
- [ ] Responsiveness for mobile devices
- [ ] Brands and category sections
- [ ] Pagination
- [ ] Guest checkout
- [ ] Product review option

## Screenshots

#### Homepage

![Homepage](/src/images/homepage.png)

#### Product Overview

![Product Overview](/src/images/product-overview.png)

#### Shopping Cart

![Shopping Cart](/src/images/shopping-cart.png)

#### Checkout Process

![Checkout Process](/src/images/checkout-process.png)

#### Checkout Confirmation

![Checkout Confirmation](/src/images/checkout-confirmation.png)

#### Product Details

![Product Details](/src/images/product-details.png)
