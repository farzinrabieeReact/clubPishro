
let lsClient;
let subscription;
let foamtree;
let baseFilter = "turnover"
// const defaultSidebarData;

window.foamTreeMethod = () => {
  let member_id = getRandomArbitrary(5000, 50000);
  let token;
  let detailsWhenHover = [{ symbol: "-", price: "-", change: "-", turnover: "-", transactions: "-" }]

  const apiAuth = async (member_id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "User": "CLUB", "Pass": "!@#$%RTFVBNM56464216%$^YGBH", "member_id": `${member_id}` });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      let res = await fetch(getUrlAuth(), requestOptions)
      let result = await res.json()
      token = result.token

      if (token) {
        let scToName = nameSector(result.subscribable_item_names)
        let isinToName = nameStock(result.subscribable_item_names)
        subscriptionMethod(token, scToName, isinToName)
      }
    } catch (err) {
      // alert("ارتباط با سرور قطع می باشد.")
      console.log("err", err);
    }
  }

  apiAuth(member_id)

  const subscriptionMethod = (token, scToName, isinToName) => {
    lsClient = ls_Client(token, member_id);

    subscription = new Subscription(
      "MERGE",
      ["LightMarketMap"],
      ["LightMarketMapData", "timestamp"]
    );
    subscription.setRequestedMaxFrequency(0.1)

    setDetailsWhenHoverInSidebar(detailsWhenHover)


    let callLiveData;

    /////////////////////////////get data from filter/////////////////////
    let baseFilter_treemap = document.getElementById("baseFilter-treemap")
    baseFilter = "turnover"
    baseFilter_treemap.onchange = (e) => {
      baseFilter = e.target.value
      callLiveData()
    }

    let flowfilter_treemap = document.getElementById("flowfilter-treemap")
    let flowfilter = "all"
    flowfilter_treemap.onchange = (e) => {
      flowfilter = e.target.value
      callLiveData()
    }

    ///inner html in sectors filter///
    let sectorsfilter_treemap = document.getElementById("sectorsfilter-treemap")
    // sectorsfilter_treemap.innerHTML = sectorsfilter_treemap.innerHTML + `<option value="all" selected>همه صنایع</option>`
    Object.keys(scToName).forEach(item => {
      sectorsfilter_treemap.innerHTML = sectorsfilter_treemap.innerHTML + `<option value=${item}>${scToName[item]}</option>`
    })

    let sectorfilter = "all"
    sectorsfilter_treemap.onchange = (e) => {
      sectorfilter = e.target.value
      callLiveData()
    }
    ///////////////////////////////end filter///////////////////////////////////
    defaultSidebarData()

    subscription.addListener({
      onItemUpdate: function (obj) {

        callLiveData = () => {

          let parsData = JSON.parse(obj.Dg[2])
          let root = {}
          let foamData = []
          let nodeWeight;
          let stockChange;
          let sectorCode;
          let sectorName;
          let isin;
          let stockName;
          let lastPrice;

          for (let i = 0; i < parsData.length; i++) {
            sectorCode = parsData[i].SC
            sectorName = scToName[sectorCode]
            isin = parsData[i].ISN
            stockName = isinToName[isin]
            lastPrice = parsData[i].LP
            stockChangeTurnover = (parseFloat(lastPrice) - parseFloat(parsData[i].YP)) / (parseFloat(parsData[i].YP)) * 100

            let turnover = parseFloat(parsData[i].SIV) + parseFloat(parsData[i].SNV)

            if (baseFilter === "transactions_value") {
              nodeWeight = (turnover) * (parseFloat(lastPrice))
              stockChange = stockChangeTurnover
            } else if (baseFilter === "Legal_movements") {
              nodeWeight = turnover
              stockChange = ((parseFloat(parsData[i].BNV) - parseFloat(parsData[i].SNV)) / turnover) * 100
            } else {
              nodeWeight = turnover
              stockChange = stockChangeTurnover
            }

            if (sectorfilter !== "all" && parsData[i].SC !== sectorfilter) {
              continue
            }

            if (flowfilter !== "all" && parsData[i].F !== flowfilter) {
              continue
            }

            if (root[sectorCode] !== undefined) {
              foamData[root[sectorCode]].weight += nodeWeight
              foamData[root[sectorCode]].change = stockChange
            } else {
              let sectorNode = { id: sectorCode, label: sectorName, weight: nodeWeight, change: stockChange, groups: [], details: [] }
              foamData.push(sectorNode)
              root[sectorCode] = foamData.length - 1
            }

            let stockNode = { id: isin, label: `${stockName}  ${tofixedNumber(stockChange)}`, weight: nodeWeight, change: stockChange }
            let stockNodeDetails = { symbol: stockName, price: formatLastPrice(lastPrice), change: formatLastPrice(stockChangeTurnover), turnover: handleNumber(turnover), transactions: handleNumber((turnover) * (parseFloat(lastPrice))) }
            foamData[root[sectorCode]].groups.push(stockNode)
            foamData[root[sectorCode]].details.push(stockNodeDetails)

          }

          if (foamtree.get("exposure").groups.length === 0) {
            foamtree.set({
              dataObject: {
                groups: foamData
              },
            })
          }

        }

        callLiveData()

      }
    });

    lsClient.subscribe(subscription);
  }

}

