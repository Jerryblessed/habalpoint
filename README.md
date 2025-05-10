# Herbal Care

A self-hostable React Native (Expo) app with a Flask backend for farm‑fresh produce.

## Installation

1. **Clone repo**

   ```
   
   bash
   ```

git clone [https://github.com/Jerryblessed/habalpoint.git](https://github.com/Jerryblessed/habalpoint.git)
cd habalpoint

````

2. **Frontend (React Native)**
```bash
cd client
npm install
````

* In `app/tabs/explorer.tsx`, replace hardcoded URLs with your backend endpoint:

  ```js
  src = 'http://localhost:5000';
  ```
  or if hosted on live server replace url 

3. **Backend (Flask)**

   ```bash
   ```

cd ../backend
cp .env.example .env

# fill in SECRET\_KEY, DB\_URI, EMAIL, PASSWORD,

# STRIPE\_PUBLIC, STRIPE\_PRIVATE, ENDPOINT\_SECRET

pip install -r requirements.txt
flask run --host=0.0.0.0 --port=5000

```

4. **Link frontend ↔ backend**
   - Copy `http://<your-host>:5000` as `ENDPOINT` in `explorer.tsx`.

## Demo

https://vimeo.com/1083073538?share=copy#t=0

```
