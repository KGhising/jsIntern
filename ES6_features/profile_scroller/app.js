const data = [
    {
        name: 'Kishor Ghising',
        age: '21',
        gender: 'Male',
        location: 'Bhaktapur',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        name: 'Shrawan',
        age: '20',
        gender: 'Male',
        location: 'Lalitpur',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Amrit pradhan',
        age: '22',
        gender: 'Male',
        location: 'Sanga',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];
const profiles = profileIterators(data);
// call first profile
nextProfile();

// next event
document.getElementById('btn').addEventListener('click', nextProfile);


// next profile function
function nextProfile(){
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul>
            <li>Name: ${currentProfile.name}</li>
            <li>Age: ${currentProfile.age}</li>
            <li>Gender: ${currentProfile.gender}</li>
            <li>Location: ${currentProfile.location}</li>
        </ul>
    `;
     document.getElementById('imageDisplay').innerHTML = `
        <img src='${currentProfile.image}'>
     `;
    } else {
        window.location.reload();
    }
   
}

// profile iterator
function profileIterators(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profiles.length ? 
            {value: profiles
            [nextIndex++], done: false} :
            {done: true} 
        }
    };
}