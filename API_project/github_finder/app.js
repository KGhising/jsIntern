// init github
const github = new Github;
// init UI
const ui = new UI;
// Input search
const searchUser = document.getElementById('searchUser');

// search event listener
searchUser.addEventListener('keyup', (e) =>{
    // get input text
    const userText = e.target.value;
    if (userText !== '') {
        // make http call
        github.getUser(userText)
            .then(data => {
               if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert');

               } else {
                    // show Profile
                    ui.showProfile(data.profile);
               }
            });
    }else{
        // Clear profile
        ui.clearProfile();
    }
});