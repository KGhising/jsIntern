class Github{
    constructor(){
        this.client_id = '723a22a7550702eab411' ;
        this.client_secret = 'f1f04d945fb20c7f91694aa3666bfc1fac2937f9';
    }
    async getUser(user){
        const profileResopnse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResopnse.json();
        return{
            profile
        }
    }
}