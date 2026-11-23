const SHEET_NAME = 'Contact Leads';
const NOTIFY_EMAIL = 'damnart.seo@gmail.com';

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    const data = JSON.parse(raw);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: 'New website enquiry: ' + (data.source || data.formType || 'Contact form'),
        body:
          'Name: ' + (data.name || '-') + '\n' +
          'Email: ' + (data.email || '-') + '\n' +
          'Phone: ' + (data.phone || '-') + '\n' +
          'Service: ' + (data.service || '-') + '\n' +
          'Source: ' + (data.source || '-') + '\n\n' +
          'Message:\n' + (data.message || '-')
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
}

function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}
