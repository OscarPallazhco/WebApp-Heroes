import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      const nombreHeroe = params.nombreHeroe;
      this.heroe = _heroesService.getHeroeByName(nombreHeroe);
      console.log(this.heroe);
    });
  }

  public getHeroe() {
    return this.heroe;
  }

  public isMarvel() { return this.heroe.casa == "Marvel" }

  public isDc() { return this.heroe.casa == "DC" }

  ngOnInit() {
  }

}
