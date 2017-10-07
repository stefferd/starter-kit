export default function getBaseUrl() {
  return getQueryStringParametersByName('useMockApi') ? 'http://localhost:3001/' : 'https://enigmatic-refuge-18798.herokuapp.com/';
}

function getQueryStringParametersByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
