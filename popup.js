chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action == "getSource") {
        if (request.source) {
            content.value = request.source;
            content.select();

            try {
                document.execCommand('copy');
            } catch(err) {
                console.log(err);
            }
        } else {
            content.value = 'Navigate to JIRA Agile Board and select some issue';
        }
    }
});

function onWindowLoad() {
    var content = document.querySelector('#content');

    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
    }, function () {
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });
}

window.onload = onWindowLoad;