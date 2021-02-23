

function display(){
    
    var userInput=document.getElementById("input").value

    function fetchingData(){
        fetch('https://api.github.com/users/'+userInput)
        .then(function (response){
            console.log(response)
            return response.json()
        })

.then(function (data){
    console.log(data)
    var div=document.getElementById("Div")
    div.innerHTML=""
    

    var img1=document.createElement("img")
    img1.classList.add("image")
    img1.src=data.avatar_url
    div.appendChild(img1)
    
    
    
    document.getElementById("name").innerHTML=data.name
    document.getElementById("bio").innerHTML=data.bio
    document.getElementById("followers").innerHTML="Followers: "+ data.followers
    document.getElementById("following").innerHTML="Following: "+ data.following
    document.getElementById("repository").innerHTML="Repository: "+ data.public_repos
    document.getElementById("location").innerHTML="Location: "+ data.location
    document.getElementById("url").innerHTML="Github Profile URL: "+ data.url
    
    
    
})
.catch(function(error){
    console.log("Error",error)
})
}
setTimeout(fetchingData,1000)
}
