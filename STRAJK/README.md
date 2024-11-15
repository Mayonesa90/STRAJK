# Bowling Booking System

A **React-based web application** for managing bowling bookings with dynamic animations, responsive forms, and state management using Zustand. The app includes a seamless user flow from a loading screen to booking confirmation, enhanced with Framer Motion animations.

---

## Features

### 🕒 **Loading Page**
- A visually engaging loading screen with a flame animation built using Framer Motion.
- Transitions smoothly to the booking page after a few seconds.

### 🎳 **Booking Page**
- A booking form that allows users to:
  - Select **date** and **time**.
  - Specify the **number of bowlers** and **lanes**.
  - Assign **shoe sizes** for each bowler.
- Real-time form validation:
  - Ensures no more than 4 bowlers per lane.
  - Verifies valid shoe sizes for all players.
- Uses Zustand for global state management to handle:
  - Booking details (`useStore`).
  - Confirmation states (`useConfirmationStore`).

### 🌐 **API Integration**
- Submits booking data as JSON via a POST request to an external API.
- Error handling for failed requests, with descriptive messages for the user.

### 🌈 **Animations**
- Page transitions and element animations powered by **Framer Motion**:
  - Fade-in/out and sliding transitions between pages.
  - Staggered animation for fire effects.
  - Real-time reactive animations based on user interactions.

---

## Technologies Used

### Frontend:
- **React**: For building dynamic, reusable components.
- **TypeScript**: For type-safe development.
- **Zustand**: For global state management.
- **Framer Motion**: For animations and transitions.

### Backend Integration:
- **Fetch API**: To send POST requests to the bowling booking API.

### Utilities:
- **date-fns**: For date manipulation in forms and validation.
- **CSS/Utility Classes**: TailwindCSS or equivalent for styling.

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bowling-booking

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn start

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start

4. Open your browser at http://localhost:3000

---

## API Integration

Endpoint:

	•	URL: https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com
	•	Method: POST
	•	Headers:
	•	x-api-key: "738c6b9d-24cf-47c3-b688-f4f4c5747662"

### Request Body:

Example JSON payload:
  ```json
  {
    "when": "2024-11-20T18:00",
    "lanes": 1,
    "people": 3,
    "shoes": [42, 38, 40]
  }
  ```

### Response:

Expected successful response:
  ```json
    {
      "when": "2022-11-11T18:00", 
      "lanes": 1, 
      "people": 3, 
      "shoes": [38, 39, 44], 
      "price": 580,
      "id": "str7283472", 
      "active": true 
    }
  ```