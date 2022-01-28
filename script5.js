let userCardNum = "1234 5678 9100 1213";
document.write(
  "Номер вашей карты: " +
    userCardNum.replace(userCardNum.slice(0, -4), "************")
);