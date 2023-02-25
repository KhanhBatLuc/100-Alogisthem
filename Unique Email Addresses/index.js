function numUniqueEmails(emails) {
    const uniqueEmails = new Set();
  
    for (let email of emails) {
      let [local, domain] = email.split('@');
      local = local.replace(/\./g, '');
      local = local.split('+')[0];
      const actualEmail = local + '@' + domain;
      uniqueEmails.add(actualEmail);
    }
  
    return uniqueEmails.size;
  }
  