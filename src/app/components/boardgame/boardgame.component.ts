import { Component, OnInit } from '@angular/core';
import { ChargescriptsService } from './../../chargescripts.service';
import Ws from '@adonisjs/websocket-client'
import { ActivatedRoute, Router } from '@angular/router';
const ws = Ws('ws://192.168.1.179:3333', { path:'adonis-ws' })
@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  constructor(private router: Router, private _CargaScripts:ChargescriptsService) {
    _CargaScripts.carga(["client"])
   }

  ngOnInit(): void {

  }

}
