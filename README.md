
# **Birdvision Assignment**

A simple Employee Management System with CRUD functionality built using:

- **Frontend**: React.js  
- **Backend**: Node.js with Express.js  
- **Database**: MySQL  

---

## **Backend Setup**

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the database:
   - Open MySQL and create a new database:
     ```sql
     CREATE DATABASE employee_management;
     ```
   - Update your database credentials in `Database.js`:
     ```js
     DB_HOST = localhost;
     DB_USER = root;
     DB_PASSWORD = yourpassword;
     DB_NAME = employee_management;
     ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

---

## **Frontend Setup**

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).
