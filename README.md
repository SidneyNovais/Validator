# Validator
Simples validador de dados.


Realiza a validação de dados:

# Inicialização

```javascript

 let validator = new Validator();
     validator.setValues([
      {name: "email", value: "exemplo.com" , email: true }
     ]);
     
     console.log(validator.check()); //false

```

# Método setValues()

Método recebe um array de objetos javascript onde é específicado um nome, value e regra para checagem.

O atributo email: true , significando que deseja verificar se o valor especificado é um email.

Exemplo:

```javascript
    validator.setValues([
      {name: "Email", value: "exemplo@exemplo.com, email: true, required: true},
      {name: "Nome", value: "John", required: true, min: 7}
    ])
  
```

# Método check()

O método check retorna um booleano se todos os valores passados estão válidos. Esse método retorna false
assim que o primeiro valor é inválido, ignorando os demais valores passados.

```javascript
    validator.setValues([
      {name: "Email", value: "exemplo@exemplo.com, email: true, required: true},
      {name: "Nome", value: "John", required: true, min: 7}
    ]);
    
    validator.check(); //retorna false pois o nome "John" tem 4 caracteres, o mínimo é 7 caracteres
    
  
```

