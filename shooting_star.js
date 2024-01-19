// Javascript can interact with the HTML because when a webpage is loaded it creates a Document Object Model with this Javascript can interact with HTML
// Node JS is not a browser environment, its a server enironment


const min_time = 5;
const max_time = 25;
const diag = diagonal() 


// Function to give a number between a certain range
function random_number(low,high){
    const random_time = Math.floor(Math.random() * (high - low)) + low;
    return random_time * 1000;
}

// Function simulates random time (to shoot meteor)
function timer_function(){

    var rand_num = random_number(min_time,max_time);
    setTimeout(function(){timer_function();shootMeteor();}, rand_num);

};

function shootMeteor(){
    console.log("Meteor shot");

};


// Getting the diagonal of the browser window in pixels 
function diagonal() { 
    const w = window.outerWidth; 
    const h = window.outerHeight; 
    const d = Math.sqrt(w*w + h*h); 
    console.log('Width: ' + w); 
    console.log('Height: ' + h); 
    console.log('Diagonal: ' + Math.ceil(d)); 
    return d;
  }


// Function for changing the value of the natvar variable
function changing_native_variables(selector_name, natvar_name, change_to, metric){
    const natvar = document.querySelector(selector_name)
    natvar.style.setProperty(natvar_name,change_to+metric)
}

changing_native_variables('#meteor-cont','--random_rotate',50,'deg')
changing_native_variables('#meteor-cont','--meteor_hight_cont',diag,'px')
changing_native_variables('#meteor-ani','--animation','meteor 1s linear infinite normal','')








