# Weather App

This project is a simple yet powerful weather app that fetches and displays the current weather for a specified city or the user's current location. It leverages the OpenWeatherMap API to provide accurate and up-to-date weather data in a user-friendly interface.

## Features

- **Search by City Name**: Fetch and display the current weather for any specified city.
- **Geolocation-Based Weather**: Get the current weather for the user's current location using geolocation.
- **Detailed Weather Information**: Display essential weather information including temperature, weather description, and a weather icon.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the web page.
- **JavaScript**: For making API requests and dynamically updating the UI.
- **OpenWeatherMap API**: For fetching weather data.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- A modern web browser that supports JavaScript.
- Node.js installed on your system.

### Installation

1. **Clone the repository**:

   `git clone https://github.com/your-username/weather-widget.git`
   
3. **Navigate to the project directory**:

   `cd weather-widget
   `
5. **Install the necessary dependencies**:

   `npm install`
   
7. **Create a `.env` file in the root of your project and add your OpenWeatherMap API key**:

    `API_KEY=your_api_key_here`
   
9. **Start the server**:

    `node server.js`
    
12. **Open your browser and navigate to**:

    `http://localhost:3000`
    
## Usage

### Search by City Name

1. Enter the name of the city in the search input field.
2. Click the "Search" button.
3. The current weather for the specified city will be displayed.

### Get Weather by Current Location

1. Click the "Get Location" button.
2. Allow the browser to access your location.
3. The current weather for your location will be displayed.

## Additional Information

- Ensure your API key from OpenWeatherMap is valid and correctly set in the `.env` file.
- Make sure your browser allows location access for the geolocation feature to work properly.

Enjoy your weather app!
