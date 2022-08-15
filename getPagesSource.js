chrome.runtime.sendMessage({
    action: "getSource",
    source: getSource(document)
});

function getSource($document) {
    var issueKey,
        issueVal;

    var issueContainer = document.querySelector('#jira-issue-header [data-test-id="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container"] a');
    var summaryHeading = document.querySelector('[data-test-id="issue.views.issue-base.foundation.summary.heading"]')

    var $keyFromIssueList = issueContainer ? issueContainer.innerText : null;
    var $valFromIssueList = summaryHeading ? summaryHeading.innerText : null;

    if ($keyFromIssueList && $valFromIssueList) {
        issueKey = $keyFromIssueList;
        issueVal = $valFromIssueList;
    }

    var html;
    if (issueKey && issueVal) {
        html = '[' + issueKey + '] ' + issueVal;
    } else {
        html = null;
    }

    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(html).then(function() {
                /* clipboard successfully set */
                console.log('Issue name copied to clipboard!');
            }, function() {
                /* clipboard write failed */
                console.log('Issue name coping to clipboard failed!');
            });
        }
    });

    console.log('m:getSource, html:', html);

    return html;
}