window.foamTreeCall = () => {


  foamtree = new CarrotSearchFoamTree({
    id: "visualization",
    layout: "squarified",
    rolloutDuration: 0,
    pullbackDuration: 0,
    pixelRatio: window.devicePixelRatio || 1,
    relaxationQualityThreshold: 2.5,
    descriptionGroupSize: 0.00,
    descriptionGroupType: 'stab',
    stacking: 'flattened',
    groupLabelFontFamily: 'Vazir',
    groupLabelMinFontSize: 4,
    groupLabelMaxFontSize: 20,
    fadeDuration: 0,
    finalCompleteDrawMaxDuration: 1000,
    finalIncrementalDrawMaxDuration: 1000,
    groupMinDiameter: 0,
    groupStrokeWidth: 0,
    groupStrokeType: 'plain',
    groupBorderWidth: 1,
    groupFillType: 'plain',
    openCloseDuration: 0,
    groupExposureZoomMargin: 0,
    groupExposureScale: 1,
    relaxationVisible: true,
    groupHoverFillLightnessShift: 0,
    wireframeLabelDrawing: "always",

    groupColorDecorator: function (opts, params, vars) {
      if (baseFilter === "Legal_movements") {
        if (params.level === 0) {
          vars.groupColor = "rgba(1,1,1,0.7)";
          vars.labelColor = "white";
        } else {
          vars.groupColor = getColorForPercentageForLegal_movements(params.group.change);
          vars.labelColor = "white";
        }

      }
      else {
        if (params.level === 0) {
          vars.groupColor = "rgba(1,1,1,0.7)";
          vars.labelColor = "white";
        } else {
          vars.groupColor = getColorForPercentage(params.group.change);
          vars.labelColor = "white";
        }

      }

      getColorForPercentageForLegal_movements
    },

    dataObject: {
      groups: [{}]
    },

    onGroupSelectionChanged: function (info) {
      if (info.groups[0]?.details) {
        let foamtree_sector_name = document.getElementById("foamtree-sector-name")
        foamtree_sector_name.innerHTML = info.groups[0].label
        setDetailsWhenHoverInSidebar(info.groups[0].details)
      }
    },

    onModelChanged: function (data) {
      if (data.groups.length < 2) {
        try {
          document.getElementById("loading-treemap").style.display = "block"
        }
        catch {
        }
      } else {
        document.getElementById("loading-treemap").style.display = "none"
      }
    }



  });

  defaultSidebarData = () => {
    setTimeout(() => {
      let res = foamtree.get("dataObject").groups
      .filter(item => item.label === 'خودرو و ساخت قطعات')
      setDetailsWhenHoverInSidebar(res[0].details)
    }, 2000);
  }


  window.addEventListener("orientationchange", foamtree.resize);

  // Resize on window size changes
  window.addEventListener("resize", (function () {
    var timeout;
    return function () {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        foamtree.set("pixelRatio", window.devicePixelRatio || 1);
        foamtree.resize();
      }, 300);
    }
  })());

  document.getElementById("visualization").addEventListener("wheel", (e) => {
    if (foamtree.get("exposure").groups.length === 0) {
      e.stopPropagation()
    }
  })

  foamtree.on("groupHover", function (e) {
    let settimeHover;
    if (e.group?.groups) {
      e.preventDefault()
      window.clearTimeout(settimeHover)
      settimeHover = window.setTimeout(() => {
        // let foamtree_sector_name = document.getElementById("foamtree-sector-name")
        // foamtree_sector_name.innerHTML = e.group?.label
        // setDetailsWhenHoverInSidebar(e.group.details)
      }, 500);
    }
  });

}

