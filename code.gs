var url = "https://docs.google.com/spreadsheets/d/1JnKfqka90akV1iu7JIQLvO7gK8cP6w3gKpRL1ZG5Pe8/edit#gid=0";

function doGet(e){
  
  if(e.parameters.v == "business"){
    return loadBusiness();
  } else if(e.parameters.v == "consumer"){
    return loadConsumer();
  }else{
    return loadConsumer();
  }
} 

function loadConsumer(){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws1_1 = ss.getSheetByName("Sheet1_1");
  var ws1_2 = ss.getSheetByName("Sheet1_2");
  var ws1_3 = ss.getSheetByName("Sheet1_3");
  var ws1_4 = ss.getSheetByName("Sheet1_4");
  var ws1_5 = ss.getSheetByName("Sheet1_5");
  
  //1_1
  var title1_1 = ws1_1.getRange(2,1, ws1_1.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
  var image1_1 = ws1_1.getRange(2,2, ws1_1.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
  var desc1_1 = ws1_1.getRange(2,3, ws1_1.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
  var links1_1 = ws1_1.getRange(2,3, ws1_1.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
  //1_2
  var title1_2 = ws1_2.getRange(2,1, ws1_2.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
  var image1_2 = ws1_2.getRange(2,2, ws1_2.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
  var desc1_2 = ws1_2.getRange(2,3, ws1_2.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
  var links1_2 = ws1_2.getRange(2,3, ws1_2.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
  //1_3
  var title1_3 = ws1_3.getRange(2,1, ws1_3.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
  var image1_3 = ws1_3.getRange(2,2, ws1_3.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
  var desc1_3 = ws1_3.getRange(2,3, ws1_3.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
  var links1_3 = ws1_3.getRange(2,3, ws1_3.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
  //1_4
  var title1_4 = ws1_4.getRange(2,1, ws1_4.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
  var image1_4 = ws1_4.getRange(2,2, ws1_4.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
  var desc1_4 = ws1_4.getRange(2,3, ws1_4.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
  var links1_4 = ws1_4.getRange(2,3, ws1_4.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
  //1_5
  var title1_5 = ws1_5.getRange(2,1, ws1_5.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
  var image1_5 = ws1_5.getRange(2,2, ws1_5.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
  var desc1_5 = ws1_5.getRange(2,3, ws1_5.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
  var links1_5 = ws1_5.getRange(2,3, ws1_5.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
  
  var tmp = HtmlService.createTemplateFromFile("page");
  
  //this makes a 2d array into a 1d array. So our html can have a easier loop
  //1_1
  tmp.title1_1 = title1_1.map(function(row){return row[0];});
  tmp.image1_1 = image1_1.map(function(row){return row[0];});
  tmp.desc1_1 = desc1_1.map(function(row){return row[0];});
  tmp.links1_1 = desc1_1.map(function(row){return row[0];});
  //1_2
  tmp.title1_2 = title1_2.map(function(row){return row[0];});
  tmp.image1_2 = image1_2.map(function(row){return row[0];});
  tmp.desc1_2 = desc1_2.map(function(row){return row[0];});
  tmp.links1_2 = desc1_2.map(function(row){return row[0];});
  //1_3
  tmp.title1_3 = title1_3.map(function(row){return row[0];});
  tmp.image1_3 = image1_3.map(function(row){return row[0];});
  tmp.desc1_3 = desc1_3.map(function(row){return row[0];});
  tmp.links1_3 = desc1_3.map(function(row){return row[0];});
  //1_4
  tmp.title1_4 = title1_4.map(function(row){return row[0];});
  tmp.image1_4 = image1_4.map(function(row){return row[0];});
  tmp.desc1_4 = desc1_4.map(function(row){return row[0];});
  tmp.links1_4 = desc1_4.map(function(row){return row[0];});
  //1_5
  tmp.title1_5 = title1_5.map(function(row){return row[0];});
  tmp.image1_5 = image1_5.map(function(row){return row[0];});
  tmp.desc1_5 = desc1_5.map(function(row){return row[0];});
  tmp.links1_5 = desc1_5.map(function(row){return row[0];});
  
  //
  //addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return tmp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function loadBusiness(){
    var ss = SpreadsheetApp.openByUrl(url);
    var ws2_1 = ss.getSheetByName("Sheet2_1");
    var ws2_2 = ss.getSheetByName("Sheet2_2");
    var ws2_3 = ss.getSheetByName("Sheet2_3");
    var ws2_4 = ss.getSheetByName("Sheet2_4");
    
    //2_1
    var title2_1 = ws2_1.getRange(2,1, ws2_1.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
    var image2_1 = ws2_1.getRange(2,2, ws2_1.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
    var desc2_1 = ws2_1.getRange(2,3, ws2_1.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
    var links2_1 = ws2_1.getRange(2,3, ws2_1.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
    //2_2
    var title2_2 = ws2_2.getRange(2,1, ws2_2.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
    var image2_2 = ws2_2.getRange(2,2, ws2_2.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
    var desc2_2 = ws2_2.getRange(2,3, ws2_2.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
    var links2_2 = ws2_2.getRange(2,3, ws2_2.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
    //2_3
    var title2_3 = ws2_3.getRange(2,1, ws2_3.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
    var image2_3 = ws2_3.getRange(2,2, ws2_3.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
    var desc2_3 = ws2_3.getRange(2,3, ws2_3.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
    var links2_3 = ws2_3.getRange(2,3, ws2_3.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
    //2_4
    var title2_4 = ws2_4.getRange(2,1, ws2_4.getRange("A1").getDataRegion().getLastRow()-1,1).getValues();
    var image2_4 = ws2_4.getRange(2,2, ws2_4.getRange("B1").getDataRegion().getLastRow()-1,1).getValues();
    var desc2_4 = ws2_4.getRange(2,3, ws2_4.getRange("C1").getDataRegion().getLastRow()-1,1).getValues();
    var links2_4 = ws2_4.getRange(2,3, ws2_4.getRange("D1").getDataRegion().getLastRow()-1,1).getValues();
    
    
    var tmp = HtmlService.createTemplateFromFile("page2");
    
    //this makes a 2d array into a 1d array. So our html can have a easier loop
    //2_1
    tmp.title2_1 = title2_1.map(function(row){return row[0];});
    tmp.image2_1 = image2_1.map(function(row){return row[0];});
    tmp.desc2_1 = desc2_1.map(function(row){return row[0];});
    tmp.links2_1 = desc2_1.map(function(row){return row[0];});
    //2_2
    tmp.title2_2 = title2_2.map(function(row){return row[0];});
    tmp.image2_2 = image2_2.map(function(row){return row[0];});
    tmp.desc2_2 = desc2_2.map(function(row){return row[0];});
    tmp.links2_2 = desc2_2.map(function(row){return row[0];});
    //2_3
    tmp.title2_3 = title2_3.map(function(row){return row[0];});
    tmp.image2_3 = image2_3.map(function(row){return row[0];});
    tmp.desc2_3 = desc2_3.map(function(row){return row[0];});
    tmp.links2_3 = desc2_3.map(function(row){return row[0];});
    //2_4
    tmp.title2_4 = title2_4.map(function(row){return row[0];});
    tmp.image2_4 = image2_4.map(function(row){return row[0];});
    tmp.desc2_4 = desc2_4.map(function(row){return row[0];});
    tmp.links2_4 = desc2_4.map(function(row){return row[0];});    
    
    return tmp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }