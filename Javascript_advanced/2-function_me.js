function WelcomeMessage(fullName){
    return function(){
        alert(`Welcome ${fullName}`);
    };
    
}

const guillaume = WelcomeMessage('guillaume');
const alex = WelcomeMessage('alex');
const fred = WelcomeMessage('fred');
