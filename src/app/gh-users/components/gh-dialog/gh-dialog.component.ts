import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';
import { GhRepositorio } from '../../models/ghRepositorio';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null 
  reposit: GhRepositorio[] | null = null
  

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (usuario) => {
        this.user = usuario

        this.user.created_at = this.pegarData(this.user.created_at)
        this.user.updated_at = this.pegarData(this.user.updated_at)
      }, (e) => console.log('O erro foi: ' + e)
    )
    
    this.ghService.findUserReposit(this.username).subscribe(
      (dados) => {

        this.reposit = dados

        }, (e) => console.log('O erro foi: ' + e)
    )
  }

    pegarData(data: string): string {

      const date = new Date(data);
  
      let datas = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  
      let dia = date.getDate();
      let diaAjustado = dia >= 10 ? dia : `0${dia}`;
      
      let mes = date.getMonth();
      let ano = date.getFullYear();
  
      const dataArray = [diaAjustado, datas[mes], ano]
      let dataFinal = dataArray.join('/')
  
      return dataFinal 

    
      
  }

  }
