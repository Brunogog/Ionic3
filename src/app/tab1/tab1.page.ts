import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { ThrowStmt } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { PessoasService } from '../model/pessoas.service';
import { Pessoas } from '../model/pessoas.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pessoas: Pessoas
  ListaPessoas: Pessoas[]
  aux: any

  constructor(
    private nativeStorage: NativeStorage,
    private platform: Platform,
    private pessoasService: PessoasService
  ) { }

  async ngOnInit() {
    let receber = await this.pessoasService.getJSON();
    console.log(receber)
    this.aux = receber;
    this.ListaPessoas = this.aux;

    let position = await this.pessoasService.findPessoasProximos();
    console.log(position);

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