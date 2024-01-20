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

// Function simulates random time (to shoot meteor) / anonymous function only shoots once timeout runs out / anon function is a-sync / Doesn't go into loop becuase a-sync
function random_time(){
    var rand_num = random_number(min_time,max_time);
    setTimeout(function(){change_meteor_direction(); random_time();}, rand_num);
   
};

function pause(){
    setTimeout(function(){turn_off_meteor();} ,950)
}

// Getting the diagonal of the browser window in pixels 
function diagonal() { 
    const w = window.outerWidth; 
    const h = window.outerHeight; 
    const d = Math.sqrt(w*w + h*h); 
    return d;
  }


// Function for changing the value of the natvar variable
function changing_native_variables(selector_name, natvar_name, change_to, metric){
    const natvar = document.querySelector(selector_name)
    natvar.style.setProperty(natvar_name,change_to+metric)
}

// Changing the angle of the metor
function random_meteor_degree(){
    const random_degree = Math.floor(Math.random() * 360);
    return random_degree;
}

function left_margin_spacing(){
    const left = Math.floor(Math.random()*50);
    return left;
}

// This function will tie all the meteor featuers together
function change_meteor_direction(){
    console.log("Made it here lol");
    changing_native_variables('#meteor-cont','--meteor_hight_cont',diag,'px');
    changing_native_variables('#meteor-cont','--random_rotate',random_meteor_degree(),'deg');
    changing_native_variables('#meteor-cont','--random_left',left_margin_spacing(),'%');
    shoot_meteor();
}

function shoot_meteor(){
    changing_native_variables('#meteor-ani','--animation','meteor 1s linear infinite normal','');
    changing_native_variables('#meteor-cont #meteor','--meteor_opacity','1','');
    pause();
}

function turn_off_meteor(){
    changing_native_variables('#meteor-ani','--animation','none','');
    changing_native_variables('#meteor-cont #meteor','--meteor_opacity','0','');
}

function run_meteor(){
    
    random_time()
}

run_meteor()






