let a = "aria-expanded";
let bn = document.getElementById("side-bar-button");
bn.onclick = () => {bn.setAttribute(a, bn.getAttribute(a) === "true" ? "false" : "true")};
