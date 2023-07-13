function toggleMode() {
  const html = document.documentElement

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const a = document.querySelector("#profile a")

  if (html.classList.contains("light")) {
    a.setAttribute("href", "https://instagram.com/caiokercher")
  } else {
    a.setAttribute("href", "https://instagram.com/privs_kercher")
  }

  
}
