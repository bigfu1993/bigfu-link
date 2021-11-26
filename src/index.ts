import { linkType } from "./types";
class Flink {
  constructor() {}
  link(config: linkType) {
    return new Promise((resolve, reject) => {
      const { method, path, data } = config;
      const xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(xhr.responseText);
        }
      };
      xhr.open(method, path, true);
      xhr.send(data);
    });
  }
}
