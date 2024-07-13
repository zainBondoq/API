 fetch('https://admin.joacademy.net/api/v1/settings')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 

  })
  .then(response => {
    var ul = document.createElement("ul");
    let len = response.data.programs.length;

   
    for(let i =0 ; i<len ;++i){
        var li = document.createElement("li");
    let img =  document.createElement('img');
    img.setAttribute('src',response.data.programs[i].image)
    let name = document.createElement('h3');
    name.textContent =response.data.programs[i].name;
    li.append(name); 
    li.append(img); 
        // li.textContent = response.data.programs[i].name; 
        ul.appendChild(li);   
     }
     document.body.appendChild(ul);

  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

