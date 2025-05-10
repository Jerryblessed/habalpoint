# Herbal Care

Herbal Care is a self-hostable, cross-platform mobile application (iOS/Android) built with React Native and Expo, paired with a Flask backend. It bridges consumers and small-scale farmers, delivering fresh produce—from fruits and vegetables to herbal remedies—straight from farm to table.

## 🎯 Inspiration

We saw how disconnected consumers and farmers often are when it comes to sourcing fresh, natural products. Driven by a passion for natural health and a desire to empower local producers, we built a platform that anyone can host, customize, and deploy to showcase their farm’s bounty.

## 🚀 What it does

1. **Dual-role apps**

   * **Customer App**: Browse farm-fresh produce, add items to cart, search products, manage orders, and checkout via Stripe.
   * **Vendor/Admin App**: Upload, edit, and delete listings; monitor inventory; view incoming orders.

2. **Self-hosted Flask backend**

   * Configurable via a `.env` file with:

     ```env
     SECRET_KEY=
     DB_URI=
     EMAIL=
     PASSWORD=
     STRIPE_PUBLIC=
     STRIPE_PRIVATE=
     ENDPOINT_SECRET=
     ```
   * Exposes RESTful endpoints for authentication, product management, and Stripe payments.

3. **Client configuration**

   * Point the React Native app to your API by setting the `ENDPOINT` in `client/app/tabs/explorer` (or later via `@env`).

4. **Polished UI**

   * Full-screen slideshow with responsive captions and dynamic font sizing.
   * Embedded storefront via WebView for vendor dashboards and live product showcases.

## 🛠️ How we built it

* **Frontend**: React Native + Expo for rapid iteration; `react-native-webview` for in-app browser.
* **Backend**: Flask REST API with SQLAlchemy, SMTP for email, and Stripe integration for payments and webhooks.
* **State management**: React Context & hooks for cart, session, and real-time updates.
* **Env handling**: `.env` for secret config (later migrating to `react-native-dotenv`).

## ⚔️ Challenges we ran into

* **WebView quirks**: Managing `originWhitelist` and loading states in React Native.
* **Responsive slideshows**: Scaling 5K×3K images and overlaying legible text on small screens.
* **Environment configuration**: Abstracting endpoints for both web/iframe and native mobile.
* **Stripe webhooks**: Testing local webhook events required tunneling tools like ngrok.

## 🏆 Accomplishments that we're proud of

* **Truly self-hostable**: Spin up the Flask API anywhere and point the client apps without code changes.
* **Unified codebase**: One React Native project serves both customers and vendors.
* **Complete demo-ready solution**: End-to-end shopping flow—product listing, cart, checkout—in under two weeks.

## 📚 What we learned

* Best practices for environment-driven config in React Native (no `process.env`).
* Techniques for high-resolution, full-screen backgrounds in mobile apps.
* Secure Stripe integration on a custom Flask server.
* Balancing native and WebView experiences.

## 🔮 What's next for Herbal Care

* Implement `react-native-dotenv` for client `.env` support.
* Push notifications for real-time order updates.
* Vendor analytics dashboard (sales, inventory insights).
* In-app chat between customers and vendors for bespoke orders.
* AR-based produce previews to visualize products in your space.

---

*Thank you for exploring Herbal Care—your natural-health marketplace solution!*
