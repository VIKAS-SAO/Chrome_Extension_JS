
console.log('dali extension tunnnog')
let pic  = "images/logo.png"

 function getMessage(message , sender,sendResponse){
   let images  = document.getElementsByTagName('img');
   for(let i = 0 ; i<images.length ;i++){
       let url = chrome.extension.getURL(pic);
       images[i].src = url;
       console.log(url)
   }
 }

getMessage()