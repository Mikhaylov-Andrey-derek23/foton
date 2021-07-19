function slider(sliderEl) {
    var sliderBox = sliderEl.find(".slider_content");
    var sliderItems = sliderBox.find(".composite");
    var sliderBlocks = sliderBox.find(".composite");
    var sliderCount = sliderItems.length;
    var oneSlideSize = sliderEl.width();
    var intervalID = -1;


    var nowSlideShow = 0;


    sliderBox.css({
        'width': oneSlideSize * (sliderCount + 2) + "px",
        'height': sliderEl.height() + "px",
        'left': (nowSlideShow - 1) * oneSlideSize + "px"
    });

    sliderItems.css({
        "width": oneSlideSize + "px",
        "height": sliderEl.height() + "px"
    });



    var firstEl = sliderBlocks.first().clone();
    sliderBox.prepend(sliderBlocks.last().clone());
    sliderBox.append(firstEl)



    sliderEl.parents('.product_body').find(".left_btn").click(function () {
        if (sliderEl.hasClass('animated')) return;
        nowSlideShow--;
        changeSlide();

    });

    sliderEl.parents('.product_body').find(".right_btn").click(function () {
        if (sliderEl.hasClass('animated')) return;

        nowSlideShow++;
        changeSlide();
    });

    function changeSlide() {
        clearInterval(intervalID);
        sliderEl.addClass('animated');
        sliderBox.animate({
            "left": -(nowSlideShow * oneSlideSize) - oneSlideSize + "px"
        }, 500, function () {
            if (nowSlideShow === sliderCount) {
                nowSlideShow = 0;
            } else if (nowSlideShow === -1) {
                nowSlideShow = sliderCount - 1;
            }

            sliderBox.css("left", -(nowSlideShow * oneSlideSize) - oneSlideSize + "px");

            sliderEl.removeClass('animated');
        });

    }
    var imgBasic = ''

    sliderEl.find('.info_detailed').mouseenter(
        function($this){
            console.log('+')
            sliderEl.parents('.product_body').find('.title').text($this.currentTarget.getAttribute('data-title'));
            sliderEl.parents('.product_body').find('.description').text($this.currentTarget.getAttribute('data-decription'));
            imgBasic = $this.currentTarget.parentElement.querySelector('.product_picture').style.backgroundImage+''
            $this.currentTarget.style.opacity = 0;
            console.log(imgBasic)
            $this.currentTarget.parentElement.querySelector('.product_picture').style.backgroundImage = "url(\""+$this.currentTarget.getAttribute('data-picture')+"\")";
            
        }
    )
    sliderEl.find('.info_detailed').mouseleave(
        function($this){
            console.log('-')
            console.log(imgBasic)
            sliderEl.parents('.product_body').find('.title').text('Название конкретной детали');
            sliderEl.parents('.product_body').find('.description').html('Amet sint. Velit officia consequat eniollit. Exercitation<br>veniam consequat sunt nostrud amet.');
            $this.currentTarget.parentElement.querySelector('.product_picture').style.backgroundImage = "url(\""+$this.currentTarget.getAttribute('data-pictureDefaul')+"\")";
            $this.currentTarget.style.opacity = 100;
            
        }
    )
}

function sliderOpportunities(el){
    var sliderCount = el.find(".info span").length;
    var nowSlider = 1;

    function render(){
        document.querySelector('.opportunities .slider .header .text .title').innerHTML = $(".info span:eq("+nowSlider+")").attr('data-title');
        document.querySelector('.opportunities .slider .header .text .description').innerHTML = $(".info span:eq("+nowSlider+")").attr('data-decription');
        document.querySelectorAll('.sliderPicter').forEach(function(e, i){
            if(i < sliderCount){
                e.style.backgroundImage = "url(\""+$(".info span:eq("+i+")").attr('data-img')+"\")";
            }
        })
    }
    render();
    
}


slider($('.slider:eq(0)'))
slider($('.slider:eq(1)'))
slider($('.slider:eq(2)'))
sliderOpportunities($('.slider:eq(3)'))

