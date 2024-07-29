
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// primeng importation
import { TabMenuModule } from 'primeng/tabmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TreeTableModule } from 'primeng/treetable';
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CorsInterceptor } from './cors.interceptor';
import { TreeModule } from 'primeng/tree';
import { ScrollerModule } from 'primeng/scroller';
import { ReactiveFormsModule } from '@angular/forms';

import { EleveComponent } from './eleve/eleve.component';



@NgModule({
  declarations: [
    AppComponent,
    EleveComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabMenuModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    TableModule,
    FormsModule,
    RippleModule,
    DialogModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    AutoCompleteModule,
    TreeTableModule,
    DropdownModule,
    TreeModule,
    TreeSelectModule,
    ScrollerModule
  ],
  exports: [

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
