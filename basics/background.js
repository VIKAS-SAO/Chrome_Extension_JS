console.log('bacground runnign')

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let message = {
        message :'this is the message'
    }
    chrome.tabs.sendMessage(tab.id , message)
    console.log(tab)
    console.log('button clicked')

}