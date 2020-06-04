import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { ThrowStmt } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private nativeStorage: NativeStorage, private platform: Platform) { }

  ngOnInit() {
    let key = "Time";
    console.log(this.platform);
    if (this.platform.is('hybrid')) {
      this.nativeStorage.setItem(key, { valor1: "valor1", valor2: "valor2" }).then(
        () => console.log("salvo com sucesso"),
        error => console.log("não foi possivel salvar")
      )
      this.nativeStorage.getItem(key).then(
        data => console.log(data),
        error => console.log("error")
      )
    }
    else {
      localStorage.setItem(key, "Cruzeiro");
      console.log(localStorage.getItem(key))
      // localStorage.getItem();
    }

  }
}