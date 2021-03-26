if(typeof require !== 'undefined') XLSX = require('xlsx')
var workbook = XLSX.readFile('sheet.xlsx')

// List of Stores
let storeList = []

// const getSheetNames = (wbook) => {
//   let list = []
//   for (let i = 0; i < 12; i++) {
//     list.push(wbook.SheetNames[i])
//   }
//   return list 
// }

// console.log(getSheetNames(workbook))

// const getStoreNames = (wbook, sheet, target) => {
//   let sheetName = wbook.Sheets[sheet] 
//   let cell = sheetName[target]
//   cell ? console.log(cell.v) : console.log('day off')
// }

// getStoreNames(workbook, 'Sheet1', 'B3')

const getStoreNames = (wbook, sheet) => {
  
  let cell = undefined
  let sheetName = wbook.Sheets[sheet] 
  for (let i = 3; i <= 31; i++) {
    cell = sheetName['B' + i]
    if (cell) {
      if (!storeList.includes(cell.v)) storeList.push(cell.v)
    }
  }
  return storeList
}
// console.log(getStoreNames(workbook, 'Sheet1'))

for (let i = 1; i <= 12 ; i++) {
  getStoreNames(workbook, 'Sheet' + i)
}

console.log(storeList)

let storesData = {
  'Boots Corfe Mullen': 9.9,
  'Lymington St Thomas': 18.8,
  'Boots Ringwood': 12.6,
  'Boots Broadstone': 7.0,
  'Boots Hamworthy': 6.0,
  'Rowlands Oakdale': 4.6,
  'Boots Tricketts Cross': 7.5,
  'Boots Moordown': 3.8,
  'Boots Southbourne': 4.2,
  'Boots Bransgore': 11.6,
  'Boots Wool': 18.9,
  'Boots Lymington Wistaria': 19.2,
  'Boots Branksome': 1.9,
  'Boots Wareham': 13.7,
  'Boots Swanage': 24.1,
  'Kamson’s Highcliffe': 10.9,
  'Boots Parkstone': 2.3,
  'Rowlands Ferndown': 7.5,
  'Rowlands Parkstone': 4.2,
  'Boots Milford on Sea': 16.7,
  'Kamson’s Medical C': 10.6,
  'Boots Blandford Taylor’s': 18.9,
  'Boots Lymington-StThomas': 18.8,
  'Boots Canford heath': 5.5,
  'Boots Wimborne': 9.7,
  'Boots Corfe Mulen': 9.9,
  'Boots SouthB HC': 4.3,
  'Boots CorfeMullen': 9.9,
  'Boots TrickettsCross': 7.5,
  'Boots Canford Heath': 5.5,
  'Boots Christchurch HC': 8.6,
  'Boots CorfeMulen': 9.9,
  'Boots Southbourne Grove': 4.2,
  'Boots Lymington Wrose': 18.9,
  'Boots Southbourne HC': 4.3,
  'Blandford Split': 18.9,
  'Boots Christchurch 5614': 8.6,
  'Boots Saxon Sq': 7.1,
  'Boots Tricketts cross': 7.5,
  'Boots Beauford Rd': 4.3,
  'Boots Blandford': 18.9,
  'Boots Boots Bransgore': 11.6
}


const getTotalMileage = (wbook) => {
  let mileage = 0.0
  let cell = undefined
  let sheetName = undefined
  let sheet = undefined
  for (let i = 1; i <= 12; i++) {
    sheet = 'Sheet' + i
    // console.log('Sheet: ' + sheet)
    sheetName = wbook.Sheets[sheet] 
      for (let j = 3; j <= 31; j++) {
      cell = sheetName['B' + j]
      // console.log('Cell: ' + cell)
      if (cell) {
        if (storeList.includes(cell.v)) {
          // console.log('miles: ' + storesData[cell.v])
          mileage+= storesData[cell.v]
        }
      }
    }
  }
  return mileage
}  

console.log(getTotalMileage(workbook))
