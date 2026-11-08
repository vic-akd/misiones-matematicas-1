/* ========== MODELO: temas de 1.º ==========
 E(q, f, a, h, o): q pregunta, f figuras, a respuesta del solucionario, h pista-pregunta.
 o.R: campos para contestar en pantalla (ver logica-respuestas.js). */
const E=(q,f,a,h,o)=>Object.assign({q,f:f||[],k:(o&&o.k)||f||[],a,h,fixed:!(o&&o.model)},o||{});
const n=(v,l,o)=>Object.assign({k:'n',v,l:l||'Respuesta'},o||{});
const fr=(v,l,o)=>Object.assign({k:'f',v,l:l||'Fracción'},o||{});
const sn=(c,l)=>({k:'op',ops:['Sí','No'],c,l:l||'¿Sí o no?'});
const op=(ops,c,l)=>({k:'op',ops,c,l:l||'Elige'});
const ord=(ops,c,l)=>({k:'ord',ops,c,l:l||'Ordena de menor a mayor'});
const SI=b=>b?'Sí':'No',SIc=b=>b?0:1;
const M=x=>N(x),P=x=>'$'+R4(x).toLocaleString('es-MX',{minimumFractionDigits:Number.isInteger(R4(x))?0:2,maximumFractionDigits:2});
const Fs=a=>a.n+'/'+a.d;
const X=(q,a,h,R,f,o)=>E(q,f||[],a,h,Object.assign({R},o||{})); // atajo
const TEMAS=[];

/* 1. CONTAR HASTA 20 (10 fichas) */
(()=>{const T=[7,10,12,9,15,18,11,20,14,16],O=[[3,4],[5,5],[6,2],[4,4],[8,3],[9,1],[2,7],[10,6],[7,7],[5,8]];
const nombres=['Manzanas en el árbol','Lápices en la mesa','Pelotas del patio','Galletas en el plato','Peces en la pecera','Flores del jardín','Botones de la camisa','Dedos de las manos','Patitos en el lago','Carritos de juguete'];
const retos=[
 X('Hay 6 niños y 8 sillas. ¿Alcanzan las sillas para todos?','Sí. Sobran 2 sillas.','Pon una silla para cada niño.',[sn(0,'¿Alcanzan?')]),
 X('Tienes 5 lápices y tu amigo 7. ¿Quién tiene más?','Tu amigo: 7 es más que 5.','Cuenta hasta 7. ¿Pasas por el 5?',[op(['Yo','Mi amigo'],1,'¿Quién?')]),
 X('Hay 9 pelotas y 9 niños. ¿Le toca una pelota a cada niño?','Sí. Hay el mismo número.','Une cada pelota con un niño.',[sn(0,'¿Le toca una?')]),
 X('Leo contó 10 galletas así: 1, 2, 3, 5, 6, 7, 8, 9, 10, 11. ¿Contó bien?','No. Se saltó el 4: son 10 galletas pero dijo hasta 11.','¿Qué número falta entre 3 y 5?',[sn(1,'¿Contó bien?')]),
 X('Hay 12 peces. Compras 1 más. ¿Cuántos peces hay?','13','¿Qué número va después de 12?',[n(13,'Peces')]),
 X('¿Qué número va antes del 18?','17','Cuenta hacia atrás desde el 18.',[n(17)]),
 X('Una camisa tiene 6 botones y otra 4. ¿Cuántos botones más tiene la primera?','2 botones más.','Cuenta del 4 al 6.',[n(2,'Más')]),
 X('Tienes 10 dedos en las manos y 10 en los pies. ¿Cuántos dedos tienes?','20','Cuenta de 10 en 10.',[n(20,'Dedos')]),
 X('Ordena de menor a mayor: 14 · 9 · 11.','9 &lt; 11 &lt; 14','¿Cuál dices primero al contar?',[ord(['14','9','11'],[1,2,0])]),
 X('Hay 16 carritos. Rosa dice que son 61. ¿Tiene razón?','No. Son 16: un diez y seis unos. 61 es mucho más.','¿Cuántas decenas tiene 16?',[sn(1,'¿Tiene razón?')])
];
TEMAS.push({eje:'num',title:'Contar hasta 20',rows:T.map((v,i)=>{const [a,b]=O[i];return{t:nombres[i],e:[
 X('¿Cuántos puntos hay en los marcos de diez?',String(v),'Cada marco lleno tiene 10. Cuenta los que siguen.',[n(v)],[{k:'ten',n:v,f:2}]),
 X('Cuenta las manzanas de los dos grupos. ¿Cuántas hay en total?',a+' y '+b+': '+(a+b)+' manzanas.','Cuenta las del primer grupo y sigue contando.',[n(a+b,'Manzanas')],[{k:'obj',n:[a,b],g:2,per:5}]),
 retos[i]]}})});})();