window.foamTreeMethodUnsubscribe = () => {
  try {
    if (lsClient && subscription) {
      unbscription(lsClient, subscription)
    }
  } catch {
    console.log("catch", lsClient, subscription)
  }
}


var percentColorsOne = [
  { pct: -5.0, color: { r: 255, g: 0, b: 0 } },
  { pct: -2.0, color: { r: 154, g: 44, b: 66 } },
  { pct: 0.0, color: { r: 78, g: 71, b: 82 } },
  { pct: 2.0, color: { r: 107, g: 181, b: 141 } },
  { pct: 5.0, color: { r: 27, g: 139, b: 95 } }];

var percentColorsTwo = [
  { pct: -100.0, color: { r: 255, g: 0, b: 0 } },
  { pct: -50.0, color: { r: 154, g: 44, b: 66 } },
  { pct: 0.0, color: { r: 78, g: 71, b: 82 } },
  { pct: 50.0, color: { r: 107, g: 181, b: 141 } },
  { pct: 100.0, color: { r: 27, g: 139, b: 95 } }];

var getColorForPercentage = function (color) {
  let pct = color > 5 ? 5 : color < -5 ? -5 : color
  for (var i = 1; i < percentColorsOne.length - 1; i++) {
    if (pct < percentColorsOne[i].pct) {
      break;
    }
  }

  var lower = percentColorsOne[i - 1];
  var upper = percentColorsOne[i];
  var range = upper.pct - lower.pct;
  var rangePct = (pct - lower.pct) / range;
  var pctLower = 1 - rangePct;
  var pctUpper = rangePct;
  var color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  };
  return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  // or output as hex if preferred
};

var getColorForPercentageForLegal_movements = function (pct) {
  for (var i = 1; i < percentColorsTwo.length - 1; i++) {
    if (pct < percentColorsTwo[i].pct) {
      break;
    }
  }

  var lower = percentColorsTwo[i - 1];
  var upper = percentColorsTwo[i];
  var range = upper.pct - lower.pct;
  var rangePct = (pct - lower.pct) / range;
  var pctLower = 1 - rangePct;
  var pctUpper = rangePct;
  var color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  };
  return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  // or output as hex if preferred
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const handleNumber = (value) => {
  if (+value === 0) {
    return 0
  }
  if (!value || value === "null") {
    return "-"
  }
  return nFormatter(value.toFixed(2), 1)
}

const tofixedNumber = (number) => {
  return `
                  
  ${parseFloat(parseFloat(number).toFixed(2))}%`
}

// window.addEventListener("load", function () {
//   foamTreeCall()
// });


// window.foamTreeMethod()

// document.getElementById("unsub").onclick = () => {
//   if (lsClient) {
//     foamTreeMethodUnsubscribe()
//   }
//   // foamtree = null
// }

// document.getElementById("sub").onclick = () => {
//   foamTreeMethod()
// }

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

const formatLastPrice = (value) => {
  return parseFloat(value.toFixed(2)).toLocaleString();
}

