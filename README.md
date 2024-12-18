# Caldendar-app

## Overview

This project contains a set of reusable React components for a calendar and event scheduling system. The components are designed to be modular, responsive, and optimized for performance. They utilize modern React features like hooks and memoization for efficient rendering.

## Components

### 1. **Calendar Component**
   - **Description**: A responsive calendar component that allows users to navigate through dates and view the current date.
   - **Features**:
     - Display of the current date.
     - Navigation buttons to move between months.
     - Dropdown menu for selecting the calendar region (e.g., India, USA, UK).
     - View options for Day, Week, Month, and Year.
     - A "Today" button to quickly return to the current date.
   - **Technologies Used**: 
     - React
     - `react-icons` for icons
     - Custom CSS for styling
   - **Optimization**: Utilized `useCallback` for memoization to optimize performance and prevent unnecessary re-renders.

### 2. **Events Schedule Component**
   - **Description**: A component that displays upcoming scheduled events with time slots.
   - **Features**:
     - Time slots are displayed for each hour from 7 AM to 6 PM.
     - Events are color-coded and displayed based on their start and end times.
     - Ability to see multiple events overlapping in a time slot.
     - Events are dynamically displayed based on time.
   - **Technologies Used**: 
     - React
     - CSS for custom styling
   - **Optimization**: Performance optimizations for rendering events efficiently without unnecessary updates.

### 3. **Header Component**
   - **Description**: A navigation header that includes icons for home, star, calendar, notifications, and profile.
   - **Features**:
     - Search bar for finding items quickly.
     - Icons for home, favorites, calendar, comments, and notifications.
     - Profile picture and name displayed with a badge showing unread messages or notifications.
   - **Technologies Used**:
     - React
     - `react-icons` for icons
     - Bootstrap for layout and responsiveness
     - Custom CSS for styling
   - **Optimization**: Clean and efficient layout using Bootstrap's flex utilities for responsive design.

## Features

- **Responsive Design**: All components are fully responsive, optimized for different screen sizes and devices. The layout adapts to ensure a seamless user experience across desktop, tablet, and mobile views.
  
- **Customizable Components**: Each component is easily customizable. You can modify the view (e.g., calendar views like Day, Week, Month, Year), adjust event data, and customize styling to fit the needs of your project.

- **Performance Optimized**: The components are optimized for performance. React hooks like `useState`, `useCallback`, and memoization are used to ensure minimal re-renders, reducing unnecessary updates to the DOM.

- **User-Friendly Interface**: The calendar, event schedules, and header components are designed with user experience in mind, ensuring easy navigation and readability.

- **Modular Design**: The components are modular, allowing you to integrate or update individual pieces without impacting the rest of the application. This modularity enhances maintainability and scalability.

## Technologies Used

- **React**: The primary library used for building user interfaces. React components are the backbone of this project, handling the rendering of the UI and managing application state.
  
- **React Hooks**:
  - `useState`: For managing state within components (e.g., current date, view selection).
  - `useCallback`: For memoizing functions to prevent unnecessary re-renders in the calendar component.
  
- **React Icons**: A library that provides scalable icons used throughout the project (e.g., for navigation buttons, notifications, etc.).
  
- **Bootstrap**: A front-end framework used for layout and responsive design. The components leverage Bootstrap's flex utilities for flexible, grid-based layouts that work across devices.

- **CSS**: Custom CSS used to style components and ensure they align with the design specifications. Each component has its own set of styles, making it easy to modify or extend.

## Installation

To run this project locally:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:Nishabhooshan/Calendar-App.git
