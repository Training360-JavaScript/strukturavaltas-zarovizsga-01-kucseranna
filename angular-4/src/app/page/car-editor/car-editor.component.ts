import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  car$: Observable<Car> = this.activatedRoute.params.pipe(
    switchMap( params => this.carService.get(params['id']))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onUpdate(car: Car): void {
    this.carService.update(car).subscribe(
      car => this.router.navigate(['/', 'car']),
    );
  }
}