/* 2. NÚMEROS HASTA 100 (10 fichas) */
(()=>{const B=[[2,3],[4,0],[3,7],[5,5],[6,1],[7,8],[8,4],[9,9],[1,6],[10,0]];
const nombres=['Canicas en bolsas','Palitos de paleta','Estampas del álbum','Cuentas del collar','Semillas','Crayolas','Botellas','Hojas del cuaderno','Galletas','Cien'];
const retos=[
 X('¿Qué número va después de 29?','30','Si cuentas 28, 29, … ¿qué sigue?',[n(30)]),
 X('¿Qué número es mayor: 40 o 38?','40: tiene 4 decenas.','Compara las decenas.',[op(['40','38'],0,'Mayor')]),
 X('Leo escribió «treinta y siete» así: 307. ¿Tiene razón?','No. Treinta y siete es 37: 3 decenas y 7 unidades.','¿Cuántas cifras tiene treinta y siete?',[sn(1,'¿Tiene razón?'),n(37,'Número correcto')]),
 X('Cuenta de 5 en 5: 40, 45, 50, … ¿Qué número sigue?','55','Suma 5.',[n(55)]),
 X('¿Qué número va antes del 60?','59','Cuenta hacia atrás.',[n(59)]),
 X('Ordena de menor a mayor: 78 · 87 · 70.','70 &lt; 78 &lt; 87','Compara las decenas y luego las unidades.',[ord(['78','87','70'],[2,0,1])]),
 X('Tienes 8 bolsas de 10 botellas y 4 sueltas. ¿Tienes más de 80?','Sí. Tienes 84.','¿Cuánto son 8 bolsas de 10?',[sn(0,'¿Más de 80?')]),
 X('Cuenta de 10 en 10: 60, 70, 80, … ¿Qué número sigue?','90','Suma una decena.',[n(90)]),
 X('Mía dice que 16 y 61 son el mismo número. ¿Tiene razón?','No. 16 tiene 1 decena y 61 tiene 6 decenas.','¿Cuántas decenas tiene cada uno?',[sn(1,'¿Tiene razón?')]),
 X('¿Cuántas decenas forman 100?','10 decenas.','Cuenta de 10 en 10 hasta 100.',[n(10,'Decenas')])
];
TEMAS.push({eje:'num',title:'Números hasta 100',rows:B.map(([d,u],i)=>({t:nombres[i],e:[
 X('La barra vale 10 y el cuadrito 1. ¿Qué número es?',String(d*10+u),'Cuenta las barras de 10 en 10 y luego los cuadritos.',[n(d*10+u)],[{k:'blocks',d,u}]),
 X('¿Cuántas decenas y cuántas unidades tiene '+(d*10+u)+'?',d+' decenas y '+u+' unidades.','La cifra de la izquierda dice las decenas.',[n(d,'Decenas'),n(u,'Unidades')]),
 retos[i]]}))});})();

/* 3. SUMAR (10 fichas) */
(()=>{const G=[[3,2],[4,3],[5,4],[2,6],[6,3],[7,2],[5,5],[8,4],[6,6],[9,5]],C=[[4,3],[5,2],[6,3],[7,1],[8,2],[10,5],[12,4],[15,3],[20,6],[30,8]];
const nombres=['Juntar canicas','Pájaros en el cable','Pan dulce','Llegan más niños','Flores para mamá','Carritos','Dulces en la bolsa','Libros del estante','Pelotas en cajas','Suma de decenas'];
const retos=[
 X('Tienes 4 dulces y te dan 3. ¿Tienes más de 6?','Sí. 4 + 3 = 7.','Cuenta 4 y sigue 3 más.',[sn(0,'¿Más de 6?')]),
 X('Hay 5 pájaros. Llegan 4 más. ¿Cuántos hay?','9. 5 + 4 = 9.','Empieza en 5 y cuenta 4 más.',[n(9,'Pájaros')]),
 X('Pepe dice que 6 + 2 = 9. ¿Tiene razón?','No. 6 + 2 = 8.','Empieza en 6 y cuenta 2 más.',[sn(1,'¿Tiene razón?'),n(8,'Resultado correcto')]),
 X('Hay 8 niños en el salón y llegan 2. ¿Hay 10 niños?','Sí. 8 + 2 = 10.','Cuenta 2 más después de 8.',[sn(0,'¿Hay 10?')]),
 X('Ana tiene 5 flores y Luis 5. ¿Cuántas tienen juntos?','10. 5 + 5 = 10.','Junta las dos manos.',[n(10,'Flores')]),
 X('¿Qué es más: 7 + 2 o 5 + 5?','5 + 5 = 10 y 7 + 2 = 9. Es más 5 + 5.','Calcula las dos sumas.',[op(['7 + 2','5 + 5'],1,'¿Cuál?')]),
 X('Una bolsa tiene 10 dulces y otra 6. ¿Cuántos dulces hay?','16. 10 + 6 = 16.','Un diez y seis unos.',[n(16,'Dulces')]),
 X('En un estante hay 12 libros y pones 5 más. ¿Caben si el estante es para 20?','Sí. 12 + 5 = 17, menos que 20.','¿Cuántos libros hay ahora?',[sn(0,'¿Caben?')]),
 X('Necesitas 15 pelotas. Tienes 9. ¿Cuántas te faltan?','6. 9 + 6 = 15.','Cuenta de 9 a 15.',[n(6,'Faltan')]),
 X('Tienes 20 estampas y te regalan 10. ¿Cuántas tienes?','30. 2 decenas + 1 decena = 3 decenas.','Suma las decenas.',[n(30,'Estampas')])
];
TEMAS.push({eje:'ope',title:'Sumar',rows:G.map(([a,b],i)=>{const [x,y]=C[i];return{t:nombres[i],e:[
 X('Hay '+a+' manzanas en un grupo y '+b+' en otro. ¿Cuántas hay en total?',a+' + '+b+' = '+(a+b),'Cuenta todas, una por una.',[n(a+b,'Manzanas')],[{k:'obj',n:[a,b],g:2,per:5}]),
 X('Calcula '+x+' + '+y+'.',String(x+y),'Empieza en el número grande y cuenta los que faltan.',[n(x+y)]),
 retos[i]]}})});})();

