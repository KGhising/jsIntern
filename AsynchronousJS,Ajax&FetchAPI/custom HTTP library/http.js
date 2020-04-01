function HTTP() {
    this.http = new XMLHttpRequest();
}

// make an HTTP GET resquest
HTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this;

    this.http.onlaod = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        }else{
            callback('Error: ' + self.http.status);
        }
    }
    
    this.http.send();
}
// make an HTTP POST resquest

// make an HTTP PUT resquest

// make an HTTP DELETE resquest