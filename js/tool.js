//根据设计图设置对应的rem
+ function () {
  // console.log(document.documentElement)
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 640 * 100 + 'px';
}()

//添加header
+
function () {
  let con = `
  <div class="logo">
    <div class="back">
      <img src="./images/icon_back.svg" alt="">
    </div>
  </div>
  `;
  let header = document.querySelector('header');
  header.innerHTML = con;
}()


//预约讲座时间
function cathedraTime() {
  let userChoose, itemName, teacherName, data, time;
  $.each($('.cathedra_time_i span'), function (i, el) {
    let tpar = $(this).parent('.cathedra_time_i');
    if ($(el).html()) { //判断是否已满
      $(tpar).css('color', ' #979797');
    } else {
      $(tpar).click(function () { //给未满元素添加点击
        $('.con').find('.cathedra_time_i').css('background-color', 'transparent');
        $(this).css('background-color', '#FF0000');
        time = $(this).text();
        data = $(this).parent('.cathedra_time').siblings('.cathedra_data').text();
        teacherName = $(this).parents('.con').children('.teacher_name').text();
        itemName = $(this).parents('.con').children('.cathedra_name').text();
        userChoose = `
        您已选择:${itemName}-${teacherName} ${data} ${time}
        `
        $('.user_c').html(userChoose)

      })
    }
  });
}