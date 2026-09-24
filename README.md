##  Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Tools
- Git
- GitHub
- VS Code
FarmDirect 🌱
A modern farm-to-table marketplace that connects farmers, consumers, delivery partners, and platform administrators through one digital experience.

FarmDirect is a React + Vite frontend application designed around a direct agricultural marketplace. The interface covers the major journeys of the platform: discovering fresh produce, shopping and checkout, farmer inventory management, delivery operations, AI-assisted farm insights, and high-level platform administration.

The full backend will be implemented using Node.js and Express.js, with API-driven data, authentication, database persistence, payments, delivery operations, and other production services.

This repository currently represents the frontend / UI implementation. It contains realistic demo data and client-side interactions, but it does not contain a backend API, database layer, real authentication, payment gateway integration, or production AI service yet.

Preview
https://public/landing.jpg

What FarmDirect Is Trying to Solve
Traditional agricultural supply chains can introduce several layers between growers and end customers. FarmDirect is designed around a simpler model:

Farmer → FarmDirect marketplace → Consumer

with a dedicated delivery flow connecting the order to the customer.

The product experience is built around these ideas:

Farmers can present and manage their produce directly.

Consumers can discover products from local growers and place orders.

Delivery partners can manage delivery requests and update delivery status.

The platform can provide operational and marketplace insights through an admin dashboard.

AI-oriented screens can help farmers understand demand, production signals, and recommended actions.

🚀 Features
👨‍🌾 Farmer
Farmer registration and dashboard

Add and manage products

Inventory and order management

Earnings dashboard

AI demand-forecasting interface

🛒 Consumer
Marketplace with categories and search

Product details

Shopping cart

Checkout and address management

Order confirmation and tracking

🚚 Delivery Partner
Delivery dashboard

Delivery requests

Active delivery workflow

Pickup → Start Delivery → Delivered status flow

🛡️ Admin
Platform overview dashboard

Farmer and consumer statistics

GMV and delivery insights

Navigation for marketplace, orders, users, delivery, and AI modules

Current Project Status
Implemented in the current frontend
Responsive landing page and marketing experience

Role selection for Farmer, Consumer, and Delivery Partner

Login UI with role-based navigation behavior

Separate registration experiences for all three user types

Farmer dashboard and farmer navigation layout

Farmer product/inventory management UI

Farmer order management UI

Farmer earnings/financial dashboard UI

Farmer AI demand-forecasting UI

Consumer marketplace with categories and search UI

Product detail page

Shopping cart with quantity controls

Checkout with address selection/addition and payment-method UI

Order confirmation page

Order tracking page

Delivery partner dashboard

Active delivery workflow with status transitions

Admin/platform dashboard

Client-side cart persistence through localStorage

Last-order persistence through sessionStorage

Responsive styling using Tailwind utility classes

Material Symbols icons and custom typography

Not implemented yet
The repository does not currently include:

Backend/server code

REST/GraphQL API integration

Database models or database connection

Real user authentication/authorization

Password hashing or OTP verification

Google OAuth or other social login

Real farmer verification/KYC processing

Real file/document upload handling

Real payment processing

Razorpay/Stripe/etc. integration

Payment webhooks

Real order persistence

Real delivery tracking/GPS/maps integration

Real-time notifications or chat

Real AI/ML inference service

Production analytics pipeline

Server-side role protection

The dashboards and workflows are therefore best understood as a working frontend prototype / product demonstration, not a production marketplace backend.

Main User Roles
👨‍🌾 Farmer
The farmer experience focuses on listing produce, monitoring sales, handling orders, viewing earnings, and using AI-oriented insights.

Current screens include:

Farmer Dashboard

Add New Product

My Products

Order Management

Financial Dashboard

AI Demand Forecast

🛒 Consumer
The consumer experience focuses on discovering produce, viewing product information, managing a cart, checking out, and tracking an order.

Current screens include:

Marketplace

Product Details

Cart

Checkout

Order Confirmation

Order Tracking

🚚 Delivery Partner
The delivery experience focuses on accepting delivery work and progressing an active delivery through its operational states.

Current screens include:

Delivery Dashboard

Active Delivery

Delivery status controls such as pickup, start delivery, and delivered

🛡️ Admin
The admin interface provides a high-level view of platform activity and links to the main operational areas.

Current dashboard areas include:

Total farmers

Total consumers

Market GMV

AI platform-health indicator

User segment growth visualization

Successful delivery visualization

Navigation to farmer, consumer, delivery, orders, and AI areas

