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

function loadRemoteJS(rawFileUrl) {
    fetch(rawFileUrl)
        .then(response => response.text())
        .then(code => {
            eval(code);
        })
        .catch(error => console.error('Error fetching code:', error));
}

// Iterate through the patterns and execute corresponding functions
for (let i = 0; i < regexPatterns.length; i++) {
    if (regexPatterns[i].test(currentUrl)) {
        switch (i) {
            case 0:
                console.log('You are on the G5 Hub client page.');
                loadRemoteJS('https://raw.githubusercontent.com/lake-straly/g5-bugfixes-and-improvements/main/js/hub/hub_client_page.js');
                break;
            case 1:
                console.log('You are on the G5 Hub location page.');
                loadRemoteJS('https://raw.githubusercontent.com/lake-straly/g5-bugfixes-and-improvements/main/js/hub/hub_location_page.js');
                break;
            case 2:
                console.log('You are on the G5 Provisioner client page.');
                loadRemoteJS('https://raw.githubusercontent.com/lake-straly/g5-bugfixes-and-improvements/main/js/provisioner/provisioner_client_page.js');
                break;
            case 3:
                console.log('You are on the G5 Provisioner location page.');
                loadRemoteJS('https://raw.githubusercontent.com/lake-straly/g5-bugfixes-and-improvements/main/js/provisioner/provisioner_site_page.js');
            case 4:
                console.log('You are on the G5 CMS client page.');
                loadRemoteJS('https://raw.githubusercontent.com/lake-straly/g5-bugfixes-and-improvements/main/js/cms/cms_general.js');
                break;
            case 5:
                console.log('You are on the G5 CMS location page.');
                loadRemoteJS('https://raw.githubusercontent.com/lake-straly/g5-bugfixes-and-improvements/main/js/cms/cms_page.js');
                break;
        }
        break;
    }
}
