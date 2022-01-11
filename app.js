document.getElementById('loan-form').addEventListener('submit',calculate);

function calculate (e) {
  // UI Variables
  const CLV = document.getElementById('clv');
  const CPL_Results = document.getElementById('cpl');
  const closeRatio = 0.25;
  const leadValue = 0.15;
  const ratio = 3;
  
  
  if(CLV.value.length) {
    let CAC = CLV.value/ratio;
    let CPD = CAC * closeRatio;
    let CPL = CPD * leadValue;
    if(CPL < 200){
      CPL_Results.value = "Your CPL is to low";
    }else {
      CPL_Results.value = CPL;
    }
    
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(showResults,1000);
  } else {
    showError('Please check your numbers');
  }
  
  e.preventDefault();
}
function showError(error) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger' ;
  errorDiv.textContent = error;
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  card.insertBefore(errorDiv, heading);
  setTimeout(clearError , 3000);
}
function clearError () {
  document.querySelector('.alert').remove();
}
function showResults () {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('results').style.display = 'block';
}