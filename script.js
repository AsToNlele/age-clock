setInterval(() => {
  let date = new Date('January 16, 2001 00:00:00');
  let dateNow = Date.now();
  let diff = dateNow - date.getTime();
  let years = diff / 31556900000;
  years = Number.parseFloat(years).toFixed(9);
  years.replace(',', '.');
  let num = years.split('.');

  document.getElementById('date1').innerHTML = num[0];
  document.getElementById('date2').innerHTML = '.' + num[1];
}, 100);
