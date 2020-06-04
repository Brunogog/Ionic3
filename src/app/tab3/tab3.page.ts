import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        console.log(resp);
      }).catch((error) =>
        console.log("Error")
      )
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) =>
      console.log(data)
    )
  }
}