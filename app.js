
function FaqAllElementsArray(){
    const elements = document.querySelectorAll('*');
    let faqArray = [];
    Object.values(elements).forEach(elements=>{
        const elementClassList = elements.classList;
        elementClassList.forEach(className => {
            // console.log(typeof className)
            if ( className.includes('faq-')){
                faqArray.push(className)
            }
        })   
    })
    // console.log(faqArray)
    return faqArray;    
}

function ShowElementsClicked(){
    let ElementsArray = FaqAllElementsArray()
    // console.log(ElementsArray)
    
    // InitialState hide All answer elements
 
    ElementsArray.forEach(className => {
        document.querySelector(`.${className} p:last-child`).style.display = "none"
        document.querySelector(`.${className} img`).style.transform  = "rotate(0deg)"
        document.querySelector(`.${className} p:First-child`).style  = "font-weight: 400"
    })
    document.body.addEventListener("click", function(event){
      const elementClassList = event.target.parentNode.classList;

        console.log(elementClassList)
        
        if ( elementClassList.toString().startsWith('faq-')&&document.querySelector(`.${elementClassList.toString()} p:last-child`).style.display==="none"){

        // ShowElement Click
        document.querySelector(`.${elementClassList.toString()} p:last-child`).style.display="block"
        document.querySelector(`.${elementClassList} img`).style.transform  = "rotate(180deg)"
        document.querySelector(`.${elementClassList} p:First-child`).style  = "font-weight: 600"

        // HideElement unClick
        let NoneElementsArray =  ElementsArray.filter(word => word!== elementClassList.toString())
        // console.log(elementClassList.toString())
        // console.log(NoneElementsArray)
        NoneElementsArray.forEach(className => {
            document.querySelector(`.${className} p:last-child`).style.display = "none"
            document.querySelector(`.${className} img`).style.transform  = "rotate(0deg)"
            document.querySelector(`.${className} p:First-child`).style  = "font-weight: 400"
        })
      }
      else{
        document.querySelector(`.${elementClassList.toString()} p:last-child`).style.display="none"
        document.querySelector(`.${elementClassList} img`).style.transform  = "rotate(360deg)"
        console.log(document.querySelector(`.${elementClassList} img`).style.transform)
        
      }


    //   if ( elementClassList.toString().startsWith('faq-')&&document.querySelector(`.${elementClassList.toString()} p:last-child`).style.display==="block"){
    //     document.querySelector(`.${elementClassList.toString()} p:last-child`).style.display="none"
    //     console.log(elementClassList.toString().startsWith('faq-')&&document.querySelector(`.${elementClassList.toString()} p:last-child`).style.display==="block")
        
    //   }

    })

  }
ShowElementsClicked()
