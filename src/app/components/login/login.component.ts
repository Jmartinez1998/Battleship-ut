import { Component, OnInit } from '@angular/core';
import Ws from '@adonisjs/websocket-client'
import { ActivatedRoute, Router } from '@angular/router';
//import Ws from '@adonisjs/websocket-client';

const ws = Ws('ws://192.168.1.179:3333', { path:'adonis-ws' })
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    ws.connect()
    ws.on('open', () => {
      const random = ws.subscribe('test')
      random.on('ready',() => {
        random.on('new:game', (data) => {
          alert('Iniciando partida!')
          this.router.navigate(['/game/dashboard'])
        })
        random.on('new:game2', (data) => {
          alert('Iniciando partida!')
          this.router.navigate(['/game/dashboard'])
        })
        random.on('new:game3', (data) => {
          alert('Iniciando partida!')
          this.router.navigate(['/game/dashboard'])
        })
      })
    })
  }
}
