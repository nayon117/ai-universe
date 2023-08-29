const loadAi = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json()
   const multipleAi = data.data.tools;
    displayAi(multipleAi)
}
const displayAi = (multipleAi) => {
    const aiContainer = document.getElementById("ai-container");
  
    multipleAi.forEach(ai => {
    const aiCard = document.createElement("div");
    aiCard.classList = `card bg- base - 100 shadow - xl`
    aiCard.innerHTML = `
    <figure><img src="${ai?.image }"/></figure>
                    <div class="card-body">
                    <h2 class="card-title">Features </h2>
                    <h2 class="card-title ">${ai.features}</h2>
                    <hr>
                      <p>${ai.name}</p>
                      <p>${ai.published_in}</p>
                       <button onclick='handleShowDetail("ai.tool_name")' class="btn btn-primary">show details</button>
                    </div>
    `
        
       aiContainer.appendChild(aiCard)
   });
}

const handleShowDetail = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json()
    const ai = data.data;
    console.log(ai);
    // showAiDetail(ai)
}

const showAiDetail = (ai) => {
    const showDetailContainer = document.getElementById("show-details-container");
    showDetailContainer.innerHTML = `
    <img src="${ai.tool_name}">
    <p>${ai.description}</p>
    `
    show_details_modal.showModal()
}
loadAi() 