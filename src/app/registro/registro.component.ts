import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../registro.service";
import {ContaModel} from "../contas/conta.model";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  conta: ContaModel = new ContaModel();
  constructor(private registroService: RegistroService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {  
    this.formulario = this.formBuilder.group({
      //null = valor inicial; 
      pNome: [null, 
        [
          Validators.required,
          Validators.minLength(1)
        ]
      ],
      uNome: [null, 
        [
          Validators.required,
          Validators.minLength(1)
        ]
      ],
      cpf: [null, 
              [
                Validators.required,
                Validators.maxLength(11),
                Validators.minLength(11)
              ]
            ],
      email: [null, 
        [
          Validators.required,
          Validators.email
        ]
      ],      
      senha: [null, 
                [
                  Validators.required,
                  Validators.minLength(1)
                ]
              ]
    });
  }


  cadastrar(){
    //console.log(this.formulario.value)
    
    this.registroService.cadastrarUsuario(this.formulario.value).subscribe(
      conta=>{
        this.conta = new ContaModel();
      }, err=> {
        console.log("erro ao cadastrar uma conta")
      }
    )
  }

  get pNome() { return this.formulario.get('pNome'); }

  get uNome() { return this.formulario.get('uNome'); }

  get senha() { return this.formulario.get('senha'); }

  get cpf() { return this.formulario.get('cpf'); }

  get email() { return this.formulario.get('email'); }


}