🧩 Core User Flows
Consumer shopping flow
text
Landing Page
    ↓
Marketplace
    ↓
Product Details
    ↓
Add to Cart / Buy Now
    ↓
Cart
    ↓
Checkout
    ↓
Place Order
    ↓
Order Confirmation
    ↓
Order Tracking
Farmer flow
text
Role Selection
    ↓
Farmer Registration
    ↓
Farmer Dashboard
    ├── Products
    ├── Add Product
    ├── Orders
    ├── Earnings
    └── AI Demand Forecast
Delivery flow
text
Role Selection
    ↓
Delivery Registration
    ↓
Delivery Dashboard
    ↓
Active Delivery
    ↓
Picked Up
    ↓
Start Delivery
    ↓
Mark as Delivered
Login behavior in the current prototype
The current login screen does not validate credentials against a server. Instead, it uses the selected role to navigate to the corresponding frontend area:

Farmer → /farmer/dashboard

Delivery → /delivery/dashboard

Consumer → /marketplace

This is intentional prototype behavior and should be replaced by real authentication when a backend is added.

🛠️ Technology Stack
Frontend
React 19.2.8

React DOM 19.2.8

React Router DOM 7.18.4

JavaScript / JSX

HTML5 / CSS3

Build & Development
Vite 8.3.0

@vitejs/plugin-react 6.1.1

Oxlint 1.81.0

npm

UI / Design
Tailwind CSS via the browser CDN

Material Symbols Outlined

Manrope for headings/display text

Work Sans for body and label text

Custom FarmDirect green/earth-tone design tokens defined in index.html

Backend — Planned
Node.js

Express.js

REST APIs

Authentication & authorization

Database integration

Payment gateway & webhooks

OTP/email services

File uploads

Delivery APIs

AI/ML service integration

Development Tools
Git

GitHub

VS Code

The frontend currently uses demo/static data and browser storage; backend integration will replace these with real APIs and persistent data.

📁 Project Structure
text
farmdirect/
├── public/
│   ├── landing.jpg
│   ├── moong dal.jpg
│   ├── paneer.jpg
│   ├── toor dal.jpg
│   └── turmeric.jpg
│
├── src/
│   ├── components/
│   │   ├── DeliveryLayout.jsx
│   │   ├── FarmerLayout.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── DeliveryActive.jsx
│   │   ├── DeliveryDashboard.jsx
│   │   ├── FarmerAI.jsx
│   │   ├── FarmerAddProduct.jsx
│   │   ├── FarmerDashboard.jsx
│   │   ├── FarmerEarnings.jsx
│   │   ├── FarmerOrders.jsx
│   │   ├── FarmerProducts.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Marketplace.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── OrderTracking.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── RegisterConsumer.jsx
│   │   ├── RegisterDelivery.jsx
│   │   ├── RegisterFarmer.jsx
│   │   └── RoleSelect.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
Application Architecture
The frontend follows a lightweight React structure rather than a large enterprise architecture.

Entry point
src/main.jsx is responsible for mounting the React application.

The component tree is roughly:

text
React.StrictMode
└── BrowserRouter
    └── CartProvider
        └── App
            └── Routes / Pages
Routing
src/App.jsx contains all application routes using React Router.

Shared layouts
Two dashboard layouts are used for repeated role-specific navigation:

FarmerLayout.jsx

DeliveryLayout.jsx

Public/consumer-oriented pages use shared UI such as:

Navbar.jsx

Footer.jsx

Shared cart state
src/context/CartContext.jsx provides a global cart context to the whole application.

It exposes:

text
items
addToCart()
removeFromCart()
updateQty()
clearCart()
subtotal
count
This avoids passing cart data manually through multiple pages.

🔗 Route Map
Route	Screen	Purpose
/	Landing	Product/marketplace introduction
/login	Login	Role-based login prototype
/role-select	Role Select	Choose a platform role
/register/farmer	Farmer Registration	Farmer onboarding form
/register/consumer	Consumer Registration	Consumer onboarding form
/register/delivery	Delivery Registration	Delivery partner onboarding
/farmer/dashboard	Farmer Dashboard	Farmer summary and recent activity
/farmer/add-product	Add Product	Product listing form
/farmer/products	My Products	Farmer inventory view
/farmer/orders	Farmer Orders	Farmer order management
/farmer/earnings	Farmer Earnings	Revenue and manual-sale UI
/farmer/ai	Farmer AI	Demand and crop insight UI
/marketplace	Marketplace	Browse available products
/marketplace/search	Marketplace Search	Same marketplace screen with search route
/product	Product Details	Detailed information for a selected product
/cart	Cart	Review cart items and totals
/checkout	Checkout	Address, payment-method UI, and order creation
/order/success	Order Confirmation	Confirmation after placing an order
/order/track	Order Tracking	Delivery/timeline view
/delivery/dashboard	Delivery Dashboard	Delivery requests and earnings overview
/delivery/active	Active Delivery	Delivery status workflow
/admin	Admin Dashboard	Platform-wide dashboard
Marketplace Behavior
The marketplace currently uses a static product dataset inside src/pages/Marketplace.jsx.

