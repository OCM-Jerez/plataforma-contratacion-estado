import { Component, OnInit } from '@angular/core';
import { GetScreenSizeService } from '../../services/get-screen-size.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
screenSize!: string
w!: number;
anio: number = new Date().getFullYear();

  constructor(public getScreenSizeService: GetScreenSizeService) {}

  ngOnInit() {
    this.w = window.innerWidth;
    this.screenSize = this.getScreenSizeService.getIsMobileResolution();
    window.addEventListener('orientationchange', function() {
       window.location.reload();
    }, false);
  }

}
