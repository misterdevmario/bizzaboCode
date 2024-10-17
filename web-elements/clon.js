setTimeout(() => {
    // navbar tabs list container
    var tabList = document.querySelector("#main-wrap > main > header > div > nav > ul")
    // new tab cloned from community tab
    var newTab = document.querySelector("#main-wrap > main > header > div > nav > ul > li:nth-child(3)").cloneNode(true)
    newTab.firstChild.href = "https://events.bizzabo.com/549950/page/3642452/expo-hall"
    newTab.firstChild.target = '_blank'
    // append new cloned tab to navbar
    tabList.appendChild(newTab)  
    var newTab = document.querySelector("#main-wrap > main > header > div > nav > ul > li:nth-child(3)").remove()
}, 900);


/////////////////////////////////////////// https://attendees.bizzabo.com/616277/agenda?date=1730160000000&f_On-Demand%20Content=888498

setTimeout(() => {
    // Navbar container
 const container = document.querySelector("#main-wrap > main > div > div > div.top-bar-wrap.sm.md.lg.down-xl.modify_class.secondary-navigation-wrapper-wrapWithAppTools > div > div.top-bar-navigation.sm.md.lg.down-xl")
//Tab to clone
const onDemandTab  = document.querySelector("#main-wrap > main > div > div > div.top-bar-wrap.sm.md.lg.down-xl.modify_class.secondary-navigation-wrapper-wrapWithAppTools > div > div.top-bar-navigation.sm.md.lg.down-xl > a").cloneNode(true)
container.appendChild(onDemandTab)

document.querySelector("#main-wrap > main > div > div > div.top-bar-wrap.sm.md.lg.down-xl.modify_class.secondary-navigation-wrapper-wrapWithAppTools > div > div.top-bar-navigation.sm.md.lg.down-xl > a:nth-child(4)").href = "https://attendees.bizzabo.com/616277/agenda?date=1730160000000&f_On-Demand%20Content=888498"
}, 900);
 