/* 4. QUITAR */
(()=>{const Q=[[7,2],[9,4],[10,3],[8,5],[12,6]],C=[[6,2],[9,3],[10,4],[15,5],[18,8]];
const nombres=['Globos que vuelan','Galletas comidas','El error de Rubén','Pajaritos que se van','Canicas perdidas'];
const retos=[
 X('Tenías 8 globos y se te fueron 3. ¿Te quedan más de 4?','Sí. 8 − 3 = 5.','Cuenta hacia atrás 3 desde 8.',[sn(0,'¿Más de 4?')]),
 X('Había 10 galletas y se comieron 6. ¿Cuántas quedan?','4. 10 − 6 = 4.','Tacha 6 de 10.',[n(4,'Quedan')]),
 X('Rubén dice que 9 − 3 = 12. ¿Tiene razón?','No. Rubén sumó. 9 − 3 = 6.','Al quitar, ¿queda más o menos?',[sn(1,'¿Tiene razón?'),n(6,'Resultado correcto')]),
 X('Había 7 pajaritos y se fueron 7. ¿Cuántos quedan?','0. No queda ninguno.','Si se van todos, ¿cuántos quedan?',[n(0,'Quedan')]),
 X('Tenías 15 canicas y perdiste 5. ¿Te quedan 10?','Sí. 15 − 5 = 10.','Quita los 5 unos.',[sn(0,'¿Quedan 10?')])
];
TEMAS.push({eje:'ope',title:'Quitar',rows:Q.map(([t,x],i)=>{const [a,b]=C[i];return{t:nombres[i],e:[
 X('Había '+t+' manzanas y se comieron las tachadas. ¿Cuántas quedan?',t+' − '+x+' = '+(t-x),'Cuenta solo las que no están tachadas.',[n(t-x,'Quedan')],[{k:'obj',n:t,x,per:6}]),
 X('Calcula '+a+' − '+b+'.',String(a-b),'Cuenta hacia atrás desde '+a+'.',[n(a-b)]),
 retos[i]]}})});})();

/* 5. COMPARAR Y COMPLETAR */
(()=>{const P=[[6,4],[3,8],[7,7],[9,5],[4,10]],C=[[5,8],[7,10],[4,9],[12,15],[10,20]];
const nombres=['Peces de Ana y Luis','Lápices para todos','¿Quién tiene más?','El juego de cartas','Completa la decena'];
const retos=[
 X('Ana tiene 6 peces y Luis 4. ¿Cuántos peces más tiene Ana?','2 peces más.','Une un pez de Ana con uno de Luis. ¿Cuántos sobran?',[n(2,'Más')]),
 X('Hay 7 niños y 5 lápices. ¿Cuántos lápices faltan para que cada niño tenga uno?','2 lápices.','Cuenta de 5 a 7.',[n(2,'Faltan')]),
 X('Rosa tiene 9 estampas y Tere 9. ¿Quién tiene más?','Tienen igual.','¿Son el mismo número?',[op(['Rosa','Tere','Igual'],2,'¿Quién?')]),
 X('Ganas si tienes más cartas. Tú tienes 11 y tu primo 13. ¿Ganaste?','No. Tu primo tiene 2 más.','¿Cuál número es mayor?',[sn(1,'¿Ganaste?')]),
 X('Tienes 6 canicas. ¿Cuántas te faltan para tener 10?','4. 6 + 4 = 10.','Cuenta de 6 a 10.',[n(4,'Faltan')])
];
TEMAS.push({eje:'ope',title:'Comparar y completar',rows:P.map(([a,b],i)=>{const [x,y]=C[i];return{t:nombres[i],e:[
 X('¿Qué grupo tiene más manzanas y cuántas más?',a===b?'Tienen igual: '+a+' y '+b+'.':(a>b?'El primero':'El segundo')+', '+Math.abs(a-b)+' más.','Une una manzana de cada grupo. ¿Cuántas sobran?',[op(['El primero','El segundo','Igual'],a>b?0:a<b?1:2,'¿Cuál?'),n(Math.abs(a-b),'¿Cuántas más?')],[{k:'obj',n:[a,b],g:2,per:5}]),
 X('¿Cuánto le falta a '+x+' para llegar a '+y+'?',String(y-x),'Cuenta desde '+x+' hasta '+y+'.',[n(y-x)]),
 retos[i]]}})});})();

