// scroll functions
const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
      
function bottomFunction(){
      window.scrollTo({
        top: height,
        behavior: 'smooth'
    }) 
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    }

//  box animations

const box=document.querySelectorAll(".box");

    document.documentElement.addEventListener('mousemove', e =>{
        box.forEach(element=>{
            const rect =element.getBoundingClientRect();
            const x= e.clientX -rect.left;
            const y= e.clientY -rect.top;
            element.style.transform=`rotateX(${y /30}deg) 
            rotateY(${x /40}deg)`;
        });
    });


  
