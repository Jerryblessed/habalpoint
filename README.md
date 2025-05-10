# Herbal Care

A self-hostable React Native (Expo) app with a Flask backend for farm‑fresh produce.

## Installation

1. **Clone repo**

   ```bash
   git clone https://github.com/Jerryblessed/habalpoint.git
   cd habalpoint
   ```

2. **Frontend (React Native)**

   ```bash
   cd client
   npm install
   ```

   * In `app/tabs/explorer.tsx`, replace the hardcoded endpoints:

     ```js
     // For web (iframe)
     const ENDPOINT = 'http://localhost:5000';

     // For native (WebView)
     const ENDPOINT = 'http://localhost:5000';
     ```
   * If using a live server, substitute `localhost` with your server URL.

3. **Backend (Flask)**

   ```bash
   cd ../backend
   cp .env.example .env
   # Fill in the following in .env:
   # SECRET_KEY=<your_secret>
   # DB_URI=<your_database_uri>
   # EMAIL=<smtp_email>
   # PASSWORD=<smtp_password>
   # STRIPE_PUBLIC=<stripe_publishable_key>
   # STRIPE_PRIVATE=<stripe_secret_key>
   # ENDPOINT_SECRET=<stripe_webhook_secret>

   pip install -r requirements.txt
   flask run --host=0.0.0.0 --port=5000
   ```

4. **Link frontend ↔ backend**

   * Copy `http://<your-host>:5000` and set it as `ENDPOINT` in `explorer.tsx`.

## Demo

Watch the demo video: [https://vimeo.com/1083073538?share=copy#t=0](https://vimeo.com/1083073538?share=copy#t=0)

## 🚀 Release

Herbal Care ships two distinct Expo apps—one for **Customers** and one for **Vendors/Admins**—within the same repository:

1. **Customer App**

   ```bash
   cd client
   # Build and publish
   expo publish --release-channel customer
   # Or create standalone binaries:
   eas build --platform all --profile customer
   ```

2. **Vendor App**

   ```bash
   cd vendor
   npm install
   # Build and publish
   expo publish --release-channel vendor
   # Or create standalone binaries:
   eas build --platform all --profile vendor
   ```

> After publishing, install the **Customer** and **Vendor** builds separately via their respective URLs or app-store entries.
