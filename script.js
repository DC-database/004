const scriptURL = 'https://script.google.com/macros/s/AKfycbwqdCaI3oAeJ3VCjgwGGqx0Xs4viSTX-ljts4eVEjSX_W_Epb8b1KuWWt8GcT4LkplGFA/exec';

// Load sites from CSV data
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

// Populate site dropdown on page load
document.addEventListener('DOMContentLoaded', function() {
  const siteSelect = document.getElementById('site');
  sites.forEach(site => {
    const option = document.createElement('option');
    option.value = `${site.no}|${site.name}`;
    option.textContent = `${site.no} - ${site.name}`;
    siteSelect.appendChild(option);
  });

  // Set default date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('dateSent').value = today;
});

function submitRequest() {
  const from = document.getElementById('from').value.trim().toUpperCase();
  const [siteNo, siteName] = document.getElementById('site').value.split('|');
  const classValue = document.getElementById('class').value;
  const dateSent = document.getElementById('dateSent').value;
  const remarks = document.getElementById('remarks').value;

  // Validate inputs
  if (!from || !siteNo || !classValue || !dateSent) {
    const msg = document.getElementById('message');
    msg.style.color = 'red';
    msg.innerText = 'Please fill all required fields.';
    return;
  }

  fetch(`${scriptURL}?action=add&from=${encodeURIComponent(from)}&siteNo=${encodeURIComponent(siteNo)}&siteName=${encodeURIComponent(siteName)}&class=${encodeURIComponent(classValue)}&dateSent=${encodeURIComponent(dateSent)}&remarks=${encodeURIComponent(remarks)}`, {
    method: 'POST',
  })
  .then(res => res.json())
  .then(data => {
    // Remove any existing messages
    const existingMsg = document.querySelector('.success-message');
    if (existingMsg) existingMsg.remove();
    
    const errorMsg = document.getElementById('message');
    errorMsg.innerText = '';

    if (data.status === 'ok') {
      // Create and show success message - Remove "Ace" if it exists
      const cleanMessage = data.message.replace('Ace” ', '');
      const successMsg = document.createElement('div');
      successMsg.className = 'success-message';
      successMsg.innerHTML = cleanMessage.replace('Code: ', '<span class="code-highlight">Code: </span>');
      
      // Insert after the header
      const container = document.querySelector('.container');
      container.insertBefore(successMsg, container.children[1]);
      
      // Clear form
      document.getElementById('from').value = '';
      document.getElementById('site').value = '';
      document.getElementById('class').value = '';
      document.getElementById('remarks').value = '';
    } else {
      errorMsg.style.color = 'red';
      errorMsg.innerText = data.message;
    }
})
  .catch(error => {
    const msg = document.getElementById('message');
    msg.style.color = 'red';
    msg.innerText = 'Error submitting document.';
  });
}