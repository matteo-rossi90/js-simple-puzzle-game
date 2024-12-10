Piccolo puzzle sviluppato in HTML, CSS e JavaScript. Il giocatore ha delle tessere disposte in ordine casuale a destra e lo scopo è trascinarle nel lato sinistro per ricostruire l'immagine originale.

Per creare questo mini gioco ho seguito diversi step:
1) ho creato il markup di base in html e css per testarne gli effetti visivi
2) ho scelto un'immagine casuale e l'ho suddivisa in 16 tessere cercando di numerarle in base all'ordine in cui si dispongono nell'immagine scelta
3) ho ragionato sulla logica partendo dalla selezione degli elementi del DOM per poi testare il popolamento dinamico attraverso i cicli
4) nell'ambito dei cicli ho poi contribuito ad aggiungere gli attributi e le funzioni necessarie per abilitare le tessere al drag e al drop (in questo caso specifico ho creato per ogni tessera un evento applicando soprattutto dragstart, dragover e drop)
5) una funzione specifica fa in modo che all'avvio del gioco le tessere siano disposte in ordine casuale

In seguito vorrei implementare alcuni aspetti:
- stabilire dei turni massimi entro cui risolvere il puzzle
- aggiungere nuovi livelli di difficoltà
- aggiungere più immagini da scegliere

L'idea di questo mini gioco nasce dalla volontà di esercitarsi nella logica JavaScript e nell'implementare nuove funzioni