Available categories
All

Vegetables

Fruits

Grains

Pulses

Dairy

Organic

Example demo products
Organic Red Onions

Heirloom Tomatoes

Fresh Spinach Bundle

Fresh Nagpur Oranges

Sweet Alphonso Mangoes

Kashmiri Red Apples

Sona Masoori Rice

Organic Wheat Flour

Organic Toor Dal

Chana Dal Premium

Moong Dal Yellow

Homemade Paneer

Fresh Curd

Organic Turmeric

Some product images are loaded from unsplash.com and several local assets are served from public/.

Product details
Products carry demo information such as:

Name

Farm

Price

Unit

Rating

Approximate distance

Harvest timing

Farming method

Location

Description

Image

A selected product is passed to the product-detail page through React Router location state.

Shopping Cart Implementation
The cart is handled by CartContext.jsx.

Persistence
Cart data is stored in the browser under:

text
localStorage key: fd_cart
When the app loads, the provider tries to restore the saved cart. Whenever cart items change, the updated array is written back to localStorage.

Cart operations
The current implementation supports:

Add product

Increase quantity

Decrease quantity

Remove product

Clear cart

Calculate subtotal

Calculate total item count

Products are identified for cart merging using their name field.

Checkout & Orders
The checkout page currently demonstrates the complete frontend interaction required to place an order.

Address handling
The page starts with one hard-coded demo address and allows a user to add another address locally during the current session.

Payment UI
The checkout screen displays options for:

UPI

Net Banking

Card

Cash on Delivery

The payment choice currently affects frontend state only. No external payment provider is contacted.

Demo totals
The checkout currently calculates:

text
Total = Subtotal + Delivery Charge - Subsidy
The current demo values are:

Delivery charge: ₹250 when the cart has items

Subsidy: ₹500 when the cart has items

The value is clamped to a minimum of zero.

Order storage
When an order is placed, the app creates a demo order object containing:

Generated order ID

Total amount

Ordered items

Date/time

It is stored in:

text
sessionStorage key: fd_last_order
The cart is then cleared and the user is redirected to /order/success.

Because the order uses sessionStorage, it is not a permanent database record.

Farmer Module
Farmer Dashboard
FarmerDashboard.jsx provides a high-level snapshot containing:

Monthly sales

Year-to-date earnings

Demand alert

AI forecast message

Recent orders

Links to orders and AI insights

The dashboard currently uses hard-coded demo metrics and order rows.

Add Product
FarmerAddProduct.jsx contains a product creation UI with fields for:

Product name

Category

Description

Available quantity

Unit

Price per unit

Harvest date

Location

Product image area

The screen also includes an AI-suggested price example.

Submitting the form currently navigates to /farmer/products; it does not create a persistent product record.

Products
FarmerProducts.jsx displays demo inventory data and provides UI for:

Search

Product cards/rows

Quantity and pricing information

Edit action UI

Delete action UI

Link to add a product

It also links toward the marketplace.

Farmer Orders
FarmerOrders.jsx contains demo order-management data and UI for:

Search by order/product/customer

Status filtering

Payment filtering

Pagination controls

Status/payment badges

The displayed dataset is currently static.

Farmer Earnings
FarmerEarnings.jsx provides a financial dashboard with:

Total earnings

Current-month earnings

Pending payments

Transaction history

Manual sale form UI

Export-report UI

The transaction table and summary metrics are demo data.

Farmer AI
FarmerAI.jsx is a product concept screen for demand forecasting and decision support.

It currently demonstrates:

Current demand index

Predicted 30-day demand

Confidence score

Recommended crop

Suggested production volume

Demand trajectory placeholder chart

Crop-comparison placeholder chart

Market-share placeholder chart

AI market insights

Recommended actions

The charts are visual placeholders at the current stage; there is no connected ML model or analytics API in this repository.

Delivery Module
Delivery Dashboard
DeliveryDashboard.jsx shows demo delivery requests and an earnings summary.

The interface includes:

Delivery request cards

