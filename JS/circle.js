let colorList = ["red", "green", "tomato", "blue", "cyan"];

function radio() {
  let r = document.getElementById("radio").value;
        
  if(r != 0){
      let alert = document.getElementsByTagName('p');
      let item = alert.item(0);
        if(item != null){
           item.parentNode.removeChild(item)};   
  
      let x = r * 2;
      let random = Math.random() * 5;
      let borderColor = colorList[Math.floor(random)];
      let newCircle = document.querySelector("#circle");
      newCircle.style.width = `${x}mm`;
      newCircle.style.height = `${x}mm`;
      newCircle.style.border = `solid 15px ${borderColor}`;
      newCircle.style.borderRadius = "50%";
      let form = document.querySelector('.form');
        if (x/2 >= 75){            
          form.style.marginTop = '45vh';
          form.style.zIndex = '1'
        } else{
            form.style.marginTop = '5vh'}

  }else{ 
     let error = document.createElement('p');
      error.innerHTML = 'Por favor ingresa un valor mayor a 0';
        
     let mjs = document.querySelector('.form')
     mjs.appendChild(error)
    }
  
}
