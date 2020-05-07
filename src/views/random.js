export default () => {
      const viewRandom = document.createElement("div");
      viewRandom.innerHTML = `
      <div class="row">
      <div class="col-sm-12">
        <div id='randomContainer'>
          <div id='movieCard'></div>
          <button class="btn btn-danger btnWatchMovie" id='retry'> Try again</button>
        </div>
      </div>
      </div>
      `;
    
      //Retry function
      viewRandom.querySelector("#retry").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload();
      });
    
    
      return viewRandom;
    };
   
    