# locumData

## What is this quick script?

LocumData is a script I made very quickly when asked by my accountant to send them an estimate of the mileage covered during the previous financial year.
It contains an object with the miles from my house and each store I have covered during that year and uses those figures to calculate the total mileage for the year: why give an estimate if you can get the right figure? :D

The spreadsheet was saved as an odt file and it contained the folowing columns:
A           B           C             D
Date        Store Name  Hourly Rate   Hours
1/4/2019    store1      xxx           xxx
2/4/2019    store1      xxx           xxx
4/4/2019    store5      xxx           xxx
5/4/2019    store6      xxx           xxx
...
28/3/2020   store 3     xxx           xxx

of which only the store name was essential.

The mileage was hardcoded in an object with the following format:

let storesData = {
  'store1': 5.5,
  'store2': 10.2,
  ...
  'storeN': 7.3
}

The code could be greatly improved and made more functional, but it is something I'll leave for next financial year... :D
# locumData