Estimated earnings

Farm/location information

Route optimization concept

Map UI placeholder/navigation

Active Delivery
DeliveryActive.jsx provides a simple frontend state machine.

The current status flow is effectively:

text
Idle
 ↓
Picked Up
 ↓
Started
 ↓
Delivered
The buttons enforce the intended order of actions through local React state.

This does not communicate with a backend or live delivery service.

Admin Module
AdminDashboard.jsx provides a platform-level overview.

Current demo metrics include:

Total Farmers: 5K

Total Consumers: 50K

Market GMV: ₹1.2Cr

AI forecast accuracy: 94%

The page also contains placeholder chart visuals for user growth and successful deliveries.

The numbers are presentation/demo values and should not be interpreted as production analytics.

Design System / UI Direction
FarmDirect uses a clean agricultural SaaS-style visual language.

Typography
Manrope — headings, display numbers, prominent titles

Work Sans — body text, labels, forms

Primary visual direction
Farm/agriculture green palette

Warm neutral backgrounds

Rounded cards

Light borders

Soft ambient shadows

Material Symbols icons

Responsive desktop/mobile layouts

Tailwind configuration
Custom colors, spacing, font sizes, radius values, and font families are configured directly inside index.html under tailwind.config because Tailwind is currently loaded from the CDN.

Important custom design tokens include names such as:

text
primary
primary-container
secondary
tertiary
surface
surface-container
on-surface
on-surface-variant
outline
error
ai-accent
💾 Current Data Handling
The current prototype uses:

React state for UI interactions

localStorage for cart persistence (fd_cart)

sessionStorage for the latest demo order (fd_last_order)

Static/in-component demo data

These will be replaced or extended with backend APIs and database persistence.

Data & State Strategy
React state — used for temporary UI interactions such as:

Selected role

Selected checkout payment method

Checkout addresses

Delivery status

Product quantity

Marketplace category

Local storage — fd_cart used for persistent cart data across browser reloads.

Session storage — fd_last_order used to keep the latest demo order available to the confirmation screen during the current browser session.

Static in-code data — most dashboards and marketplace records are currently defined directly inside page components, which makes the prototype easy to demonstrate but is not appropriate for multi-user production usage.

🔐 Planned Backend Architecture
A future production version will evolve into a full-stack architecture similar to:

text
                    ┌─────────────────────┐
                    │     React + Vite    │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │ HTTPS / REST API
                               ▼
                    ┌─────────────────────┐
                    │  Node.js + Express  │
                    │       Backend       │
                    └──────────┬──────────┘
                               │
               ┌──────────────┼───────────────┐
               ▼              ▼               ▼
        ┌────────────┐  ┌─────────────┐  ┌──────────────┐
        │  MongoDB   │  │ Payment API │  │ OTP / Email  │
        │ / Postgres │  │             │  │   Service    │
        └────────────┘  └─────────────┘  └──────────────┘
                               │
                               ▼
                       Payment Webhooks

      Optional services:
      • Maps / route optimization
      • Object storage for KYC/product images
      • Notification service
      • AI/ML inference service
      • Analytics / event pipeline
The backend will keep critical business logic and authorization on the server rather than trusting the browser.

Backend Responsibilities
Authentication & RBAC

Users / Farmers / Consumers / Delivery

Products & Inventory

Orders

Payments & Webhooks

OTP / Email

File Uploads / KYC

AI / Analytics APIs

🗺️ Backend Development Roadmap
Phase 1 — Backend Foundation
Create Node.js + Express.js service

Connect database (MongoDB / PostgreSQL)

Define users, roles, products, orders, addresses, payments, deliveries, and verification records

Add validation and error-handling middleware

Phase 2 — Real Authentication
Registration APIs

Login APIs

Password hashing

JWT/access-token strategy

Refresh-token handling

OTP generation/verification if required

Role-based authorization

Phase 3 — Marketplace APIs
Product CRUD

Search

Category filtering

Inventory management

Farmer-to-product relationship

Product image uploads

Phase 4 — Orders and Payments
Create order API

Order status workflow

Payment gateway integration

Payment signature verification

Webhooks

Refund/cancellation handling

Phase 5 — Delivery Operations
Delivery assignment

Delivery acceptance

Driver location updates

Maps integration

Route optimization

Proof of delivery

Phase 6 — AI / Analytics
Historical sales dataset

Demand forecasting model/service

Recommendation engine

Farmer insights API

Real analytics dashboard

Phase 7 — Production Hardening
Server-side authorization

Rate limiting

Security headers

