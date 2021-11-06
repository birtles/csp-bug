var scriptElem = document.createElement("script");
scriptElem.textContent = "(function() { window.testme = 'ok'; })();";
(document.head || document.documentElement).appendChild(scriptElem);
scriptElem.remove();
console.log(
  "Script ran. There should be no CSP error above ↑, and typing `window.testme` below should return `ok`."
);
