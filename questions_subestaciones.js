var questionBank = [
    
  {
    "question": "En caso de cortocircuito trifásico las redes con bobina Petersen en su neutro sufren sobretensiones temporales más elevadas que las redes con neutro conectado rígidamente a tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La bobina Petersen se diseña para compensar las corrientes de defecto a tierra en faltas monofásicas, limitando corrientes homopolares[cite: 3108]. Como estamos hablando de falta trifásica no se limita la de cortocircuito ya que no tiene componente homopolar, por lo que serán mayores que en el caso de metro conectado rígidamente a tierra[cite: 3109]."
  },
  {
    "question": "Los seccionadores de puesta a tierra no tienen poder de cierre.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El seccionador de puesta a tierra tiene poder de cierre (p.e. 40 kA cresta), lo que no tiene es poder de corte (P.Corte = 0)[cite: 3127, 3128]."
  },
  {
    "question": "Los interruptores deben tener poder de cierre frente a un cortocircuito.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Todos los aparatos de maniobra excepto el seccionador convencional tienen poder de cierre frente a cortocircuitos[cite: 3142]."
  },
  {
    "question": "El valor máximo de la sobretensión temporal producida por un cortocircuito fase-tierra en la propia red depende de la impedancia de conexión del neutro a tierra del transformador que alimenta a la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Sobretensión temporal es la de cortocircuito[cite: 3143]. Con la configuración de conexión del neutro (rígido, aislado o por resistencia) se define la intensidad de defecto homopolar[cite: 3144, 3153]."
  },
  {
    "question": "Los valores de las tensiones soportadas de frecuencia industrial son de mayor amplitud que los valores de tensiones de tipo rayo para un mismo material de la Gamma I.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los valores de tensiones de tipo rayo son los valores mayores de tensión para todos los materiales[cite: 3154]."
  },
  {
    "question": "Entre los contactos abiertos de un interruptor separados una distancia 's', la tensión de arco de extinción es inferior a la tensión de arco de iniciación.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La tensión de arco de extinción es mayor a la de iniciación ya que esta aumenta hasta de forma progresiva hasta estabilizarse en la de extinción[cite: 3158]."
  },
  {
    "question": "Los transformadores de distribución de 400 kVA pueden tener un índice horario Zyn11.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El Zig-Zag siempre está posicionado en el lado de BT[cite: 3161]. Para 400 kVA correspondería un índice Dyn11 o similar."
  },
  {
    "question": "Los fusibles de expulsión no tienen I3 por debajo de la cual es crítico que se fundan.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los fusibles de expulsión no tienen corriente mínima de ruptura crítica (I3) de ninguna manera, esta propiedad es exclusiva de los fusibles limitadores[cite: 3164, 3167]."
  },
  {
    "question": "El aceite aislante de tipo vegetal utilizado en los transformadores de distribución es un fluido tipo K.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El aceite vegetal natural posee un alto punto de combustión y se clasifica normativamente como un fluido tipo K[cite: 3178]."
  },
  {
    "question": "La corriente nominal de un fusible limitador debe ser igual mayor a la corriente de magnetización que aparece durante la energización del transformador al que protege.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La corriente de magnetización es siempre varias veces la nominal de la red (12 o 14)[cite: 3179]. Este valor transitorio se cruza en la gráfica de tiempo del fusible, dando un calibre nominal menor a ese pico[cite: 3179]."
  },
  {
    "question": "Una de las características nominales de un seccionador es el vapor de pico de corriente admisible de corta duración que puede producir daños térmicos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El valor de pico no produce daños térmicos, produce esfuerzos dinámicos mecánicos[cite: 3184]. Los daños térmicos están relacionados estrictamente con el valor eficaz[cite: 3185]."
  },
  {
    "question": "El fusible limitador de la celda de protección de un centro de transformación (CT) debe fundirse ante un cortocircuito en bornas de baja tensión del transformador de distribución del CT en un tiempo no superior a 2s.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los transformadores no soportan un cortocircuito por más de 2 segundos, por lo que el fusible debe actuar antes[cite: 3185]. Además, el fusible de la celda protege al transformador, no a la línea de BT[cite: 3186]."
  },
  {
    "question": "Todos los transformadores de distribución de cuba elástica deben disponer de dos mirillas para ver el nivel de aceite situadas en caras opuestas del transformador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Si el transformador es de cuba elástica significa que es de llenado integral (hermético), por lo que no requiere disponer de mirillas de nivel de aceite[cite: 3195]."
  },
  {
    "question": "La tensión soportada nominal de un aislador es el valor de tensión para la cual la probabilidad de descarga disruptiva es inferior al 10%.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "De acuerdo con los criterios de aislamiento normativos, se calculan los valores de tensiones soportadas para una probabilidad de descarga inferior al 10%[cite: 3195]."
  },
  {
    "question": "Los aislamientos internos de los transformadores de potencia de alta tensión se diseñan para que soporten las sobretensiones transitorias de tipo maniobra que puedan aparecer en la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Tan solo pueden ser soportadas las sobretensiones temporales[cite: 3195]. Las transitorias pueden alcanzar valores tan elevados que no es posible soportarlas internamente, requiriendo pararrayos externos[cite: 3195]."
  },
  {
    "question": "Si en una red con bobina Petersen se hace más extensa a lo largo de los años (mayor número de kilómetros de línea) los cortocircuitos se extinguirán más fácilmente.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Es al revés, los cortocircuitos serán más difíciles de extinguir debido al incremento de la capacidad de la red[cite: 3195]."
  },
  {
    "question": "La bobina Petersen es especialmente aplicable a redes con cables aislados en los que el fallo a tierra se produzca en el cable.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La bobina busca extinguir arcos eléctricos en el aire (líneas aéreas), no fallos cuando perforan el aislamiento sólido de un cable subterráneo[cite: 3195]."
  },
  {
    "question": "Cuando el valor de la carga conectada al secundario de un transformador de medida de intensidad is superior a la carga de precisión el factor de seguridad se reduce.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "De acuerdo con la expresión matemática normalizada $FS = Z_{precision} / Z_{red}$[cite: 3195]."
  },
  {
    "question": "El factor de seguridad debe ser lo más bajo posible en un transformador de protección.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El transformador de protección tiene un factor límite de precisión, el cual debe ser lo más alto posible[cite: 3195]. El factor de seguridad es exclusivo para los transformadores de medida[cite: 3195]."
  },
  {
    "question": "YNyn0 son transformadores utilizados para limitar la corriente homopolar cuando la potencia de una línea de transporte (p.e. 400 kV o 230 kV) debe transferirse a una de distribución (p.e. 132 kV, 66 kV y 45kV).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El transformador estrella-estrella no limita estas corrientes; se suele utilizar añadiéndole un tercer arrollamiento en triángulo cerrado (+d) para compensarlas[cite: 3195]."
  },
  {
    "question": "Los transformadores de tensión de tipo capacitivo son apropiados instalarlos para medidas precisas de energía.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los transformadores más precisos y estables para facturación comercial de energía son de tecnología inductiva[cite: 3195]."
  },
  {
    "question": "Para el grupo de conexión Dy, la conexión de una carga desequilibrada fase-fase en el lado de la estrella supone un desplazamiento del neutro en el lado de alta tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Si no existe conductor ni punto de neutro físico en el acoplamiento en triángulo (D) del lado de AT, este no puede sufrir ningún desplazamiento geométrico[cite: 3195]."
  },
  {
    "question": "Los transformadores YNd son utilizados en los transformadores de generación, con el arrollamiento de menor tensión conectado al generador y el de mayor tensión a la red de alta tensión con el neutro puesto a tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es la configuración de diseño estándar en centrales de generación: menor tensión en triángulo unida al alternador y mayor tensión en estrella con neutro puesto a tierra para la red de AT[cite: 3195]."
  },
  {
    "question": "Los transformadores DNy se utilizan para alimentar una red con el neutro aislado a partir de una red con el neutro puesto a tierra, como es el caso de la transformación entre una red de alta tensión y una de media tensión (por ejemplo 132 kV/15kV).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "No existen los transformadores denominados como DN debido a que el triángulo no posee neutro[cite: 3195]. La afirmación sería correcta si se usaran transformadores YNd[cite: 3195]."
  },
  {
    "question": "El reglamento europeo 548/2014, que regula las pérdidas y rendimientos de transformadores de potencia ≥1kVA, excluye de su aplicación a los transformadores de distribución de tipo poste.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El reglamento de ecodiseño de la UE no los excluye de la normativa, únicamente les asigna condicionantes de pérdidas menos restrictivos[cite: 3195]. Los que sí están excluidos son los de emergencia[cite: 3195]."
  },
  {
    "question": "Un transformador de medida de corriente no puede saturarse siempre que la impedancia de su secundario es elevada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Al contrario, un transformador de intensidad entra en saturación magnética precisamente si la impedancia conectada en su lazo secundario es grande[cite: 3195]."
  },
  {
    "question": "El error compuesto para un transformador 5P20 no debe ser superior al 5% cuando la intensidad del primario reaches 20 veces el valor de la intensidad nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Definición exacta bajo norma IEC: el '5' define un 5% de error compuesto límite y el '20' el factor límite de precisión de la intensidad[cite: 3195]."
  },
  {
    "question": "Los transformadores de media de intensidad de clase extendida, por ejemplo clase 0,2S deben medir dentro de los límites de error normalizados para corrientes comprendidas entre el 2% y el 200% de su corriente asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Para transformadores de medida de precisión extendida (letra S), el rango normativo de corriente se sitúa entre el 1% y el 120% de su valor asignado[cite: 3195]."
  },
  {
    "question": "El error compuesto de un transformador de tensión 3P debe garantizar el error de relación de tensión en un 5% dentro del rango de tensiones comprendidas entre el 3% y el valor de su factor de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los límites de tolerancia están invertidos en la afirmación; la norma estipula que debe garantizar un error de relación del 3%[cite: 3195]."
  },
  {
    "question": "En la sobrecarga normal de un transformador de potencia, no se permite que la temperatura en ningún punto del interior del transformador supere 140°C y el aceite no debe sobrepasar 105°C.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Son los valores reglamentarios límites exactos para condiciones operativas normales de cargabilidad térmica[cite: 3195]."
  },
  {
    "question": "Es más fácil para un interruptor cortar la corriente de cortocircuito de una red de corriente continua que de una red de corriente alterna.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "En corriente continua la tensión no pasa por cero de forma natural, por lo que el arco eléctrico es mucho más difícil de extinguir, obligando a fabricar interruptores de CC más complejos y costosos[cite: 3195]."
  },
  {
    "question": "En un sistema trifásico de potencia, la tensión eficaz que aparece entre los contactos del fusible que primero funde alcanzará un valor máximo igual a la tensión más elevada de la red Us",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
   "block": 1,
    "explanation": "La tensión eficaz real en bornes del primer fusible en fundirse se sitúa en 0,87 veces el valor de la tensión de línea, lo cual equivale a 1,5 veces la tensión simple de fase[cite: 3195]."
  },
  {
    "question": "La tensión nominal en el secundario de un transformador de distribución corresponde al valor de la tensión de fase-fase cuando no circula corriente por su secundario.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Cuando no circula intensidad en el secundario es cuando está en vacío, y las tensiones nominales y en vacío coinciden. Es la fase-fase ya que todos estos valores son de línea."
  },
  {
    "question": "La corriente de apertura de un interruptor se expresa en valor eficaz y la corriente de establecimiento o corriente de cierre se expresa en valor de cresta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es la forma normalizada de expresar estas características nominales según el Tema 3.2 de Aparamenta."
  },
  {
    "question": "Los seccionadores de puesta a tierra deben tener poder de cierre.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "De acuerdo con el Tema 3.2 de Aparamenta, el seccionador de puesta a tierra tiene poder de cierre (para cerrar de forma segura contra un cortocircuito), aunque su poder de corte sea cero."
  },
  {
    "question": "Los seccionadores de tipo pantógrafo requieren menos superficie en planta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Su diseño articulado vertical permite reducir el espacio en planta (horizontal), aunque en consecuencia ocupan más espacio en el plano vertical."
  },
  {
    "question": "Los niveles de tensiones soportadas de tipo maniobra son de mayor amplitud que los valores de tensiones de tipo rayo para un mismo material.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La mayor tensión nominal soportada es siempre la de tipo rayo, aunque posteriormente las distancias físicas de aislamiento en aire puedan venir condicionadas por las de maniobra dependiendo del material."
  },
  {
    "question": "El reglamento europeo de ecodiseño 548/2014 aplicable a transformadores de potencia no es aplicable a los transformadores de distribución de tipo poste.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "No aparece en la norma dentro de las aplicaciones especiales a excluir. El reglamento europeo de ecodiseño sí incluye a los transformadores tipo poste, fijándoles límites de pérdidas específicos."
  },
  {
    "question": "Un autoseccionador detecta la corriente de cortocircuito que circula a través de él.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El autoseccionador sí detecta y cuenta los pasos de la corriente de falta, lo que no tiene es capacidad para cortarla en presencia de tensión."
  },
  {
    "question": "Los interruptores automáticos de vacío no son adecuados para sustituir a los interruptores de SF6 de las redes de media tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "En Media Tensión los interruptores automáticos de vacío sustituyen perfectamente a los de SF6. Es en Alta Tensión extrema (U > 36 kV) donde tradicionalmente el vacío encuentra mayores limitaciones dieléctricas."
  },
  {
    "question": "Es preceptivo que los transformadores de distribución bitensión tenga un índice Ydn11.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La configuración Ydn11 no existe mecánicamente porque el devanado en triángulo carece de neutro accesible (la 'n' minúscula solo puede acompañar a la estrella o zig-zag). Si fuese Dyn11 sería verdadero para transformadores de distribución bitensión."
  },
  {
    "question": "Los fusibles limitadores protegen mejor que los fusibles de expulsión frente a sobrecargas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Ninguno de los dos tipos de fusibles está diseñado ni es idóneo para proteger frente a sobrecargas. Los fusibles limitadores protegen mejor que los de expulsión pero frente a corrientes de cortocircuito elevadas."
  },
  {
    "question": "La temperatura de congelación del aceite de tipo vegetal utilizado en los transformadores de distribución es inferior a la del aceite mineral (Nota -25°C es un valor menor a -15°C).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La temperatura de congelación de los aceites vegetales es mayor (es decir, menos negativa, se solidifica antes) que la de los aceites minerales."
  },
  {
    "question": "El valor de la corriente nominal de un fusible limitador debe ser mayor a la corriente de magnetización que aparece durante la energización del transformador que protege.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La corriente de magnetización (inrush) es transitoria y alcanza valores de 12 a 14 veces la nominal. El calibre comercial del fusible se coordina para que su curva de fusión quede por encima del punto de inrush en el tiempo asignado, empleando habitualmente un calibre menor que ese pico."
  },
  {
    "question": "La corriente nominal de un seccionador de puesta a tierra debe ser, al menos, igual a la del interruptor de la línea a la que se conecta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El seccionador de puesta a tierra no conduce corriente en servicio normal, por lo que su corriente nominal puede ser cero. Lo que sí debe ser igual o superior es su capacidad para soportar la corriente de cortocircuito (corriente asignada de corta duración)."
  },
  {
    "question": "El fusible limitador de la celda de protección de un centro de transformación (CT) debe elegirse para que proteja frente a cortocircuitos que se produzca en la línea conectada al lado de baja tensión del transformador, independientemente de la longitud de la línea.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Si el cortocircuito se produce muy lejos en la línea de BT, la impedancia del cable aumenta y la intensidad de cortocircuito disminuye drásticamente. Por tanto, existe una distancia máxima más allá de la cual el fusible de MT no detectará la falta."
  },
  {
    "question": "Los transformadores de distribución de llenado integral deben disponer de dos mirillas de nivel de aceite, una a cada lado del transformador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los transformadores herméticos de llenado integral no tienen depósito de expansión ni necesitan disponer de mirillas para verificar el nivel de aceite."
  },
  {
    "question": "La tensión soportada entre contactos abiertos de un interruptor de vacío es linealmente proporcional a la distancia entre ellos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Como la interrupción se rige por las propiedades de aislamiento en vacío asociadas a la ley de Paschen, la gráfica de tensión soportada no es linealmente proporcional a la distancia, sino que tiende a curvarse y saturar a partir de ciertos milímetros."
  },
  {
    "question": "La impedancia de cortocircuito indicada en la placa de características de un transformador de potencia se refiere al valor que presenta para la toma de regulación de mayor nivel de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La impedancia de cortocircuito nominal indicada en la placa del transformador está referida estrictamente a la toma central de regulación."
  },
  {
    "question": "La viscosidad de los aceites vegetales utilizados en los transformadores de distribución es mayor a la viscosidad de los aceites minerales.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los aceites vegetales (ésteres naturales) tienen una viscosidad cinemática a 40°C de 30-40 mm²/s, mientras que el aceite mineral común presenta un valor menor, entre 8-12 mm²/s."
  },
  {
    "question": "Un transformador de potencia de llenado integral de 1200 kVA puede ser utilizado en un centro de transformación.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Por criterio constructivo estándar y normativo, los transformadores herméticos de llenado integral comunes no superan los 1000 kVA para su uso en centros de transformación."
  },
  {
    "question": "Los transformadores de intensidad que tiene dos arrollamientos secundarios, uno para medida y otro para protección, pueden utilizar el mismo núcleo si se dimensiona para la suma de sus potencias nominales de precisión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Si se desea un secundario para medida (que sature rápido) y otro para protección (que no sature con faltas), es obligatorio bobinarlos sobre núcleos ferromagnéticos independientes separados."
  },
  {
    "question": "YNy son transformadores comúnmente utilizados para cambiar la tensión de la red de transporte (400 kV/230 kV) a la red de distribución (132 kV, 66 kV y 45 kV).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La conexión simple YNy no se puede usar por su pésimo comportamiento en vacío y ante corrientes homopolares. Los transformadores utilizados para este fin son obligatoriamente del tipo YNy+d (con devanado terciario en triángulo)."
  },
  {
    "question": "Los transformadores de tensión de tipo capacitivo utilizan un divisor de tensión capacitivo conectado al secundario del transformador inductivo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El divisor de tensión capacitivo se encuentra en el lado primario de alta tensión para reducirla, conectando después el transformador inductivo de la etapa intermedia en su secundario."
  },
  {
    "question": "Para el grupo de conexión Yd, la conexión de una carga desequilibrada fase-fase en el lado del triángulo supone un desplazamiento del neutro en el lado de alta tensión y una sobretensión en una de las fases del primario.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Según la teoría de transformadores de potencia, para un grupo Yd el desequilibrio fase-fase en el triángulo provoca de forma directa un desplazamiento del punto de neutro real en el lado de alta tensión y una sobretensión unitaria en p.u."
  },
  {
    "question": "Los transformadores YNd son utilizados en los transformadores de generación, con el arrollamiento de menor tensión conectado al generador y el de mayor tensión a la red de alta tensión con el neutro puesto a tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es la configuración típica de las centrales de generación: lado de menor tensión en triángulo (conectado al alternador) y el de AT en estrella con neutro accesible para conectarlo rígidamente a tierra."
  },
  {
    "question": "Los transformadores YNd se utilizan para alimentar una red con el neutro aislado a partir de una red con el neutro puesto a tierra, como es el caso de la transformación entre una red de alta tensión y una de media tensión (por ejemplo 132 kV/15 kV).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Permite alimentar un sistema de distribución de MT aislado (lado del triángulo d) a partir del sistema de transporte de AT referenciado a tierra (lado de la estrella YN)."
  },
  {
    "question": "El reglamento europeo 548/2014, que regula las pérdidas y rendimientos de transformadores de potencia ≥1kVA, excluye de su aplicación a los transformadores de emergencia para socorrer una red que haya perdido el suministro eléctrico.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los transformadores específicamente destinados a operaciones de emergencia temporales ante pérdidas incidentales del suministro se encuentran excluidos de las tasas fijadas por la normativa de ecodiseño de la UE debido a su operación no continua."
  },
  {
    "question": "Un transformador de medida de corriente se satura más fácilmente si el valor de la impedancia en su secundario es demasiado pequeño.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El transformador de corriente trabaja en condiciones ideales si su secundario está cortocircuitado (impedancia nula). Se satura cuanto más GRANDE sea la impedancia secundaria."
  },
  {
    "question": "El error compuesto para un transformador 5P10 is superior al 10% cuando la intensidad del primario sobrepasa 5 veces el valor de la intensidad nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las siglas 5P10 definen un error compuesto máximo del 5% (no del 10%) operando a 10 veces (no a 5 veces) la intensidad nominal asignada."
  },
  {
    "question": "Los transformadores de media de intensidad de clase extendida, por ejemplo, clase 0,2S deben medir dentro de los límites de error normalizados para corrientes comprendidas entre el 1% y el 200% de su corriente asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El rango superior estipulado para la precisión garantizada en los trafos de medida de clase extendida (S) llega hasta el 120% de su corriente asignada, no al 200%."
  },
  {
    "question": "El error compuesto de un transformador de tensión 5P debe garantizar el error de relación de tensión en un 3% dentro del rango de tensiones comprendidas entre el 5% y el valor de su factor de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Debería garantizar un error de tensión del 5% (asociado a una supuesta clase 5). Además, la denominación '5P' no está normalizada ni existe para transformadores de tensión, solo para intensidad."
  },
  {
    "question": "Los bancos de transformadores monofásicos solo se pueden utilizar en las subestaciones cuando sea imposible utilizar unidades trifásicas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los bancos monofásicos se pueden utilizar libremente siempre que se requiera por criterios de transporte o potencias muy elevadas, aunque resulten económicamente más caros que una sola unidad trifásica."
  },
  {
    "question": "El factor de tensión asignado de un transformador de tensión destinado para protección representa la tensión máxima expresa en valor de cresta para el cual el transformador puede funcionar durante un tiempo determinado.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El factor de tensión es un factor multiplicador directo de la tensión nominal de red, pero las magnitudes de este parámetro se expresan en valores eficaces y no en valores de cresta."
  },
  {
    "question": "El factor límite de precisión es un parámetro característico de los transformadores de medida de corriente.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El factor límite de precisión (FLP) es exclusivo de los transformadores de PROTECCIÓN de corriente. El parámetro clave para los transformadores de medida es el factor de seguridad (FS)."
  },
  {
    "question": "La tensión del lado de baja tensión de un transformador de distribución cargado al 50% de su carga nominal con factor de potencia 0,9 inductivo es inferior a su tensión asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al trabajar con una carga parcial de carácter inductivo (corriente retrasada), se produce una caída de tensión moderada en el devanado secundario, haciendo que la tensión real de servicio resulte inferior a su tensión nominal asignada."
  },
  {
    "question": "El coeficiente de defecto a tierra k, depende del valor de la impedancia de secuencia homopolar.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El coeficiente de falta a tierra k se define considerando las impedancias de secuencia directa, inversa y homopolar (Z0) ante defectos monofásicos."
  },
  {
    "question": "Si una distancia libre en aire, d, del material del Grupo C soporta el nivel de aislamiento correspondiente a la tensión de impulsos tipo rayo requerido por el reglamento, entonces también soportará la tensión de tipo maniobra especificada en el reglamento para esa misma distancia libre en aire.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Para los materiales del Grupo C, las mayores distancias físicas de aislamiento suelen venir condicionadas por los ensayos y exigencias de impulsos tipo maniobra, por lo que soportar rayo no lo garantiza automáticamente."
  },
  {
    "question": "Para el material del Grupo C es preceptivo reglamentariamente el ensayo de tensión soportada de frecuencia industrial de corta duración.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El ensayo de tensión soportada a frecuencia industrial no es un requerimiento característico ni obligatorio para los materiales englobados en el Grupo C."
  },
  {
    "question": "Si se cumplen las distancias de aislamiento en el aire establecidas en la ITC-RAT 12 no es preciso realizar el ensayo de comprobación de nivel de aislamiento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "De acuerdo con la ITC-RAT 12, las tablas regulan las distancias mínimas geométricas que obligatoriamente deben respetarse en aquellas instalaciones donde por motivos físicos no se efectúen los ensayos de nivel de aislamiento."
  },
  {
    "question": "Los aisladores de porcelana resisten mejor la contaminación que los de silicona.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los aisladores poliméricos (como la silicona) disponen de una propiedad de hidrofobicidad muy superior, resistiendo los entornos contaminados notablemente mejor que la porcelana tradicional."
  },
  {
    "question": "Para el material del Grupo C, la condición de seccionamiento no precisa ensayo si las distancias entre los dos extremos seccionados de cada fase se incrementan, al menos, un 25% respecto de la distancia mínima en aire entre fases especificada por el reglamento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es una especificación literal de la normativa técnica: un incremento mínimo del 25% exime del ensayo de tipo para comprobar la propiedad de seccionamiento seguro."
  },
  {
    "question": "Para instalaciones por encima de 1000 m la distancia mínima en aire debe aumentarse 1,4% por cada 100 m o fracción por encima de los 1000 m hasta los 3000 m.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Debido a la reducción de la densidad del aire con la altitud, el reglamento exige aplicar este factor de corrección incremental acumulativo del 1,4% por cada 100 metros."
  },
  {
    "question": "La tensión en régimen permanente entre los contactos de un fusible limitador fundido es 1,5 veces el valor de la tensión de fase si los otros dos fusibles no llegaron a fundir.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al fundirse el primer fusible de un sistema trifásico equilibrado, los bornes del cartucho soportan una diferencia de potencial equivalente a 0,87 veces la tensión compuesta de línea, lo que equivale a 1,5 veces la tensión simple de fase."
  },
  {
    "question": "La sobretensión por pérdida de carga en el extremo donde se desconecta la carga es tanto mayor cuanto más larga es la línea que alimenta la carga.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al interrumpirse bruscamente el consumo, el efecto capacitivo transversal de los conductores (Efecto Ferranti) eleva la tensión final de manera proporcional a la longitud de la línea."
  },
  {
    "question": "En general las sobretensiones temporales máximas en una red tienen amplitudes mayores que las sobretensiones transitorias de frente lento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Las sobretensiones transitorias de frente lento (originadas habitualmente por maniobras de la red) alcanzan valores en p.u. sustancialmente más elevados que las sobretensiones temporales ordinarias."
  },
  {
    "question": "Las sobretensiones temporales en una instalación se expresan en valor de cresta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las sobretensiones de carácter temporal se expresan y miden en valores eficaces; son las transitorias (frente rápido o lento) las que se evalúan en valores de cresta."
  },
  {
    "question": "Las sobretensiones de tipo maniobra son de mayor amplitud que las de tipo rayo para un mismo material.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los impulsos asignados tipo rayo (origen atmosférico) constituyen de forma invariable los valores y picos de tensión de diseño más elevados para los aislamientos."
  },
  {
    "question": "La sobrecarga de emergencia de larga duración en un transformador produce envejecimiento del material.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los regímenes de sobrecarga severa provocan altas temperaturas internas que degradan térmicamente las propiedades del papel celulósico y del fluido aislante, reduciendo drásticamente la vida útil esperada de la máquina."
  },
  {
    "question": "El valor de la impedancia de puesta a tierra de los apoyos condiciona la mayor o menor probabilidad de existencia de cebados inversos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Si un rayo impacta en el cable de guarda y la estructura posee una elevada impedancia de tierra, el potencial de la torre metálica se eleva drásticamente provocando un arco de retorno (cebado inverso) hacia los conductores de fase."
  },
  {
    "question": "El punto de combustión del aceite de tipo vegetal utilizado en los transformadores de distribución de tipo K es inferior a 300°C.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los fluidos dieléctricos categorizados normativamente como Clase K deben poseer, por definición reglamentaria de seguridad contra incendios, un punto de combustión superior o igual a los 300°C."
  },
  {
    "question": "Los transformadores de aceite mineral de potencia superior a 1MVA requieren un depósito de expansión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Según la Diapositiva 23 del Tema 4, las unidades aisladas en fluido mineral que superan de forma nominal la potencia de 1 MVA requieren de manera obligatoria un conservador o depósito de expansión."
  },
  {
    "question": "El valor del nivel de aislamiento fase-tierra y fase-fase es el mismo para los materiales del Grupo A y B.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "En los rangos de tensión asignados a las categorías de los Grupos A y B, las rigideces dieléctricas normalizadas requeridas fase-fase coinciden de forma exacta con los niveles fase-tierra."
  },
  {
    "question": "Para los transformadores de aceite mineral el nivel máximo de descargas parciales permitido es más bajo que para los transformadores secos en resina epoxi.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las especificaciones normalizadas internacionales (IEC) aplican criterios de aceptación térmicos y eléctricos más restrictivos a las unidades secas encapsuladas, limitando sus descargas permitidas a umbrales más bajos."
  },
  {
    "question": "Los explosores dispuestos en las bornas de los transformadores de potencia protegen eficazmente al transformador frente a sobretensiones transitorias.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los cuernos descargadores (explosores) solo proporcionan un alivio tosco ante sobretensiones prolongadas; para mitigar frentes transitorios veloces es imprescindible instalar pararrayos de óxidos metálicos."
  },
  {
    "question": "El signo '+d' en un grupo de conexiones indica que el transformador está preparado para compensar las sobretensiones dinámicas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El símbolo '+d' detalla que la máquina incorpora un tercer arrollamiento físico en triángulo cerrado (terciario), destinado de forma prioritaria a disipar y eliminar las corrientes homopolares de desequilibrio."
  },
  {
    "question": "Se recomienda utilizar el índice horario YNd frente al YNy para alimentar una red de distribución desde una red de transporte.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El acoplamiento estrella-estrella simple (YNy) presenta graves flujos asimétricos descompensados y recalentamientos ante cargas homopolares, por lo que operativamente se prefiere recurrir a esquemas con triángulo."
  },
  {
    "question": "Las pérdidas de los transformadores secos están limitadas por el reglamento europeo de ecodiseño.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El Reglamento de Ecodiseño de la Unión Europea (UE 548/2014) regula y acota estrictamente las pérdidas y los rendimientos mínimos tanto de las máquinas sumergidas en líquido como de las de aislamiento seco."
  },
  {
    "question": "La tensión asignada de un fusible debe ser igual o superior a la tensión nominal de la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para garantizar la total extinción del arco eléctrico sin riesgo de reencendido o cebado destructivo tras la fusión, el cartucho debe contar con una tensión asignada de aislamiento igual o superior a la de servicio."
  },
  {
    "question": "El nivel acústico máximo permitido para un transformador de aceite mineral está limitado por el vigente reglamento de instalaciones eléctricas de alta tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El Reglamento de AT exige de forma vinculante el cumplimiento de los márgenes y umbrales de ruido estipulados en las normativas europeas armonizadas UNE-EN correspondientes."
  },
  {
    "question": "La ley de Paschen permite relacionar la tensión disruptiva en un aislamiento gaseoso respecto al producto de la distancia de separación entre electrodos y la presión del gas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Establece analíticamente que la rigidez y el umbral de perforación dieléctrica de un medio gaseoso responde de forma directa como una función del producto combinado p * d."
  },
  {
    "question": "Los interruptores de SF6 están desplazando progresivamente a los interruptores de vacío en las redes de media tensión por debajo de 24 kV.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Al contrario, son los interruptores de tecnología en vacío los que están reemplazando de manera masiva al SF6 en Media Tensión, espoleados por las restricciones medioambientales internacionales contra los gases de efecto invernadero."
  },
  {
    "question": "Los seccionadores de puesta a tierra deben soportar la corriente asignada sin calentamiento por encima del valor admisible.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La corriente asignada continua define la operación del circuito en régimen normal. Al permanecer abierto en servicio, el seccionador de tierra no se ensaya para carga continua; solo debe dimensionarse para resistir corrientes de cortocircuito de corta duración."
  },
  {
    "question": "Los seccionadores de tipo pantógrafo se utilizan en las instalaciones de alta tensión cuando no se pueden utilizar los de cuchillas giratorias por problemas de espacio disponible en planta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Su principal ventaja arquitectónica en parques de intemperie radica en que la desconexión se efectúa mediante una articulación vertical, minimizando drásticamente la ocupación horizontal de suelo en planta."
  },
  {
    "question": "La conexión en triángulo abierto de los arrollamientos de baja de tres transformadores de tensión permite detectar tensiones de secuencia homopolar en el lado de alta tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al sumar vectorialmente los tres desfases, el triángulo abierto anula las componentes directa e inversa, dejando en extremos una tensión residual resultante equivalente a 3V0, idónea para relés de protección de falta a tierra."
  },
  {
    "question": "La ferroresonancia en los transformadores de medida puede evitarse aumentando el codo de saturación de los transformadores de medida.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al elevar el nivel de tensión en el que el material magnético se satura, se reduce sustancialmente el riesgo operativo de que las inductancias entren en la zona no lineal de la reactancia e interactúen con las capacidades del circuito."
  },
  {
    "question": "Los interruptores automáticos de media tensión se comercializan con capacidad de seccionamiento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los únicos aparatos de corte que unifican por homologación y certificación de fábrica la capacidad de interrupción y seccionamiento de seguridad en el mismo equipo son los interruptores automáticos de baja tensión."
  },
  {
    "question": "Los fusibles combinados con los interruptores automáticos son de tipo fusible limitador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "En la aparamenta asociada de MT, los cartuchos fusibles acoplados mecánicamente a los interruptores son de tipo limitador de corriente para extinguir la falta de forma ultrarrápida mucho antes del pico."
  },
  {
    "question": "Los transformadores de distribución con cámara de aire deben disponer de al menos una mirilla para el nivel de aceite con marcas a 0°C a 20°C y a 100°C.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las unidades provistas de cámara de aire bajo tapa requieren marcas fijadas por calibración de dilatación únicamente referenciadas reglamentariamente a los dos extremos térmicos: 0°C y 100°C."
  },
  {
    "question": "El fusible de expulsión evita que la corriente de cortocircuito supere el valor de cresta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El fusible de expulsión requiere y depende del paso natural de la onda senoidal por cero para extinguir el arco en el tubo; el cartucho encargado de cortar la falta antes de alcanzar el pico de cresta es el fusible limitador."
  },
  {
    "question": "El límite de precisión de un transformador de medida debe ser lo mayor posible.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El factor límite de precisión (FLP) pertenece al diseño de trafos de protección. En los aparatos de medida interesa controlar el factor de seguridad (FS) y buscar que sea bajo para blindar los instrumentos."
  },
  {
    "question": "El error compuesto es el valor eficaz del error instantáneo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Definición técnica regulada por la norma internacional IEC 61869-2 para parametrizar la desviación ponderada en transformadores de intensidad destinados a la protección."
  },
  {
    "question": "Cuanto mayor es el factor de seguridad de un transformador de tensión más su codo de saturación disminuye.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Un factor de seguridad alto denota que el trafo satura de forma tardía ante magnitudes de corriente elevadas, desplazando en consecuencia el codo de saturación ferromagnético hacia valores superiores."
  },
  {
    "question": "Los autoseccionadores abren cuando no hay tensión en la red, después de haber detectado dos pasos de corriente de falta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El autoseccionador registra y cuenta los impulsos de sobreintensidad de la falta y aprovecha el tiempo muerto del interruptor automático de cabecera (cuando la línea se halla sin tensión) para abrir mecánicamente sus cuchillas."
  },
  {
    "question": "Los transformadores de media de intensidad deben medir dentro de los límites de error normalizado para corrientes comprendidas entre el 20% y el 120% de su corriente asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "De acuerdo con las directrices de la Diapositiva 7 del Tema 5.1, los transformadores de medida de clase estándar operan dentro de su rango de precisión garantizado entre el 5% y el 120% de su intensidad asignada."
  },
  {
    "question": "La potencia de cortocircuito Scc de una red trifásica viene dada por raíz de tres veces la tensión más elevada de la red multiplicada por la corriente de cortocircuito en el punto de la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La potencia de cortocircuito trifásica inicial Scc se calcula multiplicando la raíz de tres por la tensión nominal de la red (Un), no por la tensión más elevada de la red (Us)."
  },
  {
    "question": "La sobretensión temporal en el lado de media tensión de una red de distribución depende del valor de la resistencia de puesta a tierra del neutro del transformador de distribución del centro de transformación que alimenta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La resistencia de puesta a tierra mencionada pertenece al centro de transformación alimentado aguas abajo de la red, por lo que está situada después del defecto y no aporta ni altera el cálculo del cortocircuito."
  },
  {
    "question": "El valor máximo de la sobretensión temporal de una red viene limitado por el tipo de fusible de expulsión utilizado.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El dispositivo encargado de cortar y acotar físicamente la intensidad pico transitoria y el valor de cresta antes de que la onda alcance su máximo es el fusible de tipo limitador, no el de expulsión."
  },
  {
    "question": "El cebado inverso en una línea aérea es muy probable que se produzca cuando un rayo impacta en el cable de guarda de la línea siempre que la amplitud de la mitad de la corriente de la descarga del rayo multiplicada por la impedancia característica del cable de guarda, teniendo en cuenta las puestas a tierra, sea superior a la tensión soportada frente a rayos de la distancia libre entre fase y tierra de la línea (p.e. de la cadena de aisladores).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al impactar una descarga atmosférica directa en el cable de guarda, la corriente se divide en dos trayectorias hacia los apoyos adyacentes (la mitad de la intensidad). Si el potencial inducido supera la rigidez dieléctrica de la cadena de aisladores, se consolida un arco eléctrico de retorno (cebado inverso) de la estructura hacia la fase."
  },
  {
    "question": "Las líneas aéreas de media tensión no se apantallan con cable de guarda porque la probabilidad de cebados por sobretensiones de tipo rayo son menores que en las líneas de transporte.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Aunque las redes de distribución de media tensión comúnmente prescinden del cable de guarda, no se debe a que la probabilidad de cebado sea intrínsecamente menor, sino a criterios económicos de coste-beneficio y a la efectividad técnica del aislamiento a tensiones bajas."
  },
  {
    "question": "La tensión soportada, Uw, frente a impulsos tipo rayo de una cadena de aisladores expuesta a las condiciones ambientales corresponde al nivel de tensión cuya probabilidad de que se produzca descarga disruptiva no supera el 10%.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "De acuerdo con los criterios estadísticos normalizados para ensayos dieléctricos y la campana de Gauss, la tensión soportada nominal Uw se define fijando un umbral donde el riesgo de descarga disruptiva es igual o inferior al 10%."
  },
  {
    "question": "En una subestación que utiliza material de tensión más elevada de 145 kV las distancias mínimas exigidas por el reglamento para el aislamiento en aire fase-tierra son las mismas que las exigidas para el aislamiento en aire fase-fase.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al operar con una tensión más elevada de 145 kV, el equipamiento entra en la clasificación reglamentaria del Grupo B (entre 36 kV y 245 kV). Para este grupo específico, las distancias de aislamiento fase-fase y fase-tierra tabuladas son exactamente iguales."
  },
  {
    "question": "Según la ITC 12 del reglamento de instalaciones eléctricas de alta tensión la distancia mínima libre en aire fase-tierra de un seccionador de una red 220 kV debe cumplir el valor mínimo establecido en las tablas de la propia ITC 12, independientemente de que haya superado los ensayos de tensión soportada (de impulso tipo rayo y de frecuencia industrial) establecidos en las referidas tablas de la ITC 12.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las tablas de la ITC-RAT 12 imponen las distancias físicas geométricas mínimas con carácter obligatorio únicamente para aquellas subestaciones y equipos donde no se ejecuten explícitamente los ensayos de tipo del nivel de aislamiento correspondientes."
  },
  {
    "question": "La línea de fuga de un aislador de apoyo de porcelana o de vidrio debe ser igual a la distancia libre en aire establecida en las tablas de la ITC 12 del reglamento para la distancia fase-tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La distancia libre se evalúa en línea recta a través del aire. Por el contrario, la línea de fuga mide el contorno de la superficie sólida expuesta del aislador y reglamentariamente debe ser mucho mayor para mitigar corrientes superficiales por polvo y humedad."
  },
  {
    "question": "Es sabido, gracias a la Ley de Paschen, que los gases tienen un valor mínimo de rigidez dieléctrica que es función de la presión para una distancia entre electrodos determinada, por debajo de la cual cuanto menor es la presión mayor es su rigidez dieléctrica.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La Ley de Paschen demuestra que existe un punto crítico mínimo de tensión disruptiva. Al reducir la presión de forma extrema por debajo de este codo, la escasez de moléculas de gas disminuye los choques en avalancha y provoca que aumente la rigidez dieléctrica."
  },
  {
    "question": "Un mismo aparato de maniobra de AT utilizado en una subestación de exterior de Um igual a 145 kV puede tener la función de interruptor automático y seccionador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "En el ámbito de la Alta Tensión, ambas funciones operativas de maniobra se encuentran físicamente disociadas en aparatos independientes por motivos de seguridad; no se comercializa un único componente integrado para ambas tareas."
  },
  {
    "question": "El SF6 es un gas que origina efecto invernadero.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El hexafluoruro de azufre (SF6) está catalogado internacionalmente como un gas de altísimo potencial de calentamiento global (GWP), por lo que contribuye de forma severa al efecto invernadero y está bajo estrictas directivas de reducción."
  },
  {
    "question": "Cuando el SF6 sufre un arco eléctrico de alta energía los gases derivados son tóxicos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Aunque la gran mayoría del gas descompuesto por el arco se recombina de forma natural, una pequeña fracción residual reacciona con la humedad y los metales internos formando subproductos gaseosos como el oxifluoruro de azufre o gas tionilo (SOF2), el cual es altamente tóxico."
  },
  {
    "question": "Los seccionadores de puesta a tierra deben tener poder de cierre.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "A pesar de que el seccionador de puesta a tierra presenta una capacidad de corte totalmente nula, posee por normativa de diseño la obligación de soportar un poder de cierre seguro frente a cortocircuitos previstos para proteger la vida del operario."
  },
  {
    "question": "Un fusible de expulsión puede hacer las veces de seccionador si el aislador soporte que separa los contactos del fusible dispone de un herraje intermedio puesto a tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al bascular y abrir el portafusibles de expulsión, los contactos se separan físicamente en el aire. La incorporación de un blindaje o herraje intermedio metálico conectado a tierra dota al conjunto de una separación física y visible con las garantías de seguridad de un seccionador."
  },
  {
    "question": "El valor de la corriente nominal de un fusible limitador debe ser mayor a la corriente de energización del transformador que protege.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La corriente transitoria de inserción (inrush) alcanza de 12 a 14 veces el valor nominal del trafo. El cartucho fusible se selecciona coordinando que su curva térmica de fusión quede por encima de este punto de inrush en el tiempo, lo que da un calibre nominal menor a dicho pico puro."
  },
  {
    "question": "El fusible de MT protege adecuadamente al transformador de distribución siempre que se funde en un tiempo inferior a 5s en caso de que se produjo un cortocircuito trifásico en las bornas del secundario del transformador al que protege.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los transformadores de distribución tienen una soportabilidad térmica y mecánica máxima ante cortocircuitos severos limitada a un tiempo inferior a 2 segundos; por tanto, un intervalo de fusión de 5 segundos destruiría la máquina."
  },
  {
    "question": "Un fusible limitador protege para cualquier corriente de cortocircuito que se produzca en el lado de baja tensión de un transformador de distribución, independientemente de la longitud de la línea de baja tensión hasta el punto de cortocircuito.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "A mayor longitud del tendido de baja tensión, mayor es la impedancia acumulada del bucle de cable. Esto produce que la intensidad de cortocircuito final caiga a valores atenuados tan bajos que resultan indetectables por el cartucho de media tensión."
  },
  {
    "question": "Un seccionador debe soportar las corrientes de cortocircuito.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Debido a que los seccionadores convencionales carecen de poder de corte y tienen prohibida la maniobra bajo carga o falta, estructuralmente se dimensionan para soportar los severos esfuerzos dinámicos y térmicos de la corriente de cortocircuito a través de sus contactos cerrados."
  },
  {
    "question": "Los transformadores de distribución de llenado integral deben disponer de dos mirillas de nivel de aceite, una a cada lado del transformador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los transformadores de llenado integral corresponden al diseño constructivo hermético sellado (donde la cuba absorbe la dilatación del fluido por elasticidad de sus aletas), por lo que no disponen de depósito de expansión ni precisan mirillas de nivel."
  },
  {
    "question": "Los autoseccionadores son interruptores automáticos con capacidad de seccionamiento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Un autoseccionador es un aparato de maniobra que carece por completo de poder de corte ante corrientes de defecto (solo posee poder de cierre). Su cometido es contabilizar los disparos aguas arriba y abrir mecánicamente solo en ausencia de tensión."
  },
  {
    "question": "Según la norma UNE-EN 60076, los transformadores de distribución no pueden sobrecargarse por encima de su corriente nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las guías de carga contempladas en la normativa UNE-EN facultan regímenes de sobrecarga controlados (tanto de carácter normal como de emergencia transitoria) siempre y cuando no se vulneren los límites de temperatura críticos de los aislamientos."
  },
  {
    "question": "La viscosidad de los aceites vegetales utilizados en los transformadores de distribución es mayor que la de los aceites minerales.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los aceites vegetales (ésteres naturales) exhiben un coeficiente de viscosidad cinemática a 40°C situado entre 30-40 mm²/s, magnitud notablemente superior a la del aceite mineral común, que se fija entre 8-12 mm²/s."
  },
  {
    "question": "Los transformadores de distribución con ventiladores para su refrigeración deben utilizarse en los centros de transformación con dificultad de ventilación.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La incorporación de ventiladores forzados responde al criterio de incrementar temporalmente la potencia asignada de la máquina. Las deficiencias de evacuación calórica propias de la obra civil de un local deben resolverse mediante el dimensionado de las rejillas y chimeneas de ventilación del propio recinto."
  },
  {
    "question": "Un transformador de potencia de llenado integral puede ser utilizado en un centro de transformación de 630 kVA.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El empleo de unidades herméticas de llenado integral es una práctica plenamente admitida y muy extendida en centros de transformación para potencias normalizadas iguales o inferiores a 1000 kVA."
  },
  {
    "question": "Los cuernos descargadores dispuestos en los pasatapas de los transformadores de potencia están prohibidos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los explosores o cuernos descargadores no se encuentran prohibidos por la reglamentación técnica de alta tensión. Aunque su uso se ha minimizado en favor de los pararrayos de óxidos metálicos, se siguen instalando como protección tosca de respaldo."
  },
  {
    "question": "Los transformadores estrella-estrella, con neutro puesto a tierra en ambos lados, deben disponer de un arrollamiento de compensación en triángulo para evitar que las corrientes homopolares se transfieran de baja a alta tensión o viceversa.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La conexión simple YNy genera fuertes asimetrías y calentamientos en el núcleo ante flujos homopolares. Añadir un tercer devanado de compensación acoplado en triángulo cerrado (+d) ofrece un lazo de circulación interna que anula y compensa dichos efectos."
  },
  {
    "question": "El índice horario Yzn11 se utiliza para transformadores de distribución bitensión en el lado de baja tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El arrollamiento en zig-zag (z) se sitúa en baja tensión pero está normativamente acotado a pequeñas unidades de distribución con potencias iguales o inferiores a 160 kVA. Para configuraciones bitensión comunes, el grupo normalizado de referencia es el Dyn11."
  },
  {
    "question": "Es preceptivo que un transformador de distribución con aceite mineral de 1000 kVA tenga un grupo de conexión Ydn11.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Por un lado, la nomenclatura Ydn11 físicamente no existe ya que el triángulo (d) carece de neutro accesible. Por otro lado, para una máquina en aceite de 1000 kVA, la norma impone de manera estricta el grupo de conexión Dyn11."
  },
  {
    "question": "Teniendo en cuenta la red de baja tensión que alimenta, es conveniente que la tensión de cortocircuito de un transformador de distribución sea lo más pequeña posible.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Si la tensión de cortocircuito (ucc) fuese excesivamente pequeña, la impedancia interna de la máquina se reduciría de forma drástica. Esto causaría intensidades de cortocircuito secundarias extremadamente violentas y destructivas para la instalación."
  },
  {
    "question": "El reglamento de instalaciones eléctricas permite utilizar bancos de tres unidades de transformadores monofásicos para redes trifásicas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El reglamento faculta de forma explícita la configuración de bancos trifásicos mediante la asociación de tres máquinas monofásicas independientes, solución muy habitual por flexibilidad de transporte o altas potencias."
  },
  {
    "question": "YNy+d son los transformadores utilizados para cambiar la tensión en la red de transporte (400 kV/230kV), así como para enlazar éstas con las redes de distribución (132 kV, 66kV y 45 kV).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es la especificación técnica textual del diseño de subestaciones: la incorporación del devanado terciario en triángulo cerrado (+d) es imperativa para estabilizar el neutro y enlazar los nodos de transporte con distribución."
  },
  {
    "question": "El reglamento europeo 548/2014, que regula las pérdidas de transformadores de potencia, excluye de su aplicación a los transformadores de distribución de tipo poste instalados en los apoyos de las líneas aéreas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La directiva europea de ecodiseño engloba de forma obligatoria y vinculante a los transformadores de tipo poste, asignándoles unos límites específicos de pérdidas en sus respectivas tablas normativas."
  },
  {
    "question": "Los transformadores de intensidad que tiene dos arrollamientos secundarios, uno para medida y otro para protección, requieren disponer de dos núcleos separados.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para evitar que las elevadas corrientes de cortocircuito destruyan los aparatos de medida (que exigen núcleos que saturen rápido) o distorsionen las lecturas de los relés (que requieren núcleos que no saturen), es técnicamente obligatorio embobinar cada circuito sobre canales ferromagnéticos independientes."
  },
  {
    "question": "Los transformadores de tensión de tipo capacitivo utilizan un divisor de tensión capacitivo en el secundario del transformador inductivo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La topología circuital sitúa la cadena del divisor de condensadores en el circuito primario de alta tensión para reducirla, acoplando el transformador inductivo electromagnético aguas abajo en la etapa intermedia."
  },
  {
    "question": "Los transformadores de medida de intensidad de clase extendida, por ejemplo, clase 0.2S deben medir dentro de los límites de error normalizados para corrientes comprendidas entre el 1% y el 120% de su corriente asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La designación especial 'S' certifica un rango dinámico ampliado de alta precisión, garantizando que el transformador mantiene su clase de tolerancia normalizada desde el 1% hasta el 120% de la corriente nominal asignada."
  },
  {
    "question": "El error compuesto de un transformador de tensión 3P debe garantizar el error de relación de tensión en un 3% dentro del rango de tensiones comprendidas entre el 5% y el valor de su factor de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La norma internacional para transformadores de tensión inductivos asignados a protección (clase 3P) establece un límite máximo admisible del error de relación de tensión del 3% dentro de su rango operativo."
  },
  {
    "question": "Los aceites vegetales utilizados en los transformadores de distribución son fluidos de tipo K.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Debido a sus propiedades de alta resistencia al fuego y a que presentan un punto de combustión superior a los 300°C, los ésteres naturales de base vegetal se clasifican legalmente como fluidos Clase K."
  },
  {
    "question": "El factor de tensión asignado de un transformador de protección representa la tensión máxima de funcionamiento del transformador durante un tiempo determinado.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El factor de tensión asignado define formalmente el múltiplo numérico de la tensión nominal (p.e. 1.5 o 1.9) que el transformador puede soportar en régimen temporal prolongado (en ensayos de 30s o 120s) ante fallos de la red sin deteriorarse."
  },
  {
    "question": "El factor límite de precisión de un transformador de medida de corriente debe ser lo más alto posible.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El factor límite de precisión (FLP) es una propiedad exclusiva de los núcleos destinados a protección. En los núcleos de medida se requiere controlar el parámetro del factor de seguridad (FS) y buscar que este sea bajo."
  },
  {
    "question": "La tensión en el lado de baja tensión de un transformador de distribución cargado al 25% de su carga nominal, con factor de potencia 0,9 inductivo, es inferior a su tensión asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Aunque la corriente es solo el 25% de la nominal, sigue habiendo caída de tensión proporcional a la corriente y dependiente del ángulo de fase del factor de potencia."
  },
  {
    "question": "La tensión en el lado de baja tensión de un transformador de distribución cargado con su carga nominal y factor de potencia 0,1 capacitivo es inferior a su tensión asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Cuando un transformador de distribución trabaja con carga nominal y factor de potencia 0,1 capacitivo, la corriente está muy adelantada respecto a la tensión (por el carácter capacitivo de la carga). Esto provoca una elevación de la tensión secundaria, no una caída."
  },
  {
    "question": "Para los materiales del Grupo B, la distancia libre en aire correspondiente a la tensión soportada a impulsos tipo rayo es mayor que la necesaria para satisfacer la tensión soportada a frecuencia industrial.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para asegurar la tensión soportada a impulsos tipo rayo, la distancia libre en aire debe ser mayor que la necesaria para soportar la tensión a frecuencia industrial."
  },
  {
    "question": "Para los materiales del Grupo B, las distancias en aire fase-fase deben ser mayores que las distancias fase-tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Para el Grupo B, las distancias mínimas en aire fase-fase y fase-tierra exigidas por la reglamentación son exactamente iguales."
  },
  {
    "question": "En una instalación, si no se cumplen las distancias de aislamiento en aire establecidas en la ITC-RAT 12, es preciso realizar el ensayo de comprobación del nivel de aislamiento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La ITC-RAT 12 establece las distancias de aislamiento en aire mínimas que deben cumplirse en las instalaciones eléctricas para evitar descargas y garantizar seguridad. Si no se pueden respetar las distancias de aislamiento mínimas, la norma indica que es necesario verificar el aislamiento mediante ensayos."
  },
  {
    "question": "Los materiales del Grupo A no están sometidos a sobretensiones de tipo maniobra, únicamente a tensiones de frecuencia industrial e impulsos tipo rayo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los materiales pertenecientes al Grupo A también deben soportar sobretensiones de maniobra, como aquellas originadas por conmutaciones, cortocircuitos o arranques de motores, aunque estas sean menores que los impulsos tipo rayo."
  },
  {
    "question": "Para los materiales del Grupo C, la condición de seccionamiento tipo precisa ensayo si las distancias entre los dos extremos seccionados de una misma fase se incrementan, al menos, un 25% respecto de la distancia mínima en aire entre fase y fase especificada por el reglamento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Si se incrementa la distancia entre los dos extremos seccionados un 25% o más respecto al valor de referencia normativo, se cumple la exención o condición que dota de validez al seccionamiento sin ensayos adicionales."
  },
  {
    "question": "Los transformadores con aceite mineral de potencia superior a 1 MVA requieren un depósito de expansión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para transformadores con potencia nominal superior a 1 MVA, es obligatorio por normativa disponer de un depósito de expansión o conservador de aceite."
  },
  {
    "question": "La tensión en régimen permanente entre los contactos de un fusible limitador fundido es 1,5 veces el valor de la tensión de fase si los otros dos fusibles no llegaron a fundir.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Solo uno de los tres fusibles de un sistema trifásico ha fundido. Debido a esto, la tensión que aparece entre sus bornes tras la extinción del defecto es de 1,5 veces la tensión de fase a neutro normal."
  },
  {
    "question": "Los fusibles limitadores protegen mejor que los fusibles de expulsión frente a sobrecargas de emergencia de corta duración.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Ninguno de los dos tipos de fusibles protege de manera adecuada frente a sobrecargas. Los fusibles de tipo limitador están diseñados para proteger mejor que los de expulsión, pero estrictamente frente a cortocircuitos elevados."
  },
  {
    "question": "La sobretensión temporal máxima en una red tiene una amplitud mayor que la sobretensión transitoria de frente lento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Para una sobretensión temporal, su amplitud es relativamente baja, típicamente entre 1,1 y 1,3 veces la tensión nominal. Para una sobretensión transitoria de frente lento (maniobra), su amplitud es notablemente mayor, pudiendo llegar a 1,5 o 2 veces la tensión nominal."
  },
  {
    "question": "Las sobretensiones temporales en una instalación se expresan en valor de cresta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las sobretensiones temporales se expresan normativamente en valor eficaz, mientras que las transitorias son las que se expresan en valores de cresta."
  },
  {
    "question": "El coeficiente de defecto a tierra para redes con neutro aislado es inferior al correspondiente a redes con neutro puesto a tierra rígida.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El coeficiente de defecto a tierra (k) es mayor en redes con neutro aislado (donde alcanza un valor de raíz de 3) que en redes con neutro puesto a tierra de forma rígida (donde k es próximo a 1)."
  },
  {
    "question": "Los transformadores de medida de intensidad deben medir dentro de los límites de error normalizado para tensiones comprendidas entre el 20% y el 120% de su corriente asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. De acuerdo con la Diapositiva 7 del Tema 5.1, los transformadores de intensidad de medida deben cumplir sus márgenes de precisión dentro del rango comprendido entre el 5% y el 120% de su corriente asignada."
  },
  {
    "question": "El aceite mineral utilizado en los transformadores tiene una viscosidad mayor que el aceite vegetal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La viscosidad cinemática a 40°C del aceite mineral común es de 8-12 mm²/s, mientras que el aceite vegetal (éster natural) tiene una viscosidad considerablemente mayor, situada entre 30-40 mm²/s."
  },
  {
    "question": "La ferroresonancia en los transformadores de medida se limita disponiendo una resistencia de valor apropiado en el secundario del transformador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La ferroresonancia se puede mitigar y limitar de forma efectiva colocando una resistencia amortiguadora con un valor óhmico apropiado en el circuito secundario del transformador de tensión."
  },
  {
    "question": "Los interruptores automáticos de media tensión pueden tener función de seccionador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. En media tensión las funciones están disociadas por seguridad. Los únicos interruptores automáticos comercializados que integran de fábrica la capacidad certificada de seccionamiento son los de baja tensión."
  },
  {
    "question": "Es recomendable, en un transformador, sustituir el aceite mineral por aceite vegetal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Los transformadores diseñados para operar con aceite mineral convencional no están concebidos originalmente para contener aceite vegetal debido a diferencias críticas de viscosidad y dilatación térmica."
  },
  {
    "question": "Para los transformadores de distribución en aceite es obligatorio el ensayo de descargas parciales.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. El ensayo de descargas parciales es obligatorio como control de calidad en transformadores de gran potencia o de resina seca, pero en unidades de distribución comunes sumergidas en aceite no es un ensayo obligatorio de rutina."
  },
  {
    "question": "Los explosores dispuestos en las bornas de los transformadores de potencia protegen eficazmente al transformador frente a sobretensiones transitorias.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Los explosores o cuernos de arco solo limitan de forma basta las sobretensiones temporales internas de baja frecuencia. Para salvaguardar la máquina frente a sobretensiones transitorias rápidas externas (como el rayo), se deben usar pararrayos."
  },
  {
    "question": "El valor de la tensión soportada nominal de tipo maniobra es mayor que el valor de la tensión soportada nominal de tipo rayo para un mismo material del Grupo C.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La mayor tensión soportada asignada es invariablemente la de tipo rayo para todos los materiales, aunque en el Grupo C las distancias físicas finales en aire puedan venir condicionadas por las solicitaciones de maniobra."
  },
  {
    "question": "El valor máximo de la sobretensión temporal debida a cortocircuito fase-tierra de una red queda limitado por la impedancia de conexión del neutro a tierra de red de alimentación.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La sobretensión temporal que surge durante un cortocircuito se ve directamente condicionada y gobernada por la configuración de puesta a tierra del neutro del transformador de alimentación, la cual define el desplazamiento del neutro y la intensidad de defecto homopolar."
  },
  {
    "question": "El coeficiente de defecto a tierra, k, depende del tiempo de actuación de las protecciones.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El coeficiente k se calcula exclusivamente mediante las relaciones de impedancia de los bucles de secuencia de la red (directa, inversa y homopolar). En su expresión fundamental no interviene en ningún momento el parámetro temporal de despeje de la falta."
  },
  {
    "question": "Si una distancia de aislamiento en aire de un material del Grupo B cumple con el ensayo de tensión nominal soportada a impulsos tipo rayo entonces también cumplirá con la tensión nominal soportada a frecuencia industrial requerida por el reglamento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para los equipamientos encuadrados dentro del Grupo B, la separación física mínima requerida en aire viene dictada y condicionada por el ensayo frente a impulsos tipo rayo. Si la distancia geométrica satisface dicho umbral, por ende cumplirá holgadamente el ensayo a frecuencia de red."
  },
  {
    "question": "Los aislamientos de los equipos de alta tensión tales como transformadores de potencia se diseñan para que soporten las sobretensiones tipo maniobra que puedan aparecer en la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los aislamientos internos fijos se dimensionan para tolerar sobretensiones de carácter permanente o temporal prolongado. Las solicitaciones transitorias extremas (como maniobra o rayo) alcanzan picos que se delegan de forma coordinada a elementos protectores externos como los pararrayos."
  },
  {
    "question": "Si una cadena de aisladores expuesta a las condiciones ambientales cumple el ensayo de tensión nominal soportada a impulsos tipo rayo y tipo maniobra significa que su línea de fuga también cumple las exigencias reglamentarias.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El cumplimiento de las pruebas ante impulsos de tensión a través del aire no valida ni acredita el correcto dimensionamiento de la línea de fuga sólida del aislador, puesto que esta última responde de forma independiente a los criterios de resistencia ante la contaminación y polución ambiental."
  },
  {
    "question": "En una subestación que utiliza material de tensión más elevada de 145 kV perteneciente al Grupo B las distancias mínimas libres en aire exigidas por el reglamento para los aislamientos fase-tierra son las mismas que las exigidas para los aislamientos en aire fase-fase.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es una especificación reglamentaria de las tablas de la ITC-RAT 12: en todo el rango de tensiones correspondientes al Grupo B, los valores de separación mínima libre exigibles en aire fase-fase y fase-tierra coinciden exactamente."
  },
  {
    "question": "Según la ITC 12 del reglamento de instalaciones eléctricas de alta tensión la distancia libre en aire en una subestación situada a 900 m de altitud debe ser igual o superior al valor mínimo de distancia libre establecida en las tablas de la ITC 12, a menos que se hayan realizado ensayos de tensión soportada con resultado favorable.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Las tablas imponen valores estrictamente obligatorios en instalaciones que no realicen ensayos. Al encontrarse por debajo de los 1000 metros, no requiere factor de corrección por altitud, por lo que debe cumplir el valor tabulado base o acreditarse mediante ensayos favorables."
  },
  {
    "question": "El nivel de aislamiento de un material de exterior destinado a una red de distribución rural de Um = 24 kV con neutro aislado debe elegir se de la lista 1 del Grupo A.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Al tratarse de una infraestructura de distribución de carácter rural, con líneas predominantemente aéreas altamente expuestas a descargas atmosféricas e impulsos tipo rayo, se requiere dotar al sistema de mayores márgenes de seguridad dieléctrica, debiendo seleccionarse la Lista 2 en lugar de la Lista 1."
  },
  {
    "question": "El SF6 es un gas aislante que se ha utilizado tradicionalmente en las GIS, pero que origina efecto invernadero.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El hexafluoruro de azufre (SF6) es el fluido dieléctrico estándar en las subestaciones blindadas encapsuladas (GIS), pero presenta el grave inconveniente ecológico de estar catalogado como un potente gas de efecto invernadero."
  },
  {
    "question": "Pueden existir niveles de aislamiento de tensión nominal soportada a frecuencia industrial y de impulsos tipo rayos exactamente iguales para materiales de distinto valor de Um pertenecientes al Grupo B.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Revisando las tablas cruzadas normalizadas de coordinación de aislamiento para el Grupo B, existen escalones y combinaciones de ensayos de tensión soportada asignados que coinciden idénticamente en el solape de ciertos valores comerciales contiguos de tensión más elevada Um."
  },
  {
    "question": "El reglamento permite emplear combinaciones distintas de tensiones nominales soportadas a las establecidas en la tabla del reglamento, sólo para los materiales del Grupo C, si las características de la red o a los métodos elegidos para controlar las sobretensiones de maniobra o de rayo lo justifican.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El articulado reglamentario faculta la adopción justificada de combinaciones de tensión soportada alternativas a las tabuladas siempre que se extraigan de los valores normalizados de las propias tablas de referencia, pero esta posibilidad de optimización técnica no es exclusiva del Grupo C."
  },
  {
    "question": "Las cadenas de aisladores de las líneas aéreas se eligen de nivel de aislamiento nominal igual o superior a la máxima sobretensión de tipo rayo que se prevean.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Las descargas de rayo directas sobre los conductores desarrollan ondas transitorias de magnitudes extremas que superan por órdenes de magnitud la rigidez física de la cadena. El diseño no busca soportar el impacto directo franco del rayo, sino coordinar las sobretensiones inducidas y amortiguadas."
  },
  {
    "question": "Cuando un rayo cae en el terreno próximo a una línea de media tensión, por ejemplo, con nivel de aislamiento tipo rayo del 125 kV, las cadenas de aisladores no cebarán si está apantallada con un cable de guarda.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El cable de guarda actúa interceptando descargas directas que inciden verticalmente sobre la traza de la línea para derivarlas a tierra a través de los apoyos. Ante rayos que impactan de manera indirecta en las inmediaciones del terreno, se acoplan sobretensiones inducidas que pueden provocar cebados independientemente del apantallamiento superior."
  },
  {
    "question": "Dentro de las sobretensiones temporales también se incluyen las sobretensiones producidas por ferroresonancias.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los fenómenos ferroresonantes se clasifican técnicamente bajo el paraguas de las sobretensiones de carácter temporal, debido a que exhiben una frecuencia fundamental o armónica sostenida en el tiempo y no transitoria, aunque operativamente deban mitigarse de inmediato."
  },
  {
    "question": "No existe ningún ensayo normalizado asociado a las sobretensiones transitorias de frente muy rápido.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Las normativas de ensayo de coordinación de aislamiento sí contemplan especificaciones de ondas transitorias tipo VFT (Very Fast Transients), especialmente críticas y tipificadas para la caracterización de fallos de maniobra internos en subestaciones blindadas GIS."
  },
  {
    "question": "Las sobretensiones en una subestación provocadas por reenganche de una línea pueden ser mayores que las provocadas en la conexión inicial de la línea.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Durante un reenganche rápido trifásico sobre una línea que mantiene cargas capacitivas atrapadas residuales de la maniobra previa, la oposición de fases puede amplificar de forma severa el transitorio, superando los picos de una energización inicial en vacío."
  },
  {
    "question": "Las sobretensiones por cebados inversos son más probables que por cebados entre fase y estructura.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El cebado directo entre fase y estructura por contorneo ante ondas inducidas ordinarias es el mecanismo de fallo dieléctrico más común en intemperie; las condiciones severas requeridas para un cebado inverso (descarga directa en guarda combinada con alta impedancia en la torre) se dan con menor frecuencia estadística."
  },
  {
    "question": "En las subestaciones aisladas en gas (GIS) solo se producen sobretensiones de frente muy rápido.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Aunque los frentes muy rápidos (VFTO) producidos por el centelleo de los seccionadores en SF6 constituyen la sobretensión transitoria más destructiva y característica de las GIS, estas instalaciones siguen estando expuestas a temporales, de frente lento (maniobras externas) y frentes rápidos (rayos de líneas entrantes)."
  },
  {
    "question": "La tensión soportada nominal de una cadena de aisladores corresponde con el nivel de tensión para el cual se asegura que no se producirá descarga disruptiva alguna.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La tensión soportada nominal no ofrece un blindaje matemático absoluto de cero fallos; se define bajo criterios puramente estadísticos donde se tolera y asume una probabilidad máxima de descarga disruptiva del 10% bajo."
  },
  {
    "question": "La corriente de falta a tierra en una red con neutro aislado es igual a tres veces la corriente capacitiva entre fase y tierra existente instantes antes de la falta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Correcto. De acuerdo con las expresiones del Tema 2.2, la corriente capacitiva previa por fase se define como I = w * Ce * Uf, e inmediatamente después de producirse el defecto franco a tierra, la intensidad de falta total resultante equivale a 3 * I."
  },
  {
    "question": "Cuando en una red de tensión más elevada entre fases Us y con el neutro aislado de tierra se produce una falta fase-tierra, el neutro se pondrá a la tensión Us/rc(3).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Al ocurrir un defecto monofásico franco en un sistema con neutro aislado, el punto de neutro experimenta un desplazamiento geométrico pleno, adquiriendo el valor completo de la tensión simple de fase (Us / raíz de 3) respecto a la fase fallada, no manteniéndose referenciado de forma simétrica."
  },
  {
    "question": "En una red correctamente diseñada con bobina Petersen, en caso de cortocircuito fase-tierra, ésta deberá inyectar una corriente inductiva en el punto de cortocircuito de módulo igual a rc(3) veces la corriente capacitiva que circulaba por tierra en cada fase antes del fallo fase-tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Para lograr la compensación ideal del defecto en condiciones de sintonía, la reactancia de la bobina debe inyectar una corriente inductiva cuyo módulo sea exactamente igual a 3 veces (y no raíz de 3 veces) la intensidad capacitiva normal previa por fase."
  },
  {
    "question": "En caso de un cortocircuito fase-tierra en una red con bobina Petersen, los aislamientos de las fases sanas (sin defecto) no sufren sobretensión temporal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Una de las solicitaciones dieléctricas características de este sistema de explotación es que, durante la falta monofásica, las fases sanas experimentan de manera temporal una elevación de tensión respecto a tierra equivalente a la tensión de línea (fase-fase)."
  },
  {
    "question": "La bobina Petersen está especialmente diseñada para redes de media tensión que dispongan mayoritariamente de líneas subterráneas con cable aislado.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Su campo de aplicación prioritario reside en redes de distribución aéreas expuestas a la intemperie, donde abundan los defectos de naturaleza transitoria (autoextinguibles). En cables subterráneos, las faltas perforan el aislamiento sólido provocando daños de carácter permanente donde la bobina pierde eficacia."
  },
  {
    "question": "La corriente de cortocircuito fase-tierra en una red sin armónicos, con neutro puesto a tierra a través de una bobina Petersen perfectamente sintonizada (v=0), corresponderá a una corriente resistiva residual debida a las pérdidas de los cables, las pérdidas de la propia bobina Petersen y la resistencia de tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. Al anularse recíprocamente las componentes reactivas capacitivas e inductivas bajo desintonización nula (v = 0), la corriente residual que fluye por el punto de falta queda reducida exclusivamente a las pérdidas óhmicas activas y resistencias del bucle."
  },
  {
    "question": "Para que se extinga el arco de una falta fase-tierra en una red que utilice bobina Petersen es preciso que el valor eficaz de la corriente residual a tierra sea nulo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. No se requiere matemáticamente un valor nulo absoluto de cero amperios; la condición física de extinción autónoma se alcanza de forma segura siempre que la corriente residual reactiva/activa total se mantenga igual o por debajo del límite crítico de autoextinción (Ires <= IG)."
  },
  {
    "question": "La bobina Petersen limita también la corriente máxima de los cortocircuitos trifásicos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La bobina Petersen se ubica en el neutro del transformador y responde únicamente ante corrientes de desequilibrio homopolar (faltas a tierra). Al ser el cortocircuito trifásico un defecto perfectamente simétrico y equilibrado, carece de componente homopolar y la bobina no ejerce ningún efecto limitador."
  },
  {
    "question": "La corriente de defecto a tierra en una red con neutro aislado depende de la mayor o menor extensión de la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. En un sistema aislado, la corriente de falta retorna al circuito cerrándose a través de las capacidades parásitas homopolares fase-tierra de las líneas sanas. Al expandirse la red en longitud, la capacidad total (C) se incrementa de forma proporcional, aumentando la intensidad del defecto."
  },
  {
    "question": "La desintonización máxima admisible para asegurar la extinción del arco de una falta a tierra en una red con bobina Petersen es tanto mayor cuanto mayor sea la tensión nominal de red, siempre que la corriente de falta capacitiva y el amortiguamiento se mantengan constantes en las redes de diferente tensión comparadas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. Conforme a las curvas y datos empíricos de la norma VDE, para una misma intensidad capacitiva de falta (p.e. 200 A) y amortiguamiento idéntico, los sistemas de mayor tensión nominal (como 110 kV) toleran márgenes de desintonización mucho más amplios (hasta +-65.9%) que las redes de menor tensión (como 20 kV, limitadas a +-29.8%)."
  },
  {
    "question": "La bobina Petersen debe ser regulable en función del crecimiento de la red o de su topología (mayor o menor longitud de líneas aéreas o subterráneas).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. Cualquier modificación operativa, maniobra de acoplamiento de circuitos o ampliación de líneas altera la capacidad homopolar global de la instalación. Para mantener el sistema en torno al punto de sintonía óptimo (IL = Ic), la inductancia de la bobina debe ser regulable (habitualmente mediante núcleos de entrehierro variable)."
  },
  {
    "question": "El amortiguamiento de una red compensada con bobina Petersen varía en función de la temperatura del terreno.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. El factor de amortiguamiento responde a la relación entre componentes activas y capacitivas (IR / Ic). Dado que la corriente resistiva IR depende de la resistencia de paso del electrodo del neutro, las variaciones térmicas y de humedad del suelo alteran de forma directa la resistividad del terreno y, por ende, el amortiguamiento."
  },
  {
    "question": "Para redes con neutro aislado el coeficiente de desintonización toma el valor -1.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. La desintonización se define matemáticamente como v = (IL - Ic) / Ic. Al tratarse de una red con neutro aislado puro, carece de reactancia de compensación (IL = 0), lo que simplifica la expresión dando un coeficiente rígido de v = -1 (condición de subcompensación extrema)."
  },
  {
    "question": "Cuando en una red el amortiguamiento es nulo (delta=0), la desintonización v puede ser la máxima admisible para cumplir con el requisito de extinguir el arco de la falta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La formulación matemática de límites impone que la raíz cuadrada de (delta^2 + v^2) debe ser menor o igual al umbral normativo. Si el amortiguamiento es estrictamente cero (delta = 0), el valor de v puede igualar el límite superior puro, pero de ninguna manera sobrepasarlo o fijarse de forma indeterminada."
  },
  {
    "question": "En una red con amortiguamiento nulo (delta=0), cuanto mayor sea la corriente de falta a tierra capacitiva, mayor puede ser la desintonización admisible que asegure la extinción del arco de la falta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Analizando la inecuación de acotación de la corriente residual, el término dependiente de la intensidad capacitiva se expresa de forma inversamente proporcional (35 / Ic). Por lo tanto, a mayor intensidad capacitiva Ic, menor será el valor de la desintonización admisible v."
  },
  {
    "question": "La norma alemana DIN VDE 0228-2 establece la máxima corriente residual admisible en una red con bobina Petersen para lograr la extinción de la falta en función de la corriente de falta a tierra capacitiva de la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Los diagramas y tablas de límites de la directiva DIN VDE 0228-2 acotan los umbrales de la corriente residual admitida para garantizar la extinción del arco, pero tomando como parámetro de entrada y función directa el valor de la tensión nominal de la red (en kV), no de la corriente Ic por sí sola."
  },
  {
    "question": "La máxima desintonización admisible vmax de una red con bobina Petersen es función de la pendiente de la tensión transitoria de restablecimiento en el punto de la falta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La formulación matemática normalizada delimita vmax basándose estrictamente en criterios de equilibrio de corrientes (amortiguamiento y aportación capacitiva Ic), no incorporando la derivada o pendiente temporal de la onda transitoria de restablecimiento en su definición paramétrica."
  },
  {
    "question": "La bobina Petersen no se dispone en todas las redes con neutro aislado.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. La instalación de bobinas Petersen es opcional y responde a decisiones de diseño técnico-económico. Muchas redes con neutro aislado de dimensiones moderadas (pocas capacidades parásitas) prescinden de ella debido a que sus corrientes de defecto ya son bajas por naturaleza."
  },
  {
    "question": "La pendiente máxima admisible de la tensión transitoria de restablecimiento depende de la corriente de defecto a tierra capacitiva Ic.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La pendiente transitoria con la que la tensión se restablece tras la extinción en el paso por cero viene gobernada por la inecuación que vincula el amortiguamiento delta, la desintonización v y los parámetros constructivos, no dependiendo de forma exclusiva o directa del valor aislado de Ic."
  },
  {
    "question": "La presencia de armónicos en la red puede afectar negativamente a la extinción del arco.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. Los armónicos introducen altas frecuencias en la onda. Dado que la reactancia inductiva de la bobina Petersen varía proporcionalmente con la frecuencia (wL) y la capacitiva de forma inversa (1/wC), las frecuencias armónicas rompen la sintonía perfecta del sistema, incrementando la corriente residual e impidiendo la correcta extinción del arco."
  },

  {
    "question": "La sobretensión temporal en el lado de media tensión de una red de distribución depende del valor de la resistencia de puesta a tierra del neutro del transformador de la subestación que alimenta a la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La sobretensión temporal viene dada por el defecto de cortocircuito monofásico. Como la intensidad de este defecto homopolar depende directamente de la resistencia de puesta a tierra del neutro en la subestación de alimentación, la afirmación es plenamente verdadera."
  },
  {
    "question": "El valor máximo de la corriente de cortocircuito de una red viene limitado por el tipo de fusible utilizado.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El fusible de tipo limitador interrumpe la corriente de falta de forma ultrarrápida antes de que la onda senoidal alcance su valor de cresta máximo previsto, acotando físicamente la magnitud de la falta."
  },
  {
    "question": "Si un seccionador ha superado el ensayo de tensión soportada, Uw, frente a impulsos tipo rayo significa que no debe producirse una descarga disruptiva para la tensión Uw.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Según la normativa de coordinación de aislamiento, la tensión soportada nominal Uw no asegura un riesgo del 0%; estadísticamente se define admitiendo una probabilidad de descarga disruptiva de hasta el 10% durante los ensayos."
  },
  {
    "question": "En una subestación que utiliza material de tensión más elevada de 245 kV las distancias mínimas exigidas por el reglamento para el aislamiento en aire fase-fase son mayores a las exigidas para el aislamiento en aire fase-tierra.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Al operar exactamente a 245 kV, el material se sitúa en el límite superior del Grupo B ($36\\text{ kV} < U_m \\le 245\\text{ kV}$). En las tablas de este grupo reglamentario, las separaciones físicas en aire fase-fase y fase-tierra requeridas coinciden de forma idéntica, no siendo mayores."
  },
  {
    "question": "El SF6 es un gas que contribuye con el efecto invernadero.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El hexafluoruro de azufre (SF6) es un gas artificial catalogado con un índice de potencial de calentamiento global extremadamente alto, por lo que colabora de forma directa y severa al efecto invernadero."
  },
  {
    "question": "Cuando el SF6 sufre un arco eléctrico de alta energía los gases derivados son tóxicos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Bajo la acción térmica de un arco de maniobra o falta, una pequeña porción del gas reacciona con la humedad y los materiales circundantes, disociándose en subproductos estables como el gas oxifluoruro de azufre o gas tionilo ($SOF_2$), el cual presenta una alta toxicidad."
  },
  {
    "question": "Los seccionadores deben soportar las corrientes de cortocircuito.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al carecer totalmente de poder de corte, el seccionador tiene prohibida la apertura bajo carga o falta. Consecuentemente, sus cuchillas y contactos mecánicos cerrados deben diseñarse para soportar firmemente los esfuerzos dinámicos y térmicos de la corriente de cortocircuito."
  },
  {
    "question": "El valor de la corriente nominal de un fusible limitador debe ser mayor a la corriente de energización del transformador que protege.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La corriente transitoria de magnetización o inserción ($I_{inrush}$) alcanza picos de 12 a 14 veces la nominal. El calibre comercial del cartucho se elige cruzando este punto en la curva de tiempo, dando habitualmente una intensidad nominal de diseño menor que ese pico transitorio."
  },
  {
    "question": "Un fusible limitador protege al transformador de distribución frente a cualquier corriente de cortocircuito que se produzca en el lado de baja tensión, independientemente de la longitud de la línea de baja tensión hasta el punto de cortocircuito.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Cuanto más largo sea el tendido de la red de BT, mayor será la impedancia acumulada en el bucle del cable. Esto provoca que la intensidad de cortocircuito resultante se atenúe tanto en bornes lejanos que puede quedar por debajo del umbral de detección del fusible de media tensión."
  },
  {
    "question": "Es condición necesaria y suficiente que los transformadores de potencia con depósito de expansión tengan una mirilla de nivel de aceite.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La mirilla indicadora es una condición obligatoria por diseño y reglamento para controlar las dilataciones térmicas en máquinas equipadas con conservador, pero no representa una condición suficiente por sí misma, requiriendo otros elementos de protección analógica."
  },
  {
    "question": "Los autoseccionadores se instalan en las subestaciones de transformación de las redes de transporte.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los autoseccionadores son aparatos de maniobra destinados específicamente a líneas aéreas de Media Tensión expuestas dentro de las redes de distribución; no se emplean en los parques de intemperie de Alta Tensión de las redes de transporte de energía."
  },
  {
    "question": "Los aceites vegetales utilizados en los transformadores de distribución se consideran fluidos de tipo K.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Dado que poseen un punto de combustión de alta seguridad superior a los $300^{\\circ}\\text{C}$, los ésteres naturales procedentes de fuentes vegetales se clasifican normativamente como fluidos Clase K."
  },
  {
    "question": "Un transformador de distribución de 1500 kVA no puede ser de llenado integral.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Las directrices de diseño limitan el empleo de cubas elásticas de llenado integral hermético a potencias normalizadas de distribución iguales o inferiores a los 1000 kVA. Al alcanzar los 1500 kVA, la máquina requiere de forma obligatoria un depósito de expansión."
  },
  {
    "question": "Los transformadores estrella-estrella con neutro puesto a tierra en ambos lados deben disponer de un tercer arrollamiento de compensación en triángulo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El acoplamiento YNy simple exhibe un mal comportamiento en vacío y desequilibrios magnéticos destructivos ante faltas a tierra. Incorporar un tercer devanado terciario en triángulo cerrado (+d) abre un lazo de circulación interna que absorbe y equilibra los flujos de secuencia homopolar."
  },
  {
    "question": "El índice horario Yzn11 se utiliza para transformadores de distribución bitensión en el lado de baja tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El esquema de conexión en zig-zag (z) se reserva para pequeñas potencias en BT iguales o inferiores a 160 kVA. Para las configuraciones bitensión normalizadas de distribución, el estándar impone el uso del índice horario Dyn11."
  },
  {
    "question": "El reglamento europeo 548/2014 que regula las pérdidas de transformadores de potencia, excluye de su aplicación a los transformadores de distribución de tipo poste.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La normativa de ecodiseño de la Unión Europea engloba de manera vinculante a las unidades destinadas a montaje en apoyos aéreos (tipo poste), asignándoles topes de pérdidas específicos en sus anexos regulatorios."
  },
  {
    "question": "Los transformadores de intensidad que tiene dos arrollamientos secundarios, uno para medida y otro para protección, pueden arrollarse en el mismo núcleo ferromagnético.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Para evitar que las corrientes de un cortocircuito dañen los instrumentos de medida (que precisan núcleos que saturen rápido) o alteren la respuesta de los relés (que exigen núcleos que no saturen), es obligatorio embobinar cada circuito sobre canales ferromagnéticos independientes separados."
  },
  {
    "question": "Los transformadores de tensión de tipo capacitivo se utilizan a la entrada de las líneas para recoger las ondas de mando control y comunicación alta frecuencia.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Una de las grandes ventajas constructivas de los transformadores capacitivos frente a los inductivos es su capacidad física intrínseca para actuar acoplando y drenando las señales de alta frecuencia (onda portadora) usadas en telecomunicaciones por la propia línea."
  },
  {
    "question": "El error de relación de tensión de un transformador de tensión 3P debe garantizarse en un 3% dentro del rango de tensiones comprendidas entre el 5% y el valor de su factor de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Conforme a la especificación normalizada internacional IEC para transformadores de tensión destinados a la protección, la clase 3P define de forma estricta un límite máximo de desviación en la relación del 3% dentro de su rango dinámico."
  },
  {
    "question": "La potencia de precisión de un transformador de medida es el valor de la potencia aparente, referida a la tensión asignada, con un factor de potencia 0,8 inductivo para la que se especifican los errores de relación y de ángulo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Responde de forma literal a la definición técnica estipulada en los bloques normativos para la parametrización de las potencias de precisión comerciales en transformadores de medida."
  },
  {
    "question": "Los seccionadores de puesta a tierra deben tener un poder de cierre coordinado con la corriente prevista de cortocircuito en el punto de instalación.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para garantizar la seguridad total de la planta y del operario ante una maniobra errónea sobre circuito activo, el herraje de puesta a tierra debe contar obligatoriamente con una capacidad nominal de cierre capaz de soportar los esfuerzos de la corriente asignada de cortocircuito."
  },
  {
    "question": "Los aceites vegetales se congelan antes que lo hace el aceite mineral.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La temperatura de congelación y solidificación de los aceites vegetales (ésteres naturales) es más alta, es decir, menos negativa (en torno a $-15^{\\circ}\\text{C}$ a $-20^{\\circ}\\text{C}$) que la de los fluidos minerales comunes (que bajan de $-30^{\\circ}\\text{C}$ o $-40^{\\circ}\\text{C}$), por lo que se congelan antes."
  },

  {
    "question": "Si la placa de características de un aislador de apoyo indica como nivel de tensión soportada a impulsos tipo rayo Uw(1,2/50)=1050 kV y se instala en una subestación de exterior situada a 2000 m de altitud, la probabilidad de que se produjera un cebado si una sobretensión de rayo alcanzara 1050 kV no sería superior al 10%.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Es falso debido a que la altitud de la instalación es superior a 1000 m. Al igual que la distancia de aislamiento requerida en el aire aumenta con la altura por la menor densidad atmosférica, la probabilidad de fallo aumenta a menos que se corrija y aumente la tensión nominal de los ensayos del material."
  },
  {
    "question": "Si una distancia libre en aire de un material del Grupo B cumple con el ensayo de tensión soportada a impulsos tipo rayo entonces cumplirá también con la tensión soportada a frecuencia industrial requerida por el reglamento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para los materiales englobados en el Grupo B, las distancias geométricas de aislamiento en el aire vienen estrictamente condicionadas y gobernadas por las exigencias del ensayo a impulsos tipo rayo. Si se satisface este umbral, se cumplirá holgadamente la rigidez ante frecuencia industrial."
  },
  {
    "question": "El coeficiente de defecto a tierra, k, depende del tiempo de actuación de las protecciones.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El coeficiente de falta a tierra k se define analíticamente mediante la relación directa de las impedancias complejas de los bucles de secuencia (directa, inversa y homopolar) del sistema ante defectos fase-tierra, una expresión matemática en la que no interviene el parámetro del tiempo."
  },
  {
    "question": "Los aislamientos de los equipos de alta tensión (interruptores, transformadores, etc.) se diseñan para que soporten las sobretensiones tipo maniobra que pueden aparecer en la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los aislamientos internos permanentes se diseñan para soportar sobretensiones de frecuencia de red (frecuencia industrial) y de carácter temporal. Las solicitaciones de frentes transitorios (maniobra o rayo) alcanzan picos que se delegan a pararrayos externos coordinados."
  },
  {
    "question": "Si una cadena de aisladores expuesta a las condiciones ambientales cumple con los niveles de tensión soportada a impulsos tipo rayo y tipo maniobra significa que su línea de fuga también cumple las exigencias reglamentarias.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Que un aislador cumpla los niveles de tensión soportada a través del aire mediante impulsos transitorios no implica que su contorno sólido (línea de fuga) satisfaga la norma, ya que la línea de fuga se diseña de forma independiente según el nivel de contaminación y polución ambiental."
  },
  {
    "question": "En una subestación que utiliza material de tensión más elevada de 220 kV las distancias mínimas libres en aire exigidas por el reglamento para los aislamientos fase-tierra son las mismas que las exigidas para los aislamientos en aire fase-fase.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al operar a una tensión de 220 kV, el sistema entra en la clasificación del Grupo B (tenciones mayores a 36 kV y menores o iguales a 245 kV). En este grupo reglamentario de la ITC-RAT 12, las tablas de distancias fase-fase y fase-tierra son exactamente idénticas."
  },
  {
    "question": "Según la ITC 12 del reglamento de instalaciones eléctricas de alta tensión la distancia libre en aire fase-tierra en una subestación de 220 kV situada a 900 m de altitud debe ser igual o superior al valor mínimo de distancia libre establecido en las tablas de la ITC 12, a menos que se hayan realizado ensayos de tensión soportada, en cuyo caso prevalecen.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Las tablas de la ITC-RAT 12 imponen las distancias físicas mínimas de obligado cumplimiento para instalaciones donde no se realicen ensayos de tipo. Al situarse a 900 m (por debajo del límite de corrección de 1000 m), el valor base tabulado es vinculante a menos que se verifique favorablemente por ensayos."
  },
  {
    "question": "El nivel de aislamiento de un material destinado a una red de distribución rural de Um=24 kV debe elegir se de la lista 1 del material del Grupo A.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El material pertenece al Grupo A. No obstante, al tratarse de una red de distribución rural compuesta predominantemente por líneas aéreas muy expuestas a descargas atmosféricas directas e inducidas, se requiere un mayor nivel de aislamiento, debiendo seleccionarse obligatoriamente la Lista 2."
  },
  {
    "question": "La corriente de pico de cortocircuito corresponde con la intensidad de límite térmico máximo admisible de los materiales y equipos de la instalación.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La intensidad de pico (ip) define el valor instantáneo máximo posible que produce esfuerzos destructivos de carácter dinámico/mecánico. El límite térmico máximo admisible responde al valor eficaz (Ith) integrado en el tiempo (I²t = cte)."
  },
  {
    "question": "Un mismo aparato de maniobra de AT puede tener la función de interruptor automático y seccionador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "En instalaciones comerciales de Alta Tensión (Gama II) no existe un único aparato físico integrado que combine de forma reglamentaria ambas funciones; por razones estrictas de seguridad operativa, el interruptor y el seccionador constituyen componentes independientes."
  },
  {
    "question": "El SF6 es un gas que origina efecto invernadero.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El gas hexafluoruro de azufre (SF6) es un compuesto sintético de excelentes propiedades dieléctricas pero clasificado internacionalmente como un potente gas de efecto invernadero con un índice GWP sumamente elevado."
  },
  {
    "question": "Un seccionador unipolar no puede cerrar sus contactos, si están ambos a alta tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Si ambos bornes se encuentran bajo potencial de alta tensión de la misma fase y red, no existe diferencia de potencial (tensión nula entre contactos), por lo que el aparato puede cerrar sus cuchillas de forma totalmente segura sin cebar ningún arco."
  },
  {
    "question": "Los seccionadores de puesta a tierra deben tener un poder de corte expresado en kA.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los seccionadores de puesta a tierra carecen por completo de poder de corte ante circuitos activos (su poder de corte nominal es cero). Lo que sí poseen de forma obligatoria por diseño es un poder y capacidad de cierre seguro contra cortocircuitos."
  },
  {
    "question": "Un fusible de expulsión no puede cortar intensidades por debajo de I3.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La propiedad de contar con una corriente mínima de ruptura crítica (I3) por debajo de la cual el arco no se extingue de forma segura es un parámetro característico exclusivo de los fusibles de tipo limitador; los fusibles de expulsión carecen de I3."
  },
  {
    "question": "La corriente de energización del transformador es mayor que la corriente nominal del fusible que lo protege.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La corriente de energización transitoria (inrush) alcanza de 12 a 14 veces la nominal de la máquina. El calibre comercial del fusible se selecciona para que su curva térmica quede por encima del inrush en el tiempo, resultando en un calibre nominal de fusible notablemente menor que dicho pico transitorio."
  },
  {
    "question": "Los fusibles limitadores no se deben disponer en redes con neutro aislado por la baja intensidad de defecto a tierra que estas redes presentan.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es verdadero. En una red con neutro aislado, la corriente ante un defecto monofásico a tierra se cierra únicamente por las capacidades parásitas y es muy baja, por lo que resulta totalmente insuficiente para fundir un fusible limitador, requiriéndose relés homopolares de protección."
  },
  {
    "question": "Un fusible limitador no protege frente a sobrecargas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los cartuchos fusibles limitadores de media tensión están diseñados estructuralmente de forma exclusiva para la interrupción ultrarrápida de corrientes elevadas de cortocircuito, careciendo de la curva y el comportamiento térmico aptos para salvaguardar el sistema ante sobrecargas."
  },
  {
    "question": "Un seccionador debe soportar las corrientes de cortocircuito a través de sus contactos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Dado que el seccionador convencional carece de poder de corte y tiene terminantemente prohibido abrir circuitos bajo falta, el aparato debe dimensionarse mecánicamente de forma obligatoria para soportar de manera segura el paso de las corrientes de cortocircuito mientras permanezca cerrado."
  },
  {
    "question": "Los transformadores de distribución con depósito de expansión deben disponer de dos mirillas de nivel de aceite, una a cada lado del tanque del transformador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Para las unidades equipadas con cuba convencional no hermética y depósito de expansión, la normativa técnica de control de nivel exige la incorporación de una única mirilla o indicador que calibre los volúmenes térmicos de 0°C a 100°C."
  },
  {
    "question": "Los interruptores de vacío se utilizan únicamente en las instalaciones de distribución (subestaciones y centros de transformación), pero no en las subestaciones de 400 kV.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La tecnología de extinción en vacío encuentra su aplicación óptima y masiva en el rango de Media Tensión (distribución). Al revisar las gráficas dieléctricas de rigidez, el vacío se satura y no es capaz de soportar de forma segura las tensiones extremas exigidas en nodos de transporte de 400 kV."
  },
  {
    "question": "Los interruptores de los centros de transformación deben tener un poder de cierre que suele ser del orden de decenas de kA y un poder de corte del orden de centenas de A.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Responde a las características de los interruptores ordinarios (de maniobra) en MT: se dimensionan con un elevado poder de cierre (p.e. 40 kA cresta) para soportar el cierre sobre fallas accidentales, pero su poder de corte se reduce estrictamente a la corriente nominal de carga (centenas de amperios)."
  },
  {
    "question": "La temperatura de congelación de los aceites vegetales utilizados en los transforma dores de distribución es mayor que la de los aceites minerales.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La temperatura de congelación de los ésteres naturales vegetales es más alta (es decir, un número menos negativo, en torno a -15°C) que la de los fluidos minerales (que bajan de -30°C), lo que implica físicamente que el aceite vegetal se solidifica antes ante caídas térmicas."
  },
  {
    "question": "Un fusible limitador de tensión nominal 24 kV es adecuado para una red monofásica de tensión nominal de 20 kV.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para asegurar el aislamiento y evitar reencendidos del arco destructivos tras la fusión, la tensión asignada del fusible (24 kV) debe ser estrictamente igual o superior a la tensión máxima compuesta de la red de servicio (20 kV)."
  },
  {
    "question": "Un transformador de potencia de llenado integral no tiene mirillas.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Las unidades de llenado integral corresponden al diseño hermético sellado de fábrica. Al no poseer depósito de expansión ni estar expuestas al aire exterior, carecen por completo de la necesidad de incorporar mirillas para registrar el nivel."
  },
  {
    "question": "La tensión nominal de un pararrayos debe ser superior a la sobretensión temporal de duración de 10s en el punto de la red donde se instale.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es verdadero por criterio general de coordinación de pararrayos (aunque la pregunta indica que no es contenido estricto del parcial 1), para evitar que las sobretensiones de carácter temporal de frecuencia industrial degraden y destruyan térmicamente los discos de óxidos metálicos del pararrayos."
  },
  {
    "question": "El error compuesto de un transformador de protección 5P10 es del 10% cuando la intensidad del primario es 5 veces la intensidad nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "De acuerdo con la designación normalizada IEC 61869-2, la codificación '5P10' certifica que el error compuesto del trafo no superará el 5% (no el 10%) cuando la intensidad primaria alcance un múltiplo de 10 veces (no 5 veces) su corriente nominal."
  },
  {
    "question": "El índice horario Yzn11 no se utiliza para transformadores de distribución de 400 kVA.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El acoplamiento en zig-zag secundario (z) está limitado constructivamente a pequeñas potencias de distribución iguales o inferiores a 160 kVA en fluido mineral. Para una potencia de 400 kVA, el índice normalizado obligatorio es el grupo Dyn11."
  },
  {
    "question": "La potencia límite térmica es el valor de la potencia aparente, referida a la tensión asignada, que el transformador puede suministrar al circuito secundario, cuando la tensión asignada se aplica al primario, sin exceder los límites de calentamiento.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Responde de forma literal y exacta a la definición técnica recogida en las normativas para la parametrización de la potencia asignada continua bajo el punto de vista térmico en transformadores de medida."
  },
  {
    "question": "Un transformador de tensión de protección es de clase 1,5P cuando la sobretensión máxima admisible que puede soportar es de 1,5 veces su tensión nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La codificación numérica situada antes de la letra 'P' (1.5) determina de manera estricta el porcentaje máximo de error de relación de tensión permitido en el secundario del aparato, no teniendo relación paramétrica con el múltiplo de la sobretensión soportada."
  },
  {
    "question": "El reglamento de instalaciones eléctricas no permite utilizar autotransformadores a menos que su neutro esté puesto a tierra a través de una impedancia.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Al contrario, por motivos de estabilidad de aislamiento frente a sobretensiones transferidas por el arrollamiento común, el reglamento de AT impone que los autotransformadores trifásicos se conecten de forma recomendada con su neutro rígidamente puesto a tierra directa."
  },
  {
    "question": "La ferroresonancias paralelo en los transformadores de medida y protección de alta tensión puede evitarse incrementando la tensión de saturación del núcleo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Al elevar el umbral y codo de tensión donde el núcleo ferromagnético entra en saturación no lineal, se minimiza la probabilidad operativa de que interactúe de forma inestable con las capacidades parásitas de la red, previniendo la ferroresonancia."
  },
  {
    "question": "El reglamento europeo 548/2014, que limita las pérdidas de transformadores de potencia, no es aplicable a los transformadores de aislamiento seco a ser instalados en locales de pública concurrencia.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. El reglamento de ecodiseño de la UE excluye de forma taxativa en su artículo 1 (letra f) a los transformadores de aislamiento seco específicamente diseñados para locales de pública concurrencia por motivos de seguridad civil y baja utilización."
  },
  {
    "question": "Los transformadores de intensidad deben tener dos arrollamientos secundarios cada uno de ellos bobinados en un núcleo separado si se desea que uno sea de medida y el otro de protección.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Para salvaguardar los instrumentos de medida (que exigen núcleos que saturen rápido) y asegurar la fiabilidad de los relés de falta (que precisan núcleos que no saturen ante sobreintensidades), es obligatorio por diseño bobinar cada circuito secundario sobre canales magnéticos totalmente independientes."
  },
  {
    "question": "Los transformadores de tensión de tipo capacitivos son más precisos que los inductivos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los aparatos de tecnología puramente inductiva (electromagnéticos) ofrecen una estabilidad y precisión muy superior a lo largo del tiempo, por lo que son obligatorios para facturación comercial; las unidades capacitivas sufren degradación progresiva en sus condensadores."
  },
  {
    "question": "Los transformadores de media de intensidad de clase extendida, por ejemplo, clase 0,2S deben medir dentro de los límites de error normalizados para corrientes comprendidas entre el 1% y el 120% de su corriente asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La incorporación de la designación 'S' certifica normativamente un rango dinámico de precisión ampliado, garantizando que el transformador mantiene su rigurosa tolerancia de lectura en la franja que abarca desde el 1% hasta el 120% de la carga asignada."
  },
  {
    "question": "La tensión residual en bornes de un pararrayos es mayor frente a una sobretensión tipo maniobra que frente a una tensión tipo rayo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Es falso (aunque indicado como fuera del primer parcial). La tensión residual que deja pasar el pararrayos de óxidos metálicos es siempre mayor ante frentes de onda muy rápidos y violentos (como el impulso tipo rayo) que ante frentes más lentos (maniobra)."
  },
  {
    "question": "Los pararrayos de óxidos metálicos no pueden disponer de explosores en serie.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso (indicado como fuera del primer parcial). Aunque los pararrayos modernos de óxidos metálicos comunes carecen de explosores en su diseño estándar por su excelente resistencia no lineal, constructivamente sí existen diseños específicos y aplicaciones especiales que incorporan explosores en serie (pararrayos con explosor)."
  },
  {
    "question": "La tensión de servicio continuo de un pararrayos es superior a su tensión nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Es falso (indicado como fuera del primer parcial). La tensión nominal asignada de un pararrayos (Ur) es el valor eficaz límite de sobretensión temporal que puede soportar durante un ensayo corto de cargabilidad térmica, y es numéricamente superior a su tensión de servicio continuo admisible (Uc)."
  },
  {
    "question": "Las corrientes homopolares del circuito de baja tensión en un transformador de potencia con grupo de conexiones: YNyn0d5 se transfieren al primario desfasadas 150°.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Al contar la máquina con un arrollamiento terciario en triángulo cerrado (d5), las corrientes de secuencia homopolar circulantes del secundario se quedan confinadas y se disipan en dicho lazo cerrado por acoplamiento de flujos opuestos, sin transferirse al devanado primario de AT. Además, el desfase de 150° del índice horario afecta a las tensiones, no a las corrientes homopolares."
  },
{
    "question": "La tensión nominal en el secundario de un transformador de distribución corresponde al valor de la tensión entre fases cuando no circula corriente por su secundario.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Cuando no circula corriente por el secundario el transformador está en vacío, instante en el que las tensiones en bornes coinciden exactamente con los valores nominales de la placa de características (que se expresan siempre como tensiones compuestas o de línea fase-fase)."
  },
  {
    "question": "La corriente de cierre de un aparato de maniobra se corresponde con valor eficaz de la corriente máxima que es capaz de establecer en condiciones de servicio.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La capacidad o poder de cierre/establecimiento nominal de un aparato de maniobra frente a un cortocircuito se expresa y define de forma reglamentaria en valor de cresta (pico), no en valor eficaz."
  },
  {
    "question": "Los seccionadores de puesta a tierra deben tener poder de cierre.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los seccionadores de puesta a tierra tienen la obligación de contar con poder de cierre asignado para poder cerrar el circuito de forma totalmente segura ante un cortocircuito accidental (por ejemplo, si se energiza la línea por error estando conectada a tierra), aunque su poder de corte sea nulo."
  },
  {
    "question": "Los seccionadores de tipo pantógrafo requieren menos volumen de envolvente que los de cuchillas giratorias.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los seccionadores de tipo pantógrafo reducen drásticamente la superficie en planta (horizontal) requerida en los parques de intemperie, pero debido a su desplazamiento articulado ascendente, ocupan un mayor espacio y volumen en el plano vertical."
  },
  {
    "question": "Los niveles de tensiones soportadas de tipo maniobra son de mayor amplitud que los valores de tensiones de tipo rayo para un mismo valor de tensión más elevada, Um.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los ensayos e impulsos tipo rayo determinan los valores de tensión soportada de mayor amplitud absoluta asignados a cualquier material o aislamiento eléctrico."
  },
  {
    "question": "El reglamento europeo de ecodiseño 548/2014 aplicable a transformadores de potencia no es aplicable a los transformadores de distribución de tipo poste.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La normativa de eficiencia de la Unión Europea incluye explícitamente a los transformadores de tipo poste instalados sobre apoyos aéreos de redes de distribución, fijándoles límites de pérdidas específicos en carga y vacío."
  },
  {
    "question": "Un autoseccionador detecta la corriente de cortocircuito que circula a través de él y abre el circuito.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El autoseccionador es un aparato de maniobra que detecta y contabiliza los pasos de corriente de falta, pero carece de poder de corte para interrumpir cortocircuitos. Su apertura se realiza mecánicamente solo durante el tiempo muerto (sin tensión) del interruptor de cabecera."
  },
  {
    "question": "Los interruptores automáticos de vacío son los más adecuados para las instalaciones de alta tensión de transporte.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La tecnología de interrupción en vacío encuentra su aplicación óptima y masiva en redes de Media Tensión (distribución). En tensiones extremas de transporte (Alta Tensión como 220 kV o 400 kV), el medio de extinción estándar sigue siendo el SF6 o alternativas ecológicas de gas denso debido a la saturación dieléctrica del vacío."
  },
  {
    "question": "Los transformadores de distribución bitensión de potencia superior a 400 kVA deben tener preferentemente un índice horario Dyn11.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El grupo de conexión normalizado y preferente para transformadores de distribución de potencias comerciales elevadas de media tensión es el Dyn11, ya que el triángulo primario equilibra las cargas y permite disponer de neutro accesible en la estrella secundaria."
  },
  {
    "question": "Los fusibles de expulsión protegen mejor que los fusibles limitadores frente a sobrecargas de corta duración.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Ninguno de los dos tipos de fusibles de media tensión es apto ni está diseñado para proteger de manera selectiva frente a sobrecargas. Los fusibles limitadores son superiores a los de expulsión, pero estrictamente en el despeje ultrarrápido de corrientes elevadas de cortocircuito."
  },
  {
    "question": "La temperatura de congelación del aceite de tipo vegetal utilizado en los transformadores de distribución es inferior a la del aceite mineral.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La temperatura de congelación de los aceites vegetales (ésteres naturales) es más alta (menos negativa, en torno a -15°C a -20°C) que la de los aceites minerales (que descienden por debajo de los -30°C o -40°C), lo que significa que el aceite vegetal se congela antes."
  },
  {
    "question": "El valor de la corriente nominal de un fusible limitador debe ser mayor a la corriente de magnetización que aparece durante la energización del transformador que protege.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La corriente transitoria de inserción (inrush) alcanza de 12 a 14 veces la nominal de la máquina. El calibre comercial del fusible se elige coordinando que su curva térmica de fusión quede por encima de este punto de inrush en el tiempo, resultando habitualmente en una corriente nominal menor que dicho pico puro."
  },
  {
    "question": "La corriente nominal de un seccionador de puesta a tierra debe ser, al menos, igual a la del interruptor de la línea a la que se conecta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Dado que el seccionador de puesta a tierra permanece abierto en condiciones normales de servicio y no conduce corriente de carga continua, su intensidad nominal continua puede ser cero. Lo que debe ser igual o superior es su capacidad asignada de corta duración para soportar cortocircuitos térmicos y mecánicos."
  },
  {
    "question": "El fusible limitador de la celda de protección de un centro de transformación (CT) debe elegirse para que proteja frente a cortocircuitos que se produzcan en la línea conectada al lado de baja tensión del transformador, independientemente de la longitud de la línea.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "A mayor longitud del tendido de baja tensión, mayor es la impedancia del bucle de cable. Esto atenúa la intensidad de un cortocircuito lejano en BT, provocando que la corriente reflejada en el primario sea tan baja que quede fuera de la zona de fusión del fusible de media tensión de la celda."
  },
  {
    "question": "Los transformadores de distribución de llenado integral deben disponer de dos mirillas de nivel de aceite, una a cada lado del transformador.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Los transformadores herméticos de llenado integral no tienen depósito de expansión (conservador) ya que las variaciones de volumen del fluido son absorbidas por la elasticidad de las propias aletas de la cuba, por lo que carecen por completo de mirillas de nivel."
  },
  {
    "question": "La tensión soportada entre contactos abiertos de un interruptor de vacío es linealmente proporcional a la distancia entre ellos.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La rigidez dieléctrica en vacío se rige por la ley de Paschen, cuya curva característica demuestra que la tensión soportada no mantiene una relación lineal pura con la distancia de separación de los electrodos, sino que tiende a curvarse y saturarse a partir de ciertos milímetros."
  },
  {
    "question": "La impedancia de cortocircuito indicada en la placa de características de un transformador de potencia se refiere al valor que presenta para la toma de regulación de menor nivel de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "La impedancia de cortocircuito asignada que figura de forma nominal en la placa de características de la máquina está referida estrictamente a la toma central o principal de regulación."
  },
  {
    "question": "La viscosidad de los aceites vegetales utilizados en los transformadores de distribución es mayor a la viscosidad de los aceites minerales.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Los ésteres naturales (aceites vegetales) presentan un coeficiente de viscosidad cinemática a 40°C situado entre 30-40 mm²/s, valor notablemente superior al del aceite mineral convencional de transformadores (8-12 mm²/s)."
  },
  {
    "question": "Un transformador de potencia de llenado integral de 1250 kVA puede ser utilizado en un centro de transformación.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Por normativas constructivas de las compañías eléctricas y límites de diseño elástico de las cubas corrugadas, las unidades de llenado integral hermético comunes se fabrican para potencias iguales o inferiores a 1000 kVA. Para 1250 kVA se requiere depósito de expansión."
  },
  {
    "question": "Los transformadores de intensidad que tienen dos arrollamientos secundarios, uno para medida y otro para protección, pueden utilizar el mismo núcleo si se dimensiona para la suma de sus potencias nominales de precisión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Un secundario de medida exige un núcleo ferromagnético que sature rápido para blindar los instrumentos, mientras que un secundario de protección requiere un núcleo que no sature ante corrientes de falta elevadas. Consecuentemente, es obligatorio que se bobinen sobre núcleos magnéticos independientes separados."
  },
{
    "question": "Los transformadores YNy+d son los utilizados para cambiar la tensión en la red de transporte (400 kV/230 kV), así como para enlazar éstas con las redes de distribución (132 kV, 66 kV y 45 kV).",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El empleo del arrollamiento terciario en triángulo cerrado (+d) es imperativo en la interconexión de grandes redes de transporte y distribución para ofrecer un camino de baja impedancia a las corrientes homopolares y estabilizar el potencial de neutro."
  },
  {
    "question": "El reglamento europeo 548/2014, que regula las pérdidas de transformadores de potencia, excluye de su aplicación a los transformadores de emergencia para socorrer a una red que ha perdido el suministro.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El reglamento de ecodiseño de la UE excluye de sus exigencias de pérdidas y eficiencia a las unidades móviles o de emergencia destinadas a dar suministro de forma puramente temporal ante contingencias incidentales de la red."
  },
  {
    "question": "Un transformador de medida de corriente se satura más fácilmente si el valor de la impedancia en su secundario es demasiado pequeño.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Un transformador de intensidad trabaja de forma óptima cuanto más baja sea la impedancia de su secundario (idealmente en cortocircuito). La saturación del núcleo ferromagnético se produce precisamente cuanto mayor sea la impedancia conectada."
  },
  {
    "question": "El error compuesto para un transformador 5P10 es superior al 10% cuando la intensidad del primario sobrepasa 5 veces el valor de la intensidad nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La designación 5P10 indica de forma normalizada que el error compuesto máximo garantizado es del 5% operando bajo su factor límite de precisión, el cual equivale a 10 veces la intensidad nominal asignada."
  },
  {
    "question": "Los transformadores de medida de intensidad de clase extendida, por ejemplo clase 0,2S, deben medir dentro de los límites de error normalizados para corrientes comprendidas entre el 1% y el 120% de su corriente asignada.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "La letra S certifica normativamente un rango de precisión ampliado. A diferencia de las clases estándares de medida, las clases especiales tipo S garantizan su tolerancia desde el 1% hasta el 120% de la carga nominal."
  },
  {
    "question": "El error compuesto de un transformador de tensión 3P debe garantizar el error de relación de tensión en un 3% dentro del rango de tensiones comprendidas entre el 5% y el valor de su factor de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "De acuerdo con las especificaciones técnicas internacionales de la norma IEC para transformadores de tensión inductivos destinados a protección, la designación 3P fija un límite estricto de desviación en la relación del 3% dentro de su rango dinámico."
  },
  {
    "question": "Los aceites vegetales utilizados en los transformadores de distribución son fluidos de tipo K.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Debido a que presentan excelentes propiedades de resistencia térmica y un punto de combustión de alta seguridad contra incendios superior a los 300°C, los ésteres naturales de base vegetal se clasifican legalmente como fluidos clase K."
  },
  {
    "question": "El factor de tensión asignado de un transformador de protección representa la tensión máxima de funcionamiento de transformador durante un tiempo determinado.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "El factor de tensión define el múltiplo numérico de la tensión nominal asignada (por ejemplo, 1,5 o 1,9) que el transformador es capaz de soportar de forma segura en régimen temporal prolongado (en ensayos normalizados de 30s o 120s) ante fallas en la red."
  },
  {
    "question": "El factor límite de precisión de un transformador de medida de corriente debe ser lo más alto posible.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "El factor límite de precisión (FLP) pertenece exclusivamente al diseño de los transformadores de protección. En las unidades de medida interesa controlar el factor de seguridad (FS), buscando que este sea bajo para proteger los instrumentos."
  },
  {
    "question": "La potencia de cortocircuito, Scc, de una red trifásica viene dada por raíz de tres veces la tensión más elevada de la red, Us, multiplicada por la corriente de cortocircuito en el punto de la red.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La potencia de cortocircuito inicial Scc se calcula multiplicando la raíz de tres por la tensión nominal del sistema (Un), no por la tensión más elevada del material (Us)."
  },
  {
    "question": "La sobretensión temporal en el lado de media tensión de una red de distribución depende del valor de la resistencia de puesta a tierra del neutro del transformador de distribución del centro de transformación que alimenta.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. La sobretensión temporal por defecto fase-tierra en la red depende de la configuración de la puesta a tierra del neutro del transformador que alimenta a la red en la subestación de cabecera. La puesta a tierra del CT alimentado aguas abajo no altera este cortocircuito."
  },
  {
    "question": "El valor de precisión de un transformador de medida se cumple siempre que esté cargado con una carga inferior a la carga de precisión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Para garantizar que el error se mantenga dentro de los límites normalizados de su clase, la norma IEC exige que la carga real conectada al secundario esté comprendida en un rango específico (típicamente entre el 25% y el 100% de su potencia de precisión nominal), no bastando con que sea simplemente inferior."
  },
  {
    "question": "La clase de precisión de un transformador de tensión de protección 3P debe cumplirla para tensiones comprendidas entre el 5% y el factor de tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Es correcto. Las especificaciones internacionales obligan a que los transformadores de tensión destinados a alimentar relés de protección (como la clase 3P) mantengan su precisión garantizada dentro del rango que abarca desde el 5% de la tensión nominal hasta el valor extremo fijado por su factor de tensión asignado."
  },
  {
    "question": "El factor de tensión asignado de un transformador de tensión no puede ser superior al 20% de su tensión nominal.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Los factores de tensión asignados normalizados para transformadores destinados a redes con neutro aislado o puestas a tierra por impedancia alcanzan múltiplos de 1,5 o 1,9 veces la tensión nominal (es decir, incrementos del 50% o 90%), superando holgadamente el límite del 20% indicado."
  },
  {
    "question": "El factor límite de precisión es un parámetro característico de los transformadores de medida de corriente.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. El factor límite de precisión (FLP) es un parámetro característico exclusivo de los transformadores de protección. En los de medida, el parámetro equivalente que regula la saturación es el factor de seguridad (FS)."
  },
  {
    "question": "Para medir la tensión homopolar de la red se disponen los secundarios de los transformadores de tensión conectados en estrella.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Para obtener y medir la tensión homopolar residual (3V0) útil para la detección de faltas a tierra, los arrollamientos secundarios secundarios de los transformadores de tensión deben conectarse de forma obligatoria en triángulo abierto, no en estrella."
  },
  {
    "question": "La potencia límite térmica de un transformador de medida es siempre superior a la potencia de precisión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "block": 1,
    "explanation": "Verdadero. La potencia de precisión define la máxima carga que admite el secundario manteniendo los errores normalizados de su clase. La potencia límite térmica representa la carga máxima continua que puede soportar el aparato desde el punto de vista del calentamiento sin destruir sus aislamientos, valor que es notablemente superior."
  },
  {
    "question": "Los transformadores de corriente de tipo capacitivos utilizan un divisor de corriente y a su salida un transformador inductivo.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Los aparatos que emplean esta tecnología son los transformadores de tensión de tipo capacitivo, los cuales incorporan en su circuito primario de alta tensión un divisor de tensión capacitivo (no un divisor de corriente) acoplado a una etapa electromagnética inductiva intermedia."
  },
  {
    "question": "Los transformadores tensión de tipo inductivo disponen de su núcleo en la parte superior y en la parte inferior se dispone las bornas de conexión del arrollamiento de baja tensión.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. En los diseños convencionales de transformadores inductivos de tensión de alta tensión para exterior, la parte activa pesada (núcleo ferromagnético y arrollamientos) se aloja en la cuba base metálica situada en la parte inferior de la estructura, saliendo el terminal de AT hacia la bornas de la parte superior."
  },
  {
    "question": "Para medir la corriente homopolar de una red se pueden utilizar los secundarios de los tres transformadores de intensidad conectados en triángulo abierto.",
    "answers": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "block": 1,
    "explanation": "Falso. Para medir la corriente homopolar (3I0) mediante la suma vectorial de las intensidades de las tres fases, se conectan los secundarios de los transformadores de intensidad en paralelo (conexión Holmgreen). El triángulo abierto es una configuración exclusiva de los transformadores de tensión."
  }
];