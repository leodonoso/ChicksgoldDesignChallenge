import { Component } from '@angular/core';
import { ImageExporterService } from '../image-exporter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _imageExproter: ImageExporterService) {}

  homePages = this._imageExproter.homePages;
  homeProps = this._imageExproter.homeProps;
}
