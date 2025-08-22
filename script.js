function toggleMode(){
   const html = document.documentElement
   html.classList.toggle("ligth")

   //pegar a tag img
 const img=  document.querySelector("#profile img")

   if(html.classList.contains('ligth')){
      // se tiver ligth mode, adicionar a imagem
      img.setAttribute('src','./assets/avatar-light.png')
   }else{
      // se tive sem o ligth mode, manter a imagem atual
       img.setAttribute('src','./assets/avatar.png')
   }




}