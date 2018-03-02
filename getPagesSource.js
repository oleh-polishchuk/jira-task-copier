chrome.runtime.sendMessage({
    action: "getSource",
    source: getSource(document)
});

function getSource($document) {
    var issueKey,
        issueVal;

    var $keyFromIssueList = document.getElementById('issuekey-val') ? document.getElementById('issuekey-val').querySelector('a') ? document.getElementById('issuekey-val').querySelector('a').innerText : null : null;
    var $valFromIssueList = document.getElementById('summary-val') ? document.getElementById('summary-val').innerText : null;

    if ($keyFromIssueList && $valFromIssueList) {
        issueKey = $keyFromIssueList;
        issueVal = $valFromIssueList;
    }

    var $keyFromSingleIssue = $document.getElementById('key-val') ? $document.getElementById('key-val').innerText : null;
    var $valFromSingleIssue = $document.getElementById('summary-val') ? $document.getElementById('summary-val').innerText : null;

    if ($keyFromSingleIssue && $valFromSingleIssue) {
        issueKey = $keyFromSingleIssue;
        issueVal = $valFromSingleIssue;
    }

    var html;
    if (issueKey && issueVal) {
        html = issueKey + ' ' + issueVal;
    } else {
        html = null;
    }

    console.log('m:getSource, html:', html);

    return html;
}