/* 6. ANTES, DESPUÉS Y EN MEDIO */
(()=>{const L=[[0,10,6],[10,20,13],[20,30,28],[40,50,45],[90,100,97]],Q=[['¿Qué número va entre 7 y 9?',8],['¿Qué número va antes del 20?',19],['¿Qué número va después del 39?',40],['¿Qué número va entre 54 y 56?',55],['¿Qué número va después del 99?',100]];
const nombres=['La fila del recreo','El elevador','El error de Pepe','La rayuela','Saltos de 2'];
const retos=[
 X('En la fila, Luis es el número 5 y Ana va justo detrás. ¿Qué número es Ana?','6','¿Qué número va después del 5?',[n(6)]),
 X('El elevador está en el piso 8 y baja uno. ¿En qué piso está?','En el 7.','¿Qué número va antes del 8?',[n(7,'Piso')]),
 X('Pepe dice que después del 19 va el 100. ¿Tiene razón?','No. Después del 19 va el 20.','Cuenta: 17, 18, 19, …',[sn(1,'¿Tiene razón?'),n(20,'Va el')]),
 X('En la rayuela saltas del 3 al 4 y luego al 5. ¿Cuántos saltos diste?','2 saltos.','Cuenta los saltos, no los números.',[n(2,'Saltos')]),
 X('Cuenta de 2 en 2: 2, 4, 6, … ¿Qué número sigue?','8','Suma 2.',[n(8)])
];
TEMAS.push({eje:'num',title:'Antes, después y en medio',rows:L.map(([a,b,p],i)=>({t:nombres[i],e:[
 X('¿Qué número marca el punto?',String(p),'Cuenta las rayitas desde '+a+'.',[n(p)],[{k:'nl',min:a,max:b,step:1,every:5,pt:p,w:300,lfs:12}]),
 X(Q[i][0],String(Q[i][1]),'Cuenta en voz alta.',[n(Q[i][1])]),
 retos[i]]}))});})();

/* 7. SUMAS IGUALES */
(()=>{const A=[[2,3],[3,2],[2,5],[4,2],[3,3]],C=[['2 + 2 + 2',6,'3 × 2'],['5 + 5',10,'2 × 5'],['3 + 3 + 3 + 3',12,'4 × 3'],['4 + 4',8,'2 × 4'],['1 + 1 + 1 + 1 + 1',5,'5 × 1']];
const nombres=['Pares de zapatos','Manos y dedos','El error de Mía','Ruedas de autos','Ojos de los gatos'];
const retos=[
 X('Hay 3 pares de zapatos. ¿Cuántos zapatos hay?','6: 2 + 2 + 2.','Cada par tiene 2.',[n(6,'Zapatos')]),
 X('¿Cuántos dedos hay en 2 manos?','10: 5 + 5.','Cada mano tiene 5.',[n(10,'Dedos')]),
 X('Mía dice que 3 + 3 + 3 = 333. ¿Tiene razón?','No. 3 + 3 + 3 = 9.','Cuenta de 3 en 3.',[sn(1,'¿Tiene razón?'),n(9,'Resultado correcto')]),
 X('Un auto tiene 4 ruedas. ¿Cuántas ruedas tienen 2 autos?','8: 4 + 4.','Suma 4 y 4.',[n(8,'Ruedas')]),
 X('Hay 4 gatos. ¿Hay más de 6 ojos?','Sí. 2 + 2 + 2 + 2 = 8.','Cada gato tiene 2 ojos.',[sn(0,'¿Más de 6?')])
];
TEMAS.push({eje:'ope',title:'Sumas iguales',rows:A.map(([r,c],i)=>{const [s2,v,m]=C[i];return{t:nombres[i],e:[
 X('Hay '+r+' filas con '+c+' puntos. ¿Cuántos puntos hay?',Array(r).fill(c).join(' + ')+' = '+r*c+' (también se escribe '+r+' × '+c+').','Suma una fila tras otra.',[n(r*c,'Puntos')],[{k:'arr',r,c,g:24}]),
 X('Calcula '+s2+'.',v+'. Se puede escribir '+m+' = '+v+'.','Cuenta de '+s2.split(' ')[0]+' en '+s2.split(' ')[0]+'.',[n(v)]),
 retos[i]]}})});})();

