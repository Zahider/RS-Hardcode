//When we click the chrome extension, it will trigger the event listener and pass on the tab instance
chrome.action.onClicked.addListener(tab => {
    //specify what tab we want to execute it on by passing in the tab id
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () =>{
            alert('Welcome to Review SensAI!');
        }
    })
})

//this file triggers a chrome script when extension is opened