import { Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: 'URL_IMAGEM', useValue: environment.UrlImagem }]
})
export class AppComponent {
  title = 'angular-docker-env';
  constructor(@Inject('URL_IMAGEM') public urlImagem: string) {}
}
