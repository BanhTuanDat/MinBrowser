// Lấy các button group
let result = document.getElementById("result");
let btnGroups = document.getElementsByClassName("btn-group");
let btnWindows = btnGroups[0].children;
let btnScreens = btnGroups[1].children;
let btnLocations = btnGroups[2].children;
let btnHistories = btnGroups[3].children;
let btnNavigators = btnGroups[4].children;
let btnTimings = btnGroups[5].children;
let btnOther = btnGroups[6].children;

// Thử nghiệm các hàm xử lý window
// ========================================================================

// width x height
btnWindows[0].addEventListener("click", function () {
  let width = window.innerWidth
  let height = window.innerHeight
  result.innerHTML = `Width x Height Window: <br /> ${width}px x ${height}px`
});

let myWindow;

// open
btnWindows[1].addEventListener("click", function () {
  let width = window.prompt("Nhập chiều ngang của cửa sổ.");
  let height = window.prompt("Nhập chiều cao của cửa sổ.");
  myWindow = window.open(
    "",
    "New Window",
    "width=" + width + ",height=" + height
  );
  myWindow.document.write("Kmin Academy");
});

// close
btnWindows[2].addEventListener("click", function () {
  myWindow.close()
});

// move to
btnWindows[3].addEventListener("click", function () {
  let x = window.prompt("Nhập vị trí trục x của cửa sổ.");
  let y = window.prompt("Nhập vị trí trục y của cửa sổ.");
  myWindow.moveTo(x, y);
});

// resize to
btnWindows[4].addEventListener("click", function () {
  let width = window.prompt("Nhập chiều ngang của cửa sổ.");
  let height = window.prompt("Nhập chiều cao của cửa sổ.");
  myWindow.resizeTo(width, height);
});

// Thử nghiệm các hàm xử lý screen
// ========================================================================

// width x height
btnScreens[0].addEventListener("click", function () {
  let width = screen.width
  let height = screen.height
  result.innerHTML = `Width x Height Screen: <br /> ${width}px x ${height}px`
});

// availWidth x availHeight
btnScreens[1].addEventListener("click", function () {
  let width = screen.availWidth
  let height = screen.availHeight
  result.innerHTML = `availWidth x availHeight Screen: <br /> ${width}px x ${height}px`
});

// colorDepth
btnScreens[2].addEventListener("click", function () {
  let depth = screen.colorDepth
  result.innerHTML = `Color Depth: <br /> ${depth} bits per pixel`
});

// Thử nghiệm các hàm xử lý location
// ========================================================================

// href
btnLocations[0].addEventListener("click", function () {
  let url = location.href
  result.innerHTML = `Href current page: <br /> ${url}`
});

// hostname
btnLocations[1].addEventListener("click", function () {
  let hostname = location.hostname
  result.innerHTML = `Hostname current page: <br /> ${hostname}`
});

// pathname
btnLocations[2].addEventListener("click", function () {
  let path = location.pathname
  result.innerHTML = `Pathname current page: <br /> ${path}`
});

// protocal
btnLocations[3].addEventListener("click", function () {
  let protocal = location.protocol
  result.innerHTML = `Protocal current page: <br /> ${protocal}`
});

// port
btnLocations[4].addEventListener("click", function () {
  let port = location.port
  result.innerHTML = `Port current page: <br /> ${port}`
});

// Thử nghiệm các hàm xử lý history
// ========================================================================

// back
btnHistories[0].addEventListener("click", function () {
  history.back()
});

// forward
btnHistories[1].addEventListener("click", function () {
 history.forward()
});

// Thử nghiệm các hàm xử lý navigator
// ========================================================================

// language
btnNavigators[0].addEventListener("click", function () {
  let language = navigator.language
  result.innerHTML = `Browser language: <br /> ${language}`
});

// onLine
btnNavigators[1].addEventListener("click", function () {
  let online = navigator.onLine
  result.innerHTML = `Browser online: <br /> ${online}`
});

// cookieEnabled
btnNavigators[2].addEventListener("click", function () {
  let cookies = navigator.cookieEnabled
  result.innerHTML = `Browser Cookies enable: <br /> ${cookies}`
});

// Thử nghiệm các hàm xử lý Timing
// ========================================================================

let timeoutId;
btnTimings[0].addEventListener("click", function () {
  let time = window.prompt('Nhập thời gian chờ') * 1000
  timeoutId = setTimeout(content, time)
  
  function content() {
    result.innerHTML = 'Đã hết thời gian chờ.'
  }
});
btnTimings[1].addEventListener("click", function () {
  clearTimeout(timeoutId)
});

let intervalId;
btnTimings[2].addEventListener("click", function () {
  intervalId = setInterval(content, 1000)

  function content() {
    const d = new Date()
    result.innerHTML = d.toLocaleTimeString()
  }
});
btnTimings[3].addEventListener("click", function () {
  clearInterval(intervalId)
});

// Thử nghiệm các hàm khác
// ========================================================================
// assign
btnOther[0].addEventListener('click', function () {
  let url = window.prompt('Nhập địa chỉ bạn muốn đi đến.')
  location.assign(`https://www.${url}`)
})
// print
btnOther[1].addEventListener('click', function () {
  window.print()
})
// history length
btnOther[2].addEventListener('click', function () {
  let length = window.history.length
  if (length > 1) {
    result.innerHTML = `Số url trong history của cửa sổ này là: ${length}`
  } else {
    result.innerHTML = 'Vì cửa sổ này mới được mở nên chưa có history nào.'
  }
})
