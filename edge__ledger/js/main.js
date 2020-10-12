function initMap(){

    const loc ={lat: 41.715137, lng: 44.827095};

    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc

    });

    const marker = new google.maps.Marker({position: loc, map: map});
}

$('#navbar a, .btn').on('click', function(event){
  
    if(this.hash !=='') {
        event.preventDefault();
 
    const hash = this.hash;
    $('html, body').animate(
        {
       scrollTop: $(hash).offset().top -100
    },
    800
     );
    }
});









window.addEventListener('scroll', ()=>{
    if(window.scrollY>150){
        document.querySelector('#navbar').style.opacity=0.9
        
    }else{
        document.querySelector('#navbar').style.opacity=1;
    }
} )

document.querySelector('.fa-bars').addEventListener('click', ()=>{
    let link = document.querySelector('.link')

    if(link && link !==null){
        link.className = 'linkView'

        link = document.querySelector('.linkView')

       
    }else if( link ===null){
        link =  document.querySelector('.linkView')
        link.className = 'link'
      
    }




      


})