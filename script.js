// https://gist.github.com/youngchief-btw/d8c327ef245f2e9998997a41c7b34e70
if (location.protocol === "http:") {
  location.replace(window.location.href.replace("http:", "https:"));
}