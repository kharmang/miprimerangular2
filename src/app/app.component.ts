import { Component } from '@angular/core';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [PrimerComponenteComponent]
})
export class AppComponent {
  title = 'Hola mundo!!!';
  visible = false;
  decirAdios(){
    this.visible = true;
  }
}
