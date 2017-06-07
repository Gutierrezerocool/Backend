import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public numbers = [];

    constructor(){
    	var limit=101;
    	
        for( var value = 1; value < limit; value++){
            this.numbers.push(this.getNumber(value));
        }
  }

getNumber(value){
	var three = value % 3;
    var five = value % 5;

    while(five === 0 && three === 0)
    	return "Liniano"
    if(five === 0 || three === 0)
        return ["IT"][five]||["Linio"][three]
    	
    return value;
  }
}

