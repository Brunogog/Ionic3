import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
   providedIn: 'root'
})
export class PessoasService {

   ListaJson: any;

   constructor(
      private http: HttpClient,
      private geolocation: Geolocation
   ) { }

   async getJSON() {
      let res = await this.http.get("assets/pessoas.json").toPromise()
      this.ListaJson = res;
      console.log(this.ListaJson);
      return res;
   }

   async findPessoasProximos() {
      this.geolocation.getCurrentPosition().then(
         (resp) => {
            console.log(resp)
            this.ListaJson.forEach(element => {
               // element.latitude 
            });
            return resp
         }).catch((error) =>
            console.log("Error")
         )
      // let watch = this.geolocation.watchPosition();
      // watch.subscribe((data) =>
      //    console.log(data)
      // )
   }
}