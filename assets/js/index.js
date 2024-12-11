// View counter JS code
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://7qcapugjphcmqfm4jxogyjhf4u0nibfd.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();