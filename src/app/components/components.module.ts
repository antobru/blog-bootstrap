import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent
    ]
  })
  export class ComponentsModule { }