function meeting(s) {
    return s.replace(/;/gi,' ').split(' ').map(v=>v.split(':').reverse().join(', ').toUpperCase()).sort()
    .map(v=>'('+v+')').join('')
 }
 
let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(s))