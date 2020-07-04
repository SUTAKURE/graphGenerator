function getApi() {

  url = ('http://api.openweathermap.org/data/2.5/weather?' + 
        'lat=35.68'   + 
        '&lon=139.77' + 
        '&YOUR TOKEN');
        
  var response = UrlFetchApp.fetch(url);

  var json=JSON.parse(response.getContentText());

  Logger.log(json["main"]);

}
