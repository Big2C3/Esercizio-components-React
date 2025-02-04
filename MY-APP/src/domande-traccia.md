1-Puoi utilizzare il componente Hello più di una volta nel componente App?
Si, possiamo utilizzare più instanze del componente Hello in App.

2-Cosa succede se lo fai?
Ogni istanza viene renderizzata separatamente e indipendentemente.

3-Puoi eseguire il rendering del componente Messaggio direttamente all'interno del componente App?
Si, possiamo renderizzarlo direttamente.

4-Cosa succede se lo fai?
Il messaggio "What a beautiful day!" sarà mostrato separatamente da ""Hello, quindi apparirà come un elemento separato nella struttura dell'HTML.

Cambia la porta predefinita di Vite su 3000 modificando il file vite.config.js.
Eseguito con successo.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 }, //Cambia la porta a 3000
});