Input validation

Audit logging

Monitoring and error tracking

Automated tests

CI/CD

Production asset strategy

▶️ Getting Started
Prerequisites
Install:

Node.js (current LTS recommended)

npm

Git

1. Clone the repository
bash
git clone https://github.com/Mustufa-khan-O7/farmdirect.git
cd farmdirect
2. Install dependencies
bash
npm install
3. Start the development server
bash
npm run dev
Vite will print the local development URL in the terminal.

4. Create a production build
bash
npm run build
5. Preview the production build locally
bash
npm run preview
Available NPM Scripts
Command	Purpose
npm run dev	Start the Vite development server
npm run build	Build the application for production
npm run preview	Preview the production build locally
npm run lint	Run Oxlint
Environment Variables
The current frontend does not require a .env file to run because there is no backend/API configuration in the repository.

When backend services are introduced, environment variables should be used for values such as:

env
VITE_API_BASE_URL=
VITE_MAPS_API_KEY=
VITE_PAYMENT_PUBLIC_KEY=
Only values that are safe to expose to a browser should use the VITE_ prefix.

Never place server secrets, private API keys, database credentials, or payment secrets in the frontend environment.

Important External Resources
The current app loads some assets at runtime from external CDNs/services:

Tailwind CSS CDN

Google Fonts

Google Material Symbols

Unsplash product images

Several remote Google-hosted image URLs used by demo avatars/backgrounds

This means some visual content depends on network access.

For a production deployment, consider self-hosting critical fonts/assets and replacing demo image URLs with a controlled asset pipeline.

Known Limitations
This section is important because the current UI looks like a complete marketplace while the underlying services are still mocked.

Authentication
The login form accepts UI input but does not authenticate the user. Role selection directly controls navigation.

Registration
Registration forms do not send data anywhere. Submitting a registration form simply navigates to the relevant dashboard/marketplace.

OTP
OTP is represented in the interface but there is no real OTP generation, SMS service, validation, retry limit, or expiration mechanism.

KYC / identity verification
Farmer and delivery verification forms show document-upload areas, but the current code does not upload, validate, or store files.

Products
Farmer products are demo/static data. Adding a product does not add it to the marketplace.

Orders
Orders are created only as a client-side demo object and stored in sessionStorage. There is no order database.

Payments
The checkout payment choices are UI state only. No payment processor is integrated.

Delivery tracking
The delivery pages demonstrate a workflow but there is no real GPS, route calculation, map provider, location stream, or delivery API.

AI
The AI dashboard presents insights and charts as product/UI concepts. There is no connected model, inference endpoint, training pipeline, or real-time market data source.

Authorization
There are no route guards or server-side permissions. A user can navigate directly to any frontend route.

Footer and placeholder links
Some links use href="#" and one footer navigation entry references /about, which is not currently defined in App.jsx. These should be connected or removed before production release.

Tailwind delivery model
Tailwind is currently loaded through the CDN in index.html rather than being compiled as part of the Vite build. A production application may benefit from a compiled Tailwind/PostCSS setup for more predictable asset delivery and deployment behavior.

🧭 Git Workflow
For normal development:

Get the project for the first time
bash
git clone https://github.com/Mustufa-khan-O7/farmdirect.git
cd farmdirect
npm install
Create a feature branch
bash
git checkout -b feature/your-feature-name
Check changes
bash
git status
Stage changes
bash
git add .
Commit changes
bash
git commit -m "Add your feature"
Push the branch
bash
git push -u origin feature/your-feature-name
Get the latest remote changes
bash
git pull
For collaborative work, pull/rebase or merge according to the team's agreed workflow before pushing conflicting changes.

📌 Current Status
FarmDirect currently provides the frontend / product prototype. Authentication, database persistence, payment processing, real delivery tracking, server-side authorization, and AI services are planned for the Node.js + Express.js backend.

🔗 Repository Information
GitHub: https://github.com/Mustufa-khan-O7/farmdirect

Default branch: main

Application type: React SPA / Full-stack marketplace in development

Build tool: Vite

📄 License
No license file is currently included. Add a LICENSE file before distributing or publishing the project under a specific open-source license.

Final Note
FarmDirect already contains the foundation of a multi-role digital agriculture marketplace from a product/UI perspective. The next major step is not adding more static screens; it is connecting the existing screens to real application services—authentication, database persistence, products, orders, payments, delivery operations, and AI data.

That separation keeps the current frontend useful as a product prototype while making the next stage of development straightforward: replace the demo state with API-backed state without having to redesign the entire user experience.
