function changeMode(size, weight, transform, background, color){
    return function(){
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;

    };
}

function main(){
    let spooky = changeMode(9, 'bold', 'uppercase',' pink', 'green');
    let darkmode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screenMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);
    
    
    //"Spooky" button
    let spookyButton = document.createElement('button');
    spookyButton.innerText = "Spooky";
    spookyButton.onclick = spooky;

    //"Dark Mode" button
    let darkmodeButton = document.createElement('button');
    darkmodeButton.innerText = "Dark mode";
    darkmodeButton.onclick = darkmode;

    //"Scream Mode" button
    let screenModeButton = document.createElement('button');
    screenModeButton.innerText = "Screen mode";
    screenModeButton.onclick = screenMode;


// Append the buttons to the body of the page
    document.body.appendChild(spookyButton);
    document.body.appendChild(darkmodeButton);
    document.body.appendChild(screenModeButton);


}
main();