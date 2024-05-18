var data=[
    {
        "header":"img/hcard/football.jpg",
        "title":"Football",
        "detail":"Football (Soccer) is one of the oldest sports in the...",
        "link":"football.html"
    },

    {
        "header":"img/hcard/cricket.jpg",
        "title":"Cricket",
        "detail":"Cricket is one of many games in the club ball sphere ...",
        "link":"cricket.html"
    },

    {
        "header":"img/hcard/racing.jpg",
        "title":"Motorcycle Racing",
        "detail":"Motorcycle racing is the sport of racing motorcycles...",
        "link":"Motorcycle.html"
    },

    {
        "header":"img/hcard/tennis.jpg",
        "title":"Tennis",
        "detail":"a game in which two or four players strike a ball with...",
        "link":"tennis.html"
    },

    ];

var element=document.getElementById('for_data');
element.innerHTML='';

for(var obj of data){
    element.innerHTML+=`
    <div class="col-md-3 col-sm-6">

<div class="card" style="width: 18rem;">
  <img src="${obj.header}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.title}</h5>
    <p class="card-text">${obj.detail}</p>
    <a href="${obj.link}" class="btn btn-warning">Read More</a>
  </div>
</div>

</div>
    `;
}