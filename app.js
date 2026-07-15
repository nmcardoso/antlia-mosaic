const specMembers = [
  [157.22304861748628, -35.60545186096564],
  [156.63457104464382, -39.94403229558173],
  [155.39537834702176, -34.26642617890829],
  [160.69430710824466, -36.353014350651385],
  [157.61043251192882, -35.35941983020402],
  [157.71579988963498, -36.736991107112566],
  [154.07783354709346, -33.56380847806896],
  [157.27669763431493, -35.59514165649567],
  [157.48743013469746, -35.224477220723244],
  [157.96816353565194, -34.85447227109589],
  [157.74861910949937, -34.56266772711466],
  [157.8974574632174, -39.95501688983295],
  [158.94765374891108, -32.35850873575209],
  [156.0710247387903, -32.48262643074939],
  [163.53327586751243, -33.119581948028944],
  [157.62160208945156, -35.61062816421692],
  [156.37003663923466, -39.82789421609197],
  [152.69225362566704, -34.84420105750572],
  [156.93642367586813, -40.43511386591774],
  [160.96035147736453, -38.263354635283015],
  [159.21998599697156, -32.34817306701044],
  [157.95872942498022, -30.38454508136033],
  [158.53096304027693, -35.32339449370713],
  [157.46454971268693, -34.911694627861],
  [163.06681961852314, -32.67110821010376],
  [157.25313736211277, -40.08305322836281],
  [159.81278815187684, -30.29813514666268],
  [151.34582432457654, -34.21992081662926],
  [160.50967719119834, -33.24551322496819],
  [160.76247409525874, -36.3625184765295],
  [157.07482756989054, -31.51800311915968],
  [156.17712359122802, -39.30594649458061],
  [162.5130529218073, -35.66235562727377],
  [155.78412590907698, -39.62388162920018],
  [160.08622333224548, -36.41144303116358],
  [159.99348962317302, -30.19285219826269],
  [157.98207271453262, -35.40988201843422],
  [157.59652173259224, -30.39294683145078],
  [161.10207573481352, -32.20978481210128],
  [152.92652833597984, -31.64312180117205],
  [156.5926667421822, -34.96355452540414],
  [157.29579576644235, -30.342588797104742],
  [160.50144766010683, -36.93551645349576],
  [156.92687806554733, -40.00256799313341],
  [159.9578892536274, -36.03610793674947],
  [153.69774327019945, -39.80656300004343],
  [157.19637214970118, -35.658189372920454],
  [157.07994461841704, -35.45447633612852],
  [156.99151299528816, -39.81480138365049],
  [158.24814464301642, -34.88627844694471],
  [157.993651798727, -35.198416423336745],
  [158.50311435228554, -35.28259900799723],
  [155.1186358087189, -39.35226914653173],
  [157.45181349207894, -35.41882193565933],
  [153.68905293371515, -34.05904360610842],
  [156.75994180217225, -36.228887112064605],
  [157.85074747246932, -35.22049867646249],
  [160.01779210697424, -30.268012677984505],
  [150.8758905198707, -33.95012245395477],
  [160.36526497454437, -31.78023699984831],
  [158.20299899412873, -34.399553968885165],
  [157.13312575145875, -35.705136072218],
  [160.3357235409068, -31.815284983303343],
  [157.37918492593454, -35.25993085755017],
  [158.49651109510475, -30.167958959425004],
  [156.83508275591817, -35.274241475420936],
  [160.87903947099574, -30.772169575216303],
  [156.54312010441672, -39.94295088637378],
  [157.5812597695193, -34.40513539882339],
  [153.15614322674676, -34.72822431428982],
  [158.82794144615048, -36.87910412501763],
  [153.6844241985763, -34.337559525680774],
  [157.96735657491382, -35.20487363713048],
  [155.89580486064608, -38.65653291804382],
  [158.5361117641584, -34.63383665174589],
  [157.4637658599103, -35.16425502260978],
  [159.5611898187538, -38.0929261601848],
  [154.61651735308448, -36.19391095705233],
  [157.98423270106818, -34.991328679916144],
  [157.6071174650015, -35.1081250805941],
  [156.84557208244092, -33.87836039652941],
  [157.9507394616898, -36.03155677401567],
  [157.09981103413483, -35.52962315902001],
  [156.88767429152546, -35.98633362103004],
  [151.6307641328536, -32.0433109075735],
  [156.28160786333368, -35.60515770169432],
  [157.08014047207442, -35.758586179249654],
  [150.70865960880906, -33.953275652795654],
  [157.112098905782, -37.90737939737746],
  [157.47104683741577, -35.37521069963381],
  [156.13833821723873, -36.9312239143362],
  [158.96270246218964, -34.26981707094112],
  [157.874571948753, -32.71308448458223],
  [157.85530195187513, -29.952723986553163],
  [157.6055519589975, -35.56333880705598],
  [162.08625842268117, -34.090202522005264],
  [158.05298814661234, -34.67345689418969],
  [159.46672883704545, -30.668936651694],
  [157.59917774213045, -35.253795350613785],
  [160.28559577312453, -33.48101802302288],
  [157.01288122543826, -35.44220889050936],
  [157.29585025708334, -35.68782115174504],
  [160.2244157195383, -36.28822091214181],
  [157.30468693002956, -35.48736429934493],
  [157.06678666150555, -35.53392332385034],
  [156.9891329783679, -35.82171869001349],
  [155.8758964764572, -35.45590919078255],
  [157.03367615737724, -35.64028779460157],
  [163.98773738266215, -33.09655291278455],
  [157.20515935323178, -31.49843539595553],
  [157.29819323360113, -35.65797546674752],
  [151.40232899176107, -38.13804206981724],
  [158.31747289387786, -34.51953095052383],
  [158.03534972789362, -34.674859540525915],
  [159.34521248203313, -35.36043029792804],
  [160.4864870187278, -40.26038758448604],
  [159.16360238280797, -34.75657052096862],
  [159.26850843842752, -31.365869209164533],
  [157.50471593116987, -35.81382324138784],
  [160.62271161696182, -30.885148116995445],
  [158.6877586542025, -35.47044771748011],
  [155.28861449722294, -32.86107654406886],
  [161.99504688866585, -31.75259272352787],
  [157.52524605979357, -36.10608167035538],
  [158.55681991927514, -36.23317574882575],
  [157.69968682863245, -34.3270251824743],
  [157.5760316257807, -35.19691568561794],
  [162.16977748908008, -35.090139997214244],
  [156.05730178500937, -41.07281191171423],
  [157.76359670109838, -34.671778208008064],
  [158.0400839873541, -34.463090001515404],
  [154.716620657843, -32.5967923031612],
  [157.36839141599316, -34.67274100458344],
  [158.0002264851858, -34.51031929636997],
  [152.04482602190998, -33.5172760091052],
  [158.5402306163601, -33.63436332358961],
  [157.1303626291208, -31.56507558539619],
  [157.58684448506088, -35.591944470149095],
  [160.53643665799817, -33.789309626692855],
  [157.9563592252983, -35.205630383919164],
  [158.5467572078109, -31.77430035653109],
  [159.20729441689213, -30.627897546847827],
  [158.44240363949797, -31.882579551391075],
  [157.58915210845802, -35.518095382094906],
  [157.68788119463525, -35.35930043580443],
  [156.6959523370247, -31.149569242357018],
  [160.25884019268918, -30.794484455862808],
  [157.1329863675201, -35.67734492388831],
  [157.32995428170392, -35.584693297361945],
  [156.6852498944313, -36.86482978563125],
  [159.5270106952739, -38.118832766071925],
  [157.11228372002253, -35.23993381040182],
  [159.93277734753298, -35.28147638458709],
  [157.25771315585342, -35.566734146788264]
];


