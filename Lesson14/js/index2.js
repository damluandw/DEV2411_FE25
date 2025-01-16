var listPro = [
    {
        id: 'SP01',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'giường lớn 1',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },
    {
        id: 'SP02',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'giường lớn 2',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },

    {
        id: 'SP03',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'giường lớn 3',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },
    {
        id: 'SP04',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'giường lớn âu 4',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },

    {
        id: 'SP05',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'giường lớn 5',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },
    {
        id: 'SP06',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'Giường châu âu 6',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },
    {
        id: 'SP07',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'Giường châu âu 7',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },
    {
        id: 'SP08',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'Giường châu âu 8',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },

    {
        id: 'SP09',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'Giường châu âu 9',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },
    {
        id: 'SP010',
        img: 'imgs/sanpham/sanpham1.jpg',
        title: 'Giường châu âu 10',
        dec: '(Size lớn, trắng sữa)',
        price: '89999000'
    },
];

// var listTemp = listPro;
var pages = {
    soLuongItem: 4,
    page: 1,
    soLuongPage: 0,
    indexMin: 0,
    indexMax: 4,
    search: '',
}

function RenderPro(product) {
    var render = ` <div class="product-box">
                        <div class="product-img">
                            <img src="${product.img}" alt="${product.img}">
                        </div>
                        <div class="product-title">
                            <a href="#"><h4>${product.title}</h4></a>
                            <p>
                                <span><i
                                        class="fa-solid fa-star cl-2"></i></span>
                                <span><i
                                        class="fa-solid fa-star cl-2"></i></span>
                                <span><i
                                        class="fa-solid fa-star cl-2"></i></span>
                                <span><i
                                        class="fa-solid fa-star cl-2"></i></span>
                                <span><i
                                        class="fa-solid fa-star cl-2"></i></span>
                            </p>
                            <p>${product.dec}</p>
                            <p>${product.price} VNĐ</p>
                        </div>
                    </div>`
    return render
}


function RenderListPro(list) {
    $("#list-product").html("");
    for (let i = 0; i < list.length; i++) {
        $("#list-product").append(RenderPro(list[i]))
    }
}

// RenderListPro(listPro)

function renderPages(soLuongPage) {
    $(".pagination").html("");
    $('.pagination').append(`<li class="page-item"><a class="page-link" onclick ="changePage('previous')">Previous</a></li>`)
    for (let index = 0; index < soLuongPage; index++) {
        $('.pagination').append(`<li class="page-item"><a class="page-link" onclick ="changePage(${index + 1})" >${index + 1}</a></li>`)

    }
    $('.pagination').append(`<li class="page-item"><a class="page-link" onclick ="changePage('next')" >Next</a></li>`)
}

function calPage(list) {
    pages.soLuongPage = Math.round(list.length / pages.soLuongItem + 0.499)
    pages.indexMin = pages.soLuongItem * (pages.page - 1);
    pages.indexMax = pages.soLuongItem * pages.page - 1;
}
// calPage(listPro)
// renderPages(3);

function renderListPage(list) {
    if (pages.search != '') {
        list = list.filter(x => x.title.toUpperCase().includes(pages.search.toUpperCase()))
    }
    calPage(list);
    renderPages(pages.soLuongPage)

    $("#list-product").html("");
    for (let i = pages.indexMin; i <= pages.indexMax; i++) {
        $("#list-product").append(RenderPro(list[i]))
    }
}

renderListPage(listPro)


function changePage(item) {
    if (item == "previous") {
        console.log(item)
        if (pages.page != 1) {
            pages.page--;
            renderListPage(listPro);
        }
    } else if (item == "next") {
        if (pages.page != pages.soLuongPage) {
            pages.page++;
            renderListPage(listPro);
        }
    } else {
        pages.page = parseInt(item);
        renderListPage(listPro);
    }

}

function Search() {
    pages.search = $('#input-search').val();
    renderListPage(listPro)
}


//Mobile
var check = true;
$('#menu-mobile').on('click', () => {
    if (check) {
        $('#menu-mobile>div>i').removeClass('fa-bars');
        $('#menu-mobile>div>i').addClass('fa-x');
        $('#menu-mobile>.nav').css("display", "block")
        $('#menu-mobile').addClass('menu-mobile-active')
    } else {
        $('#menu-mobile>div>i').removeClass('fa-x');
        $('#menu-mobile>div>i').addClass('fa-bars');
        $('#menu-mobile>.nav').css("display", "none")
        $('#menu-mobile').removeClass('menu-mobile-active')
    }
    check = !check

})