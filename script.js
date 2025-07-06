// Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbznnIvZSrF4bz8n6uHXpNkVmaHm-p4DlJOW1z1pZSL4ZED5WTGvMG7RdYWo6coTljIXyA/exec';

// Site data
const sites = [
{no: "100", name: "Main Office"},
{no: "1001", name: "Lusail R17 Tower Maintenance"},
{no: "1002", name: "Jassem Villa Maintenance"},
{no: "1003", name: "Ali Al Emadi Villa"},
{no: "1004", name: "New Dar Al Hekma"},
{no: "1005", name: "Naif Villa"},
{no: "1006", name: "AL-Emadi Stone Factory"},
{no: "1007", name: "Bin Mahmoud 54 Building"},
{no: "1008", name: "IBA RE Accommodation Maintena"},
{no: "1009", name: "IBA Labor Camp Maintenance"},
{no: "1061", name: "M.E Dafna V Maintenance"},
{no: "1065", name: "IBA Workers Accomm, Store"},
{no: "1067", name: "Foxhills K06/K14 MAINITINANCE"},
{no: "1111", name: "Maintenance Projects"},
{no: "121", name: "Ain Khalid Gate"},
{no: "122", name: "Concorde Hotel"},
{no: "123", name: "Labour Camp"},
{no: "129", name: "Al Arqam Academy"},
{no: "130", name: "Dar Al Hekma School"},
{no: "132", name: "Al Hazm Mall"},
{no: "137.17", name: "Marina Res. 17"},
{no: "137.19", name: "Marina Res. 19"},
{no: "139", name: "Hamad Hilal Villa"},
{no: "140", name: "Foxhills D5-D6"},
{no: "141", name: "Foxhills MU-E10"},
{no: "142", name: "Foxhills D37"},
{no: "144", name: "Marina Res. 16"},
{no: "145", name: "Old Ghanim Commercial Building"},
{no: "146", name: "Al Hazm Stone Factory"},
{no: "147", name: "IBA Interiors Factory"},
{no: "148", name: "Hamad Rawdat Al Hamam Villa"},
{no: "149", name: "QAF D-103-01 5 Accommodation"},
{no: "150", name: "Ali Al Emadi Hilal Villa"},
{no: "151", name: "Manateq Labour Accommodation"},
{no: "152", name: "QAF D-110-01"},
{no: "153", name: "QAF D-313-01 (Dining Hall)"},
{no: "154", name: "QESC Signal Corps Project"},
{no: "155", name: "GWC Warehouse & Office Complex"},
{no: "156", name: "Mohamed Esmael Hilal Villa"},
{no: "157", name: "Mohamed Esmael Nuija Building"},
{no: "158", name: "BSQ Accommodation BuildingQESC"},
{no: "159", name: "QAF D-113-01 (Brooq 1)"},
{no: "160", name: "Officers Dining Hall at DNB"},
{no: "161", name: "M.E Dafna Palace"},
{no: "162", name: "Ibrahim Mosque"},
{no: "163", name: "Lusail R26"},
{no: "164", name: "Al Emadi Mosque"},
{no: "165", name: "IBA Workers Accomm. & Store"},
{no: "166", name: "Al Shahad Tower"},
{no: "167", name: "Foxhills K06/K14"},
{no: "168", name: "Qatar University HAB"},
{no: "169", name: "Al Arqam Academy 2"},
{no: "171", name: "Qtefan Island Villa"},
{no: "172", name: "AlThumama 2 Villas"},
{no: "173", name: "Azure Towers"},
{no: "174", name: "New Hilal Majilis"},
{no: "175", name: " Leonardo Projects  Brooq1"},
{no: "176", name: "Ashghal Chemical Store"},
{no: "177", name: "Lusail foxhills muh01, 2 ,3"},
{no: "178", name: "Lusail WR-RES. 27"},
{no: "179", name: " Dar Al Hekma Al Khessa"},
{no: "180", name: "New Dafna Majlis"},
{no: "181", name: "Abdullah H. Al Emadi Villa"},
{no: "91", name: "Ninty One Consultancy & Agency"},
{no: "A 29", name: "Al Asmakh building"},
{no: "M1", name: "Mohamed Esmael Al Emadi"},
{no: "M10", name: "Al Emadi Majlis"},
{no: "M11", name: "IBA Real Estate"},
{no: "M12", name: "Noaf & Mohamed Ali Al Emadi"},
{no: "M13", name: "Abdel Wahid Al Emadi"},
{no: "M132", name: "Al Hazm MAll Maintenance"},
{no: "M14", name: "Mohamed Abdel Karim Al Emadi"},
{no: "M147", name: "IBA Interiors Factory - M"},
{no: "M15", name: "IBA Aluminium"},
{no: "M16", name: "Hamad Sister Villa (3)"},
{no: "M161", name: "Mohamed Esmael Dafna Villa"},
{no: "M163", name: "Lusail R26 Owner"},
{no: "M166", name: "Al Shahad Tower Maintenance"},
{no: "M167", name: "M Foxhills K06/K14"},
{no: "M169", name: "Al Arqam Academy 2 C"},
{no: "M17", name: "59 Real Estate"},
{no: "M170", name: "Faisal Al Hammadi Residence"},
{no: "M172", name: "Al Thumama 2 Villas"},
{no: "M173", name: "Azure Towers Maints"},
{no: "M177", name: "Lusail fox hills muh01, 2 ,3"},
{no: "M178", name: "Lusail WR-RES 27"},
{no: "M179", name: " Dar Al Hekma Al Khessa M"},
{no: "M18", name: "IBA  Al-Kiranah Store"},
{no: "M181", name: "Abdullah H. Al Emadi Villa M"},
{no: "M2", name: "Abdullah Esmael Al Emadi"},
{no: "M20", name: "Ali Taleb Villa"},
{no: "M21", name: "Muntaza Building"},
{no: "M22", name: "Nuija Building"},
{no: "M23", name: "Qinwan Villa"},
{no: "M24", name: "Kheesa 5 Villas"},
{no: "M25", name: "On Time Real Estate Co."},
{no: "M26", name: "On Time Delivery"},
{no: "M27", name: "Coastal Solutions"},
{no: "M28", name: "Hilal Villa"},
{no: "M29", name: "IBA Inheritance"},
{no: "M3", name: "Hassan Esmael Al Emadi"},
{no: "M30", name: "Um Ghuwailina Building"},
{no: "M31", name: "Go Do Accommodation"},
{no: "M32", name: "Hilal 3 Villas"},
{no: "M33", name: "Mansoura Building"},
{no: "M34", name: "Ghazal Compound Ain Khaled"},
{no: "M35", name: "91 Cleaning & Hospitality"},
{no: "M36", name: "Hilal Villa B71"},
{no: "M37", name: "Ali Mohamed A.R Al Emadi"},
{no: "M38", name: "Blink Events Management"},
{no: "M4", name: "Hamad Mohamed Al Emadi"},
{no: "M5", name: "IBA Farm"},
{no: "M6", name: "Mohamed Esmael Farm Villa"},
{no: "M7", name: "Hamad Al Emadi Winter Camp"},
{no: "M8", name: "Salman Al Emadi"},
{no: "M9", name: "Hassan Rafee Al Emadi Villa"},
{no: "SZRE", name: "Seven Zone Real Estate"}
];

