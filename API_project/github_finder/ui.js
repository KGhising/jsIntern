class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    // Display profile
    showProfile(user){
        this.profile.innerHTML = `
        <section>
            <div class="gitDisplay">
                <div class="image">
                    <img src="${user.avatar_url}"><br><br>
                    <a class="visit-profile" href="${user.html_url}" target="_blank" class = "btn">Profile</a> 
                <div class="info">
                    <span class="user">Public Repository: ${user.public_repos}</span>
                    <span class="user">Public Gist: ${user.public_gists}</span>
                    <span class="user">Follower: ${user.followers}</span>
                    <span class="user">Following: ${user.following}</span>
                    <br><br>
                    <ul class="listGroup">
                        <li>Company: ${user.company}</li>
                        <li>Website/blog: ${user.blog}</li>
                        <li>Location: ${user.location}</li>
                        <li>Member since: ${user.created_at}</li>
                    </ul>
                </div>  
            </div>
            <h3>Latest Repository</h3>
            <div id="repo" >

            </div>
        </section>
        `;  
    }

    // show repository
    showRepos(repos){
        let output = '';

        repos.forEach(function(repo){
            output +=`
                <div class="repo">
                    <div class="repoLink">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="repoDetail">
                        <span class="repo">Star: ${repo.stargazers_count}</span>
                        <span class="repo">Watcher: ${repo.watchers_count}</span>
                        <span class="repo">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
                <hr><br>
            `;
        });
        // Output repos
        document.getElementById('repo').innerHTML = output;
    }


    // show alert
    showAlert(message, className){
        // Clear any remaining alert
        this.clearAlert();
        // creating div
        const div = document.createElement('div');
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container  = document.querySelector('.container');
        // get search box
        const search = document.querySelector('.card');
        // insertn alert
        container.insertBefore(div, search);
        // timeout after 3s
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }
    // clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
    // clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}