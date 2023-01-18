var requestUrl = "https://www.loc.gov/";

function getApi(requestUrl) {
  fetch(requestUrl).then(function (response) {
    console.log(response);
  });
}

getApi(requestUrl);
