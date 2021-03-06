(($,window,document,undefined)=>{
    
    class Pofo {
        init(){
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
        }
        parallax(){
            let parallaxObj = {
                init(){
                    this.section2();
                    this.section3();
                    this.section4();
                    this.section6();
                    this.section7();
                    this.section8();
                    this.section9();
                    this.section10();
                },
                section2(){
                    const sec2Title  = $('#section2 .title');
                    const sec2Col    = $('#section2 .col');
                    let sec2TitleTop = $('#section2 .title').offset().top-$(window).height()-200;
                    let sec2ColTop   = $('#section2 .col').offset().top-$(window).height()-900;
 
                    $(window).scroll(()=>{
                         if( $(window).scrollTop()==0){
                             sec2Title.removeClass('addParallax');
                             sec2Col.removeClass('addParallax');
                         }
 
                         if( $(window).scrollTop()>sec2TitleTop){
                             sec2Title.addClass('addParallax');
                         }
                         if( $(window).scrollTop()>sec2ColTop){
                             sec2Col.addClass('addParallax');
                         }
                    });
                },
                section3(){
                   const sec3Title  = $('#section3 .title');
                   const sec3Col    = $('#section3 .col');
                   let sec3TitleTop = $('#section3 .title').offset().top-$(window).height()-200;
                   let sec3ColTop   = $('#section3 .col').offset().top-$(window).height()-900;

                   $(window).scroll(()=>{
                        if( $(window).scrollTop()==0){
                            sec3Title.removeClass('addParallax');
                            sec3Col.removeClass('addParallax');
                        }

                        if( $(window).scrollTop()>sec3TitleTop){
                            sec3Title.addClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec3ColTop){
                            sec3Col.addClass('addParallax');
                        }
                   });
                },
                section4(){
                    const sec4Title    = $('#section4 .title');
                    const sec4Row1Col  = $('#section4 .row1-col');
                    const sec4Row2Col  = $('#section4 .row2-col');
                    let sec4TitleTop   = $('#section4 .title').offset().top-$(window).height()-200;
                    let sec4Row1ColTop = $('#section4 .row1-col').offset().top-$(window).height()-900;
                    let sec4Row2ColTop = $('#section4 .row2-col').offset().top-$(window).height()-900;
                    let t1 = false;
                    let t2 = false;

                    $(window).scroll(()=>{
                         if( $(window).scrollTop()==0){
                             t1 = false;
                             t2 = false;
                             sec4Title.removeClass('addParallax');

                             sec4Row1Col.removeClass('addParallax');
                             sec4Row1Col.removeClass('addGallery');

                             sec4Row2Col.removeClass('addParallax');
                             sec4Row2Col.removeClass('addGallery');
                             
                       
                         }
 
                         if( $(window).scrollTop()>sec4TitleTop){
                             sec4Title.addClass('addParallax');
                         }
                         //?????????????????? 1???
                         if( $(window).scrollTop()>sec4Row1ColTop){
                             if(t1==false){
                                 t1=true;
                                 sec4Row1Col.addClass('addParallax');
                             }
                            
                         }
                         //?????????????????? 2???
                         if( $(window).scrollTop()>sec4Row2ColTop){
                             if(t2==false){
                                 t2=true;
                                 sec4Row2Col.addClass('addParallax');
                             }
                           
                         }
                    });
                 },
                section6(){
                    const sec6 = $('#section6');
                    let sec6Top = $('#section6').offset().top-$(window).height();

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec6.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec6Top){
                            sec6.addClass('addParallax');
                        }
                    });
                },
                section7(){
                    const sec7 = $('#section7');
                    let sec7Top = $('#section7').offset().top-$(window).height()+200;

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec7.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec7Top){
                            sec7.addClass('addParallax');
                        }
                    });
                },
                section8(){
                    const sec8 = $('#section8');
                    let sec8Top = $('#section8').offset().top-$(window).height();

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec8.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec8Top){
                            sec8.addClass('addParallax');
                        }
                    });
                },
                section9(){
                    const sec9 = $('#section9');
                    let sec9Top = $('#section9').offset().top-$(window).height();

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec9.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec9Top){
                            sec9.addClass('addParallax');
                        }
                    });
                },
                section10(){
                    const sec10 = $('#section10');
                    let sec10Top = $('#section10').offset().top-$(window).height()+200;

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec10.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec10Top){
                            sec10.addClass('addParallax');
                        }
                    });
                }
            }
            parallaxObj.init();
        }
        

        header(){
            //????????? ????????? ????????? $window.scroll();
            //1. ???????????? ?????? 0?????? - ??????  
            //   removeClass('addH60');removeClass('addHide');removeClass('addShow');
            //2. ???????????? ?????? 0?????? ??????(0??? ?????????)- addClass('addH60');
            //   -????????? ?????? :addClass('addH60'); addClass('addShow'); removeClass('addHide');
            //   -????????? ????????? :addClass('addH60');addClass('addHide'); removeClass('addShow');

            let $window = $(window);
            const header = $('#header');
            let newScrTop = $window.scrollTop();
            let oldScrTop = newScrTop;
            let result = '';
            // ????????? ?????????
            $window.scroll(()=>{
                if( $window.scrollTop()==0 ){
                    header.removeClass('addH60');
                    header.removeClass('addHide');
                    header.removeClass('addShow');
                }
                else{
                    header.addClass('addH60');
                    // ????????? ?????????
                    // ????????? ??????
                    // ?????? ????????? ??????(????????? ??????????????? ????????????) -> newScrTop = $window.scrollTop();
                    // ?????? ????????? ??????(?????? ??????????????? ????????????) -> oldScrTop = newScrTop;
                    // ????????? ??? ???????????? ????????? oldScrTop - newScrTop
                    // ???????????? 0?????? ?????? ???(UP), 0?????? ????????? ??????(DOWN)
                    // %d ??????(?????????), %s ?????????(string)
                    newScrTop = $window.scrollTop();
                    
                      result = oldScrTop - newScrTop > 0 ? 'UP' : 'DOWN';
                      //console.log('oldScrTop: %d, newScrTop: %d, result:%s',oldScrTop,newScrTop,result);
                      if(result=='UP'){
                              header.addClass('addShow'); //??????
                              header.removeClass('addHide');
                      }
                      if(result=='DOWN'){
                              header.addClass('addHide'); //??? ??????
                              header.removeClass('addShow');
                      }
                    oldScrTop = newScrTop;

                }
            });
            

            //???????????? ?????????/////////////////////////////////////////////////////////
            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');
            const mobileBtn = $('.mobile-btn');
            let t = 0;

            resizefn();
            function resizefn(){
                sub.stop().slideUp(300); //?????????

                if( $(window).innerWidth()<=991){
                    //????????? ?????? ???????????? ???????????? ??????(off)
                    if(t==0){
                        t=1;
                        mainBtn.off('mouseenter');
                    
                        mainBtn.bind('click',function(){
                          $(this).next().stop().slideToggle(300);
                        });
                    }
                }
                else{
                    t=0;
                    //???????????? - ???????????? 1??????=>2??????
                    sub.stop().fadeOut(0); //?????????
                    mainBtn.off('click');

                    mainBtn.on({
                        mouseenter(e){
                            e.preventDefault();
                            const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        },
                        focusin(e){ // tab?????? ????????? ??????
                            e.preventDefault();
                            const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        }
                    });            
    
                    nav.on({
                        mouseleave(e){
                            e.preventDefault();
                            sub.stop().fadeOut(400);
                            subSub.stop().fadeOut(0);
                        }
                    });
    
                    //????????????-???????????????????????? 2??????=>3??????
                    subBtn.on({
                        mouseenter(){
                            const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        },
                        focusin(){
                            const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        }
                    });
    
                }
            }

            $(window).resize(function(){
                resizefn();                
            });

            //????????? ????????? ?????? ?????????
            mobileBtn.on({
                click:function(){
                    nav.slideToggle(300);
                    $(this).children('i').toggleClass('addMobile');
                }
            });

        }
        section1(){
            //????????????
            const slideWrap = $('.slide-wrap');
            const slideView = $('.slide-view');
            const pageBtn = $('.page-btn');
            let cnt = 0;
            let winW = $(window).innerWidth();

            resizefn();
            function resizefn(){
                return winW = $(window).innerWidth();
            }

            $(window).resize(function(){
                resizefn()
            });



            function mainSlide(){
                slideWrap.stop().animate({left:-winW*cnt},600,'easeInOutExpo', function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    slideWrap.stop().animate({left:-winW*cnt},0);
                });
                pageEvent();
            }

            //??????????????? ??????
            function pageEvent(){
                pageBtn.removeClass('currentPage');
                pageBtn.eq(cnt>2?0:cnt).addClass('currentPage');
            }
            //?????????????????? ??????
            pageBtn.each(function(index){
                pageBtn.eq(index).on({
                    click:function(e){
                        e.preventDefault();
                        cnt=index;
                        mainSlide();
                    }
                });
            });

            function nextCount(){
                cnt++;
                mainSlide();
            }

            function prevCount(){
                cnt--;
                mainSlide();
            }

            //setInterval(prevCount,3000);

            //????????????(???????????? ?????????)
            //?????????->?????? ??????: ??????????????????( >0)
            //??????->????????? ??????: ??????????????????( <0)

            let touchStart = null; //???????????? ?????????
            let touchEnd = null;   //???????????? ?????????
            let dragEnd=null;   // ????????? ??? 
            let dragStart=null; // ????????? ??????
            let mouseDown = null;
            
            slideView.on({
                mousedown:function(e){
                    touchStart = e.clientX;
                    dragStart = e.clientX - slideWrap.offset().left-winW;
                    mouseDown = true;
                },
                mouseup:function(e){
                    touchEnd = e.clientX;
                    mouseDown = false;
                    if( (touchStart-touchEnd)>0){
                        nextCount();
                    }
                    if( (touchStart-touchEnd)<0){
                        prevCount();
                    }
                },
                mouseleave:function(e){
                    if(!mouseDown){return}
                    touchEnd = e.clientX;
                    mouseDown = false;
                    if( (touchStart-touchEnd)>0){
                        nextCount();
                    }
                    if( (touchStart-touchEnd)<0){
                        prevCount();
                    }
                },
                mousemove:function(e){ //???????????? ??? ???????????? ???????????? ??????
                    //slideWrap.css({left: ????????????-???????????????});
                    //????????? mousedown??? ???????????? ???????????? (mouseup??? ????????? ????????? ?????? ??????)
                    //if(mouseDown!==true){return} : mouseDown??? ????????? return??????
                    if(!mouseDown){return}
                    dragEnd=e.clientX;
                    slideWrap.css({left:dragEnd-dragStart});
                }
            });

        }
        section2(){
        }
        section3(){
        }
        section4(){
            const gallaryBtn= $('.gallary-btn');
            const galleryItem = $('.gallery-item ');
            const gallery = $('.gallery');
            let galW = $(window).innerWidth()/4;
            let galH = galW*0.8125;
            let index = 0;
            let col = 4;
            let winW = $(window).innerWidth();

            function resizefn(){
                galW = $(window).innerWidth()/4;
                galH = galW*0.8125;
                
                winW = $(window).innerWidth();
                if(winW >= 1200){
                    col=4;
                }
                else if(winW >= 992){
                    col=3;
                }
                else if(winW >= 761){
                    col=2;
                }
                else{
                    col=1;
                }

                    galW = $(window).innerWidth()/col;
                    galH = galW*0.8125;
                    galleryItem.show().animate({width:galW, height:galH},0);
                        galleryItem.removeClass('addParallax');
                        galleryItem.removeClass('addGallery');

                        if(index==0){
                            gallery.css({height:galH*Math.ceil(8/col)});
                            if( col==4 ){
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                                galleryItem.eq(3).show().animate({left:galW*3, top:galH*0},0);
                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                                galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                                galleryItem.eq(7).show().animate({left:galW*3, top:galH*1},0);
                            }
                            else if( col==3 ){
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);

                                galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);
                                galleryItem.eq(5).show().animate({left:galW*2, top:galH*1},0);
                                
                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*2},0);
                                galleryItem.eq(7).show().animate({left:galW*1, top:galH*2},0);
                            }
                            else if( col==2 ){
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(3).show().animate({left:galW*1, top:galH*1},0);
                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                                galleryItem.eq(5).show().animate({left:galW*1, top:galH*2},0);
                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                                galleryItem.eq(7).show().animate({left:galW*1, top:galH*3},0);
                            }
                            else{
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                                galleryItem.eq(3).show().animate({left:galW*0, top:galH*3},0);
                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*4},0);
                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*5},0);
                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*6},0);
                                galleryItem.eq(7).show().animate({left:galW*0, top:galH*7},0);
                            }
                            
                            galleryItem.eq(4).removeClass('row1-col');
                            galleryItem.eq(5).removeClass('row1-col');
                            galleryItem.eq(6).removeClass('row1-col');
                            galleryItem.eq(7).removeClass('row1-col');

                            galleryItem.eq(4).removeClass('row2-col');
                            galleryItem.eq(5).removeClass('row2-col');
                            galleryItem.eq(6).removeClass('row2-col');
                            galleryItem.eq(7).removeClass('row2-col');
                        }
                        if(index==1){
                            gallery.css({height:galH*Math.ceil(5/col)});
                            //hide
                            galleryItem.eq(0).hide();
                            galleryItem.eq(3).hide();
                            galleryItem.eq(5).hide();
                            if( col==4){
                                //show
                                galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                                galleryItem.eq(6).show().animate({left:galW*3, top:galH*0},0);

                                galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                            }
                            else if( col==3){
                                //show
                                galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);

                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);
                            }
                            else if( col==2){
                                //show
                                galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);

                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);

                                galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                            }
                            else{
                                //show
                                galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                                galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);
                            }
                            
                            galleryItem.eq(4).removeClass('row2-col');
                            galleryItem.eq(6).removeClass('row2-col');
                            galleryItem.eq(4).addClass('row1-col');
                            galleryItem.eq(6).addClass('row1-col');
                            
                            galleryItem.eq(7).removeClass('row1-col');
                            galleryItem.eq(7).addClass('row2-col');
                        }
                        if(index==2){
                            gallery.css({height:galH*Math.ceil(6/col)});
                            //hide
                            galleryItem.eq(3).hide();
                            galleryItem.eq(7).hide();
                            if(col==4){
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                                galleryItem.eq(4).show().animate({left:galW*3, top:galH*0},0);
                                
                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
                            }
                            else if(col==3){
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);

                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                                galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                            }
                            else if(col==2){
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);

                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);

                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*2},0);
                                galleryItem.eq(6).show().animate({left:galW*1, top:galH*2},0);
                            }
                            else{
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*3},0);
                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*4},0);
                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*5},0);
                            }
                            

                            galleryItem.eq(4).removeClass('row2-col');
                            galleryItem.eq(4).addClass('row1-col');

                            galleryItem.eq(5).removeClass('row1-col');
                            galleryItem.eq(6).removeClass('row1-col');

                            galleryItem.eq(5).removeClass('row2-col');
                            galleryItem.eq(6).removeClass('row2-col');

                        }
                        if(index==3){
                            gallery.css({height:galH*Math.ceil(4/col)});
                           //hide
                            galleryItem.eq(1).hide();
                            galleryItem.eq(6).hide();
                            galleryItem.eq(3).hide();
                            galleryItem.eq(7).hide();
                            if( col==4){
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                                galleryItem.eq(5).show().animate({left:galW*3, top:galH*0},0);
                            }
                            else if( col==3){
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);

                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                            }
                            else if( col==2){
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                                
                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                            }
                            else{
                                //show
                                galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*3},0);
                            }
                            
                            galleryItem.eq(4).removeClass('row2-col');
                            galleryItem.eq(5).removeClass('row2-col');
                            galleryItem.eq(4).addClass('row1-col');
                            galleryItem.eq(5).addClass('row1-col');
                        }
                        if(index==4){
                           
                            gallery.css({height:galH*Math.ceil(5/col)});
                            //hide
                            galleryItem.eq(0).hide();
                            galleryItem.eq(1).hide();
                            galleryItem.eq(4).hide();
                            if(col==4){
                                //show
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(5).show().animate({left:galW*2, top:galH*0},0);                  
                                galleryItem.eq(6).show().animate({left:galW*3, top:galH*0},0);

                                galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                            }
                            else if(col==3){
                                //show
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                                galleryItem.eq(5).show().animate({left:galW*2, top:galH*0},0);                  
                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);
                            }
                            else if(col==2){
                                //show
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);

                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);                  
                                galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);

                                galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                            }
                            else{
                                //show
                                galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                                galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                                galleryItem.eq(5).show().animate({left:galW*0, top:galH*2},0);                  
                                galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                                galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);
                            }
                  
                            galleryItem.eq(5).removeClass('row2-col');
                            galleryItem.eq(6).removeClass('row2-col');
                            galleryItem.eq(5).addClass('row1-col');
                            galleryItem.eq(6).addClass('row1-col');
                            
                            galleryItem.eq(7).removeClass('row1-col');
                            galleryItem.eq(7).addClass('row2-col');
                        }
                        if(index==5){
                            gallery.css({height:galH*Math.ceil(3/col)});
                            //hide
                            galleryItem.eq(1).hide();
                            galleryItem.eq(2).hide();
                            galleryItem.eq(3).hide();
                            galleryItem.eq(5).hide();
                            galleryItem.eq(6).hide();
                            if(col==4){
                                //show
                               galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                               galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                               galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);
                            }
                            else if(col==3){
                                //show
                               galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                               galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                               galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);
                            }
                            else if(col==2){
                                //show
                               galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                               galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                               galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                            }
                            else{
                                //show
                               galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                               galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                               galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                            }
                            
      
                            galleryItem.eq(4).removeClass('row2-col');
                            galleryItem.eq(7).removeClass('row2-col');
                            galleryItem.eq(4).addClass('row1-col');
                            galleryItem.eq(7).addClass('row1-col');
                        }
                        galleryItem.addClass('addGallery');
            }

            $(window).resize(function(){
                resizefn();
            });

            resizefn();

            gallaryBtn.each(function(idx){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        index=idx;
                        resizefn();
                    }
                });
            });
        }
        section5(){
            let circle = $('.circle circle');
            const number = $('.number');
            const percent = [0.90, 0.75, 0.85, 0.93];
            let percentSize = [];
            const second = 3;
            let size = [];
            let piece = [];
            let counter = [0,0,0,0];
            let setID = [];
            let t = false;
            let sec5Top = $('#section5').offset().top-$(window).height()+300;

            $(window).scroll(function(){
                if( $(window).scrollTop()==0){
                    t=false;
                }

                if( $(window).scrollTop()>sec5Top){
                    if(t==false){
                        t=true;
                        svgAnimation();
                    }
                }
            });

            function svgAnimation(){
                counter = [0,0,0,0];
                $.each(circle, function(index,obj){
                    size[index] = obj.getTotalLength();
    
                    obj.style.strokeDasharray = size[index];
                    obj.style.strokeDashoffset = size[index];
    
                    percentSize[index] = size[index]*percent[index];

                    piece[index] = (percentSize[index]/second)/100;
    
                    function mainSvg(){
                        $(obj).css({strokeDashoffset:size[index]-counter[index]});
                        number.eq(index).text(Math.ceil(counter[index]/size[index]*100)+'%');
                    }
    
                    function countTimer(){
                        counter[index] += piece[index];
    
                        if(counter[index]>=percentSize[index]){
                            clearInterval(setID[index]);
                        }
                        else{
                            mainSvg();
                        }
                    }
                    setID[index]= setInterval(countTimer,10);
                });
            }
            
        }
        section6(){
        }
        section7(){
        }
        section8(){
        }
        section9(){
        }
        section10(){
        
            //??? ????????? ?????? ????????????
            //AJAX
            const submitBtn = $('.submit-btn');
            const name = $('#name');
            const mail = $('#mail');
      
            //????????????
            submitBtn.on({
              click: function(e){
                  e.preventDefault();
      
                    if( name.val() =='' ){
                        alert('????????? ???????????????!')
                        name.focus();
                        return false;
                    }            
                    if( mail.val() =='' ){
                        alert('????????? ???????????????!')
                        mail.focus();
                        return false;
                    }
      
                    $.ajax({
                        url:'./response.php',
                        method:'POST',
                        data: {
                            name: name.val(),
                            mail: mail.val()
                        },
                        success: function(result){  
                            $('#name').val('');
                            $('#mail').val('');
                            $('#name').focus();
                        },
                        error: function(err){
                            console.log(err);
                            alert('AJAX ?????? ??????!');
                        }
                    });
                }
            });
      
            //????????????
            $('.list-btn').on({
              click: function(){
                  $.ajax({
                    url:'./data/member_list.json',
                    method:'GET',
                    success: function(result){
                       
                       //???????????? ?????? ?????? ??????
                       let txt = '';
                       $.each(result, function(idx, item){
                           txt += "<tr>";
                           txt += "<td>" + (idx+1) + "</td>";
                           txt += "<td>" + item.?????? + "</td>";
                           txt += "<td>" + item.????????? + "</td>";
                           txt += "</tr>";
                       });
      
                       $('.list-box  tbody').html( txt );  //??????
                    },
                    error: function(err){
                        console.log('AJAX ??????! ', err);
                    }
                  });
      
              }
            });
          } 
        footer(){
            const goTopBtn = $('.go-top-btn');

            goTopBtn.on({
                click:function(e){
                    e.preventDefault();
                    $('html, body').stop().animate({scrollTop:0},600);
                }
            });
        }
    }
    const newPofo = new Pofo();
    newPofo.init();
})(jQuery,window,document);