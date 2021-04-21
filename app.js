/*
    Quick project to deep our toes into asynchronous javscript without us knowing. This is a piece
    of code that is also qidely used in a lot of applications, whether that is to prompt the user to
    do something, promt a reminder, prompt a result, feedback, etc.. This is fairly easy to ececute and has
    many applications. Objective for the project include:
    #Prompt a modal after set time has passed
    #Implement smart UI practices to focus on what we are doing and not the background
    #User is also given the option to exit the prompt
    #After user has close the modal we need to go back to our landing page

    Remember to always apply clean code principles in every project you are making! Here are
    some basic rules to have at the back of your mind:
    #Leave commects whenever your code is doing something complicated
    #Try giving your variables usefull names. Best if their name describes what they correspond to
    #Re-factor your code once you get something done. Chances are you can make better
*/



/*---------Global Variables----------*/
const modal = document.querySelector('.container-popup');
const pressX = document.querySelector('.exit');

/*----------Event Listeners----------*/
window.addEventListener('DOMContentLoaded', ()=>{
    //Timeout will skip the line and come back once 1.5sec have passed
    setTimeout(() => {
        modal.classList.add('active');
        pressX.addEventListener('click', ()=>{
            modal.classList.remove('active');
        })
    }, 1500);
});


