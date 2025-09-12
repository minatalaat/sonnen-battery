# A Sonnen Battery Activity

## The Challenge

Every great project starts with a problem. For this task, the goal was to build an application that efficiently handles and visualizes the charging levels of a battery within the last 24 hours.

This project demonstrates my ability to take a complex problem from concept to a polished, functional solution, focusing on performance, maintainability, and user experience.

## Technical Showcase

This application was built to highlight proficiency in the following key areas:

- **Frontend Framework**: Utilizing React, I built a highly responsive and component-based user interface.
- **State Management**: I implemented the Context API to manage the application's theme state.
- **API Integration**: The application seamlessly interacts with an API to fetch charging analytic data.
- **Styling & Design**: The UI is designed with a modern aesthetic, using Styled Components to ensure a clean and maintainable codebase.
- **Code Quality**: I have focused on writing clean, well-structured code by separating UI, API integration, and business logic.

## Getting Started

To explore the project, follow these simple steps.

### Prerequisites

You will need the following tools installed:

- **Node.js**: Ensure you have the latest LTS version.
- **Git**: For cloning the repository.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/minatalaat/sonnen-battery.git
```

2. Navigate to the project directory:

```bash
cd sonen-battery
```

3. Install dependencies:

```bash
npm install
```

4. Running json-server:

```bash
json-server --watch db.json
```

5. Running the Application:

To start the local development server:

```bash
npm run dev
```

The application should now be accessible in your web browser at `http://localhost:5173`.

## A Glimpse of the App

<img width="1912" height="852" alt="image" src="https://github.com/user-attachments/assets/c7eb2528-e59d-4d15-9e5c-7f86702380bb" />


## Design Decisions & Architectural Choices

- **Component Structure**: The application uses a logical, hierarchical component structure. For example, `src/components` contains reusable, presentational components, while `src/pages` holds container components that manage business logic.
- **Data Flow**: I opted for a one-way data flow to ensure predictable state changes.
- **Performance**: I implemented React Query to ensure data caching, as the data will not be changed within an hour.

## Let's Connect

Thank you for your time in reviewing this project. I'm excited about the opportunity to discuss my work with you further.

- **Email**: minatalaatzaki@gmail
- **Portfolio/LinkedIn**: www.linkedin.com/in/mina-talaat-03116020b
