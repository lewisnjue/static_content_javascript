
document.addEventListener('DOMContentLoaded',()=>{
    const button = document.querySelector('.button');
    window.addEventListener('keydown',(key)=>{
        if(key.key == 'Enter'){
            const  url = document.querySelector('.url');
            const response = new XMLHttpRequest();
            response.open('GET',url.value);
            response.onload = ()=>{
                const responsebox = document.querySelector('.response');
                responsebox.innerHTML = response.responseText
    
            
            };
            response.onerror= ()=>{
                console.log('error');
            }
            response.send();
    
            
        }
    })
    button.addEventListener('click',()=>{
        const  url = document.querySelector('.url');
        const response = new XMLHttpRequest();
        response.open('GET',url.value);
        response.onload = ()=>{
            const responsebox = document.querySelector('.response');
            responsebox.innerHTML = response.responseText

        
        };
        response.onerror= ()=>{
            console.log('error');
        }
        response.send();

    });

     
})