// Document classes
const documentClasses = [
  {code: "LET", name: "Letter"},
  {code: "MEM", name: "Memorandum"},
  {code: "REP", name: "Report"},
  {code: "CTR", name: "Contract"},
  {code: "NOT", name: "Notice"},
  {code: "WNG", name: "Warning"},
  {code: "TEN", name: "Tender"}
];

// DOM Elements
const elements = {
  mobileModal: document.getElementById('mobile-modal'),
  mobileInput: document.getElementById('mobile-input'),
  verifyBtn: document.getElementById('verify-btn'),
  mobileError: document.getElementById('mobile-error'),
  unregisteredMessage: document.getElementById('unregistered-message'),
  whatsappBtn: document.getElementById('whatsapp-btn'),
  appContainer: document.querySelector('.app-container'),
  form: document.getElementById('document-form'),
  from: document.getElementById('from'),
  site: document.getElementById('site'),
  class: document.getElementById('class'),
  dateSent: document.getElementById('dateSent'),
  remarks: document.getElementById('remarks'),
  submitBtn: document.getElementById('submit-btn'),
  successMessage: document.getElementById('success-message')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  const verifiedMobile = sessionStorage.getItem('verifiedMobile');
  
  if (verifiedMobile) {
    showApp();
  } else {
    showMobileVerification();
  }
  
  elements.verifyBtn.addEventListener('click', verifyMobile);
  elements.whatsappBtn.addEventListener('click', openWhatsApp);
});

function showMobileVerification() {
  elements.mobileModal.style.display = 'flex';
  elements.appContainer.classList.add('hidden');
}

function showApp() {
  elements.mobileModal.style.display = 'none';
  elements.appContainer.classList.remove('hidden');
  initializeForm();
  setDefaultDate();
  
  elements.submitBtn.addEventListener('touchstart', function(e) {
    this.classList.add('touch-active');
  }, {passive: true});
  
  elements.submitBtn.addEventListener('touchend', function(e) {
    this.classList.remove('touch-active');
  }, {passive: true});
}

