# design_pattern_sprint_1

Explicació del patró de disseny Observer. Sprint 1.

~Patró de Disseny Observador (Observer Pattern)

El patró de disseny Observador defineix el mecanisme o relació entre un subjecte i un conjunt d'observadors. El subjecte envia notificacions als observadors quan es dona un canvi o una actualització, però aquests no depenen de la implementació interna del subjecte, es registren amb ell però no necessiten conèixer la seva lògica interna. Aquesta independència permet canviar o afegir nous observadors sense modificar el codi del subjecte.
La connexió que es dona és flexible ja que el canvi en un component no afecta fortament l'altre. Això proporciona diversos beneficis, com ara la facilitat de manteniment, la reutilització de codi i la flexibilitat del sistema.
ja que els observadors no necessiten conèixer del subjecte.

~Components

- Subjecte: l'objecte observable. Disposa d'un llistat dels seus observadors i proporciona mètodes per afegir, eliminar i notificar observadors.
- Observador: defineix una interfície amb un mètode d'actualització per a tots els objectes que han de ser notificats dels canvis d'estat del subjecte.
- Observadors concrets: implementen la interfície d'observador i s'afegeixen al subjecte. Reben les notificacions quan hi ha canvis d'estat en el subjecte.

~Avantatges

Desacoblament: els subjectes i els observadors estan desacoblat, fet que facilita la modificació i l'afegiment de nous observadors sense modificar el subjecte.
Reutilització de codi: els observadors poden ser reutilitzats en altres contextos, ja que estan desacoblats del subjecte.

~Inconvenients

Els observadors són notificats aleatòriament.
