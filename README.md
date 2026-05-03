# SmartBazaar Portfolio

SmartBazaar is a modern e-commerce project with a React + TypeScript + Vite frontend, a small Node/Express API, and a Flask-based experimental backend folder. The app focuses on product discovery, shopping flow, and a visually improved landing experience.
<img width="1365" height="767" alt="WhatsApp Image 2026-05-03 at 7 18 30 PM" src="https://github.com/user-attachments/assets/88820c0c-d9bf-43cc-aa6e-dfc1af47c38e" />
<img width="1365" height="767" alt="WhatsApp Image 2026-05-03 at 7 18 30 PM (1)" src="https://github.com/user-attachments/assets/b012a01a-4bde-4153-ae94-e8aceeee1fed" />


## Features
- Responsive landing page with modern UI sections
- Product browsing for watch and clothing flows
- Cart page with quantity controls and checkout modal
- Registration form connected to the Node backend route
- Separate frontend, Node backend, and Flask backend folders

## Tech Stack
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Extra backend folder: Flask

## Project Structure
```text
smart bazar/
├── smart/            # Main React frontend
├── Flask_Backend/    # Flask routes and experimental scripts
├── img/              # Project screenshots
└── README.md
```

## Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/itsaisha17/SmartBazaar-Portfolio.git
cd "smart bazar"
```

### 2. Start the frontend
```bash
cd smart
npm install
npm run dev
```
Frontend runs at `http://localhost:5173/`.

### 3. Start the Node backend
```bash
cd smart
npm install express cors mongoose bcryptjs
node src/Backend/app.js
```
Node API runs at `http://localhost:6200/`.

### 4. Start MongoDB
Make sure MongoDB is running locally because the backend uses:
`mongodb://localhost:27017/ortontest2`

### 5. Optional Flask backend
```bash
cd Flask_Backend
python app.py
```

## Current Status
- Frontend is runnable in Vite dev mode
- UI has been improved for layout, responsiveness, and presentation
- Some TypeScript/build issues still exist in older files like `add.tsx`, `add_cloth.tsx`, and a few background components
- Node backend needs required packages and local MongoDB to fully support form submission

## Notes
- The root README now reflects the actual stack; the project is not Java-based
- `smart/README.md` still contains the default Vite template and can be cleaned later if needed

## Future Improvements
- Fix all remaining TypeScript build errors
- Improve product detail pages and backend integration
- Add better README screenshots and deployment instructions


