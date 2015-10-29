ionicUtilsVar
  .factory('newBook', ['localstorage', '$q','utils', function(localstorage, $q, utils) {
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
        "id":101,
        "title": "Nada es comparable a Ti, mi Señor",
        "content": "<p>Nada es comparable a Ti, mi Señor.<br>Nada es codiciable como Tu favor.<br>Señor adorable te abro el corazón.<br>Nada es comparable a Ti, mi Señor.</p><p>Grande maravilla, celeste esplendor,<br>Gran Dios que te humillas por mi salvación.<br>Bondad inefable te abro el corazón.<br>Nada es comparable a Ti, mi Señor.</p><p>Cuando considero Tu humilde lección,<br>mi vida te ofrezco en adoración.<br>Amor sin medida, te abro el corazón.<br>Nada es comparable a Ti, mi Señor.</p><p>Manantial de vida, fuente de dulzor,<br>inundaste al mundo con Tu inmenso amor.<br>Bondad sin igual, te abro el corazón.<br>Nada es comparable a Ti, mi Señor.<p>"
      },
      {
        "id":102,
        "title": "No hay Dios tan grande como Tú",
        "content": "<p>No hay Dios tan grande como Tú,<br>no lo hay, no lo hay (2 veces)<br>No hay Dios que pueda hacer las obras,<br>como las que haces Tú. (2 veces)</p><p>No es con espada, ni con ejército,<br>más con Tu Santo Espíritu (2 veces)<br>Y estas almas se salvarán (3 veces)<br>Por Tu Santo Espíritu.</p>"
      },
      {
        "id":103,
        "title": "Morando al abrigo del Señor",
        "content": "<p>Morando al abrigo del Señor<br>tenemos seguridad.<br>Juntos ofrecemos al cantar<br>nuestra adoración, adoración,<br>adoración al Rey.</p><p>Agradecidos estamos a sus pies,<br>viviendo en Su amor.<br>Unimos nuestras voces al cantar<br>Digno, Digno,<br>Digno es el Señor.</p><p>Corazones limpios por Su amor,<br>alaban Su Santidad.<br>Guiados por Su Espíritu al cantar<br>Santo, Santo,<br>Santo es el Señor.</p>"
      },
      {
        "id":104,
        "title": "No lo que quiera ser",
        "content": "<p>No lo que quiera ser, ni donde quiera ir,<br>pues ¿quién soy yo, Señor, mi camino a elegir?<br>Mi Dios escogerá, Él sabe lo mejor,<br>donde Él me mande yo iré.</p>"
      },
      {
        "id":105,
        "title": "Oh, amor de Dios brotando está",
        "content": "<p>Oh, amor Dios, su inmensidad,<br>el hombre no podrá contar,<br>ni comprender la gran verdad<br>que Dios al mundo pudo amar.<br>El gran amor del Redentor<br>por siempre durará.<br>La gran canción de salvación<br>Su pueblo cantará.</p><p>Oh, amor de Dios brotando está<br>Inmensurable, eternal.<br>Por las edades durará.<br>Inagotable caudal.</p><p>Si fuera tinta todo el mar<br>y todo el cielo un gran papel,<br>y cada hombre un escritor,<br>y cada hoja un pincel,<br>nunca podrían describir<br>el gran amor de Dios<br>que al hombre pudo redimir<br>de su pecado atroz.</p>"
      },
      {
        "id":106,
        "title": "Oh deja que el Señor se mueva",
        "content": "<p>Oh deja que el Señor se mueva<br>con su Espíritu de amor,<br>satisfaga hoy tu alma y corazón.<br>Entrégale lo que te pide<br>y su Espíritu vendrá sobre ti,<br>y vida nueva te dará.</p><p>Cristo, Cristo ven y llénanos.<br>Cristo, Cristo llénanos de Ti.</p><p>Alzamos nuestra voz con gozo,<br>nuestra alabanza a Ti;<br>con dulzura te entregamos nuestro ser.<br>Entrega toda tu tristeza<br>en el nombre de Jesús,<br>y abundante vida hoy tendrás en Él.</p>"
      },
      {
        "id":107,
        "title": "Ven y deléitate en el Señor",
        "content": "<p>Oh, ven. Ven y deléitate en el Señor,<br>y Él te concederá las peticiones de tu corazón.</p><p>Confía solo en Él, y Él te dará.<br>Espera solo en Él, y Él hará</p>"
      },
      {
        "id":108,
        "title": "Oh Dios eterno, tu misericordia",
        "content": "<p>Oh Dios eterno Tu misericordia<br>ni una sombra de duda tendrá,<br>tu compasión y bondad nunca fallan<br>y por los siglos El mismo serás.</p><p>Oh, Tu fidelidad. Oh, Tu fidelidad,<br> cada momento la veo en mi.<br>Nada me falta pues todo provees.<br>Grande Señor es Tu fidelidad.</p><p>La noche oscura, el sol y la luna,<br>las estaciones del año también,<br>unen sus voces cual fieles criaturas,<br>porque eres bueno por siempre eres fiel.</p><p>Tu me perdonas, me impartes el gozo,<br>tierno me guías por sendas de paz.<br>Eres mi fuerza, mi fe, mi reposo,<br>y por los siglos mi Padre serás.</p>"
      },
      {
        "id":109,
        "title": "Oh profundo amor de Cristo",
        "content": "<p>Oh, profundo amor de Cristo,<br>vasto, inmerecido don.<br>Cuál océano infinito,<br>ya me inunda el corazón.<br>Me rodea, me sostiene,<br>la corriente de Su amor.<br>Llévame contínuamente<br>hacia el gozo del Señor.</p><p>Oh, profundo amor de Cristo,<br>Sus loores tributad,<br>pues su amor nos satisfizo<br>y no cambiará jamás.<br>Cómo cuida a sus amados<br>redimidos por Su cruz.<br>Comunión con Él gozamos<br>cuando andamos en la luz.</p><p>Oh, profundo amor de Cristo,<br>Único, supremo amor.<br>Cual un vasto mar bendito,<br>cual hogar al viador.<br>Oh, profundo amor de Cristo,<br>pura gloria es para mi,<br>pues me eleva, salvo y libre<br>hacia el cielo, hacia Ti.</p>"
      },
      {
        "id":110,
        "title": "Oh Señor, tú me sacaste del sitio donde vivía",
        "content": "<p>Oh, Señor, Tú me sacaste<br>del sitio donde vivía,<br>me lavaste con Tu sangre,<br>me llenaste de Tu vida.</p><p>Vida nueva Tu me dabas,<br>en la cruz donde morías,<br>esa cruz, en el calvario,<br>donde Tu diste tu vida.</p><p>Haz de mi un vaso nuevo, Señor,<br>donde otros puedan beber, Señor,<br>beber de Tu agua viva,<br>agua que quita la sed. (2 veces)</p>"
      },
      {
        "id":111,
        "title": "Padre nuestro",
        "content": "<p>Padre nuestro que estás en los cielos,<br>santificado sea tu nombre.<br>Que venga tu reino, que se haga tu voluntad,<br>tanto aquí en la tierra, como en el cielo.<br>El pan nuestro de cada día, dánoslo hoy también.<br>Y perdónanos nuestras deudas, como perdonamos <br>a nuestros deudores también.<br>Y no nos metas en tentación, más líbranos del <br>mal; porque tuyo es el reino, el poder y la gloria.<br>Por siempre, para siempre, por siempre.<br>Amén. Amén.<p>"
      },
      {
        "id":112,
        "title": "Padre, únenos",
        "content": "<p>Padre, únenos. Padre, únenos.<br>Que el mundo crea que enviaste al Hijo.<br>Padre, únenos.</p>"
      },
      {
        "id":113,
        "title": "Para Ti quiero cantar",
        "content": "<p>Para Ti, oh Señor, para Ti quiero cantar,<br>tengo gozo en mi alma cuando canto para Ti.//<br>Por tu grande amor eres lo máximo,<br>y mi alma se goza cuando canto para Ti.//<br>La, la, la....</p><p>Por tu grande amor eres lo máximo,<br>y mi alma se goza cuando canto para Ti.</p>"
      },
      {
        "id":114,
        "title": "Porque para siempre, oh Dios, tu misericordia es",
        "content": "<p>Porque para siempre, oh Dios,<br>tu misericordia es (2 veces)<br>Más grande que el ancho mar,<br>más alta que el cielo está,<br>porque para siempre, oh Dios,<br>tu misericordia es.<br>Mejor que la vida es,<br>mi alma lo sabe bien,<br>porque para siempre, oh Dios,<br>tu misericordia es.</p>"
      },
      {
        "id":115,
        "title": "¿Por que se preocupa el hombre por el comer y el vestir?",
        "content": "<p>¿Porqué se preocupa el hombre<br>por el comer y el vestir?<br>cómo si solo en su cuerpo <br>se reflejara el vivir.<br>Todos están preocupados<br>por el mucho poseer.<br>Solo se piensa en el lujo<br>y en colmarse de placer.</p><p>Mirad los lirios del campo<br>como crecen por doquier,<br>no se vistió como ellos<br>ni el más importante rey.<br>Mirad las aves del cielo<br>volando al ponerse el sol,<br>nunca se mueren de hambre<br>las alimenta el Señor.</p><p>Si Dios cuida de los seres<br>que para adorno creó<br>¿cómo no cuidará al hombre,<br>su obra de más valor?<br>Busquemos primeramente<br>en todo el Reino de Dios,<br>y todas las demás cosas<br>las añadirá Su amor.</p>"
      },
      {
        "id":116,
        "title": "Postrándonos ante Ti",
        "content": "<p>Postrándonos ante Ti, Señor,<br>tu presencia lo llena todo,<br>los cielos no pueden contenerte,<br>ni tampoco el Universo,<br>pues ¿quién soy yo para servirte,<br>o para que me consideres?<br>eres Alfa y Omega, el Principio y el Fin,<br>Dios Todopoderoso que estás vestido de <br>majestad.</p><p>Majestad (4 veces)<br>Postrándonos ante Ti, Señor,<br>alzamos nuestras manos.</p>"
      },
      {
        "id":117,
        "title": "Pueblos todos, batid las manos",
        "content": "<p>Pueblos todos, batid las manos,<br>alabad a Jehová con voz de júbilo (2 veces)<br>Porque Jehová el Altísimo es temible,<br>Rey grande sobre toda la tierra (2 veces)</p>"
      },
      {
        "id":118,
        "title": "Qué bueno es alabar al Señor",
        "content": "<p>Que bueno es alabar al Señor<br>y cantar a Su Nombre (2 veces)<br>Anunciar por la mañana Su misericordia,<br>Su fidelidad cada noche (2 veces)</p>"
      },
      {
        "id":119,
        "title": "Qué hermosos son los pies del que trae salvacion",
        "content": "<p>Que hermosos son los pies del que trae salvación, <br>anuncia paz y amor.<br>Felicidad proclama al alzar su voz.</p><p>Nuestro Dios reina hoy (3 veces)</p><p>Lugares de Jerusalén gritad de amor,<br>Dios nos salvó, salvó.<br>Dios trae consuelo a su pueblo rescató.</p><p>Toda la tierra ved la salvación de Dios,<br>Cristo es Señor, Señor.<br>Ante los pueblos su poder Él demostró</p>"
      },
      {
        "id":120,
        "title": "Que la gloria del Señor sea por siempre",
        "content": "<p>Que la gloria del Señor sea por siempre,<br> que se goce su creación.</p><p>Al Señor cantaré con todo mi ser,<br>a Su nombre cantaré mientras viva yo.</p>"
      },
      {
        "id":121,
        "title": "Este es Jesús",
        "content": "<p>¿Qué niño es este que se halla<br>en brazos de María?<br>Que ángeles anuncian ya<br>a pastores con alegría.</p><p>Este es Jesús, el Rey,<br>Eterno Dios y Redentor.<br>Calle la duda, pues,<br>el niño es el Mesías.</p><p>Al lado de corderos y asnos<br>yace Jesucristo,<br>más ángeles con dulce voz<br>sus alabanzas cantan.</p>"
      },
      {
        "id":122,
        "title": "Queremos ser un pueblo fuerte en Ti",
        "content": "<p>Queremos ser un pueblo fuerte en Ti,<br>que nuestros ojos de tu amor no se separen.<br>Que nuestras vidas se rindan a tu servicio <br>siempre, Señor.</p><p>Danos tu fuerza para luchar, Señor,<br>y toma nuestros corazones solo para Ti,<br>y cámbialos, Señor con Tu amor.</p>"
      },
      {
        "id":123,
        "title": "Quiero alabarte",
        "content": "<p>Quiero <b>alabarte</b> más y más aún.<br>Quiero <b>alabarte</b> más y más aún.<br>Buscar Tu voluntad, Tu gracia conocer,<br>quiero <b>alabarte</b>.</p><p>Las aves del cielo cantan para Ti.<br>Las flores del campo reflejan Tu poder.<br>Quiero cantar,<br>quiero levantar mis manos a Ti.</p><p>(<b>servirte</b>, <b>amarte</b>)</p>"
      },
      {
        "id":124,
        "title": "Quiero cantar una bella canción",
        "content": "<p>Quiero cantar una bella canción<br>de un amigo que me transformó.<br>Quiero cantar una bella canción<br>de Aquel que mi vida cambió.</p><p>Es mi amigo Jesús (2 veces)<br>Él es Dios, Él es Rey,<br>es amor y verdad.<br>Sólo en Él encontré<br>esa paz que busqué.<br>Sólo en Él encontré la felicidad.</p><p>Quiero cantar una bella canción<br>de Jesús que el camino mostró.<br>Quiero cantar una bella canción<br>de Aquel que mi alma salvó.</p><p>Quiero que sepas que Cristo te ama,<br>te busca y te quiere ayudar,<br>de tu camino difícil y tu vida triste<br>te quiere sacar.</p>"
      },
      {
        "id":125,
        "title": "Quiero levantar mis manos ",
        "content": "<p>Quiero levantar mis manos,<br>quiero levantar mi voz,<br>ofrecerte a Ti mi vida<br>en santidad y amor.<br>Padre, sólo a Ti te ofrezco<br>mi vida y mi corazón,<br>y me postro en Tu presencia<br>en adoración.</p><p>¡Hijo de Dios!, recibe hoy<br>toda la gloria,<br>la honra y el honor (2 veces)</p>"
      },
      {
        "id":126,
        "title": "Quiero llenar Tu trono de alabanza",
        "content": "<p>Quiero llenar Tu trono de alabanza,<br> quiero llenar Tu trono de adoración,<br>quiero adorar y entrar en Tu presencia,<br>y proclamarte, Señor. (2 veces)</p>"
      },
      {
        "id":127,
        "title": "Regocíjate y canta",
        "content": "<p>Regocíjate y canta,<br>oh moradora de Sión (2 veces)<br>Porque grande es (3 veces)<br>en medio de ti el Santo de Israel.</p><p>Regocíjate y canta,<br>iglesia amada del Señor (2 veces)<br>Porque grande es (3 veces)<br>en medio de ti el Espíritu de Dios.</p>"
      },
      {
        "id":128,
        "title": "Renuévame, Señor Jesús",
        "content": "<p>Renuévame, Señor Jesús, ya no quiero ser igual.<br>Renuévame, Señor Jesús, haz en mí Tu voluntad.<br>Porque todo lo que hay dentro de mi<br>necesita ser cambiado, Señor.<br>Porque todo lo que hay dentro de mi corazón<br>necesita más de Ti. (2 veces)</p>"
      },
      {
        "id":129,
        "title": "Restaurarás el Santo Lugar",
        "content": "<p>Restaurarás el Santo Lugar<br>y pondrás allí Tu habitación.<br>Te mostrarás poderoso Dios<br>en Tu amor me regocijo hoy. (2 veces)</p><p>Lo dilatado de Tu Imperio y Tu santa paz<br>los confines abarcarán,<br>y la creación entera nunca jamás gemirá<br>tus hijos se manifestarán.</p><p>Somos lugar santísimo, somos Tu habitación,<br>una nueva generación.<br>Que Tu gloria postrera lleve la iglesia de hoy.<br>Venga Tu Reino, Señor.</p>"
      },
      {
        "id":130,
        "title": "Rey de reyes",
        "content": "<p>Rey de reyes, Señor de señores,<br>Gloria, Aleluya.<br>Cristo, Príncipe de Paz, Gloria, Aleluya.</p>"
      },
      {
        "id":131,
        "title": "Santo, Santo es el Señor",
        "content": "<p>Santo, Santo es el Señor,<br>Todopoderoso. (2 veces)<br>Su Gloria llena la Tierra<br>Su Gloria llena la Tierra<br>Su Gloria llena la Tierra</p><p>¡Santo es el Señor!</p>"
      },
      {
        "id":132,
        "title": "Santo, Santo, Santo Señor",
        "content": "<p>Santo, Santo, Santo Señor,<br> Todopoderoso.<br> Su gloria llena la Tierra. (2 veces)<br> Hosanna, Hosanna.<br>En las alturas. (2 veces)</p><p>Santo, Santo, Santo Señor,Todopoderoso.</p><p>Su gloria llena la Tierra.</p>"
      },
      {
        "id":133,
        "title": "Santo, Santo",
        "content": "<p>Santo, Santo, Santo ,Santo,<br>Santo, Santo eres Tu, Señor Dios fuerte.<br>Nuestras vidas entregamos<br>como ofrenda a Ti, Señor.<br>Santo, Santo, Santo, Santo.</p><p>Padre amado, Padre amado<br>bendición es ser tus hijos, Padre amado,<br>nuestros labios te bendicen<br>en señal de nuestro amor.<br>Padre amado, Padre amado.</p><p>Jesucristo, Jesucristo,<br>nos salvaste por Tu Gracia, Jesucristo.<br>Nuestro corazón te damos<br>en señal de nuestro amor.<br>Jesucristo, Jesucristo.</p><p>Santo Espíritu, Santo Espíritu,<br>ven y llena nuestra vida, Santo Espíritu.<br>Nuestra alma te adora<br>en señal de nuestro amor.<br>Santo Espíritu, Santo Espíritu.</p><p>Santo, Santo, Santo, Santo....</p>"
      },
      {
        "id":134,
        "title": "Santo, Santo, Santo eres Tú",
        "content": "<p>Santo, Santo, Santo eres Tú.<br>Reinas en majestad, sobre tierra y mar.<br>Tu gloria es declarada por la creación,<br>me uno hoy para cantar loor a nuestro Rey.</p><p>Cantando: Santo, Santo, Santo eres Tu.<br>Santo, Santo, Santo eres Tu.</p><p>Digno, Digno, Digno eres Rey.<br>Reinas con autoridad sobre las naciones.<br>Sus rodillas doblarán y confesarán<br>que Jesucristo es el Señor por la eternidad.</p><p>Cantando: Digno, Digno, Digno eres Rey.<br>Digno, Digno, Digno eres Rey.</p>"
      },
      {
        "id":135,
        "title": "Se exalta nuestro Dios entre el júbilo",
        "content": "<p>Se exalta a nuestro Dios entre el júbilo;<br>Se exalta a nuestro Dios al sonar de la trompeta.<br>Se exalta a nuestro Dios entre el júbilo.<br>Con júbilo gritad a Él. (2 veces)</p><p>Con trompetas hay que celebrar.<br>Aplaudamos a nuestro Señor.</p><p>Se exalta a nuestro Dios (3 veces) Oh, sí.</p>"
      },
      {
        "id":136,
        "title": "Sé que no soy nada y del polvo nací",
        "content": "<p>Sé que soy nada y del polvo nací;<br>pero Tu me amas y moriste por mí.<br>Ante la Cruz solo puedo exclamar:<br>soy de Ti. Soy de Ti.</p><p>Toma mis manos te pido,<br>Toma mis labios, te amo.<br>Toma mi vida, oh Padre<br>soy de Ti. Soy de Ti.</p><p>Cuando de rodillas te miro, Jesús,<br>veo Tu grandeza y mi pequeñez;<br>¿Qué puedo darte yo?, tan solo mi ser.<br>Soy de Ti. Soy de Ti.</p>"
      },
      {
        "id":137,
        "title": "Sendas Dios hará",
        "content": "<p>Sendas Dios hará<br>donde piensas que no hay,<br>Él obra en maneras<br>que no podemos comprender.<br>Él me guiará, a su lado yo estaré.<br>Amor y fuerzas me dará,<br>un camino hará,<br>donde no lo hay.<br>Por caminos, en la soledad,<br>me guiará;<br>y agua en el desierto encontraré.<br>La tierra pasará,<br>Su Palabra eterna es.<br>¡Él hará algo nuevo hoy!.</p>"
      },
      {
        "id":138,
        "title": "Señor Jesús, tu conoces mi corazón",
        "content": "<p>Señor Jesús, tu conoces mi corazón,<br>que tan lejos de Ti vagó en el pecar.<br>Tu Santa Ley me hizo comprender mi error,<br>y Tu Palabra mi perdición.<br>Creí que sólo pude andar por los caminos<br>de Tu Ley, y sin ayuda alcanzar Tu Majestad.<br>Más Tu Palabra me enseñó que mi pecado,<br>entre los dos, desde el principio<br>puso la separación.</p><p>Gracias, Señor, porque mi alma en Ti confié,<br>y misericordia en Tu Cruz hallé.<br>En Tu perdón renovaste todo mi ser,<br>y vida nueva en Ti encontré.<br>Ahora me queda por vivir<br>toda una vida en Tu amor,<br>siguiendo el camino que Tu Hijo mostró.<br>Fuerzas Tu siempre me darás<br>con Tu Palabra y dirección<br>y alabarte siempre podré,</p><p>¡Gracias, Señor!</p>"
      },
      {
        "id":139,
        "title": "Señor, llévame a tus atrios",
        "content": "<p>Señor, llévame a Tus atrios,<br>al Lugar Santo, al Altar de Bronce.<br>¡Señor, Tu rostro quiero ver!<br>Pásame en la muchedumbre,<br>por donde el sacerdote canta,<br>tengo hambre y sed de justicia<br>y solo encuentro un lugar.<br>Llévame al Lugar Santísimo,<br>por la sangre del Cordero Redentor.<br>Llévame al Lugar Santísimo.<br>Tócame, límpiame. Heme aquí.</p>"
      },
      {
        "id":140,
        "title": "Señor, mi Dios",
        "content": "<p>Señor, mi Dios, al contemplar los cielos,<br>el firmamento y las estrellas mil.<br>Al oír Tu voz en los potentes truenos,<br>y ver brillar al sol en su cenit.</p><p>Mi corazón entona esta canción:<br>¡Cuán grande eres, mi Señor! (2 veces)</p><p>Al recorrer los montes y los valles,<br>al ver las bellas flores al pasar,<br>al escuchar el canto de las aves,<br>y el murmurar del claro manantial.</p><p>Cuando me acuerdo del amor divino,<br>que desde el cielo al Salvador envió;<br>aquel Jesús que por salvarme vino,<br>y en una cruz sufrió por mí y murió.</p><p>Cuando el Señor me llame a Su presencia,<br>al dulce hogar, al cielo de esplendor,<br>le adoraré, cantando la grandeza<br>de Su poder y Su infinito amor.</p>"
      },
      {
        "id":141,
        "title": "Somos tu pueblo, Tú eres nuestro Dios",
        "content": "<p>Somos tu pueblo, Tú eres nuestro Dios,<br>Tú nos escogiste.<br>En Jesucristo, Nuestro Salvador,<br>Tú nos redimiste.<br>Y nos envías hoy a proclamar,<br>el gran mensaje de la salvación.<br>Tú nos has puesto por sal y por luz,<br>como testigos vivos de Jesús.</p><p>Entre tinieblas de incredulidad,<br>el hombre se hunde,<br>en frustraciones, en su soledad,<br>todo incertidumbre.<br>Sólo Tú gracia puede transformar<br>su vida absurda llena de inquietud.<br>Sólo Jesús es camino y verdad,<br>Él es la vida en toda plenitud.</p> <p>Sin Tu poder y sin Tu dirección<br>vano es nuestro esfuerzo.<br>Haz que en Tus manos seamos, oh Señor,<br>fieles instrumentos.<br>Haya en nosotros un mismo sentir,<br>llénanos de Tu Espíritu de amor,<br>que sin temor podamos aceptar<br>el desafío del mundo de hoy.</p>"
      },
      {
        "id":142,
        "title": "Somos un pueblo",
        "content": "<p>Somos un pueblo, pueblo adquirido por Dios,<br>nación Santa, real sacerdocio,<br>linaje escogido por Dios. (2 veces)<br>Para anunciar las virtudes de Aquel<br>que nos llamó de tinieblas a luz (2 vez)</p><p>Admirable, ¡ Somos los hijos de luz!</p>"
      },
      {
        "id":143,
        "title": "Sublime gracia",
        "content": "<p>Sublime gracia del Señor<br>que a un infeliz salvó.<br>Fui ciego más hoy veo yo.<br>Perdido y Él me halló.</p><p>Su gracia me enseñó a temer,<br>mis dudas ahuyentó.<br>Oh, cuan precioso fue a mi ser<br>cuando Él me transformó.</p><p>En los peligros o aflicción<br>que yo he tenido aquí<br>su gracia siempre me libró<br>y me guiará feliz.</p><p>Y cuando en Sión por siglos mil,<br>brillando esté cual sol,<br>yo cantaré por siempre allí,<br>su amor que me salvó.</p>"
      },
      {
        "id":144,
        "title": "Tan cerca de mi",
        "content": "<p>Tan cerca de mi<br>Tan cerca de mi.<br>Que hasta lo puedo tocar.<br>Jesús está aquí.</p><p>Le hablaré sin miedo al oído,<br> le contaré cosas que hay en mí,<br>y que solo a Él le interesarán,<br>Él es más que un mito para mí.</p><p>Mírale a tu lado caminando<br>y paseándose en la multitud;<br>muchos ciegos van porque no le ven,<br>ciegos de ceguera espiritual.</p>"
      },
      {
        "id":145,
        "title": "Te alabaré Señor, con todo el corazón",
        "content": "<p>Te alabaré Señor con todo el corazón,<br>haré de Ti el lema de mi vida. Aleluya.</p><p>El Señor es mi Pastor nada me faltará,<br>a pastos delicados me guiará. Aleluya.</p><p>Cuando venga mi Señor en gloria y majestad,<br>yo le veré y de nuevo cantaré. Aleluya.</p>"
      },
      {
        "id":146,
        "title": "Te alabaré Señor, con todo mi corazón",
        "content": "<p>Te alabaré Señor con todo mi corazón,<br>con todo mi corazón, te alabaré Señor.</p><p>Contaré todas tus maravillas,<br>todas tus maravillas. Te alabaré Señor.</p><p>Me alegraré en Ti y me regocijaré,<br>y me regocijaré. Te alabaré Señor.</p><p>Cantaré a Tu nombre, oh Altísimo,<br>oh Altísimo. Te alabaré Señor.</p>"
      },
      {
        "id":147,
        "title": "Te alabo hoy",
        "content": "<p>Te alabo hoy. Te alabo hoy.<br>Te doy las gracias por la nueva vida en Ti,<br>porque has perdonado mis pecados,<br>por la vida que me das.<br>Te alabo hoy, te alabo hoy, te alabo hoy.</p>"
      },
      {
        "id":148,
        "title": "Te amo, Rey",
        "content": "<p>Te amo, Rey; y levanto mi voz,<br>para adorarte y gozarme en Ti.<br>Regocíjate y escucha, mi Rey.<br>¡ Qué sea un dulce sonar para Ti!</p>"
      },
      {
        "id":149,
        "title": "Te doy gracias, Señor",
        "content": "<p>Te doy gracias, Señor,<br>entre todos los pueblos<br>cantaré Salmos a Ti entre las naciones.<br> Porque Tu gran amor<br>es mayor que los cielos,<br>y por siempre, y por siempre Tu eres fiel.</p><p>Te exalto, oh Señor,<br>sobre los cielos,  	<br>de Tu gloria la tierra se llenará. (2 veces)</p><p>De Tu gloria, de Tu gloria, de Tu gloria,<br>de Tu gloria la tierra se llenará.</p>"
      },
      {
        "id":150,
        "title": "Te exaltamos sobre un trono de alabanza",
        "content": "<p>Te exaltamos sobre un trono de alabanza,<br>te exaltamos, Oh Señor.<br>Nuestras alabanzas subirán<br>delante de Tu trono, oh Señor. (2 veces)</p><p>Olor fragante, a Ti, Señor,<br>honor y alabanza por siempre daré<br>al que está sentado sobre el Trono de mi <br>Dios.</p><p>Majestuosamente reinas sin igual,<br>Tú eres poderoso, oh Dios.<br>Te proclamaré, te exaltaré,<br>Tú eres el Rey sobre mi corazón.</p>"
      },
      {
        "id":151,
        "title": "Todo lo que respira alabe al Señor",
        "content": "<p>Todo lo que respira,<br>alabe al Señor, alabe al Señor (2 veces)<br>Con cánticos de amor eleva hoy tu voz,<br>y sé un adorador de todo corazón (2 veces)<br>Todo lo que respira,<br>alabe al Señor, alabe al Señor (2 veces)<br>Alabe al Señor, alabe al Señor.<br>Amén, amén, amén, amén, amén<br>Amén, amén, amén, amén, amén</p>"
      },
      {
        "id":152,
        "title": "Te exaltaré, mi Dios, mi Rey",
        "content": "<p>Te exaltaré mi Dios, mi Rey,<br>y bendeciré Tu nombre,<br>eternamente y para siempre,<br>cada día te bendeciré.<br>Alabaré Tu nombre<br>eternamente y para siempre.</p><p>Grande es Jehová y<br>digno de suprema alabanza,<br>y su grandeza es inescrutable.<br>Cada día te bendeciré.</p><p>Generación a generación<br>celebrará tus obras,<br>y anunciará y anunciará<br>tus poderosos hechos<br>en la hermosura de Tu gloria,<br>y en tus hechos meditaré.</p><p>Del poder de tus hechos<br>estupendos hablarán los hombres,<br>y yo publicaré, yo publicaré Tu grandeza.<br>Proclamarán Tu inmensa bondad,<br>y cantarán Tu justicia.</p>"
      },
      {
        "id":153,
        "title": "Todo lo que respira alabe al Señor",
        "content": "<p>Todo lo que respira alabe al Señor.<br>Todo lo que respira alabe al Señor.</p><p>Alabad a Dios en Su santuario,<br>alabadle en la magnificencia de Su firmamento.</p><p>Alabadle por sus proezas,<br>alabadle conforme a la muchedumbre de Su grandeza.</p><p>Alabadle a son de bocina,<br>alabadle con salterio y arpa.</p><p>Alabadle con pandero y danza,<br>alabadle con cuerdas y flautas.</p><p>Alabadle con címbalos resonantes,<br>alabadle con címbalos de júbilo.</p>"
      },
      {
        "id":154,
        "title": "Toma el pan",
        "content": "<p>Toma el pan que habla de mí, y al comer, <br>recuérdame.<br>Este pan es mi cuerpo, por ti yo lo entregué.<br>Toma, come, y al comer recuérdame.</p><p>Toma la copa que habla de mí, y al beber, <br>recuérdame.<br>Esta copa es mi sangre, por ti la derramé.<br>Toma. Bebe, y al beber recuérdame.</p>"
      },
      {
        "id":155,
        "title": "Tu amor por mi",
        "content": "<p>Tu amor por mi es más dulce que la miel,<br>y Tu misericordia es nueva cada día (2 veces)<br>es por eso que te alabo,<br>es por eso que te sirvo,<br>es por eso que te doy todo mi amor (2 veces)</p>"
      },
      {
        "id":156,
        "title": "Tú eres mi Roca fuerte",
        "content": "<p>Tú eres mi Roca fuerte.<br>Tú eres mi Roca firme.<br>Tú eres mi Roca y mi Dios. (2 veces)</p><p>Yo te alabo con fidelidad.<br>Yo te alabo con sinceridad.<br>Yo te alabo con integridad, Señor (2 veces)</p>"
      },
      {
        "id":157,
        "title": "Tú eres mi vida",
        "content": "<p>Tú eres mi vida,<br>eres mi aliento, mi gozo, mi vida, camino sin fin.<br>Sé que en Ti se encuentra<br>la luz radiante que brilla,<br>que alumbra en la oscuridad.</p><p>Porque Tú, Señor, eres la vida, Señor.<br>Eres camino, Señor. Eres verdad.<br>Sólo a Ti, Señor y a Tu grandeza sin par,<br>quiero entonarte, Señor, esta canción.</p><p>Tú eres mi anhelo,<br>eres la hoguera prendida en mi alma<br>de luz y color.<br>Sé que en Ti se encuentra<br>la fuente hermosa de limpia pureza<br>de grande caudal.</p>"
      },
      {
        "id":158,
        "title": "Tu fidelidad es grande",
        "content": "<p>Tu fidelidad es grande.<br>Tu fidelidad incomparable es.<br>Nadie como Tú, bendito Dios.<br>Grande es Tu fidelidad (2 veces)</p>"
      },
      {
        "id":159,
        "title": "Tu ley esta escrita en mi corazon",
        "content": "<p>Tu ley está escrita en mi corazón,<br>el hacer Tu voluntad es mi deleite;<br>dame, oh Señor, tus pensamientos<br>los seguiré el resto de mis días.</p><p>Correré por el camino de tu gracia.<br>Confiaré en Tu palabra que es mi guía.<br>Triunfaré en medio de mis enemigos.<br>Y nada me apartará de Ti.</p>"
      },
      ,
      {
        "id":160,
        "title": "Tu nombre, oh Dios, exaltaré",
        "content": "<p>Tu nombre, oh Dios exaltaré,<br>Tu majestad levantaré,<br>por siempre te proclamaré,<br>tus alabanzas celebraré.</p><p>Porque digno, Digno eres Tú,<br>a Ti sea el honor y poder.<br>Porque Digno, Digno eres Tú,<br>recibe adoración, Señor.</p>"
      },
      {
        "id":161,
        "title": "Únenos Señor",
        "content": "<p>Únenos Señor, con tu espíritu de amor<br>que tu pueblo sea uno<br>como Tú y el Padre sois.<br>Únenos Señor, haznos ver tu voluntad,<br>danos tu discernimiento<br>y enséñanos a amar.</p><p>Cuando todos somos hermanos<br>y a un mismo Padre alabamos,<br>únenos Señor, con tu espíritu de amor.</p>"
      },
      {
        "id":162,
        "title": "Un mandamiento nuevo os doy",
        "content": "<p>Un mandamiento nuevo os doy<br>que os améis unos a otros. (2 veces)<br>Cómo Yo os he amado, como Yo os he amado,<br>que os améis también vosotros.</p><p>Amémonos de corazón,<br>no de labio ni fingido (2 veces)<br>para cuando Cristo venga, para cuando Cristo venga nos encuentre preparados (2 veces)</p><p>¿Cómo puedo yo orar<br>resentido con mi hermano? (2 veces)<br>Dios no escucha la oración, Dios no escucha la oración si no estoy reconciliado (2 veces)</p><p>Un mandamiento nuevo os doy...</p>"
      },
      {
        "id":163,
        "title": "Unidos",
        "content": "<p>Unidos, unidos en Tu nombre unidos (2 veces)<br>Por este mundo paz y amor tenemos (2 veces)<br>Unidos, siempre unidos, tomados de la mano,<br>iremos por este mundo cantando al Señor.<br>La gloria de Jesús al fin resplandecerá,<br>y el mundo se llenará de amor y de paz.</p>"
      },
      {
        "id":164,
        "title": "Un nuevo día nos hizo Yahvé",
        "content": "<p>Un nuevo día nos hizo Yahvé,<br>regocijémonos en el. (2 veces)</p><p>Alabadle y bendecid Su nombre,<br>por las cosas que hoy va a hacer (2 veces)</p>"
      },
      {
        "id":165,
        "title": "Ven entre tu pueblo",
        "content": "<p>Ven entre tu pueblo al momento de estar<br>juntos en Tu nombre reunidos a adorar.</p><p>Une nuestras vidas,<br>llénanos de amor,<br>llénanos del fuego<br>que consuma el temor.</p><p>Entre las naciones tu amado pueblo está<br>ante Tu presencia reunidos a adorar.</p>"
      },
      {
        "id":166,
        "title": "Ven y alaba a Tu Señor",
        "content": "<p>Ven y alaba a Tu Señor, alábale de corazón.</p><p>Alábale de corazón es digno de loor. (2 veces)</p>"
      },
      {
        "id":167,
        "title": "Ven, te invito a cantar al Señor",
        "content": "<p>Ven te invito a cantar al Señor.<br>Ven te invito a deleitarte en Él.<br>Ven te invito a cantar al Señor<br>con toda tu voz, con todo tu amor.</p>   <p>Suenen violines, toquen trompetas,<br>batid las manos alabad a Dios,<br>hombres y mujeres, niños y ancianos,<br>sanos y enfermos alabad a Dios.</p>"
      },
      {
        "id":168,
        "title": "Venimos ante Ti, Señor",
        "content": "<p>Venimos ante Ti, Señor,<br>con corazones sinceros<br>llenos de alabanza y adoración (2 veces)<br>Porque Tú eres Rey de reyes<br>y Señor de señores,<br>sólo Tú eres digno<br>de que todos te adoren (2 veces)</p>"
      },
      {
        "id":169,
        "title": "Vine a alabar a Dios",
        "content": "<p>Vine a alabar a Dios. Vine a alabar a Dios<br>Vine a alabar Su nombre,<br>vine a alabar a Dios.<br>Él vino a mi vida en un día muy especial,<br>cambió mi corazón por un nuevo corazón,<br>y esta es la razón por la que digo que:</p><p>¡VINE A ALABAR A DIOS!</p>"
      },
      {
        "id":170,
        "title": "Voy a cantar a mi Señor",
        "content": "<p>Voy a cantar a mi Señor,<br>quiero gritar porque Él me amó,<br>le alabaré, Él es mi Dios,<br>no lo puedo olvidar<br>y mi vida será para siempre cantar.</p><p>Yo quiero siempre alabar a Dios,<br>es imposible dejar de cantar<br>son tantas cosas que siempre nos da,<br>tan grande es mi Dios.<br>No importa donde quiera que tú vas<br>allí, contigo, está tu Salvador;<br>no te abandona, no tengas temor.<br>Él es tu Dios.</p><p>Hoy soy feliz, no callaré,<br>es tanto amor que Él me dio;<br>le alabaré, Él es mi Dios,<br>no lo puedo olvidar<br>y mi vida será para siempre cantar.</p>"
      },
      {
        "id":171,
        "title": "Y si vivimos, para el vivimos",
        "content": "<p>Y si vivimos, para Él vivimos.<br>Y si morimos, para Él morimos<br>Sea que vivamos, o que muramos,<br>somos del Señor, somos del Señor.</p>"
      },
      {
        "id":172,
        "title": "Yo celebraré",
        "content": "<p>Yo celebraré delante del Señor,<br>cantaré un cántico nuevo (2 veces)<br>Yo le alabaré<br>porque Él ha hecho grandes cosas (2 veces)</p>"
      },
      {
        "id":173,
        "title": "Yo quiero ser, Señor amante",
        "content": "<p>Yo quiero ser Señor amante,<br>como el barro en manos del alfarero.<br>Toma mi vida hazla de nuevo.<br>Yo quiero ser, yo quiero ser un vaso nuevo.</p>"
      },
      {
        "id":174,
        "title": "Yo te busqué",
        "content": "<p>Yo te busqué Señor más descubrí<br>que Tú impulsabas mi alma en ese afán,<br>que no era yo quien te encontraba a Ti,<br>Tú me encontraste a mí.</p><p>Tu mano fuerte se extendió y así<br>tomado de ella sobre el mar crucé;<br>más no era tanto que me asiera a Ti,<br>Tú me alcanzaste a mí.</p><p>Te hallé y seguí, Señor mi amor te di,<br>más solo fue en respuesta a tanto amor,<br>puesto que siempre mi alma estaba en Ti.<br>Siempre me amaste así.</p>"
      },
      {
        "id":175,
        "title": "A ti, el Alfa y la Omenga",
        "content": "<p>A Ti, el Alfa y la Omega<br>El principio y el fin,<br>Y el gran “Yo Soy”, me rindo.</p><p>A Ti, el Todopoderoso<br>El que es y que será<br>Y el gran “Yo Soy”, me entrego.</p><p>Yo quiero que gobiernes mi vida<br>Me doy en sacrificio a Ti.<br>Yo quiero que Tú ordenes mi caminar<br>Que siempre viva en Tu voluntad.</p>"
      },
      {
        "id":176,
        "title": "Al entrar en tu santo lugar",
        "content": "<p>// Al entrar en tu santo lugar<br>Me asombra que me pueda acerca<br>Para ver tu gloria y tu belleza<br>Y adorarte en intimidad.</p><p>En confianza yo me puedo acercar,<br>De tu mesa quiero participar,<br>Todo lo que puedo hacer es postrarme<br>Y con mis labios proclamar. //</p><p>// Mi pan, mi luz, mi oración<br>Eres Tú, Jesús<br>Mi Dios, mi amor y mi canción<br>Eres Tú, Jesús, solo Tú.//</p>"
      },
      {
        "id":177,
        "title": "Al estar en la presencia de tu divinidad",
        "content": "<p>Al estar en la presencia de tu divinidad<br>Al contemplar la hermosura<br>De tu santidad<br>Mi espíritu se alegra en tu majestad<br>//Te adoro a Ti//</p><p>Cuando veo la grandeza<br>De tu dulce amor<br>Y compruebo la pureza de tu corazón<br>Mi espíritu se alegra en tu majestad<br>//Te adoro a ti//</p><p>//Y al estar aquí, delante de Ti, te adoraré<br>Postrado ante Ti,<br>Mi corazón te adora, oh Dios.<br>Y siempre quiero estar, para adorar<br>Y contemplar tu santidad<br>Te adoro a Ti, Señor, te adoro a Ti.//</p>"
      },
      {
        "id":178,
        "title": "Al que está sentado en el trono que es Jesús",
        "content": "<p>Al que está sentado en el trono que es Jesús<br>A Él sea la gloria y el imperio.<br>Al que está sentado en el trono que es Jesús<br>A Él sea la gloria y el poder.</p><p>A Ti traigo alabanzas, ¡oh, Jesús!<br>Y te las doy con el corazón<br>A Ti te alabo, solo a Ti, Señor<br>Y te puedo decir, gloria a Ti.</p><p>Gracias porque has hecho para mí<br>Un nuevo día de gozo y paz<br>Y siento a tu Espíritu dentro de mí,<br>Por él puedo decir: Gloria a Ti.</p>"
      },
      {
        "id":179,
        "title": "Desde el fondo del mar",
        "content": "<p>Desde el fondo del mar<br>Al más alto lugar<br>Del más hondo abismo<br>Te alabaré.<br>Desde mi corazón,<br>Fuerte o débil esté<br>Cada instante de mi vida<br>Con gozo yo diré:</p><p>Qué Tú eres la Roca eterna<br>Señor sobre cielo y tierra<br>Tú eres Dios.<br>Que toda criatura adore<br>Que toda nación se postre a ti, Señor<br>Tú eres Dios.</p>"
      },
      {
        "id":180,
        "title": "La única razon de mi adoración",
        "content": "<p>La única razón de mi adoración eres Tú mi Jesús<br>Mi único motivo para vivir eres Tú mi Señor.<br>Mi única verdad está en Ti,<br>eres mi luz y mi salvación<br>Mi único amor eres Tú Señor,<br>y por siempre te alabaré.</p><p>Tú eres Todopoderoso, eres grande y majestuoso,<br>Eres fuerte, invencible y no hay nadie como Tú.</p>"
      },
      {
        "id":181,
        "title": "Dios de pactos",
        "content": "<p>Dios de pactos, que guardas Tus promesas<br>Que cumples Tu palabra<br>Que guías mi destino.<br>Dios de pactos, confío en Tus promesas<br>Descanso en Tu Palabra<br>Por Tu gracia estoy aquí.</p><p>En la intimidad<br>Al abrigo de Tu gloria quiero estar junto a Ti.<br>Al ver Tu santidad<br>Estoy maravillado ante Ti y Tu amor;<br>Nunca más seré igual<br>Al salir de este santísimo lugar.</p><p>Tengo redención<br>Por la sangre que descansa en tu altar para mí.<br>La gracia y el perdón<br>Son los frutos de vivir en comunión y adoración.<br>Nunca más seré igual<br>Al salir de este Santísimo lugar.</p>"
      },
      {
        "id":182,
        "title": "Eres Tú",
        "content": "<p>Eres Tú la única razón de mi adoración,<br>¡Oh Jesús!<br>Eres Tú la esperanza que anhelé tener,<br>¡Oh Jesús!<br>Confié en Ti y me has ayudado,<br>tu salvación me has regalado<br>Hoy hay gozo en mi corazón,<br>con mi canto te alabaré.</p><p>//Te alabaré, te glorificaré. <br>Te alabaré, mi buen Jesús.//</p><p>En todo tiempo te alabaré<br>En todo tiempo te adoraré.</p><p>//Te alabaré, te glorificaré. <br>Te alabaré, mi buen Jesús.//</p>"
      },
      {
        "id":183,
        "title": "Mi Cristo, Mi rey",
        "content": "<p>Mi Cristo, mi Rey, nadie es como Tú<br>Toda mi vida quiero exaltar<br>Las maravillas de Tu amor.<br>Consuelo, refugio, torre de fuerza y poder<br>Todo mi ser, lo que yo soy<br>Nunca cese de adorar.<br>Cante al Señor toda la creación<br>Honra, poder, majestad sean al Rey<br>Montes caerán y el mar rugirá <br>Al sonar de Tu nombre<br>Canto con gozo al mirar tu poder<br>Por siempre yo te amaré y diré:<br>Incomparables promesas me das, Señor.</p>"
      },
      {
        "id":184,
        "title": "Oh Señor, tu amor brillando está",
        "content": "<p>Oh Señor, tu amor brillando está<br>Luce en medio de toda oscuridad.<br>Luz del mundo, Jesús, ilumínanos,<br>Con tu hermosa verdad, ven libéranos.<br>Brilla en mí, brilla en mí.</p><p>¡Brilla Jesús, llénanos de tu gloria eterna!<br>Espíritu, arde en nuestro ser.<br>Río de amor, cubre la Tierra con tu gracia.<br>Extiende, oh Dios, tu Palabra y tu luz.</p><p>Aquí estoy ante tu presencia,<br>Pues tu luz borra mis tinieblas.<br>Por tu sangre en tu luz santa puedo entrar<br>Pruébame, limpia toda mi oscuridad.<br>Brilla en mí, brilla en mí.</p><p>Cuando vemos tu regio resplandor<br>Nuestros rostros reflejan tu esplendor,<br>Y avanzando de gloria en gloria<br>Nuestras vidas reflejan Tu historia.<br>Brilla en mí, brilla en mí.</p>"
      },
      {
        "id":185,
        "title": "Que seria de mi si no me hubieras alcanzado",
        "content": "<p>Qué seria de mí si no me hubieras alcanzado<br>Donde estaría hoy si no me hubieras perdonado<br>Tendría un vacío en mi corazón,<br>vagaría sin rumbo, sin dirección</p><p>//Si no fuera por tu gracia y por tu amor//</p><p>Sería como un pájaro herido<br>que se muere en el suelo<br>Sería como un ciervo que brama<br>por agua en un desierto</p><p>//Si no fuera por tu gracia y por tu amor//</p>"
      },
      {
        "id":186,
        "title": "Somos el pueblo de Dios",
        "content": "<p>Somos el pueblo de Dios<br>Somos un pueblo especial<br>Llamados para anunciar<br>Las virtudes de Aquel<br>Que nos llamó a Su luz.</p><p>Somos el pueblo de Dios,<br>Su sangre nos redimió<br>Y su Espíritu dio<br>Para darnos poder<br>Y ser testigos de Él.</p><p>Y llevaremos Su gloria<br>A cada pueblo y nación<br>Trayéndoles esperanza<br>y nuevas de salvación.<br>Y Su amor nos impulsa<br>No nos podemos callar<br>Anunciaremos al mundo<br>De su amor y verdad.</p>"
      },
      {
        "id":187,
        "title": "Toda la tierra te alabará",
        "content": "<p>Toda la tierra te alabará<br>Los montes y collados te bendecirán<br>Y los abismos proclamarán<br>Que eres Dios del Universo, eres el Señor</p><p>Te labaré, te adoraré,<br>De noche y de día yo te exaltaré<br>Te alabaré, te adoraré<br>Eres Dios, eres Rey, eres el Santo de Israel.</p><p>Eres Dios, eres Rey, eres el Santo de Israel.</p>"
      },
      {
        "id":188,
        "title": "Tu nombre Cristo exaltare",
        "content": "<p>Tu nombre Cristo exaltaré<br>Cantaré tus alabanzas<br>Gracias por vivir en mí<br>Gracias por querer salvarnos.</p><p>Del cielo viniste aquí a darnos paz<br>De la tierra a la cruz en mi lugar<br>A la tumba tras morir y a la gloria otra vez<br>Tu nombre Cristo exaltaré.</p>"
      },
      {
        "id":189,
        "title": "Alza tus ojos y mira",
        "content": "<p>Alza tus ojos y mira,<br>la cosecha está lista,<br>el tiempo ha llegado,<br>la mies está madura.<br>Esfuérzate y sé valiente,<br>Levántate y predica<br>A todas las naciones <br>Que  Cristo es la vida.</p><p>Y será llena la tierra de Su gloria,<br>Se cubrirá, como las aguas cubren la mar.</p><p>No, no hay otro nombre<br>Dado a los hombres<br>Jesucristo, El es Señor.</p><p>Y será llena la tierra de Su gloria,<br>Se cubrirá, como las aguas cubren la mar</p>"
      },
      {
        "id":190,
        "title": "Él es excelso",
        "content": "<p>Él es excelso, de alabaza Digno es<br>Hermosa Santidad solo hay en Él<br>El gozo de la creación.<br>En Su presencia la victoria hemos de hallar,<br>Contra el enemigo nos ayudará;<br>Caemos a sus pies.<br>Señor queremos Tu nombre ensalzar<br>Agradecerte todo lo que has hecho<br>en nuestras vidas,<br>Confiar en Tu inagotable amor,<br>Pues en los cielos y en la tierra<br>Tú eres el Eterno Dios</p>"
      },
      {
        "id":191,
        "title": "Dios eterno",
        "content": "<p>A veces te fallé, mas Tú fuiste fiel<br>Tu gracia me levantó, me basta Tu amor<br>Dios eterno, Tu luz por siempre brillará<br>Y Tu gloria incomparable, sin final</p><p>Señor, Tu voluntad permanecerá<br>En Ti me quiero perder, en adoración<br>Dios eterno, Tu luz por siempre brillará<br>Y Tu gloria incomparable, sin final</p><p>De mi corazón te doy el control<br>Consume todo mi interior, Dios<br>Justicia y amor me abrazan, Señor<br>Te amo desde mi interior</p><p>Dios eterno, Tu luz por siempre brillará<br>Y Tu gloria incomparable, sin final<br>El clamor de mi ser es contigo estar<br>Desde mi interior mi alma clamará </p><p>De mi corazón te doy el control<br>Consume todo mi interior, Dios<br>Justicia y amor me abrazan, Señor<br>Te amo desde mi interior.</p><p>Dios eterno, Tu luz por siempre brillará<br>Y Tu gloria incomparable, sin final<br>El clamor de mi ser es contigo estar<br>Desde mi interior mi alma clamará.</p>"
      },
      {
        "id":192,
        "title": "Eres Santo",
        "content": "<p>Eres Santo (eres Santo), Poderoso (Poderoso)<br>Eres Digno (eres Digno), te alabaré (te alabaré)<br>Yo te amo (yo te amo), yo te sigo (yo te sigo)<br>Y por siempre (y por siempre),<br>te seguiré (te seguiré)</p><p><b>HOMBRES:</b><br>Y yo canto, y alabo al Rey que es Digno.<br>Yo te amo, te adoro y me postro ante tus pies.<br>Y yo canto, y alabo al Rey que es Digno.<br>Yo te amo, te adoro y me postro ante tus pies<br>Príncipe de Paz, solo vivo para Ti.</p><p><b>MUJERES:</b><br>Eres el Señor, y de reyes, Rey.<br>Poderoso Dios, Cristo Enmanuel<br>Tú, el Gran YO SOY, quien todo creó;<br>Príncipe de Paz, Cordero de Dios.<br>Eres Salvador, vives hoy en mí;<br>Y tu Gracia siempre nos habla de Ti.<br>Eres Alfa, Omega. Principio y Fin.<br>Jesucristo, Mesías. Mi Redentor<br>Príncipe de Paz, solo vivo para Ti</p>"
      },
      {
        "id":193,
        "title": "Mi deseo",
        "content": "<p>Diste todo por mí<br>Mis pensamientos, mi sentir,<br>Todo es dedicado a Ti.<br>Cómo fallé en no ver<br>Que Tu amor me rescató,<br>Todo mi ser lo dedico a Ti.</p><p>Señor, quiero poder decir, contigo aquí,<br>Haz Tu voluntad en mí.<br>Quiero poder cantar, poder decir:    <br>Oye mi voz, es mi deseo<br>El estar junto a ti, Dios<br>Ahora y por siempre.<br>Más que cantar, es mi deseo<br>A tu lado estar, a tu lado estar, Cristo.</p>"
      },
      {
        "id":194,
        "title": "Tú eres mi respirar",
        "content": "<p>//Tú eres mi respirar//</p><p>Dios, Tu presencia vive en mí.</p><p>//Eres mi Pan, Señor//</p<p>Dios, Tus palabras son para mí.</p><p>Y yo, te anhelo, Señor<br>Y estoy perdido sin Ti</p>"
      },
      {
        "id":195,
        "title": "Mi Padre me ama tanto",
        "content": "<p>Mi Padre me ama tanto que<br>Su Hijo dio por mí<br>Por siempre las gracias le daré<br>Me ha dado Su Espíritu y verdad<br>Bendito mi Señor,<br>A su lado nada temeré, y cantaré</p><p>Mi Padre me ama tanto<br>Su amor es eterno y santo<br>Tan grande que no puedo entender<br>Me viste de ropa fina<br>Me anhela y me dio su vida<br>Gloria, Aleluya, Padre fiel</p><p>Mi Padre me ama tanto que<br>Soy su heredero<br>Me ha dado su nombre y su poder<br>Me viste de gloria y de bondad<br>Bendito mi Señor,<br>A mi Dios por siempre exaltaré, y cantaré</p>"
      },
      {
        "id":196,
        "title": "No hay argumento",
        "content": "<p>No hay argumento ni juicio contra mí<br>Él con su sangre me vino a redimir<br>Libre de condenación,<br>Ya no soy más un deudor<br>Él ha pagado la deuda por mí.</p><p>Yo era culpable y me otorgó el perdón,<br>Manto de gracia de pronto me cubrió.<br>Mis pecados Él borró,<br>Y mi cuenta canceló.<br>Él ha pagado la deuda por mí.</p><p>//Ahora soy libre,<br>Y esclavo por amor,<br>Precio de sangre<br>Jesús por mi pagó//<br>Él marcó mi corazón<br>Propiedad soy del Señor.</p>"
      },
      {
        "id":197,
        "title": "Te dare lo mejor de mi vida",
        "content": "<p>Traemos hoy ante Tu altar nuestras coronas<br>Queremos darte lo mejor de nuestras vidas.<br>Te entregaré mi amor entero,<br>Los sueños que logré alcanzar</p><p>Te daré lo mejor de mi vida<br>Te daré lo mejor cada día.<br>Será mucho más que una canción<br>Mi obediencia es mi mejor adoración</p><p>Traemos hoy ante Tu altar nuestras coronas<br>Queremos darte lo mejor de nuestras vidas<br>Daremos solo las primicias,<br>Pues Tú mereces lo mejor</p><p>Te daré lo mejor de mi vida<br>Te daré lo mejor cada día.<br>Será mucho más que una canción<br>Mi obediencia es mi mejor adoración</p><p>Te daré lo mejor de mí</p><p>Te daré lo mejor de mí</p><p>Te daré lo mejor de mí</p><p>Te daré lo mejor.</p>"
      },
      {
        "id":198,
        "title": "Heme aquí",
        "content": "<p>La mies es mucha<br>Hay gran necesidad<br>Y pocos obreros al campo van.<br>Hoy muchos se pierden<br>Viven sin dirección<br>Vagan como ovejas sin pastor</p><p>Heme aquí.... envíame a mí.<br>Heme aquí.... envíame a mí.<br>Yo iré por aquellos<br>Que vagan sin Ti<br>Envíame a mí....Yo iré. </p>"
      },
      {
        "id":199,
        "title": "Oh Dios de mi alma",
        "content": "<p>Oh, Dios de mi alma sé Tú mi visión<br>Nada te aparte de mi corazón<br>Noche y día pienso yo en Ti<br>Y Tu presencia es luz para mí</p><p>Sabiduría sé Tú de mi ser<br>Quiero a tu lado mi senda correr<br>Como tu hijo, tenme Señor<br>Siempre morando en un mismo amor</p><p>Sé mi escudo mi espada en la lid<br>Mi única gloria, mi dicha sin fin.<br>Del alma amparo, mi torreón,<br>A las alturas condúceme, oh Dios.</p><p>Riquezas vanas no anhelo Señor,<br>Ni el vano halago de la adulación<br>Tú eres mi herencia, Tú mi perdón<br>Rey de los cielos, tesoro mejor</p>"
      },
      {
        "id":200,
        "title": "Sumérgeme",
        "content": "<p>Cansado del camno,<br>sediento de Ti, <br>un desierto he cruzado,<br>sin fuerzas he quedado,<br>vengo a Ti.</p><p>Luché como un soldado,<br>y a veces sufrí,<br>y aunque la lucha he ganado,<br>mi armadura he desgastado,<br>vengo a Ti.</p><p>\\Sumérgeme,<br>en el río de tu Espíritu,<br>necesito refrescar este seco corazón,<br>sediento de Ti//</p><p>Sumérgeme</p>"
      },
      {
        "id":201,
        "title": "Abre mis ojos",
        "content": "<p>Abre mis ojos, oh Cristo<br>Abre mis ojos, Señor<br>Yo quiero verte, yo quiero verte. </p><p>Al contemplar Tu Majestad<br>Y el resplandor de Tu Gloria<br>Derrama Tu amor y poder<br>Mientras cantamos Santo, Santo.</p><p>Santo, Santo, Santo<br>Santo, Santo, Santo<br>Yo quiero verte</p>"
      },
      {
        "id":202,
        "title": "Sublime gracia (nueva versión)",
        "content": "<p>Sublime gracia del Señor<br>que a un infeliz salvó.<br>Fui ciego mas hoy veo yo.<br>Perdido y Él me halló.</p><p>Aleluya, llueve gracia sobre mí.<br>Aleluya, mis pecados El borró, sí El borró</p><p>Su gracia me enseñó a temer,<br>mis dudas ahuyentó.<br>Oh, cuán precioso fue a mi ser<br>cuando Él me transformó.</p><p>Aleluya, llueve gracia sobre mí.<br>Aleluya, mis pecados El borró, sí El borró</p><p>Y cuando en Sión por siglos mil,<br>brillando esté cual sol,<br>yo cantaré por siempre allí,<br>su amor que me salvó.</p><p>Aleluya, llueve gracia sobre mí<br>Aleluya, mis pecados El borró, sí El borró //</p>"
      },
      {
        "id":203,
        "title": "Señor, eres fiel",
        "content": "<p>//Señor eres fiel y tu misericordia es eterna//<br>Gente de toda lengua y nación<br>de generación a generación.</p><p>Coro: <br>Te adoramos hoy aleluya, aleluya <br>te adoramos hoy eres Señor. <br>te adoramos hoy aleluya, aleluya. <br>Te adoramos hoy eres Señor…eres fiel</p>"
      },
      {
        "id":204,
        "title": "No me soltarás",
        "content": "<p>Aunque yo esté en el valle de la sombra y dolor<br>Tu amor me quita todo temor<br>Y si llego a estar en el centro de la tempestad<br>No dudaré porque estás aquí<br>Y no temeré del mal pues mi Dios conmigo está<br>Y si Dios conmigo esta ¿De quién temeré?<br>¿De quién temeré?<br>No, no, no me soltarás<br>En la calma o la tormenta<br>No, no, no me soltarás<br>En lo alto o en lo bajo<br>No, no, no me soltarás<br>Dios, tu nunca me dejarás</p><p>Puedo ver la luz que se acerca al que busca de Ti,<br>Gloriosa luz, cual otra no hay<br>Y terminarán los problemas mientras llega el fin<br>Viviremos conociéndote a Ti</p><p>Y no temeré del mal pues mi Dios conmigo está<br>Y si Dios conmigo esta ¿De quién temeré?<br>¿De quién temeré?</p><p>No, no, no me soltarás<br>En la calma o la tormenta<br>No, no, no me soltarás<br>En lo alto o en lo bajo<br>No, no, no me soltarás<br>Dios, tu nunca me dejarás</p><p>Y puedo ver la luz que se acerca al que busca de Ti,<br>Y terminarán los problemas mientras llega el fin<br>Voy a alabarte, voy a alabarte (Solo a Ti) 2 veces</p> <p>No, no, no me soltarás…</p>"
      },
      {
        "id":205,
        "title": "Él volverá",
        "content": "<p>Como relámpago que sale del oriente<br>y va al occidente, así será cuando vuelva el Señor,<br>como ladrón que viene en la noche<br>y nadie lo espera, así será cuando vuelva Jesús.</p><p>CORO</p><p>El volverá, y a su gloria me transformará<br>Regresará, y en una nube me arrebatará<br>Con poder y gran gloria, Cristo Jesús volverá.</p><p>Con voz de mando descenderá del cielo<br>y tocará trompeta, así será, cuando vuelva el Señor<br>El llamará a los que han dormido<br>y a los que hemos creído,<br>así será cuando vuelva Jesús.</p><p>CORO</p><p>Velad y orad, el tiempo se acerca,<br>purifícate en El, conságrate a Él,<br>que tu Señor volverá.</p>"
      },
      {
        "id":206,
        "title": "Yo te exalto",
        "content": "<p>Fuerte Dios, consolador<br>Príncipe de paz<br>Gran Señor, vencedor,<br>Siempre vives y siempre reinarás.</p><p>Dios te exalto, Dios te exalto<br>Eres todo para mí <br>La creación canta de Ti<br>Dios te exalto, Dios te exalto<br>Te exalto, Cristo mi Rey.</p>"
      },
      {
        "id":207,
        "title": "Sólo en Jesús está mi fe",
        "content": "<p>Sólo en Jesús está mi fe<br>Él es la luz y la verdad,<br>Piedra angular, amparo fiel<br>Firme en angustia y tempestad<br>Cuán grande amor, profunda paz,<br>En el temor o adversidad<br>Consolador es mi Señor<br>En su amor yo firme estoy.</p><p>Sólo en Jesús, que se encarnó<br>Del Creador en un bebé<br>Qué don de amor y rectitud<br>Por este mundo herido fue.<br>Cuando en la cruz Jesús murió<br>La ira de Dios propició,<br>Todo pecado Él cargó,<br>Y por su muerte, vivo yo.</p><p>Allí en la tumba Él yació<br>Esclavo de la oscuridad,<br>Lo que derrota pareció<br>Resucitó en gloriosa luz.<br>La gran victoria alcanzó,<br>La maldición de mí quitó,<br>Pues suyo soy, y mío es Él,<br>Cristo con sangre me compró.</p><p>Ya no hay culpa ni temor,<br>Tengo el poder de Cristo en mí<br>Desde nacer, hasta morir<br>Sus manos son mi dirección.<br>No hay poder, ningún afán<br>Que de Él me pueda separar.<br>Hasta que junto a Él esté,<br>En su Poder me sostendré.</p>"
      },
      {
        "id":208,
        "title": "Dios del universo",
        "content": "<p>Dios del Universo, del cielo, tierra y mar<br>Los cielos son tu tabernáculo<br>Gloria al Dios altísimo.</p><p>CORO</p><p>//Dios del cielo, maravilloso Dios,<br>Eres santo, santo<br>La creación muestra tu majestad<br>Eres santo, santo//<br>//Dios de la creación//</p><p>Cuando amanece,<br>He de celebrar tu luz<br>Si tropiezo en tinieblas,<br>Volveré a ver tu luz.</p><p>CORO</p><p>Aleluya al Dios de la creación<br>Aleluya al Dios de la creación<br>Aleluya al Dios de la creación.</p>"
      },
      {
        "id":209,
        "title": "Este es mi deseo",
        "content": "<p>Este es mi deseo, honrarte a Ti<br>Con todo mi ser te adoro a Ti<br>Con todas mis fuerzas te alabaré<br>Mi adoración eres Tú</p><p>CORO</p><p>//Hoy te rindo mi ser<br>Te doy mi corazón<br>Yo vivo para Ti.<br>En cada palpitar<br>Mientras haya aliento en mí<br>Dios haz tu obra en mí//</p>"
      },
      {
        "id":210,
        "title": "Ven",
        "content": "<p>Ven, es hora de adorarle<br>Ven, abre tu corazón a Él.</p><p>Ven, ante su trono estamos<br>Ven, ante la majestad de Dios<br>Ven...</p><p>//Toda lengua confesará que Él es Dios<br>Las rodillas se doblarán<br>Y un tesoro eterno tendrás en Él<br>Si escoges su amor//<br>Ven...</p>"
      },
      {
        "id":211,
        "title": "Cristo, cordero vencedor",
        "content": "<p>Tú, Dios de la Creación<br>Digno de adoración<br>Oh, Cordero Vencedor.</p><p>Dios eres el Gran Yo soy<br>Hoy mi vida te la doy<br>Te la entrego con amor.</p><p>Tú, mi fuerza y poder, das vida a mi ser<br>Tú, Glorioso Emanuel, eres mi amigo fiel.</p><p>Cristo, Cordero Vencedor<br>Estás sentado en tu trono de poder<br>Estás reinando con toda autoridad.<br>Tú reinas, Señor.<br>Tú reinas, Señor.</p>"
      },
      {
        "id":212,
        "title": "Mi fortaleza",
        "content": "<p>Sé que en Ti, yo puedo vivir confiado<br>A Tu lado seguro estaré<br>No habrá temor que pueda mis labios sellar<br>por siempre tu nombre alabaré.</p><p>No callaré, te seguiré hasta el final<br>Proclamaré a las naciones de tu amor y majestad.</p><p>Tú eres mi fortaleza, esperanza,<br>Agua eterna que sacia mi sed,<br>Rey de Gloria, Eterno Señor,<br>Dios Poderoso y Fiel Protector.</p><p>Te adoraré por siempre,<br>Pues Tú eres mi vida,<br>La razón que anhelo tener.</p>"
      },
      {
        "id":213,
        "title": "Tuyo es el reino",
        "content": "<p>Tuyo es el Reino y la honra <br>y la Gloria por siempre a Ti.<br>Cielo y tierra te adoran, Gran Señor.<br>Cielos abiertos, no hay derrota<br>Y la Gloria es tuya, Señor<br>Nada podrá vencer el nombre de Jesús.</p><p>Rey y Señor, cante toda la creación,<br>Salvador Eterno,<br>Admirable Dios, Admirable Dios.</p><p>Y toda la tierra alabará,<br>Para siempre y tu nombre es la luz<br>Que al mundo hace brillar.<br>Pues la Gloria tuya es,<br>Para siempre Dios<br>La Gloria tuya es.</p>"
      },
      {
        "id":214,
        "title": "Llévame a la cruz",
        "content": "<p>Mi Salvador, vengo ante Ti<br>Recuerdo.<br>Tu sangre fue la que pagó<br>Mi precio.</p><p>Lo que un día valoré<br>Lo rindo ante Ti.</p><p>Llévame a la Cruz<br>Donde halle tu amor.<br>Llévame a tus pies<br>Me humillo Dios.<br>Líbrame de mí<br>Tuyo soy Señor.<br>Mi Cristo,<br>Llévame a la Cruz.</p><p>Fuiste como yo<br>Tentado, Señor,<br>Humano.<br>El Verbo llegó,<br>Mi maldad cargó<br>Ahora vives.</p><p>A tu corazón,<br>A tu corazón,<br>Llévame a tu corazón,<br>A tu corazón.</p>"
      },
      {
        "id":215,
        "title": "Profundo amor del Padre Dios",
        "content": "<p>Profundo amor del Padre Dios,<br>Tan amplio inmensurable,<br>Que dio a Su Hijo por hacer<br>Tesoro al despreciable.<br>Ardiente pérdida y dolor,<br>Su rostro el Padre aparta,<br>Más hijos a la gloria trae<br>La herida que le marca.</p><p>He aquí el Hombre en la cruz,<br>A hombros mi pecado,<br>Y escucho con pesar mi voz<br>Unirse a cada escarnio.<br>Mi culpa le retuvo allí,<br>La obra completando;<br>Me imparte vida por morir,<br>Ya todo es consumado.</p><p>De dones no me jactaré<br>Por fuerte ni por sabio.<br>De quien murió me gloriaré,<br>Jesús resucitado.<br>¿Por qué obtendré su galardón?<br>No puedo dar respuesta.<br>Más esto sé de corazón:<br>Jesús pagó mi deuda.</p><p>¿Por qué obtendré su galardón?<br>No puedo dar respuesta.<br>Más esto sé de corazón:<br>Jesús pagó mi deuda.</p><p>Más esto sé de corazón:<br>Jesús pagó mi deuda.</p>"
      },
      {
        "id":216,
        "title": "Bueno es alabar",
        "content": "<p>Bueno es alabar, oh Señor, Tu Nombre.<br>Darte gloria, honra y honor, por siempre.<br>Bueno es alabarte, Jesús<br>Y gozarme en Tu poder. </p><p>Porque grande eres Tú,<br>Grandes son tus obras,<br>Porque grande eres Tú<br>Grande es tu amor, grande es Tu gloria. </p><p>BUENO ES ALABARTE, SEÑOR.</p>"
      },
      {
        "id":217,
        "title": "Santo, Santo, Santo",
        "content": "<p>¡Santo, Santo, Santo! Señor Omnipotente,<br>Siempre el labio mío loores te dará.<br>¡Santo, Santo, Santo! Te adoro, reverente,<br>Dios en Tres personas, Bendita Trinidad.</p><p>¡Santo, Santo, Santo! Por más que estés velado<br>Con sombras y el hombre no te pueda mirar.<br>Santo Tú eres solo y nada hay a tu lado<br>En poder perfecto, pureza y caridad.</p><p>El es Santo, Santo, Santo. Dios de gracia y gloria es.<br>Tú eres Santo, Santo, Santo. Eres Digno de adorar.<br>Tú eres Santo, Santo, Santo, nos postramos ante Ti.<br>Cantamos: Santo, Santo, Santo.</p><p>¡Santo, Santo, Santo! La gloria de Tu nombre<br>Publican tus obras en cielo, tierra y mar.<br>¡Santo, Santo, Santo! Te adore todo hombre<br>Dios en Tres Personas, Bendita Trinidad.</p>"
      },
      {
        "id":218,
        "title": "¿Quién te compara, Señor?",
        "content": "<p>¿Quién te compara, Señor? Tú eres el Dios Creador.<br>El Universo formaste al sonar de Tu voz.<br>¿Quién hay más grande que Tú?,<br>¿Paz, Vida, Escudo y Luz?<br>Quien por amor vio a su Hijo morir en la cruz.<7p><p>El cielo te adora en eterna canción.<br>Nosotros, tus hijos, hoy proclamamos:</p><p>No a nosotros, no a otros, solo a Tu Nombre gloria.<br>Te alabamos, nos postramos ante Ti.<br>No a nosotros, no a otros, solo a Tu Nombre gloria.<br>Te alabamos, nos postramos ante Ti.</p>"
      },
      {
        "id":219,
        "title": "Cámbiame",
        "content": "<p>Cristo moriste en una cruz,<br>Resucitaste con poder.<br>Perdona mis pecados hoy,<br>Se mi Señor y Salvador</p><p>Cámbiame y hazme otra vez,<br>Ayúdame a serte fiel.<br>Cámbiame y hazme otra vez,<br>Ayúdame a serte fiel.</p>"
      },
      {
        "id":220,
        "title": "Estoy bien, gloria a Dios",
        "content": "<p>De paz inundada mi senda esté,<br>O cúbrala un mar de aflicción,<br>Cualquiera que sea mi suerte, dire:<br>“Estoy bien, tengo paz, ¡Gloria a Dios!”.</p><p>Ya venga la prueba o me tiente Satán,<br>No mengua mi fe ni mi amor;<br>Pues Cristo comprende mis luchas, mi afán,<br>Y su sangre obrará en mi favor.</p><p>Estoy bien, ¡Gloria a Dios!<br>Tengo paz en mi ser, ¡Gloria a Dios!.</p><p>Feliz yo me siento al saber que Jesús,<br>Me libra del yugo opresor;<br>Quitó mi pecado, clavado en la cruz;<br>Gloria doy a mi buen Salvador.</p><p>La fe se tornó en feliz realidad<br>Al irse la niebla veloz;<br>Desciende Jesús con Tu gran majestad,<br>¡Aleluya, estoy bien con mi Dios!</p><p>Estoy bien, ¡Gloria a Dios!,<br>Tengo paz en mi ser, ¡Gloria a Dios!.<br>Tengo paz en mi ser, ¡Gloria a Dios!</p>"
      },
      {
        "id":221,
        "title": "Te alabaré",
        "content": "<p>Por tu gloria, Tu pureza,<br>Por tu gracia sin final.<br>Alma mía, bendice al Señor,</p><p>Por ser justo, Por ser Santo,<br>Por tu amor y perfección.<br>Alma mía, bendice al Señor.<br>Alma mía, bendice al Señor</p><p><b>Coro I</b>:<br>Te alabaré, bendeciré tu nombre siempre.<br>Te alabaré.<br>Alma mía, bendice al Señor<br>Alma mía, bendice al Señor.</p><p>Por tus pruebas, Tu paciencia, <br>Tu bondad y tu favor.<br>Alma mía, da gracias Dios.</p><p>Por tu muerte, por mi vida,</p><p>Por tu sangre, mi salvación.<br>Alma mía, da gracias a Dios,<br>alma mía, da gracias a Dios</p><p><b>Coro II</b>:<br>Te alabaré, bendeciré tu nombre siempre.<br>Te alabaré.<br>Alma mía, da gracias a Dios<br>Alma mía, da gracias a Dios.</p><p>Por tu angustia, sufrimiento,<br>y tristeza, humilde Rey.<br>Alma mía, alaba al Señor.</><p>Tu victoria,  por Tu triunfo<br>Porque pronto al fin reinarás  </p><p><b>Coro I</b></p>"
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
        var prom = $q.defer()
        prom.resolve({
          data: data
        });
        return prom.promise
      },
      findByID: function (id){
        var res = [];
        var prom = $q.defer();
        angular.forEach(data,function(obj){
          if(obj.id == id){
            res.push(obj);
          }
        });
        prom.resolve({
          data: res,
        });

        return prom.promise;
      },
      findByName: function(name){
        var res = [];
        var prom = $q.defer();
        name = name.toUpperCase();
        angular.forEach(data, function(obj) {
          if( obj.title.toUpperCase().indexOf(name) >= 0 ) res.push(obj);
        });
        prom.resolve({
          data:res,
        })
        return prom.promise;
      },
      getBookmarks: function(){
        var res = [];

        var bookmarks = localstorage.getObject('bookmarks');
        var prom = $q.defer();

        if(angular.equals({}, bookmarks)){
          //Do nothing
        }
        else{
          angular.forEach(data, function(obj){
            angular.forEach(bookmarks, function(b){
              if(b == obj.id){
                res.push(obj);
              }
            })
          });
        }

        prom.resolve({
          data: res
        })
        return prom.promise;

      },
      isBookmark: function(id){
        var bookmarks = localstorage.getObject('bookmarks');
        if(utils.in_array(id, bookmarks)){
          return true;
        }
        return false;
      }
    }
  }]);
