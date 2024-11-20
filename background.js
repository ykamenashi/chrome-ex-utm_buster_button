// アドオンのアクションボタンが押された時、タブを引数として実行
chrome.action.onClicked.addListener( async (tab)=>{
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: injectedFunc
    });
});

const injectedFunc = ()=>{
    const utm = /utm_source/;
    if( utm.test(location.href) ){
        const newURL = location.href.split('?')[0];
        location.href = newURL;
    }
}