function verifyMobile() {
  const mobile = elements.mobileInput.value.trim();
  
  if (!mobile) {
    showMobileError('Please enter your mobile number');
    return;
  }
  
  if (!/^[0-9]{8,12}$/.test(mobile)) {
    showMobileError('Please enter a valid mobile number');
    return;
  }
  
  setMobileLoadingState(true);
  
  fetch(`${scriptURL}?action=verifyMobile&mobile=${encodeURIComponent(mobile)}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        if (data.registered) {
          sessionStorage.setItem('verifiedMobile', mobile);
          showApp();
        } else {
          elements.unregisteredMessage.classList.remove('hidden');
          elements.verifyBtn.classList.add('hidden');
        }
      } else {
        showMobileError(data.message || 'Verification failed');
      }
    })
    .catch(error => {
      showMobileError('Network error. Please try again.');
      console.error('Error:', error);
    })
    .finally(() => setMobileLoadingState(false));
}

function setMobileLoadingState(isLoading) {
  elements.verifyBtn.disabled = isLoading;
  elements.verifyBtn.innerHTML = isLoading 
    ? '<i class="fas fa-spinner fa-spin"></i> Verifying...' 
    : '<i class="fas fa-check-circle"></i> Verify';
}

function showMobileError(message) {
  elements.mobileError.textContent = message;
  elements.mobileError.classList.remove('hidden');
  setTimeout(() => {
    elements.mobileError.classList.add('hidden');
  }, 5000);
}

function openWhatsApp() {
  const phone = '50992023';
  const message = 'Please register my mobile number for IBA Document System access. My number is: ' + elements.mobileInput.value.trim();
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function initializeForm() {
  convertToAutocomplete('site', sites.map(site => `${site.no} - ${site.name}`));
  createClassDropdown();
  
  elements.form.addEventListener('submit', handleFormSubmit);
  elements.submitBtn.addEventListener('click', handleFormSubmit);
}

function createClassDropdown() {
  const classSelect = document.createElement('select');
  classSelect.id = 'class';
  classSelect.name = 'class';
  classSelect.required = true;
  
  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select Document Class';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  classSelect.appendChild(defaultOption);
  
  // Add document class options
  documentClasses.forEach(docClass => {
    const option = document.createElement('option');
    option.value = `${docClass.code} - ${docClass.name}`;
    option.textContent = `${docClass.code} - ${docClass.name}`;
    classSelect.appendChild(option);
  });
  
  // Replace the existing input with the select dropdown
  const classContainer = elements.class.parentNode;
  classContainer.replaceChild(classSelect, elements.class);
  elements.class = classSelect; // Update the reference in the elements object
}

function convertToAutocomplete(elementId, items) {
  const input = document.getElementById(elementId);
  const originalSelect = input.cloneNode(true);
  originalSelect.id = `${elementId}-select`;
  originalSelect.classList.add('hidden');
  input.parentNode.insertBefore(originalSelect, input.nextSibling);
  
  input.addEventListener('input', function() {
    const val = this.value.trim();
    closeAllLists();
    
    if (!val) {
      originalSelect.value = '';
      return;
    }
    
    const filteredItems = items.filter(item => 
      item.toLowerCase().includes(val.toLowerCase())
    );
    
    if (filteredItems.length === 0) {
      originalSelect.value = '';
      return;
    }
    
    const list = document.createElement('div');
    list.setAttribute('id', `${elementId}-autocomplete-list`);
    list.setAttribute('class', 'autocomplete-items');
    this.parentNode.appendChild(list);
    
    filteredItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = item;
      itemElement.addEventListener('click', function() {
        input.value = item;
        originalSelect.value = item;
        closeAllLists();
      });
      list.appendChild(itemElement);
    });
  });
  
  document.addEventListener('click', function(e) {
    if (e.target !== input) {
      closeAllLists();
    }
  });
}

function closeAllLists() {
  const items = document.getElementsByClassName('autocomplete-items');
  for (let i = 0; i < items.length; i++) {
    items[i].parentNode.removeChild(items[i]);
  }
}

function setDefaultDate() {
  const today = new Date().toISOString().split('T')[0];
  elements.dateSent.value = today;
}

function handleFormSubmit(event) {
  event.preventDefault();
  
  if (document.activeElement) {
    document.activeElement.blur();
  }
  
  submitRequest();
}

function submitRequest() {
  if (!validateForm()) {
    return;
  }

  if (!navigator.onLine) {
    showError('No internet connection. Please check your network and try again.');
    return;
  }

  const formData = getFormData();
  setLoadingState(true);

  const timeout = 30000;
  
  const fetchPromise = fetch(`${scriptURL}?${new URLSearchParams(formData)}`, {
    method: 'POST',
  });
  
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request timeout. Please try again.'));
    }, timeout);
  });

  Promise.race([fetchPromise, timeoutPromise])
    .then(handleResponse)
    .catch(error => {
      if (error.message === 'Request timeout. Please try again.') {
        showError(error.message);
      } else {
        handleError(error);
      }
    })
    .finally(() => setLoadingState(false));
}

function validateForm() {
  if (!elements.from.value.trim() || 
      !elements.site.value || 
      !elements.class.value || 
      !elements.dateSent.value) {
    showError('Please fill all required fields.');
    return false;
  }
  return true;
}

function getFormData() {
  let siteNo = '';
  let siteName = '';
  
  const siteMatch = elements.site.value.match(/^(\S+)\s*-\s*(.+)$/);
  if (siteMatch) {
    siteNo = siteMatch[1];
    siteName = siteMatch[2];
  } else {
    siteName = elements.site.value;
    const foundSite = sites.find(site => 
      site.name.toLowerCase() === elements.site.value.toLowerCase() ||
      site.no.toLowerCase() === elements.site.value.toLowerCase()
    );
    if (foundSite) {
      siteNo = foundSite.no;
      siteName = foundSite.name;
    }
  }
  
  let docClass = '';
  const classMatch = elements.class.value.match(/^(\S+)\s*-\s*/);
  if (classMatch) {
    docClass = classMatch[1];
  } else {
    const foundClass = documentClasses.find(dc => 
      dc.name.toLowerCase() === elements.class.value.toLowerCase() ||
      dc.code.toLowerCase() === elements.class.value.toLowerCase()
    );
    if (foundClass) {
      docClass = foundClass.code;
    } else {
      docClass = elements.class.value;
    }
  }
  
  // Get the verified mobile from session storage
  const mobile = sessionStorage.getItem('verifiedMobile') || '';
  
  return {
    action: 'add',
    from: elements.from.value.trim().toUpperCase(),
    siteNo: encodeURIComponent(siteNo),
    siteName: encodeURIComponent(siteName),
    class: encodeURIComponent(docClass),
    dateSent: encodeURIComponent(elements.dateSent.value),
    remarks: encodeURIComponent(elements.remarks.value),
    mobile: encodeURIComponent(mobile) // Add mobile number to the form data
  };
}

function setLoadingState(isLoading) {
  elements.submitBtn.disabled = isLoading;
  elements.submitBtn.innerHTML = isLoading 
    ? '<i class="fas fa-spinner fa-spin"></i> Processing...' 
    : '<i class="fas fa-paper-plane"></i> Generate Code';
}

function handleResponse(response) {
  return response.json()
    .then(data => {
      if (data.status === 'ok') {
        const cleanMessage = data.message.replace('Ace” ', '');
        showCodeConfirmation(cleanMessage);
        resetForm();
      } else {
        showError(data.message || 'An error occurred while processing your request.');
      }
    });
}

function handleError(error) {
  console.error('Error:', error);
  showError('Network error. Please try again later.');
}

function showCodeConfirmation(message) {
  const code = message.includes('Code: ') 
    ? message.split('Code: ')[1] 
    : message;
  
  const codeHTML = `
    <div class="code-display">
      <div class="code-header">
        <i class="fas fa-check-circle"></i> Your Document Code
      </div>
      <div class="code-value">${code}</div>
      <div class="code-explanation">
        This code has been generated and recorded in the system.
      </div>
      <button class="copy-btn" onclick="copyToClipboard('${code}')">
        <i class="fas fa-copy"></i> Copy Code
      </button>
    </div>
  `;
  
  elements.successMessage.innerHTML = codeHTML;
  elements.successMessage.classList.remove('hidden');
  elements.successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-copy"></i> Copy Code';
        btn.classList.remove('copied');
      }, 2000);
    }
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

function showError(message) {
  elements.successMessage.innerHTML = `
    <div class="error-message">
      <i class="fas fa-exclamation-circle"></i> ${message}
    </div>
  `;
  
  elements.successMessage.classList.remove('hidden');
  elements.successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  setTimeout(() => {
    elements.successMessage.classList.add('hidden');
  }, 5000);
}

function resetForm() {
  elements.form.reset();
  setDefaultDate();
  elements.from.value = "IBA";
  elements.from.focus();
}