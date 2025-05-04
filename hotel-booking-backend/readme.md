# file structure

HOTEL-BOOKING/
│
├── 📁 config/
│   └── db.js
│
├── 📁 models/
│   ├── Booking.js
│   └── User.js
│
├── 📁 routes/
│   ├── auth.js
│   ├── booking.js
│   └── profile.js       # ✅ New route for profile
│
├── 📁 controllers/       # ✅ Recommended (if you split logic)
│   └── profileController.js
│
├── 📁 middleware/        # ✅ Auth middleware (to get user from token)
│   └── authMiddleware.js
│
│
├── .env
├── server.js
