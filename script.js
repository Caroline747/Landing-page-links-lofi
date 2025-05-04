//MUSICA PLAYER
var audElem= document.getElementsByTagName('audio')[0].getAttribute('id');
$(".card").click(function(){
   song(Lofi);
   });
var Lofi = document.getElementById(audElem);
   function song(a){
   $(".teethBox").addClass("playing")
   $(".tape-ribbon").addClass("play")
   $(".tape-ribbon-two").addClass("play-two")

   a.play();
   }

// BOTÃO DARK
document.querySelector('#theme-toggle').addEventListener('click', (event) => {
    event.preventDefault();
   
    document.body.classList.toggle('dark');
   });

