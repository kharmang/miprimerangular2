import { Component } from '@angular/core';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { ListadoPreguntasComponent } from './listado-preguntas/listado-preguntas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [PrimerComponenteComponent, ListadoPreguntasComponent]
})
export class AppComponent {
  title = 'Hola mundo!!!';
  visible = false;
  decirAdios(){
    this.visible = true;
  }
}
