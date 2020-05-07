export default () => {
  const viewHome = `
  <div class="row">
    <div class="col-sm-12">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarColor02" style="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#/random">Random <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/home"></a>
          </li>
        </ul>
      
      </div>
    </nav>
    <form class="form-inline my-2 my-lg-0">
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search" id="search">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="btnSearch">Search</button>
        </div>
        </div>
    </form>
        <div id="contentBox"></div>
    </div>
  </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};

