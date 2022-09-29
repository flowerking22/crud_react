import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WhetherService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { Report } from './data';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {

  @ViewChild('openBtn') openBtn: ElementRef;
  ngOnInit() {

    //let modal_var = document.getElementById('ModalExample');
    //let modal_cl = document.getElementsByClassName('modal');
    //modal_var.modal('show');
    // modal_cl[0].addstyle.modal('hide');
    //this.checkWhether("australia");
    this.cites.push(Report);
    //this.checkWhether("chennai");
    //this.checkWhether("washington");
    //this.checkWhether("Los Angeles");
    document.getElementById('modalopen')?.click();
    // this.openBtn.nativeElement.click();
  }

  name = 'Angular ';
  city = '';
  cites: any = [];
  result: any;
  main: any;


  constructor(private WhetherService: WhetherService) {

  }
  onSubmit(f: NgForm): void {
    if (f.form.value.city != '') {
      this.checkWhether(f.form.value.city);
      f.form.reset();
    }
    else {
      alert("Enter a Vaild Place");
    }
  }
  checkWhether(city: string) {
    this.WhetherService.get(city).subscribe((res) => {
      // this.result = JSON.parse(JSON.stringify(res));
      // console.log(res);
      // this.result = res;
      // this.main = res.weather[0];
      // console.log(res);
      this.cites.push(res);


      // get modal
      //let modal_var = document.getElementById('ModalExample');
      //let modal_cl = document.getElementsByClassName('modal');
      // modal_cl[0].addstyle.modal('hide');
      // change state like in hidden modal
      //modal_var.modal('hide');
      //       modal?.classList.remove('show');
      //       modal?.setAttribute('aria-hidden', 'true');
      //       modal?.setAttribute('style', 'display: none');

      // get modal backdrop
      //const modalBackdrops = document.getElementsByClassName('modal-backdrop');

      // remove opened modal backdrop
      //document.body.removeChild(modalBackdrops[0]);
    });
  }
  onDel(index: number) {
    if (this.cites.length > 1) {
      this.cites.splice(index, 1);
    } else {
      alert("UI Need Must One Element");
    }
  }
}