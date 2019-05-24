const mobileSeeTower = () => {
    const towers = document.getElementById("towers")
    towers.style.backgroundImage = "none";
    const showChild = towers.children;
    showChild[0].style.visibility = "visible";
    console.log("hi")
}

// const mobileSeeBeer = () => {
//     const beer = document.getElementById("beer")
//     beer.style.backgroundImage = "none";
//     const showChild = beer.children;
//     showChild[0].style.visibility = "visible";
//     console.log("hi")
// }

// const mobileHideTower = () => {
//     const towers = document.getElementById("towers")
//     towers.style.backgroundImage = "initial";
//     const showChild = towers.children;
//     showChild[0].style.visibility = "hidden"
    
// }

// const mobileHideBeer = () => {
    
// }