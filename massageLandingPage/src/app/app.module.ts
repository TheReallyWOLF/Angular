import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { MassageTypesComponent } from './components/massage-types/massage-types.component';
import { CareerPathComponent } from './components/career-path/career-path.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MassageItemComponent } from './components/massage-types/components/massage-item/massage-item.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { IndicationsMassageComponent } from './components/indications-massage/indications-massage.component';
import { MassageContraindicationsComponent } from './components/massage-contraindications/massage-contraindications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    MassageTypesComponent,
    CareerPathComponent,
    ContactsComponent,
    MassageItemComponent,
    AboutMeComponent,
    EducationComponent,
    IndicationsMassageComponent,
    MassageContraindicationsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