/* 8. DOBLES Y DIEZ */
(()=>{const T=[[6,4],[7,3],[5,5],[8,2],[9,1]],C=[['3 + 3',6],['4 + 4',8],['5 + 5',10],['6 + 6',12],['10 + 7',17]];
const nombres=['Llena el marco','Dobles de dados','El error de Toño','Diez y algo más','Parejas que hacen 10'];
const retos=[
 X('En un marco de diez hay 7 puntos. ¿Cuántos faltan para llenarlo?','3 puntos.','Cuenta las casillas vacías.',[n(3,'Faltan')]),
 X('Tiras dos dados y salen 4 y 4. ¿Cuántos puntos son?','8. 4 + 4 = 8.','Es un doble.',[n(8,'Puntos')]),
 X('Toño dice que 5 + 5 = 55. ¿Tiene razón?','No. 5 + 5 = 10.','Cuenta los dedos de tus dos manos.',[sn(1,'¿Tiene razón?'),n(10,'Resultado correcto')]),
 X('Tienes 10 canicas y 4 más. ¿Tienes 14?','Sí. 10 + 4 = 14.','Un diez y cuatro unos.',[sn(0,'¿Son 14?')]),
 X('¿Cuál pareja suma 10: 6 y 3, o 6 y 4?','6 y 4.','¿Cuánto le falta a 6 para 10?',[op(['6 y 3','6 y 4'],1,'¿Cuál?')])
];
TEMAS.push({eje:'ope',title:'Dobles y diez',rows:T.map(([a,b],i)=>{const [s2,v]=C[i];return{t:nombres[i],e:[
 X('El marco tiene '+a+' puntos. ¿Cuántos faltan para llegar a 10?',String(b),'Cuenta las casillas vacías.',[n(b,'Faltan')],[{k:'ten',n:a,f:1}]),
 X('Calcula '+s2+'.',String(v),'Usa tus dedos o un marco de diez.',[n(v)]),
 retos[i]]}})});})();

/* 9. FIGURAS */
(()=>{const F=[[['circ','tri','cuadrado'],'¿Cuál es el triángulo?',1],[['cuadrado','circ','rect'],'¿Cuál es el círculo?',1],[['tri','rect','circ'],'¿Cuál es el rectángulo?',1],[['rombo','cuadrado','tri'],'¿Cuál es el cuadrado?',1],[['hex','tri','circ'],'¿Cuál figura tiene 6 lados?',0]];
const Q=[['¿Cuántos lados tiene un triángulo?',3],['¿Cuántas esquinas tiene un cuadrado?',4],['¿Cuántos lados tiene un rectángulo?',4],['¿Cuántas esquinas tiene un triángulo?',3],['¿Cuántos lados tiene un círculo?',0]];
const nombres=['El tangram','Ventanas y puertas','El error de Raúl','Figuras con palitos','La pelota'];
const retos=[
 X('El tangram tiene piezas con 3 lados. ¿Cómo se llaman?','Triángulos.','Cuenta los lados de esas piezas.',[op(['Triángulos','Círculos','Cuadrados'],0,'Se llaman')]),
 X('Una ventana tiene 4 lados iguales y 4 esquinas. ¿Qué figura es?','Un cuadrado.','¿Qué figura tiene 4 lados iguales?',[op(['Cuadrado','Triángulo','Círculo'],0,'Es un…')]),
 X('Raúl dice que el círculo tiene esquinas. ¿Tiene razón?','No. El círculo es redondo y no tiene esquinas.','Pasa tu dedo por el borde.',[sn(1,'¿Tiene razón?')]),
 X('Tienes 6 palitos. ¿Cuántos triángulos separados puedes hacer?','2 triángulos.','Un triángulo usa 3 palitos.',[n(2,'Triángulos')]),
 X('Una pelota vista de frente, ¿a qué figura se parece?','A un círculo.','¿Tiene esquinas?',[op(['Círculo','Cuadrado','Triángulo'],0,'Se parece a un…')])
];
TEMAS.push({eje:'geo',title:'Figuras',rows:F.map(([it,q,c],i)=>({t:nombres[i],e:[
 X(q,'ABC'[c]+'.','Mira la forma y cuenta los lados.',[op(['A','B','C'],c,'Figura')],[{k:'shp',items:it}]),
 X(Q[i][0],String(Q[i][1]),'Dibuja la figura y cuenta.',[n(Q[i][1])]),
 retos[i]]}))});})();

