let a = "aria-expanded";
let b = document.getElementById(a);
b.onclick = () => {b.setAttribute(a, b.getAttribute(a) === "true" ? "false" : "true")};
