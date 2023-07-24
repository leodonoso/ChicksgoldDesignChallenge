import { Component } from '@angular/core';
import { ImageExporterService } from './image-exporter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _imageExporter: ImageExporterService) { }

  sponsorLogos = this._imageExporter.sponsorLogos
  socialLogos = this._imageExporter.socialLogos
}
