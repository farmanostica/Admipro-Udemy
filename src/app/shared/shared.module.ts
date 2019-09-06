import { NgModule } from '@angular/core';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({

declarations: [
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent
 ],
 exports: [
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent
 ]

})
export class SharedModule { }
