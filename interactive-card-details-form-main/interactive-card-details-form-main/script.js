const CardHoldName = document.getElementById("card-hold-name")
const CardNumber = document.getElementById("card-number")
const ExpDate = document.getElementById('exp-date')
const ExpYY = document.getElementById('exp-yy')
const CvvNo = document.getElementById('cvv-no')
const Confirm = document.getElementById('confirm')
const Continue = document.getElementById('continue')
const MonthInp = document.getElementById('exp-date')
const YearInp = document.getElementById('exp-yy')
const errorname = document.getElementById('error-msg-name')
const errornum = document.getElementById('error-msg-num')
const errorexp = document.getElementById('error-msg-exp')
const errorcvv = document.getElementById('error-msg-cvv')
const Number = document.querySelector(".number")
const Month = document.querySelector(".mm")
const Year = document.querySelector(".yy")
const Name = document.querySelector(".name")
const CV = document.querySelector(".cv")
const ThankYou = document.querySelector(".thank-you")
const by = document.querySelector(".by")
const ErrorMsg = document.querySelector(".errorr")
const RightSection = document.querySelector(".right-section")

function setCardNum(e) {
  Number.innerText = format(e.target.value);

}
function setCardName(e) {
  Name.innerText = e.target.value;
}
function setCardMonth(e) {
  Month.innerText = e.target.value;
}
function setCardYear(e) {
  Year.innerText = e.target.value;
}
function setCardCvc(e) {
  CV.innerText = e.target.value;
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
  //  return s.toString().replace(/[^0-9]+/gi, '').replace(/(.{4})/g, '$1 ');  "this is also work"

}

function handleSubmit(e) {
  e.preventDefault()
  if (!CardHoldName.value) {
    CardHoldName.classList.add("error")
    CardHoldName.parentElement.classList.add("error_message")
    errorname.classList.remove("display")
  }
  else {
    CardHoldName.classList.remove("error")
    CardHoldName.parentElement.classList.remove("error_message")
    errorname.classList.add("display")
  }

  if (!CardNumber.value) {
    CardNumber.classList.add("error")
    CardNumber.parentElement.classList.add("error_message")
    errornum.classList.remove("display")
  }
  else {
    CardNumber.classList.remove("error")
    CardNumber.parentElement.classList.remove("error_message")
    errornum.classList.add("display")
  }
  if (CardNumber.value.length > 1 && CardNumber.value.length < 16) {
    CardNumber.classList.add("error")
    CardNumber.parentElement.classList.add("error_message")
    errornum.classList.remove("display")
    errornum.innerText = "Enter Valid Number"
  }




  if (!MonthInp.value) {
    MonthInp.classList.add("error")
    MonthInp.parentElement.classList.add("error_message")
    errorexp.classList.remove("display")
  }
  else {
    MonthInp.classList.remove("error")
    MonthInp.parentElement.classList.remove("error_message")
    errorexp.classList.add("display")
  }



  if (!YearInp.value) {
    YearInp.classList.add("error")
    YearInp.parentElement.classList.add("error_message")
    errorexp.classList.remove("display")
  }
  else {
    YearInp.classList.remove("error")
    YearInp.parentElement.classList.remove("error_message")
    errorexp.classList.add("display")
  }
  if (MonthInp.value.length < 2) {
    MonthInp.classList.add("error")
    MonthInp.parentElement.classList.add("error_message")
    errorexp.classList.remove("display")
    errorexp.innerText = "Enter Valid Number"
  }
  if (YearInp.value.length < 2) {
    YearInp.classList.add("error")
    YearInp.parentElement.classList.add("error_message")
    errorexp.classList.remove("display")
    errorexp.innerText = "Enter Valid Number"
  }

  if (!CvvNo.value) {
    CvvNo.classList.add("error")
    CvvNo.parentElement.classList.add("error_message")
    errorcvv.classList.remove("display")
  }
  else {
    CvvNo.classList.remove("error")
    CvvNo.parentElement.classList.remove("error_message")
    errorcvv.classList.add("display")
  }
  if (CvvNo.value.length < 3) {
    CvvNo.classList.add("error")
    CvvNo.parentElement.classList.add("error_message")
    errorcvv.classList.remove("display")
    errorcvv.innerText = "Enter Valid Number"
  }

  if (CardHoldName.value && CardNumber.value && ExpDate.value && ExpYY.value && CvvNo.value && CardNumber.value.length == 16 && ExpDate.value.length == 2 && ExpYY.value.length == 2 && CvvNo.value.length == 3) {
    ThankYou.classList.remove("none")
    RightSection.classList.add("none")
  }
}


setInterval(() => {
  if (MonthInp.value.length || YearInp.value.length > 0) {
    by.classList.remove("none")
  }
  else {
    by.classList.add("none")
  }
}, 100);


CardNumber.addEventListener("keyup", setCardNum)

CardHoldName.addEventListener("keyup", setCardName)

MonthInp.addEventListener("keyup", setCardMonth)

YearInp.addEventListener("keyup", setCardYear)

CvvNo.addEventListener("keyup", setCardCvc)

Confirm.addEventListener("click", handleSubmit)

if (Month.innerHTML.length > 0) {
  by.classList.remove("none")
}

Continue.addEventListener("click", function () {
  ThankYou.classList.add("none")
  RightSection.classList.remove("none")
  location.reload()
})





