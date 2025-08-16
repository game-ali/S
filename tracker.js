 //print Report
  function printReport() {
    const reportContent = document.getElementById("report").innerHTML;
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Report</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              background: #fff;
              color: #333;
            }
            .reportOutput {
              font-size: 16px;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          ${reportContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }
  //Add form
document.getElementById("gen").addEventListener('mouseover', function () {
        // body...

       // Get values from input fields
        
  const driverName = document.getElementById('date').value;
  const trackNo = document.getElementById('trackNo').value;
  const webery = document.getElementById('webery').value;
  const weberyNo = document.getElementById('weberyNo').value;
  const quantity = document.getElementById('quantity').value;
  const expenses = document.getElementById('expenses').value;
  const companyName = `<h1>SIENU INSPECTION</h1>`;
  const officerInfo =`<p>This report summarizes<br> the inspection of vehicles <br> received at <strong>Sienu Checkings</strong>.<br> All data has been verified and <br> logged for customs and operational purposes.</p>
    <p><em>-------sign,<br>Inspection Officer</em><br><strong>Sienu Mustapha Adams.</strong></p>`

  // Get output elements
  const comName = document.getElementById('comName');
  const trackNum = document.getElementById('trackNum');
  const webNam = document.getElementById('webNam');
  const webNum = document.getElementById('webNum');
  const quanNum = document.getElementById('quanNum');
  const expenNum = document.getElementById('expenNum');
  const reportOutput = document.getElementById('reportOutput');
  const officerInfoPast= document.getElementById('officerInfo');
  

  // Set output values
  comName.innerHTML = companyName;
  trackNum.innerHTML = `<p><strong>Truck Number:</strong>${trackNo}</p>`;
  webNam.innerHTML =`<p><strong> Webery:<strong>${webery}</P>`;
  webNum.innerHTML = `<p><strong> Webery Number:<strong>${weberyNo}</P>`;
  quanNum.innerHTML = `<p><strong>Quantity:<strong>${quantity}</p>`;
  expenNum.innerHTML = ` <p><strong>Expenses:</strong>GHS ${expenses}`;
  officerInfoPast.innerHTML=officerInfo;


});

       document.addEventListener("DOMContentLoaded", () => {
      const datetimeElement = document.getElementById("datetime");
      const now = new Date();

      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };

      const formattedDateTime = now.toLocaleString('en-US', options);
      datetimeElement.textContent = `${formattedDateTime}`;
    });
