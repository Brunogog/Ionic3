import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PessoasService } from '../model/pessoas.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  providers: [NativeStorage, Geolocation, PessoasService]
})
export class Tab1PageModule { }