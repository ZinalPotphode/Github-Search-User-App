var form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    var search=document.getElementById("search").value
   
    var name=search.split(' ').join('') //if the user name is typed with a space between name and title then this line removes space in between and clubs the words together.
    var result=document.getElementById("result")
    result.innerHTML="";
   
    fetch("https://api.github.com/users/"+name)
    .then((result)=>{if(result.ok){
        return result.json();
    } return Promise.reject(result);})
    .then((data)=>{console.log(data)
    result.innerHTML=`<a target="blank" href="${data.html_url}"><div class="card">
    <h2><p><b> ${data.login}</b></p></h2>
    <div class="img"><img src="${data.avatar_url}"></div>
    <div class="text"><p>Full name:<span class="ans">  ${data.name}</span></p>
    <p>Bio:<span class="ans">  ${data.bio}</span></p>
    <p>Location:<span class="ans">  ${data.location}</span></p>
    <p>Number of Repositories: <span class="ans">  ${data.public_repos}</span></p>
    <p>Followers: <span class="ans">  ${data.followers}</span></p>
    <p>Following:<span class="ans">   ${data.following}</span></p></div></div></a>`
})
.catch((err)=>{
    result.innerHTML=`<div class="card" ><p><div class="error_text">No such user found</div></p></div>`
});
})