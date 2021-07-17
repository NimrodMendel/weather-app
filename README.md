# Weather App ☀️
  
Tired of searching for weather applications and websites that are dodgy at best? Well, I was!  
Weather App lets you check the weather in numerous places around the globe and get the most up-to-date results.  

The app is using the MetaWeather API for getting the data. Take a look at the MetaWeather website (https://www.metaweather.com/) for more details about the API 
and available locations.

## How to download and install the app?
1. Open a web browser and navigate to the repo's address: `https://github.com/NimrodMendel/weather-app`.
2. Navigate to the desired place on your computer using the Terminal / Finder / Windows Explorer.
3. clone the repo using the `git clone https://github.com/NimrodMendel/weather-app.git` command, or download the zip file.
4. cd into the application folder.
5. Open the application using your favorite code editor.
6. cd into the `backend` folder, and run the command `yarn install` using the terminal.
7. Do the same for the `frontend` library.

That's it! The app is now installed on your computer!


## How to run the application?

1. cd into the `backend` folder, and run the command `yarn start`. This will run the server on port 5000
2. In a new terminal window, cd into the `frontend` folder, and run the command `yarn start`. This will open app a browser with the application running.

## How to use the application?

In the application, you will find a simple input field for the desired city. Simply enter the city's name and click on the 'Check Weather!' button.


## Testing the application
Both the front-end and the back-end contain testing suites. 

### To test the Frontend application:
1. cd into the `fronend` application.
2. run the `yarn test` command to run all of the tests or `yarn test <test-name>` to run a single test suite.


### To test the Backend application:
1. cd into the `backend` application.
2. run the `yarn test` command to run all of the tests or `yarn test <test-name>` to run a single test suite.

## Contributing to the application
If you want to contribute to the application:

1. Send me an email at `mendel.nimrod@gmail.com` notifying me about the changes you want to make.
2. Fork the repository and install it on your machine (see installation instruction).
3. To add a feature, simply create a new branch using the `git checkout -b <some-branch-name>` command.
4. When done working on the feature, push the changes to the branch you have created in the step above, and open a Pull Request.


## Appendix

### Using postman for the backend API:
You can use postman to test the API using the following endpoint:  

* GET `http://localhost:5000/api/weather/:city` (where city is the name of the city you want to get data for)
