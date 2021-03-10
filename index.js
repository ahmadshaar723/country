fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(json => 
json.forEach(element => {
    var y= document.createElement('span');
    var content=`<div class="card,row" style="width:500px">
    <img class="card-img-top" src="xxx" alt="Card image" style="vertical-align:middle">
    <div class="card-body,col">
      <h4 class="card-title">yyy</h4>
      <p class="card-text">zzz</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>`;
  var test= content.replace("xxx",element.flag);
  test= test.replace("yyy",element.name);
  test= test.replace("zzz",element.capital+element.area);
    y.innerHTML=test;
  document.getElementById('aya').appendChild(y);
    
}))