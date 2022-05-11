


chrome.runtime.onMessage.addListener(getMessage)
function getMessage(message , sender,sendResponse){
     alert('vikas sao message' , message)
     console.log(location.href);

     let x = document.getElementsByTagName('div');
     console.log(x);
     for(let i=0;i<x.length;i++){
         x[i].style['backgroundColor'] = 'red';
     }
  
}