for (let i = 0; i < 1000; i++){
    console.log("hi");

    console.dir(randUser);

    console.dir(randUser.results[i]);
    console.dir(randUser.results[i].name.first);

    // Get references

    let profiles = document.querySelector("#profile");

    //Create elements
    let newDiv = document.createElement("div");
    let text = document.createElement("p");
    let newImg = document.createElement("img");

    //Add content

    text.innerHTML = "Name: " +randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "Email:" + randUser.results[i].email + "<br>" + "Phone #: " + randUser.results[i].phone;

    newImg.src = randUser.results[i].picture.large;    

    //Add elements to the page
    newDiv.appendChild(newImg);
    newDiv.appendChild(text);

    profiles.appendChild(newDiv);




}
