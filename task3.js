function digital_root(n){
    let result = 0;
    String(n).split('').map(num => {
      result += Number(num);
    });
    return result > 10 ? digital_root(result) : result;
  }
  console.log(digital_root(16))
  console.log(digital_root(942))
  console.log(digital_root(132189))
  console.log(digital_root(493193))