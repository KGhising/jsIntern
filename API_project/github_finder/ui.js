class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML = `
        <section>
            <div class="gitDisplay">
                <div class="image">
                    <img src="${user.avatar_url}"><br><br>
                    <a href="${user.html_url}" target="_blank" class = "btn">Profile</a> 
                <div class="info">
                    <span class="repo">Public Repository: ${user.public_repos}</span>
                    <span class="gist">Public Gist: ${user.public_gists}</span>
                    <span class="follower">Follower: ${user.followers}</span>
                    <span class="following">Following: ${user.following}</span>
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
            <div id="latestRepo" >

            </div>
        </section>
        `;  
    }
}