var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.07430442065946607,
        "pitch": -0.8343250833960596,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.013169657874538387,
          "pitch": -0.07862585754448759,
          "rotation": 0,
          "target": "1-escaleras-exteriores"
        },
        {
          "yaw": 0.6979582477388497,
          "pitch": -0.07634522771660812,
          "rotation": 5.497787143782138,
          "target": "10-portn-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-escaleras-exteriores",
      "name": "escaleras exteriores",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.26892318066444076,
        "pitch": 0.017739530814122162,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.07527840154038756,
          "pitch": -0.1237493238441374,
          "rotation": 0,
          "target": "2-hall-de-acceso"
        },
        {
          "yaw": -2.9228355599472664,
          "pitch": 0.17288207088267527,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall-de-acceso",
      "name": "hall de acceso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.02764998568955157,
        "pitch": 0.059590507444864826,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.3021529573936643,
          "pitch": 0.05638596493237813,
          "rotation": 0,
          "target": "3-ascensor--cocheras-descubiertas"
        },
        {
          "yaw": 3.064035193090038,
          "pitch": 0.15326383625659545,
          "rotation": 0,
          "target": "1-escaleras-exteriores"
        },
        {
          "yaw": 1.591614877553952,
          "pitch": 0.09042173799715059,
          "rotation": 0,
          "target": "10-portn-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ascensor--cocheras-descubiertas",
      "name": "ascensor / cocheras descubiertas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7525181200764752,
          "pitch": 0.03631943156418771,
          "rotation": 0,
          "target": "4-palier"
        },
        {
          "yaw": -0.23700487816142513,
          "pitch": 0.01145277996937999,
          "rotation": 0,
          "target": "11-ingreso-al-edificio-por-cochera"
        },
        {
          "yaw": 2.624609095146604,
          "pitch": 0.11390796838823647,
          "rotation": 0,
          "target": "1-escaleras-exteriores"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-palier",
      "name": "palier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3920413543244763,
        "pitch": 0.1951348389553509,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.0754303951133615,
          "pitch": 0.09380567991733102,
          "rotation": 10.210176124166829,
          "target": "3-ascensor--cocheras-descubiertas"
        },
        {
          "yaw": -0.058272376268615034,
          "pitch": -0.002130130661846863,
          "rotation": 0,
          "target": "5-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ingreso-al-dpto",
      "name": "ingreso al dpto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9275772439132233,
          "pitch": 0.12068629615138171,
          "rotation": 0,
          "target": "4-palier"
        },
        {
          "yaw": -1.024124604419157,
          "pitch": 0.08108986745177837,
          "rotation": 0.7853981633974483,
          "target": "6-cocina-comedor"
        },
        {
          "yaw": -1.7130122117600806,
          "pitch": 0.08098100701466038,
          "rotation": 0,
          "target": "7-balcn-con-parrilla"
        },
        {
          "yaw": 1.305464179184316,
          "pitch": 0.09473727756077466,
          "rotation": 0,
          "target": "8-habitacin"
        },
        {
          "yaw": 0.6404122508311119,
          "pitch": 0.05356936392786693,
          "rotation": 0,
          "target": "9-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cocina-comedor",
      "name": "Cocina comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.34650809226591406,
        "pitch": 0.1519550982451392,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.5990920425443491,
          "pitch": 0.15925856332835586,
          "rotation": 0,
          "target": "7-balcn-con-parrilla"
        },
        {
          "yaw": -2.600380952004352,
          "pitch": -0.0022578234895309635,
          "rotation": 0.7853981633974483,
          "target": "5-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-balcn-con-parrilla",
      "name": "Balcón con parrilla",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.021371594805962957,
        "pitch": 0.005068437375463475,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.569989108509249,
          "pitch": 0.08288181542605066,
          "rotation": 0,
          "target": "6-cocina-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-habitacin",
      "name": "Habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.32591352358670633,
        "pitch": 0.08109694734133832,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.626475876867911,
          "pitch": 0.14188398094261245,
          "rotation": 0,
          "target": "5-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.11767733531343,
          "pitch": 0.17166671408952894,
          "rotation": 0,
          "target": "5-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-portn-cocheras-descubiertas",
      "name": "portón cocheras descubiertas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9991119493559228,
        "pitch": -0.045615936379174826,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.45583477675379136,
          "pitch": -0.06610895316083543,
          "rotation": 0,
          "target": "12-cocheras-descubiertas"
        },
        {
          "yaw": -2.9582027343271555,
          "pitch": 0.10236843844097265,
          "rotation": 0.7853981633974483,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ingreso-al-edificio-por-cochera",
      "name": "Ingreso al edificio (por cochera)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.02512700972850368,
        "pitch": 0.21268063506945367,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.0477297429295707,
          "pitch": 0.17098917149551518,
          "rotation": 0,
          "target": "3-ascensor--cocheras-descubiertas"
        },
        {
          "yaw": 1.6772646387878538,
          "pitch": 0.0589573897794331,
          "rotation": 1.5707963267948966,
          "target": "10-portn-cocheras-descubiertas"
        },
        {
          "yaw": 0.25743059784771205,
          "pitch": 0.06466896442977799,
          "rotation": 0,
          "target": "12-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cocheras-descubiertas",
      "name": "Cocheras descubiertas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06913965493007268,
        "pitch": 0.07803504537976558,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.5844248537016714,
          "pitch": 0.06247375900526819,
          "rotation": 0,
          "target": "10-portn-cocheras-descubiertas"
        },
        {
          "yaw": -2.737916238057119,
          "pitch": 0.04393458952765705,
          "rotation": 0,
          "target": "11-ingreso-al-edificio-por-cochera"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Fiorenza Tercer piso lateral - 2 ambientes",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