/* 10. CUERPOS: PLANOS Y CURVOS */
(()=>{const S=[['cube','¿Las caras del cubo son planas o curvas?',['Planas','Curvas'],0],['prismRect','¿Cuántas caras tiene la caja?',null,6],['pyrSq','¿La pirámide tiene caras planas o curvas?',['Planas','Curvas'],0],['cube','¿Cuántas caras tiene el dado?',null,6],['prismTri','¿Este cuerpo puede rodar?',['Sí','No'],1]];
const Q=[['¿Qué objeto tiene una parte curva?',['Una pelota','Un dado','Una caja'],0],['¿Qué objeto es como una caja?',['Un libro','Una pelota','Una lata'],0],['¿Qué rueda mejor?',['Una lata','Un libro','Un dado'],0],['¿Qué objeto tiene líneas rectas?',['Una mesa','Una naranja','Una pelota'],0],['¿Qué cuerpo tiene forma de pelota?',['Esfera','Cubo','Pirámide'],0]];
const nombres=['Torres de bloques','Cajas de regalo','El error de Lucy','Dados y pelotas','¿Rueda o no?'];
const retos=[
 X('¿Puedes hacer una torre poniendo una pelota sobre otra?','No. Las pelotas son curvas y se resbalan.','¿Las pelotas tienen caras planas?',[sn(1,'¿Se puede?')]),
 X('Una caja tiene 6 caras. Ya forraste 4. ¿Cuántas faltan?','2 caras.','Cuenta de 4 a 6.',[n(2,'Faltan')]),
 X('Lucy dice que un dado rueda como una pelota. ¿Tiene razón?','No. El dado tiene caras planas y esquinas; da tumbos.','¿El dado tiene partes curvas?',[sn(1,'¿Tiene razón?')]),
 X('¿Qué tiene más caras planas: un dado o una pelota?','El dado: tiene 6; la pelota no tiene ninguna.','Cuenta las caras planas.',[op(['El dado','La pelota'],0,'¿Cuál?')]),
 X('Una lata acostada, ¿rueda?','Sí. Tiene una parte curva.','¿Qué parte toca el piso?',[sn(0,'¿Rueda?')])
];
TEMAS.push({eje:'geo',title:'Cuerpos: planos y curvos',rows:S.map(([t2,q,ops,c],i)=>{const [q2,o2,c2]=Q[i];return{t:nombres[i],e:[
 X(q,ops?ops[c]+'.':String(c),'Mira bien el dibujo; las líneas punteadas son las caras de atrás.',[ops?op(ops,c,'Respuesta'):n(c)],[{k:'solid',t:t2}]),
 X(q2,o2[c2]+'.','Piensa en objetos de tu casa.',[op(o2,c2,'Respuesta')]),
 retos[i]]}})});})();

/* 11. MÁS LARGO, MÁS CORTO */
(()=>{const T=[[5,3],[4,7],[6,6],[8,2],[3,9]];
const nombres=['Listones','Gusanitos','El error de Paco','Lápices','Serpientes'];
const retos=[
 X('Un listón mide 5 cuadritos y otro 3. ¿Cuántos cuadritos mide más el primero?','2 cuadritos más.','Resta: 5 − 3.',[n(2,'Más')]),
 X('Un gusanito mide 4 clips y otro 7 clips. ¿Cuál es más largo?','El de 7 clips.','¿Qué número es mayor?',[op(['El de 4','El de 7'],1,'¿Cuál?')]),
 X('Paco midió una mesa con su mano: 6 manos. Su papá la midió: 4 manos. Paco dice que la mesa cambió. ¿Tiene razón?','No. La mesa es igual; la mano del papá es más grande.','¿De quién es la mano más grande?',[sn(1,'¿Tiene razón?')]),
 X('Un lápiz mide 8 cuadritos. Lo cortas y le quitas 2. ¿Cuánto mide ahora?','6 cuadritos.','8 − 2.',[n(6,'Cuadritos')]),
 X('Ordena las serpientes de la más corta a la más larga: 9, 3 y 6 cuadritos.','3 &lt; 6 &lt; 9','¿Cuál número es más chico?',[ord(['9','3','6'],[1,2,0])])
];
TEMAS.push({eje:'med',title:'Más largo, más corto',rows:T.map(([a,b],i)=>({t:nombres[i],e:[
 X('Mide cada tira contando cuadritos. ¿Cuál es más larga?',a===b?'Miden igual: '+a+' y '+b+'.':(a>b?'La de arriba':'La de abajo')+': '+Math.max(a,b)+' contra '+Math.min(a,b)+'.','Cuenta los cuadritos de cada tira.',[op(['La de arriba','La de abajo','Igual'],a>b?0:a<b?1:2,'¿Cuál?')],[{k:'poly',gw:10,gh:4,c:20,shapes:[{pts:[[0,0.5],[a,0.5],[a,1.5],[0,1.5]]},{pts:[[0,2.5],[b,2.5],[b,3.5],[0,3.5]],p:'pHatch'}]}]),
 X('¿Cuántos cuadritos mide la tira de abajo?',String(b),'Cuenta uno por uno.',[n(b,'Cuadritos')]),
 retos[i]]}))});})();

