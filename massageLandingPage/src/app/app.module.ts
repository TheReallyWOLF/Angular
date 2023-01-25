import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { MassageTypesComponent } from './components/massage-types/massage-types.component';
import { CareerPathComponent } from './components/career-path/career-path.component';
import { VideoPresentationComponent } from './components/video-presentation/video-presentation.component';
import { DetailDescriptionComponent } from './components/detail-description/detail-description.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MassageItemComponent } from './components/massage-types/components/massage-item/massage-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    MassageTypesComponent,
    CareerPathComponent,
    VideoPresentationComponent,
    DetailDescriptionComponent,
    ReviewsComponent,
    CertificatesComponent,
    ContactsComponent,
    MassageItemComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
