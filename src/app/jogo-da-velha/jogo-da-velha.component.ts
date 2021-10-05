import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDavelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDavelhaService.inicializar();

  }
  get showInicio() : boolean {
    return this.jogoDavelhaService.showInicio;
  }

  get showTabuleiro() : boolean {
    return this.jogoDavelhaService.showTabuleiro;
  }
  
  get showFinal() : boolean {
    return this.jogoDavelhaService.showFinal;
  }
  get jogador():number{
    return this.jogoDavelhaService.jogador;
  }

  iniciarJogo(): void{
    this.jogoDavelhaService.iniciarJogo();

  }

  jogar(posX:number, posY:number):void{
    this.jogoDavelhaService.jogar(posX, posY);
  }

  exibirX(posX:number, posY:number):boolean{
    return this.jogoDavelhaService.exibirX(posX, posY);
  }
  exibirO(posX:number, posY:number):boolean{
    return this.jogoDavelhaService.exibirO(posX, posY);
  }
  exibirVitoria(posX:number, posY:number):boolean{
    return this.jogoDavelhaService.exibirVitoria(posX, posY);
  }

  novoJogo(): void {
    this.jogoDavelhaService.novoJogo();
  }
}
