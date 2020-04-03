class Github{
    constructor(){
        this.client_id = '723a22a7550702eab411' ;
        this.client_secret = 'f1f04d945fb20c7f91694aa3666bfc1fac2937f9';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        // fetch profile
        const profileResopnse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // fetch repo
        const repoResopnse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResopnse.json();
        const repos = await repoResopnse.json();
        return{
            profile,
            repos
        }
    }
}