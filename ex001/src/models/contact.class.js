export class Contact {
  name = "";
  sobrenome = "";
  email = "";
  conectado = false;

  constructor(name, sobrenome, email, conectado) {
    this.name = name;
    this.sobrenome = sobrenome;
    this.email = email;
    this.conectado = conectado;
  }
}
