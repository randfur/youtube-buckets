// Sample JavaScript code for youtube.subscriptions.list
// See instructions for running APIs Explorer code samples locally:
// https://developers.google.com/explorer-help/guides/code_samples#javascript

function authenticate() {
  return gapi.auth2.getAuthInstance().signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"});
}

function loadClient() {
  gapi.client.setApiKey("AIzaSyALjdJmApg6LEoJ0IaX53ttAgW6ea-p428");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.subscriptions.list({
    part: "id",
    channelId: "UCnBb0v5vlv55-mp0MQRoY_7w",
    maxResults: 50,
  });
}

gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "932466392623-paen04me22qs9tpn0g8d9j409t4et5b4.apps.googleusercontent.com"});
});