/* 12. PESADO Y LIGERO */
(()=>{const F=[[['Sandía'],['Uva'],1,0],[['Pluma'],['Libro'],-1,1],[['Piedra'],['Hoja'],1,0],[['Lápiz'],['Mochila'],-1,1],[['Caja roja'],['Caja azul'],0,2]];
const Q=[['¿Qué pesa más: un elefante o un ratón?',['El elefante','El ratón'],0],['¿Qué pesa menos: una pluma o una piedra?',['La pluma','La piedra'],0],['¿Qué es más pesado: una mochila llena o una vacía?',['La llena','La vacía'],0],['¿Qué pesa más: un vaso con agua o un vaso vacío?',['Con agua','Vacío'],0],['¿Qué pesa más: tú o tu perrito?',['Yo','Mi perrito'],0]];
const nombres=['La balanza del mercado','Plumas y libros','El error de Eva','La mochila','Cajas iguales'];
const retos=[
 X('Pones un melón de un lado de la balanza y 3 limones del otro. Baja el lado del melón. ¿Qué pesa más?','El melón.','El lado que baja pesa más.',[op(['El melón','Los 3 limones'],0,'Pesa más')]),
 X('Pones 2 libros de un lado y 1 libro igual del otro. ¿Qué lado baja?','El de 2 libros.','¿Dónde hay más peso?',[op(['El de 2 libros','El de 1 libro'],0,'Baja')]),
 X('Eva dice que un globo grande pesa más que una canica porque es más grande. ¿Tiene razón?','No. El globo tiene aire y pesa muy poco.','Sopesa los dos en tus manos.',[sn(1,'¿Tiene razón?')]),
 X('Tu mochila tiene 3 libros. Sacas 1. ¿Pesa más o menos?','Menos.','¿Qué pasa si quitas algo?',[op(['Más','Menos'],1,'Pesa…')]),
 X('Dos cajas iguales están en la balanza y quedan parejas. ¿Pesan igual?','Sí. Si la balanza queda pareja, pesan igual.','¿Algún lado bajó?',[sn(0,'¿Pesan igual?')])
];
TEMAS.push({eje:'med',title:'Pesado y ligero',rows:F.map(([iz,de,tl,c],i)=>{const [q2,o2,c2]=Q[i];return{t:nombres[i],e:[
 X('Mira la balanza. ¿Qué pesa más?',['El de la izquierda ('+iz[0]+')','El de la derecha ('+de[0]+')','Pesan igual'][c]+'.','El lado que baja pesa más.',[op([iz[0],de[0],'Igual'],c,'Pesa más')],[{k:'bal',izq:iz,der:de,tilt:tl}]),
 X(q2,o2[c2]+'.','Imagina que los cargas.',[op(o2,c2,'Respuesta')]),
 retos[i]]}})});})();

/* 13. LOS DÍAS DE LA SEMANA */
(()=>{const CA=[[{mes:'Marzo',dias:31,ini:0,mark:[5]},'¿Qué día de la semana es el 5?',['Jueves','Viernes','Sábado'],1],[{mes:'Abril',dias:30,ini:2,mark:[10]},'¿Qué día de la semana es el 10?',['Jueves','Viernes','Sábado'],1],[{mes:'Junio',dias:30,ini:1,mark:[1]},'¿Qué día de la semana es el 1?',['Lunes','Martes','Miércoles'],1],[{mes:'Agosto',dias:31,ini:5,mark:[7]},'¿Qué día de la semana es el 7?',['Jueves','Viernes','Sábado'],1],[{mes:'Enero',dias:31,ini:3,mark:[20]},'¿Qué día de la semana es el 20?',['Lunes','Martes','Miércoles'],1]];
const Q=[['¿Cuántos días tiene una semana?',null,7],['¿Qué día va después del lunes?',['Martes','Domingo','Jueves'],0],['¿Qué día va antes del viernes?',['Jueves','Sábado','Lunes'],0],['¿Qué días no hay escuela?',['Sábado y domingo','Lunes y martes','Jueves y viernes'],0],['¿Qué día va después del domingo?',['Lunes','Sábado','Viernes'],0]];
const nombres=['Mi cumpleaños','La fiesta','Ayer y mañana','Fin de semana','¿Cuántos días faltan?'];
const retos=[
 X('Hoy es martes. ¿Qué día fue ayer?','Lunes.','¿Qué día va antes del martes?',[op(['Lunes','Miércoles','Domingo'],0,'Ayer fue')]),
 X('Hoy es jueves. La fiesta es mañana. ¿Qué día es la fiesta?','Viernes.','¿Qué día sigue después del jueves?',[op(['Miércoles','Viernes','Sábado'],1,'Es el')]),
 X('Hoy es lunes. ¿Qué día será pasado mañana?','Miércoles.','Mañana es martes, ¿y después?',[op(['Martes','Miércoles','Jueves'],1,'Será')]),
 X('Hoy es viernes. ¿Cuántos días faltan para el domingo?','2 días: sábado y domingo.','Cuenta los días que siguen.',[n(2,'Días')]),
 X('Faltan 7 días para tu cumpleaños. ¿Es una semana?','Sí. Una semana tiene 7 días.','¿Cuántos días tiene una semana?',[sn(0,'¿Es una semana?')])
];
TEMAS.push({eje:'med',title:'Los días de la semana',rows:CA.map(([cal,q,ops,c],i)=>{const [q2,o2,c2]=Q[i];return{t:nombres[i],e:[
 X(q,ops[c]+'.','Busca la letra de arriba: L lunes, M martes, M miércoles, J jueves, V viernes, S sábado, D domingo.',[op(ops,c,'Día')],[Object.assign({k:'cal'},cal)]),
 X(q2,o2?o2[c2]+'.':String(c2),'Di los días de la semana en orden.',[o2?op(o2,c2,'Respuesta'):n(c2)]),
 retos[i]]}})});})();

