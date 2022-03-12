const puppeteer = require('puppeteer');
const { admin, db } = require("../admin");

exports.getAddress = async(req, res) => {    
    return getAddress();
}

async function getAddress(){
    const browser = await puppeteer.launch({ headless: true }); // for test disable the headlels mode,
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 926 });
    await page.goto("https://www.google.com/maps/place/28%C2%B010'07.2%22N+82%C2%B018'16.2%22W",{waitUntil: 'networkidle2'});

    /** @type {string[]} */
    var addressInfo = await page.evaluate(()=>{
        var address = document.getElementsByClassName('Yr7JMd-pane-hSRGPd')[2].innerHTML;
        return address;
    });

    // console.log(addressInfo);
    browser.close();
} 
