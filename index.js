const puppeteer = require('puppeteer');
require("dotenv").config();

(async () => {
     const browser = await puppeteer.launch({headless:false});
     const page = await browser.newPage();
     const url = "https://food.grab.com/sg/en";
     await page.goto(  `https://api.proxycrawl.com/?token=${process.env.TOKEN}&url=${url}`,
     { waitUntil: "load", timeout: 0 });

     await page.type(
        "#location-input",
        "Chinatown Complex - 335 Smith St, Singapore, 050335"
      ); 

      await page.click('button[class="ant-btn submitBtn___2roqB ant-btn-primary"]');
      await page
        .waitForNavigation({ waitUntil: "load", timeout: 0 })
        .catch((error) => {
          console.log(error);
        });

        const info = await page.$eval("#__NEXT_DATA__", (el) => el.latitude);

       console.log(info);

  await page.waitFor(30000);

     // const grablattitude = await page.evaluate(()=> {
     //    const lattitude = document.getElementsById("#__NEXT_DATA__  geolaocation.lattitude");
     //    return lattitude;
     // })
     console.log(grablattitude)
    //  await browser.close();
})();










// const puppeteer = require('puppeteer')

// const mockResponseObject = [
//   {
//     id: 1,
//    latitude: 'How to Mock a Response',
//    longitude: 'A. Friend',
//     genre: 'business',
//   }
// ];

// (async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()

//   await page.setRequestInterception(true)

//   page.on('request', (request) => {
//     if (request.url() === 'https://food.grab.com/sg/en') {
//       request.respond({
//         content: 'application/json',
//         body: JSON.stringify(mockResponseObject)
//       })
//     } else request.continue()
//   })

//   await page.setViewport({ width: 1200, height: 800 })

//   await page.goto( `https://api.proxycrawl.com/?token=${process.env.TOKEN}&url=${url}`,
//         { waitUntil: "load", timeout: 0 })

//   await page.screenshot({ path: 'screenshot.png' })

//   await browser.close()
// })()