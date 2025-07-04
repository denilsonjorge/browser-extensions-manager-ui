let dadosAPI=[]

async function showAll() {
  try {
    const response=await fetch("./data.json");
    const dados=response.json();
    dadosAPI.push(await dados)
    document.querySelector(".extensions").innerHTML=""
    dadosAPI[0].forEach(dados => {
      document.querySelector(".extensions").innerHTML+=`
        <div class="extension">
          <div class="content">
            <img src="${dados.logo}" alt="">
            <div class="text">
              <h3>${dados.name}</h3>
              <p>${dados.description}</p>
            </div>
          </div>
          <div class="btn">
            <button class="remove">Remove</button>
            <span class="interruptor ${dados.isActive?"on":""}"></span>
          </div>
        </div>
      `
      
    });    
const btnMode=document.querySelector(".mode");
const interruptor=document.querySelectorAll(".interruptor");
btnMode.addEventListener("click",()=>{
    btnMode.classList.toggle("light")
    document.body.classList.toggle("active")
})

interruptor.forEach(element=>{
  element.addEventListener("click",()=>{
  element.classList.toggle("on")
})
})



  } catch (error) {
    console.error(error)
  }

}
showAll();

async function show(filter) {
  const response=await fetch("./data.json");
    const dados=response.json();
    dadosAPI.push(await dados)
    document.querySelector(".extensions").innerHTML=""
    dadosAPI[0].forEach(dados => {
      if(filter=="active"){
        if(dados.isActive==true){
      document.querySelector(".extensions").innerHTML+=`
        <div class="extension">
          <div class="content">
            <img src="${dados.logo}" alt="">
            <div class="text">
              <h3>${dados.name}</h3>
              <p>${dados.description}</p>
            </div>
          </div>
          <div class="btn">
            <button class="remove">Remove</button>
            <span class="interruptor ${dados.isActive?"on":""}"></span>
          </div>
        </div>
      `
      }
      }else if(filter=="inactive"){
        if (dados.isActive==false) {
        document.querySelector(".extensions").innerHTML+=`
        <div class="extension">
          <div class="content">
            <img src="${dados.logo}" alt="">
            <div class="text">
              <h3>${dados.name}</h3>
              <p>${dados.description}</p>
            </div>
          </div>
          <div class="btn">
            <button class="remove">Remove</button>
            <span class="interruptor ${dados.isActive?"on":""}"></span>
          </div>
        </div>
      `
        }
      }
    });
  
}

const filters=document.querySelectorAll(".filter .btn button");
for (let i = 0; i < filters.length; i++) {
  filters[0].addEventListener("click",(element)=>{
    filters[0].classList.add("active")
    filters[1].classList.remove("active")
    filters[2].classList.remove("active")
  })
  filters[1].addEventListener("click",(element)=>{
    filters[1].classList.add("active")
    filters[0].classList.remove("active")
    filters[2].classList.remove("active")
  })
  filters[2].addEventListener("click",(element)=>{
    filters[2].classList.add("active")
    filters[0].classList.remove("active")
    filters[1].classList.remove("active")
  })
}