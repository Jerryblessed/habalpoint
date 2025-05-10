## 🖥️ Backend

Our Flask backend powers the RESTful API for Herbal Care, handling authentication, product management, and payments.

**Features:**

* Cart, orders, and items management with robust order processing.
* User authentication and role-based authorization (customer vs vendor/admin).
* Stripe payment integration with secure webhooks.
* Admin panel for order processing and item management (upload, edit, delete).
* Item search functionality.
* Bootstrap + custom CSS UI for any standalone admin views.

**Prerequisites:**

* Python 3.x
* Flask dependencies (`requirements.txt`)
* Stripe API keys (publishable & secret)
* Stripe CLI for local webhook testing (optional)

**Installation:**

```bash
# Clone the repository
git clone https://github.com/your-org/herbal-care-backend.git
cd herbal-care-backend
# Install Python requirements
pip install -r requirements.txt
# Create .env with the following variables:
# SECRET_KEY, DB_URI, EMAIL, PASSWORD, STRIPE_PUBLIC, STRIPE_PRIVATE, ENDPOINT_SECRET
# Run the Flask server
flask run --host=0.0.0.0 --port=5000
```

**Live Demo:**
[https://your-herbalcare-backend.example.com](https://your-herbalcare-backend.example.com)

---

*Thank you for exploring Herbal Care—your natural-health marketplace solution!*
