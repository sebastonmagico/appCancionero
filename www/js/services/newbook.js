angular.module('ionic.utils', [])

  .factory('newBook', ['$window', function($window) {
    var data = [
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
      }
    }
  }]);
