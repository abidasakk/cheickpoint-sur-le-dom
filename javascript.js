function boutton_plus_moins(){
    let btnplus = document.querySelector(".plus")
    btnplus.addEventListener("click", function()  {
    let numero =  document.querySelector(".nombre");
    numero.value = parseInt(numero.value) +1 

}
)

let btnmoins = document.querySelector(".moins")
btnmoins.addEventListener("click" ,function() {
    let numero =  document.querySelector(".nombre");
    if(parseInt(numero.value)>0){ numero.value = parseInt(numero.value) -1 ;
   } 
}
 )



}
boutton_plus_moins()



 let creer = document.querySelector(".ajoute");
 creer.addEventListener("click", function(){
    let corpsb=document.querySelector("#all_products")
    corpsb.innerHTML += '<tr class="corps"><td ><div class="position"><img src="radio.jpg" alt="poste" width="120px" height="120px"><div class="modifier"><div class="nomimage">radio</div><div  class="suppression">suprimer</div></div></div></td><td><div class="compteur"><input type="button" value="-" class="moins"><input type="tel" value="0" class="nombre"><input type="button" value="+" class="plus"></div></td><td class="nombre2">0</td><td class="nombre3">000</td></tr>'
    boutton_plus_moins()
 })


       