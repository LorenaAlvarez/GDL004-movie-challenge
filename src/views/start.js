export default () => {
  //elemento h2 es la pregunta!
  const question = document.createElement("h2");
  question.innerHTML = "CAN'T </br>DECIDE</br> WHAT TO</br> WATCH?";
  question.setAttribute("class", "question");
  //boton obtener aleatoreo
  const btnRandom = document.createElement("a");
  btnRandom.setAttribute("href", "#/random");
  btnRandom.setAttribute("class", "btn btn-danger btnRandom");
  btnRandom.innerHTML = "Pick a movie for me!";
  //div para el btn home
  const divBtnHome = document.createElement("div");
  divBtnHome.setAttribute("class", "divBtnHome");
  //btn a home
  const btnHome = document.createElement("a");
  btnHome.setAttribute("href", "#/home");
  btnHome.setAttribute("class", "btn btn-outline-secondary btnHome");
  btnHome.innerHTML = "X";
  //div padre  &times;
  const divElemt = document.createElement("div");
  divElemt.setAttribute("class", "divElemt");
  //divElemt.classList.add("position");

  //const br = document.createElement('br')
  //divElemt.innerHTML = viewHome;
  //divElemt.appendChild(br)

  divElemt.appendChild(divBtnHome);
  divBtnHome.appendChild(btnHome);
  divElemt.appendChild(question);
  divElemt.appendChild(btnRandom);

  return divElemt;
};
