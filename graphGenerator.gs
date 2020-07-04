var max_row = 60*24

function graphGenetater() {
  var start = new Date();
  var res = UrlFetchApp.fetch("https://www.yahoo.co.jp/");
  var end = new Date();
  var time = end - start
  Logger.log(time);
  
  var ss = SpreadsheetApp.getActive();
  var s = ss.getActiveSheet();
  var row = s.getLastRow();
  
  s.getRange(row+1, 1).setValue(time);
  s.getRange(row+1, 2).setValue(start);
  
  if(row > max_row){
    diff = row - max_row;
    s.getRange(1, 1, diff,2).clear();
    s.getRange(diff+1,1,row+1,2).moveTo(s.getRange(1, 1, max_row,2));
  }
}