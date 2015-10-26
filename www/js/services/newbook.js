angular.module('ionic.utils', [])

  .factory('newBook', ['$window', function($window, localstorage) {
    var data = [
      {
        "id": 1,
        "title": "Doxología Judas",
        "content": "<p>A Aquel que es poderoso para guardaros sin caída, y presentaros sin mancha delante de su gloria con gran alegría, al único y sabio Dios, nuestro Salvador, sea gloria y majestad, imperio y potencia, ahora y por todos los siglos.</p><p>Amén.</p>"
      },
      {
        "id": 2,
        "title": "A Cristo coronad",
        "content": "<p>A Cristo coronad, divino salvador;<br>Sentado en alta majestad, es digno de loor.<br>Al Rey de gloria y paz, loores tributad,<br>Y bendecid al Inmortal, por la eternidad.</p><p>A Cristo coronad, Señor de nuestro amor<br>Al Rey triunfante celebrad, glorioso Vencedor.<br>Potente Rey de paz, el triunfo consumó,<br>Y por su muerte de dolor su gran amor mostró.</p><p>A Cristo coronad, Señor de vida y luz;<br>Con alabanzas proclamad los triunfos de la cruz.<br>A Él solo adorad, Señor de salvación.<br>Loor eterno tributad de todo corazón.</p>"
      },
      {
        "id": 3,
        "title": "A Ti la gloria",
        "content": "<p>A Ti la gloria, ¡Oh, nuestro Señor!<br>A Ti la victoria, gran Libertador.<br>Te alzaste pujante, lleno de poder,<br>Más que el sol radiante al amanecer.</p><p>Gozo, alegría, reinen por doquier,<br>Porque Cristo hoy día muestra su poder;<br>Ángeles cantando himnos al Señor,<br>Vanle aclamando como Vencedor.</p><p>Libre de penas, nuestro Señor Jesús,<br>Rompe las cadenas de la esclavitud.<br>¡ Ha resucitado, ya no morirá!<br>vQuién muera al pecado, en Dios vivirá.</p>"
      },
      {
        "id": 4,
        "title": "Abba, Padre",
        "content": "<p>Abba, Padre quiero ser sólo para Ti,<br>Que Tu Santa voluntad sea cumplida en mí;<br>Que mi pobre corazón no se aparte de Ti.<br>Abba, Padre quiero ser sólo para Ti.</p>"
      },
      {
        "id": 5,
        "title": "Aclamad a Dios con alegría toda la tierra",
        "content": "<p>Aclamad a Dios con alegría toda la tierra,<br>Cantad la gloria de Su nombre.<br>Poned la gloria en su alabanza, decidle a Dios:<br>¡Cuán asombrosas son tus obras! (3 veces)<br>Toda la tierra te adorará, toda la tierra cantará <br>a Tu nombre (2 veces)</p>"
      },
      {
        "id": 6,
        "title": "Adoramos por siempre al creador",
        "content": "<p>Adoramos por siempre al Creador,<br>A Ti, Señor, alzamos nuestra voz.<br>Tú nombre Santo es (2 veces)<br>Cuan Santo eres Tú, Santa Trinidad,<br>Rey de reyes, y el Señor.<br>Tú nombre es, Tú nombre es,<br>Tú nombre Santo es (2 veces)</p>"
      },
      {
        "id": 7,
        "title": "Ahora es tiempo de alabar a Dios",
        "content": "<p>Ahora es tiempo de alabar a Dios,<br>en la presencia del Consolador.<br>Concéntrate en Él, empieza a cantar.<br>Su presencia con poder tu sentirás.<br>¡ Gloria a Dios !  (2 veces)</p><p>Él mora en la presencia de su pueblo.<br>Se goza al oír nuestro cantar.</p>"
      },
      {
        "id": 8,
        "title": "Cristo es mi esperanza",
        "content": "<p>Al cruzar los valles, en el río o en el mar,<br>Entre las estrellas, y también en la ciudad,<br>Siento Su presencia, a mi lado Cristo está.<br>Él es mi alegría y le quiero así cantar.</p><p>Gracias por la vida, gracias por lo que me das,<br>Gracias, por Tu obra, el amor y la amistad.<br>Gracias por la senda que me acabas de mostrar,<br>Sí Tú estás conmigo no me importa lo demás</p><p>Cristo es mi esperanza, y mi libertad,<br>es mi compañero, con Él quiero andar.</p><p>Aunque el viento ruja no tendré ningún temor,<br>Él me dio la vida, me dará su protección.<br>Mi vida ha cambiado desde que le conocí,<br>Sé que soy su hijo y Él es todo para mí.</p><p>Mi mejor amigo, mi Jesús, mi libertad<br>Guía Tú mis pasos en la vida al caminar.<br>Tenme de Tú mano no me dejes resbalar.<br>Llévame contigo dondequiera que Tú vas.</p>"
      },
      {
        "id": 9,
        "title": "Al Dios de Abraham, loor",
        "content": "<p>Al Dios de Abraham loor, Su nombre celebrad.<br>Al que era, es y aún será, magnificad.<br>El sólo eterno Dios, de todo es Creador.<br>Al Único, Supremo Ser. Cantad loor.</p><p>Cuán libre y sabio es, Su Espíritu al obrar.<br>Su voz con el profeta aún nos quiere hablar.<br>En todo corazón Su ley escrita está.<br>Es inmutable, siempre fiel, en tierra y mar.</p><p>La vida infundió en cada humano ser<br>Su amor amparo nos será, sin fenecer.<br>Al vivo Dios, loor. Su nombre celebrad.<br>Al que era, es y aún será, magnificad.</p>"
      },
      {
        "id": 10,
        "title": "Alaba al Señor, alma mía",
        "content": "<p>Alaba al Señor, alma mía<br>y glorifica Su nombre también.<br>Porque la gloria del Señor es mía por siempre,<br>Jesús es el mismo de ayer.<br>El Señor me libró, mi vida cambió,<br>y todo el mundo lo verá.<br>Porque el vino que Él me dio,  alegró mi corazón.<br>Y con su aceite mi cara brilló  (2 veces)</p>"
      },
      {
        "id": 11,
        "title": "Alabad al Señor",
        "content": "<p>Alabad, al Señor, naciones todas,<br>pueblos todos, Alabadle.<br>Porque ha engrandecido sobre nosotros su <br>misericordia.<br>Y la verdad del Señor, es para siempre, <br>¡Aleluya, Amén!  (2 veces)</p><p>Yo tengo gozo en mi alma, gozo en mi alma,<br>Gozo en mi alma y en mi ser.<br>Es como ríos de agua viva, ríos de agua viva,<br>ríos de agua viva en mi ser.</p>"
      },
      {
        "id": 12,
        "title": "Alabemos al Señor",
        "content": "<p>Alabemos al Señor, Dios de toda creación,<br>Él nos dio todo su amor. ¡Aleluya!</p><p>Hombres: Aleluya, Aleluya....<br>Mujeres:<br>Fresca agua el río nos dio,<br>y la luz del sol nos alumbró,<br>y la noche descanso nos dio.<br>Alabemos al Señor, ¡Aleluya!</p><p>Alabemos al Señor, por la vida que nos da, pues al alma trae paz. ¡Aleluya!</p>"
      },
      {
        "id":13,
        "title": "Alabanza a nuestro Dios",
        "content": "<p>Alabanza a nuestro Dios, que con su inmenso <br>amor nos rescató de muerte.<br>Su Hijo Jesucristo nos limpió,<br>por gracia y por amor, le adoro.<br>Levántame del polvo, hazme brillar<br>para que otros puedan conocerte,<br>puedan alabarte, puedan adorarte.<br>Alabanza a nuestro Dios,<br>que con su inmenso amor nos rescató.</p>"
      },
      {
        "id": 14,
        "title": "Alegraos, ¡oh justos!, en Jehová",
        "content": "<p>Alegraos, ¡oh justos!, en Jehová,<br>en los íntegros es hermosa la alabanza.<br>Aclamadle con gozo y gratitud.<br>Cantadle con cántico nuevo al Señor.<br>Hacedlo bien, tañendo con júbilo.<br>Alegraos, ¡Oh justos!, en Jehová.</p><p>Alegraos, ¡Oh justos!, en Jehová.<br>Porque recta es la palabra de nuestro Dios.<br>Y su obra hecha está con fidelidad.<br>El ama justicia y rectitud.<br>De su bondad se llena la tierra.<br>Alegraos, ¡Oh justos!, en Jehová.</p><p>Fueron hechos los cielos por el Señor,<br>y el ejército de estrellas por su voluntad.<br>Porque Él dijo y fue hecha la creación.<br>Ordena la tierra, y las aguas del mar.<br>De su bondad se llena la tierra.<br>Alegraos, ¡Oh justos!, en Jehová.</p><p>Nuestra alma espera a Jehová.<br>Nuestra ayuda y nuestro escudo es el Señor.<br>Se alegra en Dios nuestro corazón.<br>En Su Santo Nombre confiado estará.<br>Danos, oh Dios, tu misericordia.<br>Alegraos, ¡Oh justos!, en Jehová.</p>"
      },
      {
        "id": 15,
        "title": "Alma, bendice al Señor",
        "content": "<p>Alma bendice al Señor, Rey potente de gloria,<br>De sus mercedes esté viva en ti la memoria.<br>Oh, despertad, arpa y salterio entonad,<br>Himnos de honor y victoria,</p><p>Alma bendice al Señor que a los orbes gobierna,<br>y te conduce paciente con mano paterna.<br>Te perdonó, de todo mal te libró.<br>Porque su gracia es eterna.</p><p>Alma bendice al Señor de tu vida la fuente,<br>que te creó y en salud te sostiene clemente.<br>Tú defensor en todo trance y dolor,<br>Su diestra es omnipotente.</p><p>Alma bendice al Señor y su amor infinito,<br>con todo el pueblo de Dios su alabanza repito.<br>Dios, mi salud, de todo bien plenitud.<br>¡Seas por siempre bendito!</p>"
      },
      {
        "id": 16,
        "title": "Alzaré mis ojos a los montes",
        "content": "<p>Alzaré mis ojos a los montes,<br>¿De dónde mi socorro vendrá?.<br>Mi socorro viene de Jehová,<br>Que hizo los cielos y la tierra  (bis)</p><p>No dará tu pie al resbaladero,<br>ni se dormirá tu Guardador.<br>He aquí no se adormecerá,<br>El que guarda a Israel (bis)</p><p>El sol no te fatigará de día,<br>ni la luna al anochecer.<br>Jehová es tu guardador.<br>Sombra a tu mano derecha (bis)</p><p>Jehová te guardará de todo mal.<br>Guardará tu entrada y tu salir.<br>Guardará tu alma,<br>Desde ahora y para siempre (bis)</p>"
      },
      {
        "id": 17,
        "title": "Amor tan grande",
        "content": "<p>Amor tan grande, profundo y sublime,<br>es el amor de mi Creador.<br>No hay nada en el mundo, que pueda igualarse,<br>al tierno amor de mi buen Jesús</p><p>Dios de amor, Oh, Dios de amor.<br>Sólo eres Tú, el Dios de amor.<br>No hay otro Dios, no lo hay.<br>Fuera de Ti, no lo hay.<br>Fuera de Ti, para mí, no hay amor.</p><p>El sólo nos ama, nos comprende y nos guarda, de todos los males que existen aquí.<br>Por eso le adoro, con toda mi alma, porque me ha dado, mi Jesús, dulce calma.</p>"
      },
      {
        "id": 18,
        "title": "Ante Ti, Señor",
        "content": "<p>Ante Ti, Señor, mi alma levantaré.<br>Ante Ti, Señor, mi alma levantaré.</p><p>Oh, mi Dios, confío en Ti.<br>No me dejes temer,<br>Ni que los malos se alegren más de mí.</p><p>La comunión de Dios es con los que le temen.<br>La comunión de Dios es con los que le temen.</p><p>Líbrame Señor, y guarda mi alma.<br>Líbrame Señor, y guarda mi alma.</p>"
      },
      {
        "id": 19,
        "title": "Aquel que la buena obra empezó",
        "content": "<p>Aquel que la buena obra empezó.<br>Aquel que la buena obra empezó.<br>Será fiel en completarla,<br>será fiel en completarla.<br>Aquel que la empezó,<br>será fiel en completarla en ti.<br>Si las luchas que tienes están trastornando tu <br>tranquilidad, o de tanto esperar vas perdiendo <br>gozo al cantar.<br>Debes creer que Su mano está en ti, vive seguro</p> <p>Él no te abandonará.<br>Eres su gozo y su gran tesoro aquí.</p>"
      },
      {
        "id": 20,
        "title": "Aunque la higuera no florezca",
        "content": "<p>Aunque la higuera no florezca, ni en las vides <br>haya fruto, aunque falte el producto del olivo, y <br>los labrados no den mantenimiento.<br>Y las ovejas sean quitadas de la majada,<br>y no haya vacas en los corrales.<br>Con todo, yo me alegraré en Jehová,<br>y me gozaré en el Dios de mi salvación.</p>"
      },
      {
        "id": 21,
        "title": "Bendito es",
        "content": "<p>Bendito es.<br>Bendito y alabado es (2 veces)<br>Bendito es. Bendito es.</p><p>Desde el fondo de mi alma,<br>brota un canto agradecido;<br>de adoración y de alabanza,<br>al que lo es todo para mí.</p><p>Porque se mueve en sus entrañas,<br>al ver el rostro de sus hijos.<br>Y nuestros nombres están escritos<br>en el corazón amante de mi Dios.</p><p>Todo mi ser en Su presencia,<br>se abre camino en Su luz.<br>Olvido el polvo del que salgo,<br>al levantar mis ojos ante Ti</p>"
      },
      {
        "id": 22,
        "title": "Bienaventurado",
        "content": "<p>Bienaventurado es el varón que no anduvo en <br>consejo de maldad, sino que en Ley de Jehová, su <br>delicia está. <br>Será cual árbol que plantado está <br>junto a ríos de agua viva, crecerá.<br>Que da fruto a su tiempo y no caerá,<br>y todo lo que hará prosperará, prosperará.</p>"
      },
      {
        "id": 23,
        "title": "Bienaventurados son los pobres en espírit",
        "content": "<p>Bienaventurados son los pobres en espíritu, <br>porque de ellos es el Reino de los Cielos.<br>Bienaventurados los que lloran, los que lloran, <br>ellos hallarán consolación.</p><p>Bienaventurados son los mansos, son los mansos, pues recibirán la tierra por herencia.<br>Bienaventurados los que tienen hambre de justicia, porque satisfechos vivirán.</p><p>Vosotros sois la sal de la tierra;<br>pero si la sal se desvaneciere,<br>no servirá más para nada<br>sino para ser echada fuera.</p><p>Bienaventurados son los misericordiosos,<br>ellos pronto alcanzarán misericordia.<br>Bienaventurados los de limpio corazón,<br>porque verán al Señor, verán a Dios.</p><p>Bienaventurados son los pacificadores,<br>porque hijos del Señor serán llamados.<br>Bienaventurados los que sufren por mi nombre, de ellos es el Reino de los cielos.</p><p>Vosotros sois la luz de este mundo, brille vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen al Padre.</p><p>Bienaventurados sois cuando por mi causa, digan toda clase de mentira en contra vuestra.</p><p>Alegraos y gozaos porque vuestro galardón es grande en el Reino de los cielos. (2 veces)</p>"
      },
      {
        "id":24,
        "title": "Buscad primero el Reino de Dios",
        "content": "<p>Buscad primero el Reino de Dios,<br>y su justicia perfecta.<br>Y lo demás por añadido será. Aleluya.</p><p>El hombre no vivirá solo de pan, sino de toda palabra que sale de la boca de Dios. Aleluya.</p><p>Si alguno quiere venir en pos de mí niéguese a sí mismo, tome su cruz cada día y sígame. Aleluya.</p>"
      },
      {
        "id":25,
        "title": "Todos necesitan en su vida a Jesús",
        "content": "<p>Buscamos siempre amor en este mundo,<br>más sin saber el lugar donde encontrarlo.<br>Corremos hacia la felicidad,<br>sin conocer la dirección.</p><p>Pues todos necesitan en su vida a Jesús, <br>síguele a Él y tendrás la paz<br>que siempre buscabas.<br>No dejes el camino que te lleva hacia Él,<br>y a su lado en el mundo vencerás.</p><p>Mira a tu alrededor, dime, ¿qué ves?,<br>solo ansiedad, tristeza y corrupción.<br>Mira tú vida, vacía está, sin una razón para vivir.</p><p>Para traernos la libertad, <br>vino Jesús a mostrarnos la verdad,<br>y con su vida nos reveló, felicidad en el amor.</p>"
      },
      {
        "id":26,
        "title": "Cada día te adoraré",
        "content": "<p>Cada día te adoraré, con alegría te buscaré.<br>Eres para mí todo, mi Señor.<br>Jesús, mi Rey , mi Dios.</p>"
      },
      {
        "id":27,
        "title": "Canta aleluya al Señor",
        "content": "<p>Canta aleluya al Señor. Canta aleluya al Señor.<br>Canta aleluya. Canta aleluya.<br>Canta aleluya al Señor.</p><p>Él es el Rey y Salvador. Él es el Rey y Salvador.<br>Él es el Rey y Salvador.<br>Él es el Rey y Salvador.</p><p>Cristo viene otra vez. Cristo viene otra vez.<br>Cristo viene. Cristo viene.<br>Cristo viene otra vez.</p>"
      },
      {
        "id":28,
        "title": "Cantad alegres a Dios",
        "content": "<p>Cantad alegres a Dios, habitantes de toda la <br>tierra. Servidle con alegría, servidle con alegría.<br>Venid ante Su presencia con regocijo.</p><p>Reconoced que Dios es Dios.<br>Él nos hizo y no nosotros.<br>Pueblo suyo somos.<br>Y ovejas de su prado.</p><p>Entrad por sus puertas con gratitud.<br>Por sus atrios con alabanza.<br>Alabadle. Y bendecid Su Nombre.</p><p>Porque el Señor es bueno.<br>Para siempre Su misericordia.<br>Y Su verdad. Por todos los siglos.</p>"
      },
      {
        "id":29,
        "title": "Cantaré al Señor por siempre",
        "content": "<p>Cantaré al Señor por siempre,<br>a una voz exaltémosle.<br>Cantaré de Su gracia por siempre,<br>a una voz exaltémosle.<br>Magnifica al Señor, alabémosle.<br>Dando gloria a nuestro Rey,<br>Él por siempre reinará.</p>"
      },
      {
        "id":30,
        "title": "Clamaremos al Señor",
        "content": "<p>Clamaremos al Señor.<br>De alabanza digno es.<br>De mis enemigos me salvará.<br>Jesús vive, mi Roca y Salvación.<br>Bendito sea Su Nombre para siempre.<p>"
      },
      {
        "id":31,
        "title": "Como el ciervo busca por las aguas",
        "content": "<p>Como el ciervo busca por las aguas,<br>así clama mi alma por Ti, Señor.<br>Día y noche yo tengo sed de Ti,<br>y sólo a Ti buscaré.<br>Lléname, lléname Señor.<br>Dame más, más de tu amor.<br>Yo tengo sed, sólo de Ti. <br>Lléname Señor.</p>"
      },
      {
        "id":32,
        "title": "Gracias dad al Señor",
        "content": "<p>Con gloria Dios está avanzando,<br>En su gloriosa Majestad,<br>Por la verdad y la justicia<br>Su ejército viene a triunfar.</p><p>Gracias dad al Señor,<br>por su eterno amor. (3 veces)<br>Por siempre. (2 veces)<br>(3 veces al final)</p><p>Su ejército viene danzando,<br>con gozo en el corazón.<br>Alégrate el Reino avanza,<br>va proclamando hoy Su amor.</p>"
      },
      {
        "id":33,
        "title": "Con mi Dios yo siempre venceré",
        "content": "<p>Con mi Dios yo siempre venceré,<br>pues al enemigo Él hará caer.<br>Su gran victoria cantaré. Cristo es Rey.<br>Porqué fue Dios el que venció, su pueblo liberó.<br>El enemigo huyó a su voz.<br>El mundo podrá ver que con mi Dios...</p>"
      },
      {
        "id":34,
        "title": "Conocerte es gozo",
        "content": "<p>Conocerte es gozo. Conocerte es gozo.<br>Adorarte, adorarte es felicidad.<br>Y estar cerca de Ti,<br>Oh, Señor, es paz. (3 veces)</p>"
      },
      {
        "id":35,
        "title": "Cristo, nombre más alto",
        "content": "<p>Cristo, nombre más alto, Salvador nuestro,<br>amado Señor, Enmanuel, Dios con nosotros, <br>Fuente de vida, Cordero de Dios.</p><p>Moriste por mis pecados, Salvador mío,<br>lleno de amor. Sufriste haciéndome libre.<br>Dios hecho carne, Amado Señor.</p><p>Cristo, nombre más alto, Siervo sufriente,<br>amigo fiel. El vive, ha resucitado,<br>Rey de la iglesia, de todo el Señor.</p>"
      },
      {
        "id":36,
        "title": "Cristo tan solo pudo amarme",
        "content": "<p>Cristo tan solo pudo amarme,<br>nada podrá de Él separarme,<br>pues con Su sangre me redimió.<br>Ahora soy de Él.<br>Ahora soy de Cristo, mío también es Él, <br>puedo gozar de Su amistad,<br>por la eternidad.</p><p>Antes vivía en el pecado,<br>mi corazón de Dios alejado.<br>Más mi vergüenza Él me quitó.<br>Ahora soy de él.</p><p>Mi ser rebosa de pleno gozo,<br>Dios me liberta me da reposo,<br>pues con Su sangre me redimió.<br>Ya pertenezco a Él.</p>"
      },
      {
        "id":37,
        "title": "Crucificado, crucificado",
        "content": "<p>Crucificado, crucificado,<br>Crucificado fue mi Salvador.<br>Me ha redimido, me ha rescatado.<br>Por eso, por eso canto.</p><p>Veo en la cruz a mi Señor,<br>sufriendo angustia y terrible dolor,<br>sólo por darme salvación.<br>Por mis pecados pagaba el Señor.</p><p>Gozo hay en mí, solo en pensar,<br>Que en Jesucristo tengo la verdad.<br>Lleno es mi ser de su bondad,<br>Cuanto sufrió por darme su amistad.</p><p>Por ti también murió Jesús,<br>por darte vida, esperanza y luz.<br>Dile que sí a tan gran Dios,<br>que con tus culpas y mías cargó.</p>"
      },
      {
        "id":38,
        "title": "Cual indefenso bebé",
        "content": "<p>Cual indefenso bebé,<br>viniste al mundo en humildad,<br>para servir y ofrecer<br>Tu vida por la humanidad.</p><p>Es nuestro Dios, el Siervo Rey,<br>nos llama a ir en pos de Él.<br>Todo tu ser, día a día, ofréndale.<br>Honra a Jesús, Rey, Siervo fiel.</p><p>En el jardín del dolor<br>mi carga decidió llevar.<br>Su corazón se angustió,<br>más sometió Su voluntad.</p><p>Mirad sus manos y pies,<br>heridos por la expiación.<br>Manos que hicieron el sol<br>fueron clavadas en cruz cruel.</p><p>Sirvamos como Él sirvió,<br>y reine en nuestro corazón.<br>Dándonos a los demás,<br>porque servimos al Señor.</p>"
      },
      {
        "id":39,
        "title": "Cuán bello es el Señor",
        "content": "<p>Cuán bello es el Señor.<br>Cuán hermoso es el Señor.<br>Cuán bello es el Señor, hoy le quiero adorar.<br>La belleza de mi Señor, nunca se apagará.<br>La hermosura de mi Señor,<br>siempre resplandecerá.</p>"
      },
      {
        "id":40,
        "title": "Cuán profundo es tu amor",
        "content": "<p>Cuán profundo es tu amor,<br>No lo puedo comprender,<br>Alto es para mí. Cuán inmenso es.</p><p>Cuán profundo es tu amor,<br>Rey de los cielos.<br>Más profundo que el mar,<br>Es Tú grande amor.<br>Alto es, inmenso es, profundo es.<br>Sólo tu amor.</p><p>Siendo un vil pecador,<br>Te humillaste por mí,<br>Lo hiciste por amor, solo Tú, Señor.</p><p>Viendo Tu inmensidad,<br>Y el poder de Tu amor, <br>Sólo puedo decir: pequeño soy ante Ti.</p>"
      },
      {
        "id":41,
        "title": "Cuando escuches la voz del Señor",
        "content": "<p>Cuando escuches la voz del Señor,<br>que está llamando a tú corazón,<br>no le resistas ni quieras seguir,<br>como un rebelde.<br>Porque Él está esperando a la puerta,<br>a que le abras tú corazón, para entrar<br>y morar junto a ti toda la vida.<br>Entra Jesús, toma mi ser,<br>toda mi vida es para Ti.<br>Entre tus brazos quiero saber<br>cuanto me amas.</p>"
      },
      {
        "id":42,
        "title": "De gloria en gloria te veo",
        "content": "<p>De gloria en gloria te veo,<br>Jesús, Tú eres digno,<br>yo quiero saber más de Ti.<br>Mi Dios, cual buen alfarero levántame, <br>transfórmame, moldéame a Tu imagen, Señor.<br>Quiero ser más como Tú, ver la vida como Tú.<br>Saturarme de Tú Espíritu.<br>Reflejar al mundo tu amor. (2 veces)</p>"
      },
      {
        "id":43,
        "title": "Debo creer en Cristo",
        "content": "<p>Debo creer, creer en Cristo Jesús<br>Debo creer, creer en Cristo Jesús <br>Debo creer, creer en Cristo Jesús <br>Voy a adorar Su nombre.</p><p>Me dio Su paz, su gozo y libertad (3 veces)<br>Voy a adorar Su nombre.</p>"
      },
      {
        "id":44,
        "title": "Descanso en ti",
        "content": "<p>Descanso en Ti, mi defensor y escudo,<br>pues en la lid contigo a salvo estoy.<br>En Tu poder a combatir acudo.<br>Descanso en Ti, y en Tu nombre voy.</p><p>Oh, Salvador, voy en Tu Santo Nombre.<br>Tu Nombre amado, digno de loor.<br>Justicia, paz y redención del hombre,<br>Rey de la gloria y Príncipe de amor.</p><p>Por fe yo voy, sintiendo mi flaqueza,<br>Más en Tu gracia apoyado estoy.<br>En Tu poder está mi fortaleza.<br>Descanso en Ti y en Tu Nombre voy.</p><p>Descansaré contigo al fin en gloria,<br>entrando por portales de esplendor.<br>Tuya es la lucha, tuya la victoria.<br>Y la alabanza a Ti será, Señor.</p>"
      },
      {
        "id":45,
        "title": "Desde el pronto amanecer",
        "content": "<p>Desde el pronto amanecer,<br>hasta que se pone el sol.<br>Alabad, el Nombre de Dios. (2 veces)<br>Bendito sea el Señor,<br>y Su Nombre alaben otra vez.<br>Todo el mundo alabad.<br>Bendito sea el Señor,<br>y Su Nombre alaben otra vez,<br>por toda la eternidad.</p>"
      },
      {
        "id":46,
        "title": "Varón de dolores",
        "content": "<p>Despreciado y desechado entre los hombres, <br>varón de dolores fue mi Jesús.<br>Murió en una cruz por mis pecados.<br>Varón de dolores fue mi Jesús</p><p>Fue azotado y despreciado.<br>Varón de dolores fue mi Jesús.<br>Angustiado y afligido no abrió su boca.<br>Varón de dolores fue mi Jesús.</p><p>Como cordero fue llevado al matadero.<br>Varón de dolores fue mi Jesús.<br>Cargó en Él nuestros pecados<br>Varón de dolores fue mi Jesús.</p><p>¿Quién como Él pudo pagar?<br>Varón de dolores fue mi Jesús.<br>¿Quién como Él sufrió por mi?<br>Varón de dolores fue mi Jesús (2 veces)</p>"
      },
      {
        "id":47,
        "title": "Dios descendió y de gloria me llenó",
        "content": "<p>Día tan grande no puedo olvidar,<br>día de gloria sin par,<br>cuando en tinieblas al verme andar<br>vino a salvarme el Señor.<br>Gran compasión tuvo Cristo de mí,<br>de gozo y paz me llenó.<br>Quitó las sombras, Oh gloria a Su Nombre<br>La noche en día cambió.</p><p>Dios descendió y de gloria me llenó,<br>Cuando Jesús por gracia me salvó.<br>Fui ciego, me hizo ver, y en Él renacer.<br>Dios descendió y de gloria me llenó.</p><p>Nací de nuevo en virtud de Jesús,<br>A la familia de Dios.<br>Justificado por Cristo el Señor,<br>Gozo la gran redención.<br>Bendito sea mi Padre y Dios,<br>Que cuando vine con fe,<br>Fui aceptado por Cristo el Amado,<br>Loores por siempre daré</p><p>Tengo esperanza de gloria eternal,<br>Me regocijo en Jesús,<br>Me ha preparado un bello rincón<br>En la Mansión celestial.<br>Siempre recuerdo con fe y gratitud,<br>Al contemplar esa cruz,<br>Que Sus heridas me dieron la vida.<br>¡Alabo al Bendito Jesús!</p>"
      },
      {
        "id":48,
        "title": "Señor, Tú me salvaste",
        "content": "<p>Dicen que estoy ciego, y no puedo ver,<br>Que la vida es muy corta y la voy a perder</p><p>Señor, Tú me salvaste, Cuidarás de mí.<br>Lo único que quiero yo es parecerme a Ti.<br>Yo te quiero imitar, yo te quiero seguir,<br>Yo quiero escuchar y parecerme a Ti.<br>Yo quiero ser igual a Ti, Señor Jesús.<br>Yo quiero ser leal y llevaré Tu Cruz.</p><p>Dicen que es un sueño, una irrealidad,<br>Que son cosas de antaño y no vuelven más.</p><p>Dicen que la vida se ha de aprovechar<br>Ganando buen dinero para disfrutar.</p>"
      },
      {
        "id":49,
        "title": "Digno de gloria y alabanza",
        "content": "<p>Digno de gloria y alabanza,<br>y digno de honor es Él (2 veces)<br>Me ha redimido, sí, por su sangre, sí.<br>Mi espíritu liberó.<br>Digno de gloria y alabanza<br>y digno de honor es Él. (2 veces)</p>"
      },
      {
        "id":50,
        "title": "Digno eres",
        "content": "<p>Digno eres, digno eres, digno eres Señor.<br>De recibir gloria y honra,<br>gloria y honra y poder.<br>Porque Tú has creado todas las cosas,<br>Tú las creaste, Señor.<br>Para Tú gloria fueron creadas.</p><p>Digno eres Señor.</p>"
      },
      {
        "id":51,
        "title": "Dios mío eres tú",
        "content": "<p>Dios, Dios mío eres Tú,<br>de madrugada te buscaré (2 veces)<br>Mi alma tiene sed de Ti,<br>y mi carne te anhela,<br>En tierra seca y árida,<br>donde aguas no hay. (2 veces)</p>"
      },
      {
        "id":52,
        "title": "Dios está aquí, qué precioso es",
        "content": "<p>Dios está aquí, que precioso es.<br>Él lo prometió,<br>donde están dos o tres (2 veces)</p><p>Quédate Señor, quédate Señor,<br>Quédate Señor en cada corazón.<br>Quédate Señor, quédate Señor,<br>Quédate Señor aquí.</p><p>Oh, Cristo mío haz de mi alma un altar,<br>Para adorarte con devoción.<br>Oh, Cristo mío haz de mi alma un altar,<br>Para adorarte de todo corazón.</p>"
      },
      {
        "id":53,
        "title": "Dios está aquí",
        "content": "<p>Dios está aquí,<br>Tan cierto como el aire que respiro,<br>Tan cierto como la mañana se levanta,<br>Tan cierto como que este canto lo puedes oír.</p><p>Cristo está aquí...</p><p>El Espíritu está en mí...</p>"
      },
      {
        "id":54,
        "title": "Dios, grande es tu amor",
        "content": "<p>Dios grande es Tu amor, Tú gran amor por mí.<br>Admirable amor, que durará sin fin.<br>Divino y Santo, ancho cual es el mar,<br>Alto más que los cielos es Tu amor por mí.</p>"
      },
      {
        "id":55,
        "title": "Que somos cristianos se verá en nuestro amor",
        "content": "<p>El Espíritu Santo en Jesús nos unió (2 veces)<br>Y vendrá un nuevo día de unidad y comunión...</p><p>Y que somos cristianos se verá en nuestro <br>amor, es el rostro de Cristo nuestro amor.</p><p>juntos caminaremos una senda mejor (2 veces)<br>Proclamando la nueva que Jesús es el Señor.</p><p>Juntos trabajaremos,<br>hombro a hombro los dos (2 veces)<br>Cristo será más grande, más pequeños tu y yo.</p><p>Alabanzas al Padre porque todo nos lo dio,<br>todo amor para Cristo que en la cruz nos salvó,<br>y al Espíritu gloria, Su poder nos unió.</p>"
      },
      {
        "id":56,
        "title": "El  gran amor del Señor nunca cesa",
        "content": "<p>El gran amor del Señor nunca cesa,<br>Su misericordia jamás tiene fin.<br>Nueva es cada mañana, cada mañana,<br>Tu gran fidelidad, Señor, Tu gran fidelidad.</p>"
      },
      {
        "id":57,
        "title": "El Señor es mi luz y mi salvación",
        "content": "<p>El Señor es mi luz y mi salvación,<br>¿de quién temeré?. Él es mi fortaleza.<br>Cuando se juntaron contra mí mis enemigos,<br>mis angustiadores.<br>Aunque un ejército acampe contra mí,<br>no temerá mi corazón.<br>Aunque contra mí se levanten guerras,<br>yo viviré confiado,<br>pues una cosa yo he demandado a mi Dios,<br>esa buscaré, vivir en Su Casa<br>todos los días de mi existencia,<br>contemplar Su hermosura,<br>y esconderme bajo el manto,<br>Señor eso buscaré.</p>"
      },
      {
        "id":58,
        "title": "El Señor está en medio de ti",
        "content": "<p>El Señor está en medio de ti, poderoso, poderoso.<br>Él salvará, Se gozará sobre ti con alegría.<br>Callará de amor, se gozará sobre ti con cántico.</p><p>El Señor está en medio de ti poderoso, poderoso, <br>poderoso.</p>"
      },
      {
        "id":59,
        "title": "En Belén nació Jesús",
        "content": "<p>En Belén nació Jesús ¡Aleluya!<br>A los hombres trajo luz, ¡Aleluya!</p><p>Siendo Dios se hizo mortal ¡Aleluya!<br>Más su gloria es eternal ¡Aleluya!</p><p>Por los hombres Él murió ¡Aleluya!<br>Pero ya resucitó ¡Aleluya!</p><p>Cristo salva al pecador ¡Aleluya!<br>Si confiamos en Su amor ¡Aleluya!</p><p>A vivir con Él iré ¡Aleluya!<br>En Su amor me gozaré ¡Aleluya!</p>"
      },
      {
        "id":60,
        "title": "En mi vida",
        "content": "<p>En mi vida se glorificado, se glorificado.<br>En mi vida se glorificado, Señor.<br>En mi casa...<br>En mi canto...<br>En Tu iglesia...</p>"
      },
      {
        "id":61,
        "title": "Cara a cara",
        "content": "<p>En presencia estar de Cristo,<br>Ver Su rostro ¿qué será?,<br>Cuando al fin en pleno gozo,<br>mi alma le contemplará.</p><p>Cara a cara espero verle,<br>más allá del cielo azul.<br>Cara a cara, en plena gloria,<br>he de ver a mi Jesús.</p><p>Sólo tras oscuro velo<br>Hoy le puedo aquí mirar.<br>Más ya pronto viene el día<br>Que Su gloria ha de mostrar.</p><p>Cuanto gozo habrá con Cristo<br>cuando no haya más dolor,<br>cuando cesen los peligros<br>y ya estemos en Su amor.</p><p>Cara a cara cuan glorioso<br>ha de ser así vivir,<br>ver el rostro de quien quiso<br>nuestras almas redimir.</p>"
      },
      {
        "id":62,
        "title": "Qué hermoso eres",
        "content": "<p>En mi corazón hay una canción,<br>que demuestra mi pasión<br>para mi Rey y mi Señor,<br>para Aquel que me amó. (2 veces)</p><p>¡Qué hermoso eres!, mi Señor.<br>¡Qué hermoso eres Tú!, Amado mío.</p><p>Tú eres la fuente de mi vida,<br>y el anhelo de mi corazón. (2 veces)</p>"
      },
      {
        "id":63,
        "title": "En momentos así",
        "content": "<p>En momentos así levanto mi voz,<br>levanto mi canto a Cristo.<br>En momento así levanto mi ser,<br>levanto mis manos a Él.<br>¡Cuánto te amo, Dios! (2 veces)<br>¡Cuánto te amo, Dios!, te amo.</p>"
      },
      {
        "id":64,
        "title": "Entra en la presencia del Señor",
        "content": "<p>Entra en la presencia del Señor con gratitud,<br>y adórale de corazón.<br>Entra en la presencia del Señor con gratitud,<br>y alza tu voz, con júbilo.<br>La gloria, y la honra, la alabanza y el poder,<br>Oh, Cristo, Nombre sin igual (2 veces)</p>"
      },
      {
        "id":65,
        "title": "Venció en la cruz",
        "content": "<p>Entre los ríos, mares, cielos y tierra,<br>entre los verdes pastos de la pradera,<br>en las colinas y con el aire estás Tú, mi Señor.<br>A Tú victoria, canto de gloria le doy.</p><p>Venció en la cruz, el Señor.<br>Trajo la luz, el Señor.<br>Trajo el perdón, el Señor. Trajo el amor</p><p>En un lugar cualquiera allí estás Tú,<br>en un rincón pequeño de este mundo.<br>Y en el hombre llamas por siempre Tú,<br>en su corazón.<br>A Tú victoria, canto de gloria le doy.</p><p>Resucitó, el Señor.<br>¡Aleluya! Al Señor,<br>gloria y honor, al Señor.<br>Por siempre a Él.</p>"
      },
      {
        "id":66,
        "title": "Es un día feliz",
        "content": "<p>¡Es un día feliz, gloria a Dios por el tiempo!<br>Es un día feliz, viviendo para el Señor.<br>Es un día feliz, mejor marchan las cosas,<br>viviendo cada día las promesas de Cristo Jesús.</p>"
      },
      {
        "id":67,
        "title": "Examíname, Señor",
        "content": "<p>Examíname, Señor, y conoce mi corazón.<br>Pruébame, Señor, y conoce mis pensamientos.<br>Y ve si hay en mí camino de perversidad,<br>Y guiame, Señor, en el camino eterno.</p><p>¿Adónde me iré de Tu Espíritu?,<br>Y ¿a dónde huiré de Tu mano?.<br>Si tomare las alas del alba,<br>aún me guiará Tu presencia.</p><p>Señor, me has examinado,<br>desde lejos has visto mi vida,<br>escudriñado mi andar y reposo,<br>y mis caminos te son conocidos.</p>"
      },
      {
        "id":68,
        "title": "Fija tus ojos en Cristo",
        "content": "<p>Fija tus ojos en Cristo,<br>tan lleno de gracia y amor.<br>Y lo terrenal sin valor será,<br>a la luz del glorioso Señor.</p>"
      },
      {
        "id":69,
        "title": "Gloria por siempre al Cordero de Dios",
        "content": "<p>Gloria por siempre al Cordero de Dios,<br>a Jesús el Señor, al León de Judá,<br>La raíz de David que ha vencido<br>y el Libro abrirá.<br>Los cielos, la tierra y el mar,<br>y todo lo que en ellos hay.<br>Le adorarán y proclamarán:<br>¡Jesucristo es el Señor!</p><p>El es Señor, Él es Señor<br>Resucitado de entre los muertos, Él es Señor.<br>Toda rodilla se doblará, toda lengua confesará:</p><p>¡Jesucristo es el Señor!</p>"
      },
      {
        "id":70,
        "title": "Gracias, Dios",
        "content": "<p>¡Gracias, Dios! Por la salvación.<br>¡Gracias, Dios! Por Tú gran perdón.<br>¡Gracias, Dios! Por darme a mí, la vida eterna, <br>¡Oh, gloria a Ti!</p>"
      },
      {
        "id":71,
        "title": "Grande amor",
        "content": "<p>Grande amor, sublime, eterno,<br>más profundo que la mar,<br>y más alto que los cielos,<br>insondable y sin par.</p><p>Él la puerta ha de abrirme,<br>y por fin entrar podré.<br>Redención Él me ha comprado,<br>y perdón me da por fe.</p><p>Grande amor, sublime, eterno.<br>Soy indigno pecador,<br>más el Hijo incomparable<br>dio Su vida en mi favor.</p><p>Grande amor, sublime, eterno.<br>En la cruenta cruz murió,<br>mi bendito Jesucristo,<br>mi castigo así llevó.</p><p>Cuando al declinar el día,<br>a Su puerta llamaré,<br>con certeza y alegría,<br>los umbrales pasaré.</p>"
      },
      {
        "id":72,
        "title": "Grande es el Señor",
        "content": "<p>Grande es el Señor,<br>el Dios del Universo (3 veces)<br>Porque grande es el Señor.</p><p>Hosanna, en el cielo (3 veces)<br>Porque grande es el Señor.</p><p>Bendito es,<br>Bendito es el que viene (3 veces)<br>En el nombre del Señor.</p>"
      },
      {
        "id":73,
        "title": "Aleluya, amén",
        "content": "<p>Grandes y maravillosas son tus obras,<br>Señor, Dios Todopoderoso.<br>Justos y verdaderos son tus caminos<br>Rey de los santos (3 veces)</p><p>Aleluya, amén (4 veces)</p><p>¿Quién no te temerá, Señor,<br>y glorificará Tu nombre?<br>Pues sólo Tú eres Santo, y por lo cual<br>todas las naciones vendrán y te adorarán</p><p>Temed a Dios y dadle gloria,<br>porque sus juicios han llegado,<br>y adorad a Aquel que hizo el cielo y la tierra,<br>el mar y las fuentes de las aguas.</p>"
      },
      {
        "id":74,
        "title": "Has cambiado mi lamento en baile",
        "content": "<p>Has cambiado mi lamento en baile,<br>me ceñiste todo de alegría (2 veces)<br>Por tanto a Ti cantaré,<br>¡Gloria mía, Gloria mía!<br>Y sólo a Ti danzaré,<br>¡Gloria mía, Gloria mía!</p><p>Oh, Adonai, oh, Adonai.<br>Dios del Universo,<br>Señor de la creación (2 veces)</p><p>Los cielos cuentan Tu gloria,<br>tus hijos hoy te adoran,<br>por todas tus maravillas,<br>Oh, Adonai (2 veces)</p>"
      },
      {
        "id":75,
        "title": "Heme aquí",
        "content": "<p>Heme aquí, yo iré, Señor (2 veces)<br>Envíame a mí, que dispuesto estoy,<br>llevaré Tu Nombre a las naciones.</p>"
      },
      {
        "id":76,
        "title": "Hemos venido a este lugar",
        "content": "<p>Hemos venido a este lugar,<br>juntos en Su nombre a adorar (2 veces)<br>Hemos venido a este lugar,<br>juntos en Su nombre a adorarle a Él,<br>a Cristo, nuestro Dios y Rey.</p><p>En Su presencia estamos ya,<br>justificados por la sangre (2 veces)<br>En Su presencia estamos ya,<br>justificados por la sangre de Jesús,<br>de Cristo, nuestro Dios y Rey.</p><p>Con voz de júbilo alabad,<br>glorificad Su nombre y adorad (2 veces)<br>Con voz de júbilo alabad,<br>glorificad Su nombre y adoradle a Él,<br>a Cristo, nuestro Dios y Rey.</p><p>Por eso, olvídate de ti,<br>mira a Jesús y adórale (2 veces)<br>Por eso, olvídate de ti,<br>mira a Jesús y adórale a Él,<br>a Cristo, nuestro Dios y Rey.</p>"
      },
      {
        "id":77,
        "title": "Hermoso Salvador",
        "content": "<p>Hermoso Salvador, Creador de todo,<br>Hijo de Dios y hombre Redentor.<br>Tú nombre alabaré, te reverenciaré,<br>de mi alma, vida, paz y amor.</p><p>De tierra y cielo, toda la hermosura,<br>refleja a Cristo, mi Salvador.<br>Nadie merece, cual Jesucristo,<br>nuestra alabanza y nuestro amor.</p>"
      },
      {
        "id":78,
        "title": "Hosanna, Hosanna",
        "content": "<p>Hosanna, Hosanna,<br>Hosanna en lo alto (2 veces)<br>Alabamos Tu nombre, llenos de gratitud.<br>Te exaltamos, Señor y Dios.<br>Hosanna en lo alto.</p><p>Gloria, gloria<br>gloria al Rey de reyes (2 veces)<br>Alabamos Tu nombre, llenos de gratitud.<br>Te exaltamos, Señor y Dios.<br>Gloria al Reyes de reyes.</p>"
      },
      {
        "id":79,
        "title": "Jesucristo me llamó",
        "content": "<p>Jesucristo me llamó con su tierna voz de amor,<br>pues vagaba yo en el error,<br>en tinieblas, llanto y corrupción.<br>Más un día, una luz en el cielo a mí me alumbró,<br>que gozo andar con Cristo.</p><p>Todo ahora es de color, se acabó la oscuridad,<br>y esa luz que dentro va de mí,<br>me ilumina el camino a andar.<br>Esa fe, que el Señor Jesús me dio,<br>con Su amor, alumbra mi camino.</p>"
      },
      {
        "id":80,
        "title": "Jesús, Jesús, Jesús",
        "content": "<p>Jesús, Jesús, Jesús (2 veces)<br>Es el nombre que mi lengua proclama,<br>mi corazón adora, es Tú nombre, Jesús.<br>A este nombre Su pueblo redimido<br>le canta agradecido<br>y adora a Jesús.</p>"
      },
      {
        "id":81,
        "title": "Ven Jesús y ocupa tu lugar",
        "content": "<p>Jesús, te exaltamos,<br>adoramos a nuestro Rey.<br>Aquí estás con tu pueblo,<br>te adoramos. ¡Oh, Señor!.<br>En Tu presencia me gozaré.<br>En Tu presencia me llenaré.<br>En Tu presencia esperaré.</p><p>Ven Jesús y ocupa Tu lugar.</p>"
      },
      {
        "id":82,
        "title": "La cosa más grande de mi vida",
        "content": "<p>La cosa más grande de mi vida es<br>conocerte a Ti, Señor Jesús (2 veces)<br>Yo quiero conocerte más (2 veces)<br>La cosa más grande de mi vida es<br>conocerte a Ti.</p><p>(Amarte, Servirte, Adorarte)</p>"
      },
      {
        "id":83,
        "title": "Amar es entregarse",
        "content": "<p>La gente de nuestro tiempo,<br>no sabe lo que es el amor,<br>y viven perdiendo el tiempo,<br>buscando sin encontrar.</p><p>Amar, amar, amar es entregarse<br>en alma y cuerpo por la humanidad.<br>Vivir, vivir, vivir siempre con Cristo, <br>y disfrutar de toda Su paz.</p><p>En Cristo yo he encontrado, la plena felicidad.<br>La muerte del Crucificado<br>es un ejemplo de puro amor.</p>"
      },
      {
        "id":84,
        "title": "Deseables son",
        "content": "<p>La Ley de Jehová es perfecta,<br>que convierte el alma.<br>El testimonio de Jehová es fiel,<br>que hace sabio al sencillo.</p><p>Deseables son más que el oro,<br>que mucho oro afinado,<br>y dulces, más dulces que la miel,<br>que destila del panal. (2 veces)</p><p>Los mandamientos de Jehová son rectos,<br>que alegran el corazón.<br>El precepto de Jehová es puro<br>que alumbra los ojos.</p><p>El temor de Jehová es limpio,<br>que dura para siempre.<br>Los juicios de Jehová son verdad,<br>todos justos.</p>"
      },
      {
        "id":85,
        "title": "Lámpara es",
        "content": "<p>Lámpara es a mis pies Tú palabra (3veces)<br>Y lumbrera a mi camino.</p><p>Abre mis ojos y miraré (3 veces)<br>Las maravillas de Tu Ley.</p><p>Cuán dulces me son Tus palabras (3 veces)<br>Más dulces son que la miel.</p>"
      },
      {
        "id":86,
        "title": "La victoria está en Jesús",
        "content": "<p>La victoria está en Jesús, solo tienes que pensar,<br>que mayor es el poder de Dios<br>que el poder de Satanás.<br>La victoria está en Jesús, solo tienes que saber,<br>que aunque pasen malos tiempos<br>donde el mundo se destruye,<br>que aunque estés pasando pruebas,<br>el Señor te ayudará.<br>Te dará una salida<br>para poder soportar;<br>extenderá su mano amiga,<br>te dirá por donde andar;<br>multiplicará tus fuerzas<br>y te consolará.<p>"
      },
      {
        "id":87,
        "title": "Llama la voz de mi Salvador",
        "content": "<p>Llama la voz de mi Salvador,<br>busca mi rostro, búscame a mí.<br>Tu rostro buscaré, oh Señor,<br>no escondas más Tu rostro de mí.</p><p>Oye, Jehová, mi voz con que a Ti,<br>yo clamo, Señor, no te apartes de mí.<br>Respóndeme con palabras de amor;<br>ten misericordia de mí, oh Señor.</p><p>Aunque mis padre me dejen, Jehová,<br>con todo Tu amor me recogerás.<br>Enséñame, oh Señor, Tu virtud,<br>y dirige mis pasos con rectitud.</p><p>Hubiera yo desmayado, Jehová,<br>si yo no creyese ver Tu bondad.<br>Aguarda a Dios y esfuerzate,<br>y tu corazón, Él alentará.</p>"
      },
      {
        "id":88,
        "title": "Loor a ti",
        "content": "<p>Loor a Ti, mi Dios, loor a Ti.<br>Lo grande de Tu amor es para mí.<br>Me diste un Salvador, Cristo Jesús.<br>Loor a Ti, mi Dios, loor a Ti.</p><p>Gloria a mi Salvador, Cristo Jesús,<br>Él es el pan de vida para mí.<br>Su vida dio por mí, allá en la cruz.<br>Loor a Ti, Señor, loor a ti.</p><p>Hazme vivir, Señor, cerca de Ti.<br>La deuda de Tu amor la siento en mi,<br>te entrego a Ti mi ser, mi corazón.<br>Loor a Ti, Señor, loor a Ti.</p><p>Por Tu Espíritu hazme gozar,<br>la vida eternal, vida sin par.<br>Quiero saborear el cielo aquí.<br>Loor a Ti, Señor, loor a Ti.</p>"
      },
      {
        "id":89,
        "title": "Andando irán",
        "content": "<p>Los que con lágrimas sembraron,<br>con regocijo segarán.<br>Donde sus lágrimas regaron,<br>preciosas plantas crecerán.</p><p>Andando irán, llorando irán,<br>pero felices volverán (2 veces)</p><p>Llevando al hombro sus gavillas,<br>y en la garganta una canción;<br>no se perdieron las semillas,<br>pues dieron fruto en bendición.</p>"
      },
      {
        "id":90,
        "title": "Los que confían en Jehova",
        "content": "<p>Los que confían en Jehová,<br>son como el monte de Sión, que no se mueve,<br>sino que permanece para siempre.<br>Cómo Jerusalén tiene montes alrededor de ella,<br>así Jehová está alrededor de Su pueblo.</p>"
      },
      {
        "id":91,
        "title": "Majestad",
        "content": "<p>Majestad, load Su Majestad.<br>A Jesús sea gloria, honra y poder.<br>Majestad, toda la autoridad<br>fluye del Rey para su grey,<br>a Él cantad.<br>Exaltad y proclamad Su Santo Nombre.<br>Alabad y glorificad a Cristo Jesús.<br>Majestad, load Su Majestad,<br>El que murió y resucitó, Él es Señor.</p>"
      },
      {
        "id":92,
        "title": "Jesucristo es Rey",
        "content": "<p>Majestuoso, poderoso, digno de loor.<br>Proclamemos Su grandeza hoy.<br>Jesucristo es Rey (2 veces)<br>Postrados hoy ante Sus pies,<br>Jesucristo es Rey<br>Jesucristo es Rey </p>"
      },
      {
        "id":93,
        "title": "Maravilloso es Él",
        "content": "<p>Maravilloso es Él. Maravilloso es Él.<br>Maravilloso es, Cristo el Señor.<br>Rey Soberano aquí, y ensalzado allí.<br>Maravilloso es, Cristo el Señor.<br>Pastor amado y Rey de los siglos,<br>Omnipotente Dios.<br>Nos inclinamos y le adoramos.<br>Maravilloso es, Cristo el Señor.</p>"
      },
      {
        "id":94,
        "title": "Maravilloso Jesús es es para mí",
        "content": "<p>Maravilloso Jesús es para mí, y más dulce<br>que la miel que mana del panal. (2 veces)<br>Me liberó, Él me liberó,<br>yo le alabaré por toda la eternidad (2 veces)</p>"
      },
      {
        "id":95,
        "title": "Más quiero amarle",
        "content": "<p>Más de Jesús quiero aprender,<br>Más de Su gracia conocer,<br>Más del amor con que me amó,<br>Más de la cruz en que Él murió.</p><p>Más quiero amarle,<br>Más quiero honrarle,<br>Más de Su salvación gozar,<br>Más de Su dulce amor gustar.</p><p>Más de Jesús quisiera hablar,<br>Más de su comunión gozar,<br>Más de sus dones recibir,<br>Más con los otros compartir.</p><p>Más de Jesús anhelo ver,<br>Más de su hermoso parecer,<br>Más de la gloria de su faz,<br>Más de su luz, más de su paz.</p><p>Más de Jesús y su esplendor,<br>Más de su reino y gran amor,<br>de Su venida y su verdad,<br>de Cristo, Príncipe de Paz.</p>"
      },
      {
        "id":96,
        "title": "Me amas Tú, Señor",
        "content": "<p>Me amas Tú, Señor,<br>yo te adoraré,<br>y mi gratitud yo te expresaré.<br>Te cantaré, Señor,<br>un cántico de amor,<br>gracias, Dios.</p>"
      },
      {
        "id":97,
        "title": "Mirad cual amor nos ha dado el Padre",
        "content": "<p>Mirad cual amor nos ha dado el Padre<br>al hacernos hijos de Dios.<br>Mirad cual amor nos ha dado el Padre<br>al hacernos hijos de Dios<br>Para ser llamados hijos de Dios<br>Para ser llamados hijos de Dios</p>"
      },
      {
        "id":98,
        "title": "Mi buen pastor es Jehová",
        "content": "<p><Mi buen pastor es Jehová<br>de nada careceré.<br>Por aguas de paz, y pastos de amor,<br>Su mano condúceme.</p><p>Su nombre potente me guiará<br>en sendas de rectitud.<br>Mi alma Él confortará<br>con gran solicitud.</p><p>Aunque anda en valle de oscuridad<br>o en sombra de muerte esté,<br>mi protector conmigo irá<br>y yo no temeré.</p><p>Rebosa mi copa y Tu unción<br>desciende sobre mí.<br>La mesa me aderezarás<br>en este desierto hostil.</p><p>Mi vida toda hasta el fin<br>la gracia ha de llenar;<br>y en Tu casa celestial<br>por siempre he de morar.</p>"
      },
      {
        "id":99,
        "title": "Mirad cuán bueno y cuán delicioso es",
        "content": "<p>Mirad cuan bueno y cuan delicioso es, (2 veces) <br>habitar los hermanos juntos, en armonía,<br>porque allí envía el Señor bendición y vida eterna, <br>porque allí envía el Señor bendición.</p>"
      },
      {
        "id":100,
        "title": "Te da la paz",
        "content": "<p>Mucho porque vivir,<br>Cristo tiene mucho que darte (2 veces)</p><p>Te da la paz, te da el amor,<br>te da la felicidad (2 veces)</p><p>Él tiene para ti,<br>lo que tú no has encontrado (2 veces)</p><p>Entrégale hoy tu ser,<br>y podrás apreciar la vida (2 veces)</p>"
      },




      {
        "id": 222,
        "title": "Ante el trono del Gran Dios",
        "content": "<p>Ante el Trono del Gran Dios<br>tengo un perfecto Defensor.<br>Un mediador llamado amor,<br>Que siempre aboga allí por mí.<br>Grabado en sus manos estoy,<br>Y escrito en su corazón;<br>Vive en el cielo el Salvador,<br>//me guarda un sitio junto a sí//</p><p>Si Satanás me hace buscar<br>La culpa que hay dentro de mí,<br>Alzo la vista y allí está<br>Quien al pecado puso fin.<br>Mi alma es libre y es así,<br>Porque mi Salvador murió,<br>Le satisface al justo Dios<br>//mirarle y perdonarme a mí//</p><p>He aquí el Cordero que murió,<br>Es mi justicia y perfección.<br>El inmutable gran Yo Soy,<br>El Rey de gracia, gloria y paz.<br>Uno con Él soy inmortal,<br>Su sangre mi alma redimió,<br>Mi vida escondida está,<br>//con Él, Jesús, mi Salvador//</p>"
      },
      {
        "id": 223,
        "title": "Poderoso",
        "content": "<p>Su amor me alcanzó,<br>En la Cruz por mi murió.<br>Mi pecado Él llevó,<br>Con poder resucitó.</p><p>Sigue siendo siempre fiel,<br>Mi refugio, mi sostén,<br>Jesucristo es la verdad<br>Que me dio la libertad</p><p>Poderoso, poderoso<br>Me libraste, me salvaste.<br>Está escrito, has vencido,<br>Cristo, Tú eres Señor.</p><p>Sin principio, sin final,<br>Esperanza sin igual,<br>El perdido encontró<br>En Jesús la salvación.</p><p>Poderoso, poderoso<br>Me libraste, me salvaste.<br>Está escrito, has vencido,<br>Cristo, Tú eres Señor.</p><p>Que tu nombre sea exaltado,<br>Sea exaltado. Sea exaltado.  (3 veces)</p><p>Poderoso, poderoso<br>Me libraste, me salvaste.<br>Está escrito, has vencido,<br>Cristo, Tú eres Señor.</p>"
      },
      {
        "id": 224,
        "title": "Yo quiero exclamar",
        "content": "<p>Cuando pienso en como Dios<br>Me ha salvado, restaurado,<br>Me ha llenado de Su Espíritu,<br>Con su sangre me sanó en la Cruz.</p><p>Mi alma rescató, mi vida cambió,<br>En la Roca, Él, mis pies afirmó.</p><p>Yo quiero exclamar:<br>¡¡Aleluya, gracias Cristo,<br>Dios, eres digno de toda gloria,<br>De toda honra y adoración!!! (2 veces)</p>"
      },
      {
        "id": 225,
        "title": "La tierra le pertenece a Dios",
        "content":"<p>La tierra le pertenece a Dios<br>Con su mano todo afirmó,<br>Todo es suyo, todo es de nuestro Rey.<br>La vida creó con su poder,<br>Alabe con gozo cada ser,<br>Cantándole a Él, cantándole solo a Él.</p><p>Todo el mundo cantará<br>Jesús es Rey en majestad.</p><p>Abrid de par en par las puertas de la ciudad<br>Abridle paso a nuestro Rey.<br>Victoria traerá, por siempre reinará.<br>Abridle paso a nuestro Rey.</p>"
      },
      {
        "id": 226,
        "title": "Cristo Mesías",
        "content":"<p>Quien no pecó, pecado fue,<br>Haciéndonos ser justicia en Él.<br>Sirvió, se humilló, cargó con la cruz.<br>Gracia Sublime. Gracia Sublime.</p><p>Cristo Mesías. Nombre más alto.<br>Redentor Santo, Emanuel.<br>Rescate del hombre. Enviado del cielo.<br>Cristo Mesías, el Señor.</p><p>Su cuerpo, el pan, partido fue.<br>El vino su sangre que vertió.<br>El velo roto. La creación tembló.<br>Gracia Sublime. Gracia Sublime</p><p>Cristo Mesías. Nombre más alto.<br>Redentor Santo, Emanuel.<br>Rescate del hombre. Enviado del cielo.<br>Cristo Mesías, el Señor.</p><p>Nuestra fe está en Ti, nuestra fe está en Ti.<br>Toda Gloria a Ti, Dios.<br>Del mundo la Luz. (2 veces)</p><p>Cristo Mesías. Nombre más alto.<br>Redentor Santo, Emanuel.<br>Rescate del hombre. Enviado del cielo.<br>Cristo Mesías, el Señor.</p>"
      },
      {
        "id": 227,
        "title": "Poderoso, nunca fallará",
        "content":"<p>Poderoso<br>Nunca fallará.<br>Omnipotente Dios.<br>Más de lo que busqué,<br>Más de lo que pedí.<br>¡Grande es nuestro Dios!</p><p>El triunfó, a la muerte venció.<br>Vivo está, es poderoso.<br>En Jesús soy vencedor.<br>Nuestro Dios es Poderoso.</p><p>Dios me guía,<br>El conmigo está.<br>Un camino hará.<br>Más de lo que soñé,<br>Más de lo que esperé.<br>¡Grande es nuestro Dios!</p><p>El triunfó, a la muerte venció.<br>Vivo está, es poderoso.<br>En Jesús soy vencedor.<br>Nuestro Dios es Poderoso.</p><p>Dios me cuida, Él conmigo está.<br>Él nunca me deja, Él nunca me deja.<br>Dios me ama con eterno amor.<br>El nunca me falla, Él nunca me falla.</p><p>El triunfó, a la muerte venció.<br>Vivo está, es poderoso.<br>En Jesús soy vencedor.<br>Nuestro Dios es Poderoso.</p>"
      },
      {
        "id": 228,
        "title": "Tu amor inundó mi corazón",
        "content":"<p>Tu amor inundó mi corazón,<br>Creo en Tu Palabra, oh Dios.<br>Espero en Ti, renuévame<br>Con tu Espíritu Jesús.</p><p>Y vengo ante tus pies,<br>Vengo ante tus pies.<br>Rendido te adoraré.</p><p>Tu presencia en mí guía mi andar,<br>Tu Palabra es la verdad.<br>Restauración y redención<br>Encontré en Ti, Señor.</p><p>Y vengo ante tus pies,<br>Vengo ante tus pies.<br>Rendido te adoraré.</p><p>Todo lo diste Tú por mí,<br>Tu vida entregaste al morir.<br>Cuán grande amor, Él derramó.<br>Es nuestro Dios.<br>Sobre la muerte el venció<br>Digno de honor y adoración.<br>Siervo y Rey, el Salvador.<br>Es nuestro Dios.</p>"
      },
      {
        "id": 229,
        "title": "La sangre de Jesús me redimió",
        "content":"<p>La sangre de Jesús me redimió,<br>Me perdonó y libertad me dio.<br>Tu majestad está dentro de mí.<br>Por siempre creo en Ti.<br>Por siempre creo en Ti.</p><p>Me inundas con justicia y amor,<br>Tu gracia cautivó mi corazón.<br>Tu espíritu me guía a la verdad.<br>Tu amor no fallará.<br>Tu amor no fallará.</p><p>Por amor Dios dio, Su Hijo único, Jesús<br>Por mi murió. Me dio esperanza y salvación,<br>En mi lugar, su vida entregó en la Cruz.<br>Me amó, me amó aún sin merecerlo. (3 veces)</p><p>Me inundas con justicia y amor,<br>Tu gracia cautivó mi corazón.<br>Tu espíritu me guía a la verdad.<br>Tu amor no fallará.<br>Tu amor no fallará.</p><p>Por amor Dios dio, Su Hijo único, Jesús<br>Por mi murió. Me dio esperanza y salvación,<br>En mi lugar, su vida entregó en la Cruz.<br>Me amó, me amó aún sin merecerlo. (2 veces)</p>"
      },
      {
        "id": 230,
        "title": "El poder de la cruz",
        "content":"<p>Oh el ver aquel negro amanecer,<br>Rumbo al calvario va Jesús.<br>Grande fue el dolor y la humillación<br>Cuando en la cruz murió.</p><p>El poder de la cruz,<br>Mi lugar Él tomó.<br>Mi castigo sufrió.<br>En esa cruz hallé perdón.</p><p>Oh, ver el dolor que tu faz mostró<br>Cargando mi pecado atroz.<br>Todo mal pensar, toda mala acción,<br>Coronaron tu humillación.</p><p>La tierra tembló, todo oscureció,<br>Su rostro inclina, Su Creador.<br>Velo roto en dos, triunfante exclamó:<br>¡¡Todo cumplido está!!</p><p>Oh, mi nombre ver escrito en tu cruz,<br>Porque sufriste, libre soy.<br>Ya no moriré, vida me otorgó<br>Tu generoso amor.</p><p>El poder de la Cruz,<br>Dios al Hijo inmoló.<br>¡Qué alto precio pagó!<br>En esa cruz hallé perdón.</p>"
      },
      {
        "id": 231,
        "title": "Hermoso Dios",
        "content":"<p>Hermoso Dios<br>Tu majestad dejaste atrás,<br>Extiendes tu amor para salvar,<br>Luz traes en la oscuridad, oh.</p><p>Rey Redentor<br>Sacrificaste Tu Honor,<br>Pese a mi orgullo y perdición,<br>Me abrazas con tu infinito amor, oh.</p><p>Y yo vengo a postrarme ante tus pies,<br>Tu Gracia inunda todo mi ser,<br>Nada se iguala a tu amor, tu amor.<br>Que arde en mi ser.</p><p>Mi Salvador<br>Aliento de mi corazón,<br>Alumbras mi senda con tu voz,<br>Por siempre me rindo ante tu amor, oh.</p><p>Y yo vengo a postrarme ante tus pies,<br>Tu Gracia inunda todo mi ser,<br>Nada se iguala a tu amor, tu amor.<br>Que arde en mi ser.</p><p>Toma Dios todo lo que soy,<br>Con todo mi ser, yo te amo.<br>Toma Dios, todo te lo doy,<br>Con mi corazón te adoro (2 veces)</p><p>Y yo vengo a postrarme ante tus pies,<br>Tu Gracia inunda todo mi ser,<br>Nada se iguala a tu amor, tu amor.</p>"
      },
      {
        "id": 232,
        "title": "Mi vida es Cristo",
        "content":"<p>En densa oscuridad vagué, perdido en el error<br>La senda vana del placer a muerte me llevó.<br>Siendo rebelde a Tu voz quisiste amarme así<br>De no haber sido por Tu amor aún huiría de Ti.</p><p>En rumbo a mi perdición indiferente aún<br>De mi tuviste compasión, me guiaste a la cruz.<br>Y contemplé tu gran bondad, sufriste tu por mi<br>Y al morir en mi lugar, tu gracia recibí.</p><p>Aleluya, mi vida es Cristo.<br>Aleluya, Jesús es mi todo.</p><p>Ahora Señor, tuyo seré y viviré por Ti<br>Tus mandamientos seguiré, por Tu poder en mi.<br>Usa mi vida, oh Señor, como lo quieras Tu<br>Y sea siempre mi canción \"Mi gloria eres Tú\"</p><p>Aleluya, mi vida es Cristo.<br>Aleluya, Jesús es mi todo.</p>"
      },
      {
        "id": 233,
        "title": "¿Cómo podré dejar de alabar?",
        "content":"<p>Una y otra vez suena en mi ser, se oye su canción.<br>Puedo tormentas ver, me mantengo en pie,<br>En la Roca estoy.</p><p>¿Cómo podré dejar de alabar?<br>¿Cómo podré dar expresión<br>a lo asombroso de Tu amor?<br>¿Cómo impedir Tu nombre gritar?<br>Saber que me ama el Rey<br>hace mi corazón responder.</p><p>Mi voz se alzará en la oscuridad.<br>Vivo está mi Salvador.<br>Tú velarás por mí y ando junto a Ti<br>Cantando esta canción</p><p>¿Cómo podré dejar de alabar?<br>¿Cómo podré dar expresión<br>a lo asombroso de Tu amor?<br>¿Cómo impedir Tu nombre gritar?<br>Saber que me ama el Rey<br>hace mi corazón responder.</p><p>Cantaré en la inquietud y al ganar,<br>Cantaré cuando de traspiés, si me vuelvo a caer.<br>Cantaré porque allí estás Tú, me sostendrás.<br>Cantaré porque me oyes Dios, cuando clamo en oración.<br>Con mi último aliento se que lo haré,<br>Rodeando Tu Trono, con los santos cantaré.</p><p>¿Cómo podré dejar de alabar?<br>¿Cómo podré dar expresión<br>a lo asombroso de Tu amor?<br>¿Cómo impedir Tu nombre gritar?<br>Saber que me ama el Rey<br>hace mi corazón responder.</p>"
      }
    ];
    return {
      getAll: function() {
        return data;
      },
      findByID: function (id){
        var res = [];
        angular.forEach(data,function(obj){
          if(obj.id == id){
            res.push(obj);
          }
        });
        return res;
      },
      findByName: function(name){
        var res = [];
        angular.forEach(data,function(obj){

        });
        name = name.toUpperCase();
        angular.forEach(data, function(obj) {
          if( obj.title.toUpperCase().indexOf(name) >= 0 ) res.push(obj);
        });
        return res;
      },
      getBookmarks: function(){
        var res = [];
        var bookmarks = localstorage.getObject('bookmarks');

        angular.forEach(data, function(obj){
          angular.forEach(bookmarks, function(b){
            if(b == obj.id){
              res.push(obj);
            }
          })
        });

        return res;

      }
    }
  }]);
