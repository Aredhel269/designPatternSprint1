// Patró de Disseny Observer en un Joc Multijugador

/* Els jugadors (observadors) es mantenen actualitzats 
sobre els esdeveniments del joc (subjecte). */

//SUBJECTE (joc)

class Joc {

  // llista d'observadors
  observadors: Jugador[] = [];
  
  // Mètodes

    afegirObservador(observador: Jugador): void {
      this.observadors.push(observador);
    }

    eliminarObservador(observador: Jugador): void {
      const index = this.observadors.indexOf(observador);
      if (index !== -1) {
        this.observadors.splice(index, 1);
      }
    }

    notificarCanvi(nouEstat: string): void {
      this.observadors.forEach(observador => {
        observador.actualitzar(nouEstat);
      });
    }
  }

// OBSERVADOR (jugador)

// Mètode per actualitzar la interfície del jugador amb el nou estat del joc
class Jugador {
  constructor(nom: string) {}

    actualitzar(nouEstat: string): void {
      console.log('${this.nom} - Estat del Joc: ${nouEstat}');
      // És cridat pel joc quan hi ha canvis
    }
  }

// ÚS DEL SISTEMA

// Creem una instància del joc
const joc = new Joc();

// Creem els jugadors (observadors) 
const jugador1 = new Jugador('Jugador1');
const jugador2 = new Jugador('Jugador2');

// Afegim els jugadors al joc
joc.afegirObservador(jugador1);
joc.afegirObservador(jugador2);

// Simulem un canvi d'estat al joc i notifiquem a tots els observadors
joc.notificarCanvi('Iniciat');