/* 14. LA HORA */
(()=>{const C=[[1,0],[4,0],[7,0],[9,0],[12,0]];
const Q=[['¿Qué haces primero: desayunar o cenar?',['Desayunar','Cenar'],0],['¿Qué va antes: el día o la noche de hoy?',['El día','La noche'],0],['¿Cuándo duermes: de día o de noche?',['De día','De noche'],1],['¿Qué va después de bañarte en la mañana?',['Vestirte','Despertar'],0],['¿Qué día va después de hoy?',['Mañana','Ayer'],0]];
const nombres=['Hora de comer','Salida de la escuela','El error de Beto','Hora de dormir','Mediodía'];
const retos=[
 X('Comes a las 2:00. Ahora es la 1:00. ¿Falta 1 hora?','Sí. De 1 a 2 hay una hora.','Cuenta las horas en el reloj.',[sn(0,'¿Falta 1 hora?')]),
 X('Sales de la escuela a las 12:00 y llegas a casa a la 1:00. ¿Cuánto tardas?','1 hora.','Cuenta de 12 a 1.',[n(1,'Horas')]),
 X('Beto dice que a las 3:00 la manecilla corta apunta al 12. ¿Tiene razón?','No. La corta apunta al 3 y la larga al 12.','¿Qué marca la manecilla corta?',[sn(1,'¿Tiene razón?')]),
 X('Te dormiste a las 8:00 y despertaste a las 7:00. ¿Dormiste más de 10 horas?','Sí. Dormiste 11 horas.','Cuenta las horas de 8 a 7.',[sn(0,'¿Más de 10 horas?')]),
 X('Son las 11:00. ¿Qué hora será en 1 hora?','Las 12:00.','¿Qué número sigue del 11?',[n(12,'Hora')])
];
TEMAS.push({eje:'med',title:'La hora',rows:C.map(([h,m],i)=>{const [q2,o2,c2]=Q[i];return{t:nombres[i],e:[
 X('¿Qué hora marca el reloj?',h+':00 (en punto).','Mira a qué número apunta la manecilla corta.',[n(h,'Hora')],[{k:'clock',h,m}]),
 X(q2,o2[c2]+'.','Piensa en lo que haces cada día.',[op(o2,c2,'Respuesta')]),
 retos[i]]}})});})();

/* 15. PICTOGRAMAS Y TABLAS */
TEMAS.push({eje:'dat',title:'Pictogramas y tablas',rows:[
 {t:'Frutas favoritas',e:[
  X('Cada estrella es un niño. ¿Cuántos niños eligieron mango?','5','Cuenta las estrellas del mango.',[n(5)],[{k:'pict',cats:['Mango','Uva','Pera'],vals:[5,3,2],per:1}]),
  X('¿Cuántos niños eligieron uva o pera?','5. 3 + 2 = 5.','Suma los dos.',[n(5)]),
  X('¿Hay tantos niños de mango como de uva y pera juntos?','Sí. 5 y 5.','Compara.',[sn(0,'¿Igual?')])]},
 {t:'Mascotas',e:[
  X('Cada estrella es una mascota. ¿Cuántos perros hay?','4','Cuenta las estrellas del perro.',[n(4)],[{k:'pict',cats:['Perro','Gato','Pez'],vals:[4,6,1],per:1}]),
  X('¿Cuántas mascotas hay en total?','11. 4 + 6 + 1 = 11.','Cuenta todas las estrellas.',[n(11)]),
  X('¿Qué mascota hay más?','Gato.','Busca la fila más larga.',[op(['Perro','Gato','Pez'],1,'¿Cuál?')])]},
 {t:'Colores',e:[
  X('Según la tabla, ¿cuántos eligieron rojo?','6','Busca el renglón del rojo.',[n(6)],[{k:'table',head:['Color','Niños'],rows:[['Rojo',6],['Azul',4],['Verde',2]]}]),
  X('¿Cuántos más eligieron rojo que azul?','2. 6 − 4 = 2.','Resta.',[n(2)]),
  X('¿Cuántos niños votaron?','12. 6 + 4 + 2 = 12.','Suma todo.',[n(12)])]},
 {t:'Juguetes',e:[
  X('Cada estrella es un juguete. ¿Cuántas pelotas hay?','3','Cuenta las estrellas de pelotas.',[n(3)],[{k:'pict',cats:['Pelota','Muñeca','Carro'],vals:[3,5,4],per:1}]),
  X('¿Cuántos juguetes hay en total?','12. 3 + 5 + 4 = 12.','Cuenta todas las estrellas.',[n(12)]),
  X('¿De qué juguete hay menos?','Pelota.','Busca la fila más corta.',[op(['Pelota','Muñeca','Carro'],0,'¿Cuál?')])]},
 {t:'El clima',e:[
  X('Según la tabla, ¿cuántos días hubo sol?','5','Busca la fila del sol.',[n(5)],[{k:'table',head:['Clima','Días'],rows:[['Sol',5],['Lluvia',2]]}]),
  X('¿Cuántos días hay en la tabla?','7: una semana.','Suma los días.',[n(7)]),
  X('¿Hubo más días de sol o de lluvia?','De sol.','Compara 5 y 2.',[op(['Sol','Lluvia'],0,'Más días de')])]}
]});
