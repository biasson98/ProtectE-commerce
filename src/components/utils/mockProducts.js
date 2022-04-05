const mockProducts = [
    {
        id: 1,
        type: 1,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0118010712_gtr_frt_001_rr.jpg",
        enviogratis: false,
        recomendado: true,
        price: 78000,
        stock: 7,
        detail: "La American Ultra Stratocaster presenta un exclusivo perfil de mástil de D moderna con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 a 14 con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless  y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos.",
        description: "FENDER AMERICAN ULTRA STRATOCASTER"
    },
    {
        id: 2,
        type: 1,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0113940700_fen_ins_frt_1_rr.jpg",
        enviogratis: true,
        recomendado: false,
        price: 85000,
        stock: 5,
        detail: "La American Professional II Telecaster® se basa en más de setenta años de innovación, inspiración y evolución para satisfacer las demandas del músico actual. Nuestro popular mástil Deep  C  ahora tiene bordes de diapasón redondeados, un acabado satinado Super-Natural y un talón de mástil recién esculpido para una sensación sumamente cómoda y de fácil acceso al registro superior. Las nuevas pastillas de bobina simple V-Mod II Telecaster son más articuladas que nunca y brindan el sonido vibrante, chasquido y gruñido que hizo famosa a la Tele.",
        description: "FENDER AMERICAN PROFESSIONAL II TELECASTER"
    },
    {
        id: 3,
        type: 1,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0378000500_sqr_ins_frt_1_rr.jpg",
        enviogratis: true,
        recomendado: true,
        price: 45000,
        stock: 12,
        detail: "Una excelente puerta de entrada a la tradicional familia Fender®, la Stratocaster® Squier® Affinity Series™ ofrece un diseño legendario y un tono por excelencia para el aspirante a héroe de la guitarra de hoy. ",
        description: "SQUIER AFFINITY SERIES™ STRATOCASTER®"
    },
    {
        id: 4,
        type: 1,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0374042500_sqr_ins_frt_1_rr.jpg",
        enviogratis: true,
        recomendado: true,
        price: 52950,
        stock: 7,
        detail: "Un guiño a la Tele® de la década de 1960 adornada con doble ribete, la Telecaster personalizada Classic Vibe de los años 60 ofrece un sonido impresionante desde sus pastillas de bobina simple diseñadas por Fender y sus imanes Alnico.",
        description: "SQUIER CLASSIC VIBE BARITONE CUSTOM TELECASTER®"
    },
    {
        id: 5,
        type: 2,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10002/0970843106_gtr_frt_001_rr.jpg",
        enviogratis: true,
        recomendado: true,
        price: 82670,
        stock: 8,
        detail: "Sigue tu visión musical y exprésate con la exclusiva Newporter Special. La exclusiva forma de la Newporter de tamaño medio le da un sonido equilibrado, articulado y potente, perfecta para respaldar a cualquier cantante. Diseñada para los directos, con una tapa de abeto pintada, trasera y aros de caoba también pintadas, pala de 6 en línea pintada a juego y un ribete y roseta de arce, le dan a esta guitarra un toque de estilo electrizante.",
        description: "FENDER NEWPORTER SPECIAL"
    },
    {
        id: 6,
        type: 2,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0970310303_fen_ins_frt_1_rr.jpg",
        enviogratis: false,
        recomendado: true,
        price: 93399,
        stock: 5,
        detail: "La Paramount PD-220E combina artesanía de vanguardia con detalles de inspiración vintage, ofreciendo lo mejor de ambos mundos. Construida con la elección de una tapa de abeto macizo o caoba maciza combinada con aros y fondo de caoba maciza, la PD -220E cuenta con un patrón de refuerzo de varillas internas compensado en X que ha sido cuidadosamente refinado para optimizar la resonancia y el tono Una nueva pastilla Sonitone Plus diseñada por Fender y Fishman amplifica el tono completo y equilibrado de la forma del cuerpo Dreadnought de la PD-220E, mientras que los controles montados en la boca conservan la estética vintage.",
        description: "FENDER PD-220E DREADNOUGHT"
    },
    {
        id: 7,
        type: 2,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10002/0970813106_gtr_frt_001_rr.jpg",
        enviogratis: true,
        recomendado: false,
        price: 75900,
        stock: 2,
        detail: "Audaz y impetuoso es el sonido de esta gran caja acústica, diseñado para inspirar desde el momento en que la coges. La exclusiva forma de cuerpo de la Redondo tiene una voz rica y dominante que llega a cualquier rincón. La tapa, el fondo y y los aros, así como una pala de 6 en línea pintada a juego y un ribete crema le dan una actitud electrizante.",
        description: "FENDER REDONDO SPECIAL"
    },
    {
        id: 8,
        type: 3,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/2231100000_amp_frt_001_nr.jpg",
        enviogratis: true,
        recomendado: false,
        price: 132662,
        stock: 12,
        detail: "Después de escuchar comentarios de cientos de músicos, hemos rediseñado el Hot Rod DeVille 212 IV, actualizándolo con un circuito de preamplificador modificado, una reverb de muelles de sonido más suave y una estética actualizada que cualquier puede músico apreciar. El estándar para los guitarristas de todo el mundo, este combo abrasivo de 60 vatios de 2x12 tiene todo el sonido y potencia que necesitas para tus actuaciones.",
        description: "FENDER HOT ROD DEVILLE™ 212 IV"
    },
    {
        id: 9,
        type: 3,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10003/0217300000_amp_frt_001_nr.jpg",
        enviogratis: false,
        recomendado: true,
        price: 42999,
        stock: 7,
        detail: "Un verdadero clásico de Fender apreciado por guitarristas de todo el mundo durante décadas y uno de los mejores amplificadores de backline que jamás se han construido. A mediados de los años 60 el Twin Reverb se ha utilizado en todas las salas de concierto imaginables y sigue siendo indispensable hoy en día.",
        description: "FENDER 65 TWIN REVERB®"
    },
    {
        id: 10,
        type: 3,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/2330600000_amp_frt_001_nr.jpg",
        enviogratis: true,
        recomendado: true,
        price: 62922,
        stock: 8,
        detail: "Diseñado para guitarristas que desean un amplificador fácil de usar con un rendimiento y características inigualables, el Champion 100XL contiene una amplia selección de modelos y efectos de amplificador. El Champion 100XL agrega un aspecto y un sonido más agresivo a la serie Champion: los cosméticos negro sobre negro lo separan de la estética tradicional de la serie.",
        description: "FENDER CHAMPION™ 100XL"
    },
    {
        id: 11,
        type: 3,
        url: "https://www.fmicassets.com/Damroot/ThumbnailJpg/10002/8170500000_amp_frt_001_nr.jpg",
        enviogratis: true,
        recomendado: false,
        price: 86450,
        stock: 4,
        detail: "Entre los amplificadores más apreciados por los guitarristas y coleccionistas está el codiciado por su rareza Fender Bandmaster de tweed de finales de los años 50 con su aspecto clásico y su potente rendimiento. Eso es lo que obtienes con los ’57 Bandmaster de válvulas actuales, que cuentan con componentes de calidad premium y un poderoso trío de altavoces que ofrecen sonidos limpios y de gran riqueza armónica, que lo hacen perfecto para vintage rock, blues y country, con un sonido overdrive sensible al tacto que suena electrizante, sobre todo cuando se lleva al límite.",
        description: "FENDER 57 BANDMASTER™"
    }
];

export default mockProducts;