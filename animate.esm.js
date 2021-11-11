var deck={id:"animate",init:(deck)=>{
    var options = deck.getConfig().animated || {};
    deck.addEventListener( 'slidechanged', function( event ) {
        for (let i = 0; i < deck.getCurrentSlide().childNodes.length; i++) {  
            let item = deck.getCurrentSlide().childNodes[i];
            if (item.nodeType==1){            
                for (let i = item.classList.length - 1; i >= 0; i--) {
                    const className = item.classList[i];
                    if (className.startsWith('animate__')) {
                        item.classList.remove(className);
                    }
                }
                if(item.hasAttribute('data-animated')){
                    item.style.display='none';
                    item.offsetHeight;
                    item.style.display='block';
                    let animation = 'animate__' + item.getAttribute('data-animated');
                    if(item.dataset.repeat!=undefined){
                        item.classList.add('animate__'.concat(item.dataset.repeat));
                    }
                    if(item.dataset.speed!=undefined){
                        item.classList.add('animate__'.concat(item.dataset.speed));
                    }
                    item.classList.add('animate__animated', animation);
                }
                else{
                    if(item.tagName in options){
                        item.style.display='none';
                        item.offsetHeight;
                        item.style.display='block';
                        let vals = options[item.tagName];
                        let animation = 'animate__' + vals.animated;
                        if(vals.repeat!=undefined){
                            item.classList.add('animate__'.concat(vals.repeat));
                        }
                        if(vals.speed!=undefined){
                            item.classList.add('animate__'.concat(vals.speed));
                        }
                        item.classList.add('animate__animated', animation);
                    }
                }
            }
        }
    });
  }};
  export default function(){return deck}