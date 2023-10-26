var form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    var search=document.getElementById("search").value
   
    var name=search.split(' ').join('')
    var result=document.getElementById("result")
    result.innerHTML="";
   
    fetch("https://api.github.com/users/"+name)
    .then((result)=>{if(result.ok){
        return result.json();
    } return Promise.reject(result);})
    .then((data)=>{console.log(data)
    result.innerHTML=`<a target="blank" href="${data.html_url}"><div class="card">
    <div class="uh"><div class="img"><img src="${data.avatar_url}"></div>
    <p>Username: ${data.login}</p><p>Full name: ${data.name}</p><p>Bio: ${data.bio}</p></div><br>
    <p>Location: ${data.location}</p>
    <p>Number of Repositories: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
    <p>Following: ${data.following}</p></div></a>`
})
.catch((err)=>{
    result.innerHTML=`<div class="card"><p>No such user found</p></div>`
});


})