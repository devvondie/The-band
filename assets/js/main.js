var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu")
var headerHeight = header.clientHeight

mobileMenu.onclick = function() {
    //đóng/mở menu
    var isClose = header.clientHeight=== headerHeight;
    if(isClose){
        header.style.height='auto';
    }else{
        header.style.height=null;
    }
}
    // tự động đóng khi chọn trong menu
var MenuItems =document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i < MenuItems.length; i++){
        var MenuItem = MenuItems[i];
        
        MenuItem.onclick = function(){
            var isParentMenu = this.nextElementSibling && MenuItem.nextElementSibling.classList.contains('subnav')
            if (!isParentMenu){
            header.style.height=null;
            }
        }
    }      

 //chuyển display từ none thành flex cho ticket
const buyBtns = document.querySelectorAll('.js-but-ticket')
const open_model = document.querySelector('.js_open_model')
const container = document.querySelector('.js_model_container')
const close_model = document.querySelector('.js_close_model')
    //hiển thị mua vé(thêm open vào model)
    function showTickets(){
        open_model.classList.add('open')
    }
     //ẩn hiển thị mua vé(thêm open vào model)
     function hidenTickets(){
        open_model.classList.remove('open')
    }
    //lặp qua từng nút  button và nghe hành vi click
    for(const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showTickets)

    }
    //nghe hành vi click vào nút button close
    close_model.addEventListener('click', hidenTickets)

    open_model.addEventListener('click', hidenTickets)

    function container_model(Event){
        Event.stopPropagation()
    }
    container.addEventListener("click", container_model)
