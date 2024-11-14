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

// 