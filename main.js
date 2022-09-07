const $ = document.querySelector.bind(document)
window.addEventListener('load', () => {
    const tabNavigation = abaDeNavegacao()
    tabNavigation.init()
  })
function abaDeNavegacao() {
    
  const html = {
      links: [...$(".tab-links").children],
      contents: [...$(".tab-content").children],
    }
   
  function hideAllTabContent(){
        html.contents.forEach(section => {
           section.style.display = "none"
        })
    }
  function removeAllActiveClass(){}
  function showCurrentTab(id){
    hideAllTabContent()
    const tabContent = $('#' + id)
    tabContent.style.display = "block"
  }
    
  function selectTab(event) {
      const target = event.currentTarget
      showCurrentTab(target.dataset.id)
    }
    
  function listenerForChange(){
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab)
     })
  }
    
    function init() {
        hideAllTabContent()
        listenerForChange()
    }
    
    return {
      init
   }
}