/**
 * Fetches and parses the HiPS properties file from the given URL.
 *
 * @param {string} url - The base URL of the HiPS directory.
 * @returns {Promise<Object|null>} A dictionary of parsed properties, or null on failure.
 */
async function fetchProperties(url) {
  try {
    const response = await fetch(`${url}/properties`);
    const text = await response.text();
    return parseHiPSProperties(text);
  } catch (err) {
    console.error("Failed to fetch properties:", err);
    return null;
  }
}

/**
 * Parses a HiPS properties file into a key-value dictionary.
 *
 * @param {string} text - Raw text content of the properties file.
 * @returns {Object} A dictionary mapping property keys to values.
 */
function parseHiPSProperties(text) {
  const props = {};
  const cleaned = text.replace(/[\r]/g, '');
  const lines = cleaned.split('\n');
  let lastKey = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#')) continue;

    const idx = trimmed.indexOf('=');
    if (idx < 0) {
      if (lastKey) {
        props[lastKey] += trimmed;
      }
      continue;
    }

    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    props[key] = value;
    lastKey = key;
  }

  return props;
}

/**
 * Populates the properties table cells with values from the parsed properties object.
 * Known properties are mapped to specific ID fields, and remaining properties
 * are appended dynamically to the grey table body.
 *
 * @param {Object} props - Parsed HiPS properties dictionary.
 */
