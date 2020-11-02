import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  private resultados:Heroe[];

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

    this._activatedRoute.params.subscribe(params =>{
      let termino = params["termino"];
      console.log("termino: ",termino);
      this.resultados = _heroesService.buscarHeroes(termino);
    });
  
  }

  getResultados(){
    return this.resultados;
  }

  ngOnInit() {
  }

}
