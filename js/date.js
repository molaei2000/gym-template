
week= new Array("يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه")
months = new Array("فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند");
a = new Date();
d= a.getDay();
day= a.getDate();
month = a.getMonth()+1;
year= a.getYear();
year = (year== 0)?2000:year;
(year<1000)? (year += 1900):true;
year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621;
switch (month) {
//shorooe' Bahman 95 :
case 1: (day<(21 - 1) )? (month=10, day+= (10 + 1) ):(month=11, day-=(20 - 1) ); break;

//shorooe' esfand 95 :
case 2: (day<(20 - 1) )? (month=11, day+=(11 + 1) ):(month=12, day-=(19 - 1) ); break;

//shorooe' farvardin 96:
case 3: (day<21 )? (month=12, day+=(9 + 1) ):(month=1, day-=20); break;

//shorooe' ordibehesht 95 : 
case 4: (day<(21 - 1) )? (month=1, day+=(11+1) ):(month=2, day-=(20-1) ); break;

//shorooe' Khordad & Tir 95:
case 5:
case 6: (day<(22 - 1) )? (month-=3, day+=(10+1) ):(month-=2, day-=(21-1) ); break;

//shorooe' Mordad & Shahrivar & Mehr 95:
case 7:
case 8:
case 9: (day<(23 - 1))? (month-=3, day+=(9+1) ):(month-=2, day-=(22-1) ); break;

//shorooe' Aban 95:
case 10:(day<(23-1) )? (month=7, day+=(8+1) ):(month=8, day-=(22-1) ); break;

//shorooe' Azar & Day 95:
case 11:
case 12:(day<(22-1) )? (month-=3, day+=(9+1)):(month-=2, day-=(21-1) ); break;
default: break;
}
document.getElementById("date").innerHTML =week[d]+" "+day+" "+months[month-1]+" "+ year 