// Create an object named user with the required attributes
const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer',

    // method named 
    logWelcomeUser: function(welcomeString) {
        console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
    }
};

// Bind the logWelcomeUser method to the user object
const bindLogWelcomeUser = user.logWelcomeUser.bind(user);

// Call the function with 'Hello' as the argument
bindLogWelcomeUser('Hello');  // Output: Hello, Buillaume. Your occupation is: Engineer