function populateProperties(props) {
  const knownKeys = [
    'creator_did',
    'obs_title',
    'moc_sky_fraction',
    'hips_creator',
    'dataproduct_type',
    'hips_frame',
    'hips_order',
    'hips_tile_format',
    'hips_initial_ra',
    'hips_initial_dec',
    'hips_initial_fov',
    'obs_regime',
  ];

  for (const key of knownKeys) {
    const el = document.getElementById(`prop_${key}`);
    if (el && key in props) {
      let val = props[key];
      if (val.includes('natanael.net')) {
        val = val.replace('natanael.net', '<a href="https://natanael.net" target="_blank">natanael.net</a>')
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  }

  // Populate grey table with remaining properties
  const greyBody = document.getElementById('grey_table_body');
  if (!greyBody) return;

  for (const [key, value] of Object.entries(props)) {
    if (knownKeys.includes(key)) continue;
    if (key.startsWith('hipsgen_date')) continue;
    if (key.startsWith('hipsgen_params')) continue;

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = key;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = value;
    tr.appendChild(td2);

    greyBody.appendChild(tr);
  }
}

/**
 * Initializes the Aladin Lite viewer inside #aladin-container.
 * Fetches HiPS properties to determine survey URL and initial view parameters.
 */
async function initAladin() {
  const url = location.href;
  // const hipsURL = url.substring(0, url.lastIndexOf('/', url.length));
  const hipsURL = 'https://raw.githubusercontent.com/nmcardoso/antlia-mosaic/refs/heads/hips/';

  const props = await fetchProperties(hipsURL);
  if (props) {
    populateProperties(props);
    document.getElementById('hamburger-label').click()
  }

  A.init.then(() => {
    let aladin;
    aladin = A.aladin('#aladin-container');

    let ra = 157.42113;
    let dec = -35.32579;
    let fov = 0.2;

    if (props) {
      if ('hips_initial_ra' in props) ra = parseFloat(props['hips_initial_ra']);
      if ('hips_initial_dec' in props) dec = parseFloat(props['hips_initial_dec']);
      if ('hips_initial_fov' in props) fov = parseFloat(props['hips_initial_fov']);
    }

    const survey = aladin.createImageSurvey(
      'S-PLUS Antlia',
      'S-PLUS Antlia',
      hipsURL,
      'equatorial',
      10
    );
    aladin.setImageLayer(survey, { cooFrame: 'ICRSd', showCooGridControl: true });
    aladin.gotoRaDec(ra, dec);
    aladin.setFov(fov);

    const drawStar = function (ctx, cx, cy, spikes, outerRadius, innerRadius) {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius)
      for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      // ctx.lineWidth = 3;
      // ctx.strokeStyle = 'blue';
      // ctx.stroke();
      // ctx.fillStyle = 'skyblue';
      // ctx.fill();
    };

    const drawFunction = function (source, canvasCtx, viewParams) {
      // canvasCtx.arc(source.x, source.y, 16, 0, 2 * Math.PI, false);
      drawStar(canvasCtx, source.x, source.y, 5, 14, 7);
      canvasCtx.strokeStyle = '#50c2d6';
      canvasCtx.lineWidth = 0.5;
      canvasCtx.globalAlpha = 0.7;
      canvasCtx.stroke();
      canvasCtx.fillStyle = '#31e9f7';
      canvasCtx.fill();

      const fov = Math.max(viewParams['fov'][0], viewParams['fov'][1]);

      // object name is displayed only if fov<10°
      if (fov > 10) {
        return;
      }

      canvasCtx.globalAlpha = 0.95;
      canvasCtx.globalAlpha = 1;

      const xShift = 20;

      if (fov > 1.7) return;

      canvasCtx.font = '17px Arial'
      canvasCtx.fillStyle = '#eee';
      canvasCtx.fillText(source.data['name'], source.x + xShift, source.y - 4);

      canvasCtx.font = '15px Arial'
      canvasCtx.fillStyle = '#50f8f8';
      canvasCtx.fillText(source.data['otype'], source.x + xShift, source.y + 12);
    };

    const catCenter = A.catalog({ name: 'Structures', shape: drawFunction });
    aladin.addCatalog(catCenter);
    const structures = [
      [ra, dec, { name: 'Antlia', otype: 'Galaxy cluster' }],
      [157.50270833, -35.32544, { name: 'NGC3268', otype: 'Group of galaxies' }],
      [157.22204166, -35.60558333, { name: 'NGC3258', otype: 'Group of galaxies' }],
    ];
    catCenter.addSources(structures.map((e) => A.source(...e)));

    const catMembers = A.catalog({ name: 'Members', color: '#00ff4c', shape: 'circle', sourceSize: 12, onClick: 'showPopup' });
    aladin.addCatalog(catMembers);
    catMembers.addSources(specMembers.map((e) => A.source(...e, { ra: e[0], dec: e[1], category: 'spectroscopic member' })));

    const overlayR200 = A.graphicOverlay({
      name: 'R200',
      color: '#fff',
      lineWidth: 1.75,
    })
    aladin.addOverlay(overlayR200);
    overlayR200.add(A.circle(ra, dec, 1.32));

    const overlay5R200 = A.graphicOverlay({
      name: '5R200',
      color: '#ee2345',
      lineWidth: 1.75,
    });
    aladin.addOverlay(overlay5R200);
    overlay5R200.add(A.circle(ra, dec, 6.6));

    // const catSpecMembers = A.catalog({ name: 'Spectroscopic members', sourceSize: 8 });
    // aladin.addCatalog(catSpecMembers);
  });
}

// Initialize on DOM load
window.addEventListener('load', initAladin);
