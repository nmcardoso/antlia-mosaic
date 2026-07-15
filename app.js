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
    console.log(key, value)
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
    if (value.includes('natanael.net')) {
      console.log(value)
      td2.innerHTML = value.replace('natanael.net', '<a href="https://natanael.net" target="_blank">natanael.net</a>')
    } else {
      td2.textContent = value;
    }
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

    const overlay5R200 = A.graphicOverlay({
      name: '5R200',
      color: '#ee2345',
      lineWidth: 2,
    });
    aladin.addOverlay(overlay5R200);
    overlay5R200.add(A.circle(ra, dec, 9.058));
  });
}

// Initialize on DOM load
window.addEventListener('load', initAladin);
