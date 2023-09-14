// Get URL of current page
let currentUrl = window.location.href;

// Define your regular expressions
let regexPatterns = [
    /^https:\/\/hub\.g5marketingcloud\.com\/admin\/clients\/.*$/,
    /^https:\/\/hub\.g5marketingcloud\.com\/admin\/clients\/.*\/locations\/.*$/,
    /^https:\/\/provisioner\.g5marketingcloud\.com\/status\/clients\/.*$/,
    /^https:\/\/provisioner\.g5marketingcloud\.com\/status\/sites\/.*$/,
    /^https:\/\/cms\.g5marketingcloud\.com\/clients\/.*\/websites\/.*$/,
    /^https:\/\/cms\.g5marketingcloud\.com\/clients\/.*\/websites\/.*\/pages\/.*$/
];

// Define functions to run for each page
function onClientHubPage() {
    console.log("You are on the client hub page.");
    // Your code for the client hub page here
}

function onLocationHubPage() {
    console.log("You are on the location hub page.");
    // Your code for the location hub page here
}

function onClientProvisionerPage() {
    console.log("You are on the client provisioner page.");
    // Your code for the client provisioner page here
}

function onLocationProvisionerPage() {
    console.log("You are on the location provisioner page.");
    // Your code for the location provisioner page here
}

function onClientCmsPage() {
    console.log("You are on the client CMS page.");
    // Your code for the client CMS page here
}

function onLocationCmsPage() {
    console.log("You are on the location CMS page.");
    // Your code for the location CMS page here
}

// Iterate through the patterns and execute corresponding functions
for (let i = 0; i < regexPatterns.length; i++) {
    if (regexPatterns[i].test(currentUrl)) {
        switch (i) {
            case 0:
                onClientHubPage();
                break;
            case 1:
                onLocationHubPage();
                break;
            case 2:
                onClientProvisionerPage();
                break;
            case 3:
                onLocationProvisionerPage();
                break;
            case 4:
                onClientCmsPage();
                break;
            case 5:
                onLocationCmsPage();
                break;
        }
        break; // Exit the loop after executing the corresponding function
    }
}