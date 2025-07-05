// Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbwqdCaI3oAeJ3VCjgwGGqx0Xs4viSTX-ljts4eVEjSX_W_Epb8b1KuWWt8GcT4LkplGFA/exec';

// Site data
const sites = [
  {no: "100", name: "Main Office"},
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
  {no: "91", name: "Ninty One Consultancy & Agency"},
  {no: "M1", name: "Mohamed Esmael Al Emadi"},
  {no: "M10", name: "Al Emadi Majlis"},
  {no: "M11", name: "IBA Real Estate"},
  {no: "M12", name: "Noaf & Mohamed Ali Al Emadi"},
  {no: "M13", name: "Abdel Wahid Al Emadi"},
  {no: "M14", name: "Mohamed Abdel Karim Al Emadi"},
  {no: "M147", name: "IBA Interiors Factory - M"},
  {no: "M15", name: "IBA Aluminium"},
  {no: "M16", name: "Hamad Sister Villa (3)"},
  {no: "M161", name: "Mohamed Esmael Dafna Villa"},
  {no: "M17", name: "59 Real Estate"},
  {no: "M18", name: "IBA Industrial Area Store"},
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
  {no: "M3", name: "Hassan Esmael Al Emadi"},
  {no: "M4", name: "Hamad Mohamed Al Emadi"},
  {no: "M5", name: "IBA Farm"},
  {no: "M6", name: "Mohamed Esmael Farm Villa"},
  {no: "M7", name: "Hamad Al Emadi Winter Camp"},
  {no: "M8", name: "Salman Al Emadi"},
  {no: "M9", name: "Hassan Rafee Al Emadi Villa"},
  {no: "SZRE", name: "Seven Zone Real Estate"}
];

// DOM Elements
const elements = {
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
  initializeForm();
  setDefaultDate();
});

// Initialize form elements
function initializeForm() {
  // Populate site dropdown
  populateSiteDropdown();
  
  // Add form submit handler
  elements.form.addEventListener('submit', handleFormSubmit);
  
  // Add button click handler as fallback
  elements.submitBtn.addEventListener('click', handleFormSubmit);
}

// Populate site dropdown
function populateSiteDropdown() {
  sites.sort((a, b) => a.name.localeCompare(b.name)).forEach(site => {
    const option = document.createElement('option');
    option.value = `${site.no}|${site.name}`;
    option.textContent = `${site.no} - ${site.name}`;
    elements.site.appendChild(option);
  });
}

// Set default date to today
function setDefaultDate() {
  const today = new Date().toISOString().split('T')[0];
  elements.dateSent.value = today;
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  submitRequest();
}

// Submit the form data
function submitRequest() {
  // Validate inputs
  if (!validateForm()) {
    return;
  }

  // Prepare form data
  const formData = getFormData();

  // Show loading state
  setLoadingState(true);

  // Send the request
  fetch(`${scriptURL}?${new URLSearchParams(formData)}`, {
    method: 'POST',
  })
  .then(handleResponse)
  .catch(handleError)
  .finally(() => setLoadingState(false));
}

// Validate form inputs
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

// Get form data as object
function getFormData() {
  const [siteNo, siteName] = elements.site.value.split('|');
  
  return {
    action: 'add',
    from: elements.from.value.trim().toUpperCase(),
    siteNo: encodeURIComponent(siteNo),
    siteName: encodeURIComponent(siteName),
    class: encodeURIComponent(elements.class.value),
    dateSent: encodeURIComponent(elements.dateSent.value),
    remarks: encodeURIComponent(elements.remarks.value)
  };
}

// Set loading state
function setLoadingState(isLoading) {
  elements.submitBtn.disabled = isLoading;
  elements.submitBtn.innerHTML = isLoading 
    ? '<i class="fas fa-spinner fa-spin"></i> Processing...' 
    : '<i class="fas fa-paper-plane"></i> Generate Code';
}

// Handle response from server
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

// Handle errors
function handleError(error) {
  console.error('Error:', error);
  showError('Network error. Please try again later.');
}

// Show code confirmation with animated parts
function showCodeConfirmation(message) {
  // Extract just the code part from the message
  const code = message.includes('Code: ') 
    ? message.split('Code: ')[1] 
    : message;
  
  // Create the HTML for the code display
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

// Copy to clipboard function
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

// Show error message
function showError(message) {
  elements.successMessage.innerHTML = `
    <div class="error-message">
      <i class="fas fa-exclamation-circle"></i> ${message}
    </div>
  `;
  
  elements.successMessage.classList.remove('hidden');
  elements.successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Hide error after 5 seconds
  setTimeout(() => {
    elements.successMessage.classList.add('hidden');
  }, 5000);
}

// Reset the form
function resetForm() {
  elements.form.reset();
  setDefaultDate();
  elements.from.value = "IBA"; // Reset to default but keep editable
  elements.from.focus();
}