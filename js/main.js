"use strict";

AOS.init();
//Wrapping all JavaScript code into a IIFE function for prevent global variables creation
(function ($) {
  var $body = $("body");
  var $window = $(window);

  //hidding menu elements that do not fit in menu width
  //processing center logo
  function menuHideExtraElements() {
    //cleaneng changed elements
    $(".sf-more-li, .sf-logo-li").remove();
    var windowWidth = $("body").innerWidth();

    $(".sf-menu").each(function () {
      var $thisMenu = $(this);
      var $menuWraper = $thisMenu.closest(".top-nav");
      $menuWraper.attr("style", "");
      if (windowWidth > 991) {
        //grab all main menu first level items
        var $menuLis = $menuWraper.find(".sf-menu > li");
        $menuLis.removeClass("sf-xl-hidden");

        var $headerLogoCenter = $thisMenu.closest(".header_logo_center");
        var logoWidth = 0;
        var summaryLiWidth = 0;

        if ($headerLogoCenter.length) {
          var $logo = $headerLogoCenter.find(".logo");
          // 30/2 - left and right margins
          logoWidth = $logo.outerWidth(true) + 70;
        }

        // var wrapperWidth = $('.sf-menu').width();
        var wrapperWidth = $menuWraper.outerWidth(true);
        $menuLis.each(function (index) {
          //4 - 4px additional width for inline-block LI element
          var elementWidth = $(this).outerWidth() + 4;
          summaryLiWidth += elementWidth;
          if (summaryLiWidth >= wrapperWidth - logoWidth) {
            var $newLi = $('<li class="sf-more-li"><a>...</a><ul></ul></li>');
            $($menuLis[index - 1]).before($newLi);
            var newLiWidth = $($newLi).outerWidth(true);
            var $extraLiElements = $menuLis.filter(":gt(" + (index - 2) + ")");
            $extraLiElements.clone().appendTo($newLi.find("ul"));
            $extraLiElements.addClass("sf-xl-hidden");
            return false;
          }
        });

        //processing center logo
        if ($headerLogoCenter.length) {
          var $menuLisVisible = $headerLogoCenter.find(".sf-menu > li:not(.sf-xl-hidden)");
          var menuLength = $menuLisVisible.length;
          var summaryLiVisibleWidth = 0;
          $menuLisVisible.each(function () {
            summaryLiVisibleWidth += $(this).outerWidth();
          });

          var centerLi = Math.floor(menuLength / 2);
          if (menuLength % 2 === 0) {
            centerLi--;
          }
          var $liLeftFromLogo = $menuLisVisible.eq(centerLi);
          $liLeftFromLogo.after('<li class="sf-logo-li"><a href="#">&nbsp;</a></li>');
          $headerLogoCenter.find(".sf-logo-li").width(logoWidth);
          var liLeftRightDotX = $liLeftFromLogo.offset().left + $liLeftFromLogo.outerWidth();
          var logoLeftDotX = windowWidth / 2 - logoWidth / 2;
          var menuLeftOffset = liLeftRightDotX - logoLeftDotX;
          $menuWraper.css({ left: -menuLeftOffset });
        }
      } // > 991
    }); //sf-menu each
  } //menuHideExtraElements

  function initMegaMenu(timeOut) {
    var $megaMenu = $(".top-nav .mega-menu");
    if ($megaMenu.length) {
      setTimeout(function () {
        var windowWidth = $("body").innerWidth();
        if (windowWidth > 991) {
          $megaMenu.each(function () {
            var $thisMegaMenu = $(this);
            //temporary showing mega menu to proper size calc
            $thisMegaMenu.css({ display: "block", left: "auto" });

            //checking for sticked side header
            var stickedSideHeaderWidth = 0;
            var $stickedSideHeader = $(".header_side_sticked");
            if ($stickedSideHeader.length && $stickedSideHeader.hasClass("active-slide-side-header")) {
              stickedSideHeaderWidth = $stickedSideHeader.outerWidth(true);
              if ($stickedSideHeader.hasClass("header_side_right")) {
                stickedSideHeaderWidth = -stickedSideHeaderWidth;
              }
              windowWidth = windowWidth - stickedSideHeaderWidth;
            }
            var thisWidth = $thisMegaMenu.outerWidth();
            var thisOffset = $thisMegaMenu.offset().left - stickedSideHeaderWidth;
            var thisLeft = thisOffset + thisWidth / 2 - windowWidth / 2;
            $thisMegaMenu.css({ left: -thisLeft, display: "none" });
            if (!$thisMegaMenu.closest("ul").hasClass("nav")) {
              $thisMegaMenu.css("left", "");
            }
          });
        }
      }, timeOut);
    }
  }

  //NOTE: affixed sidebar works bad with side headers
  function initAffixSidebar() {
    var $affixAside = $(".affix-aside");
    if ($affixAside.length) {
      $window = $(window);

      //on stick and unstick event
      $affixAside
        .on("affix.bs.affix", function (e) {
          var affixWidth = $affixAside.width() - 1;
          var affixLeft = $affixAside.offset().left;
          $affixAside.width(affixWidth).css("left", affixLeft);
        })
        .on("affix-bottom.bs.affix", function (e) {
          var affixWidth = $affixAside.width() - 1;
          //if sticked left header
          var stickedSideHeaderWidth = 0;
          var $stickedSideHeader = $(".header_side_sticked");
          if ($stickedSideHeader.length && $stickedSideHeader.hasClass("active-slide-side-header") && !$stickedSideHeader.hasClass("header_side_right")) {
            stickedSideHeaderWidth = $stickedSideHeader.outerWidth(true);
          }
          var affixLeft = $affixAside.offset().left - stickedSideHeaderWidth - $("#box_wrapper").offset().left;
          $affixAside.width(affixWidth).css("left", affixLeft);
        })
        .on("affix-top.bs.affix", function (e) {
          $affixAside.css({ width: "", left: "" });
        });

      //counting offset
      var offsetTopAdd = 10;
      var offsetBottomAdd = 150;
      var offsetTop = $affixAside.offset().top - $(".page_header").height();
      //note that page_footer and page_copyright sections must exists - else this will cause error in last jQuery versions
      var offsetBottom = $(".page_footer").outerHeight(true) + $(".page_copyright").outerHeight(true);

      $affixAside.affix({
        offset: {
          top: offsetTop - offsetTopAdd,
          bottom: offsetBottom + offsetBottomAdd,
        },
      });

      $window.on("resize", function () {
        //returning sidebar in top position if it is sticked because of unexpected behavior
        $affixAside.removeClass("affix affix-bottom").addClass("affix-top").trigger("affix-top.bs.affix");

        var offsetTopSectionsArray = [".page_topline", ".page_toplogo", ".page_header", ".page_title", ".blog_slider", ".blog-featured-posts"];
        var offsetTop = 0;

        offsetTopSectionsArray.map(function (val) {
          offsetTop += $(val).outerHeight(true) || 0;
        });
        //note that page_footer and page_copyright sections must exists - else this will cause error in last jQuery versions
        var offsetBottom = $(".page_footer").outerHeight(true) + $(".page_copyright").outerHeight(true);

        $affixAside.data("bs.affix").options.offset.top = offsetTop - offsetTopAdd;
        $affixAside.data("bs.affix").options.offset.bottom = offsetBottom + offsetBottomAdd;

        $affixAside.affix("checkPosition");
      });

      $affixAside.affix("checkPosition");
    } //eof checking of affix sidebar existing
  }

  //photoSwipe gallery plugin
  function initPhotoSwipe() {
    if (typeof PhotoSwipe !== "undefined") {
      //adding prettyPhoto for backward compatibility. Deprecated.
      //will leave only .photoswipe-link later
      var gallerySelectors = '.photoswipe-link, a[data-gal^="prettyPhoto"], [data-thumb] a';
      var $galleryLinks = $(gallerySelectors);
      if ($galleryLinks.length) {
        //adding photoswipe gallery markup
        if (!$(".pswp").length) {
          $body.append(
            '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><a class="pswp__button pswp__button--close" title="Close (Esc)"></a><a class="pswp__button pswp__button--share" title="Share"></a><a class="pswp__button pswp__button--fs" title="Toggle fullscreen"></a><a class="pswp__button pswp__button--zoom" title="Zoom in/out"></a><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div><a class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></a><a class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></a><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>'
          );
          //if function already was called - return (all listeners was setted and .pswp gallery container was added)
        } else {
          return;
        }
        //adding prettyPhoto for backward compatibility. Deprecated.
        $("body").on("click", gallerySelectors, function (e) {
          e.preventDefault();

          var $link = $(this);
          var $linksParentContainer = $link.closest(".photoswipe-container, .isotope-wrapper, .owl-carousel, .flickr_ul, .images");
          var $links = $linksParentContainer.find(gallerySelectors);
          //for cloned owl-carousel items - continue to prevent duplicating - moved to EACH loop
          //start index does not work with owl-carousel loop enabled
          // if ($linksParentContainer.is('.owl-carousel')) {
          // 	$links = $links.filter(function (index) {
          // 		return !($(this).closest('.cloned').length);
          // 	});
          // }
          //if no container only adding this link
          if (!$links.length) {
            $links.push($link);
          }
          var items = [];
          var options = {
            bgOpacity: 0.7,
            showHideOpacity: true,
            history: false,
            shareEl: false,
            //data index is set in owl carousel init
            index: $link.data("index") ? $link.data("index") : 0,
          };
          var gallery = $(".pswp")[0];
          //building items array
          $links.each(function (i) {
            var $this = $(this);
            //if cloned element (owl or flexslider thumbs) - continue
            if ($this.closest(".clone, .cloned").length) {
              return;
            }
            //TODO think about hide items that are not showing after filtering and renew indexes for them
            // if ($linksParentContainer.hasClass('isotope-wrapper') && !$this.is(':visible')) {
            // 	return;
            // }
            var item = {};
            //if not owl carousel
            if ($link[0] === $this[0] && !$link.data("index")) {
              //start from 0
              if ($linksParentContainer.hasClass("owl-carousel") || $linksParentContainer.hasClass("images")) {
                options.index = i - 1;
              } else {
                options.index = i;
              }
            }
            //video or image
            if ($this.data("iframe")) {
              //for wordpress - iframe tag is escaped
              //item.html = $this.data('iframe').replace(/&amp/g, '&').replace(/$lt;/g, '<').replace(/&gt;/g, '>').replace(/$quot;/g, '"');
              //for html - building iframe manually
              //autoplay only if 1 iframe in gallery
              var autoplay = $links.length > 1 ? "" : "&autoplay=1";
              item.html = '<div class="embed-responsive embed-responsive-16by9">';
              // item.html += '<iframe class="embed-responsive-item" src="'+ $(this).data('iframe') + '?rel=0&autoplay=1'+ '"></iframe>';
              item.html += '<iframe class="embed-responsive-item" src="' + $(this).data("iframe") + "?rel=0" + autoplay + '&enablejsapi=1&api=1"></iframe>';
              item.html += "</div>";
            } else {
              item.src = $this.attr("href");
              //default values
              var width = 1200;
              var height = 780;
              //template data on A element
              var data = $this.data();
              //image data in Woo
              var dataImage = $this.find("img").first().data();
              if (data.width) {
                width = data.width;
              }
              if (data.height) {
                height = data.height;
              }
              if (typeof dataImage !== "undefined") {
                if (dataImage.large_image_width) {
                  width = dataImage.large_image_width;
                }
                if (dataImage.large_image_height) {
                  height = dataImage.large_image_height;
                }
              }
              item.w = width;
              item.h = height;
            }
            items.push(item);
          });

          var pswpGallery = new PhotoSwipe(gallery, PhotoSwipeUI_Default, items, options);
          pswpGallery.init();

          //pausing video on close and on slide change
          pswpGallery.listen("afterChange", function () {
            $(pswpGallery.container)
              .find("iframe")
              .each(function () {
                //"method":"pause" - form Vimeo, other - for YouTube
                $(this)[0].contentWindow.postMessage('{"method":"pause","event":"command","func":"pauseVideo","args":""}', "*");
              });
          });
          pswpGallery.listen("close", function () {
            $(pswpGallery.container)
              .find("iframe")
              .each(function () {
                //"method":"pause" - form Vimeo, other - for YouTube
                $(this)[0].contentWindow.postMessage('{"method":"pause","event":"command","func":"pauseVideo","args":""}', "*");
              });
          });
        });
      }
    }
  }

  //helper functions to init elements only when they appears in viewport (jQUery.appear plugin)
  function initAnimateElement(self, index) {
    var animationClass = !self.data("animation") ? "fadeInUp" : self.data("animation");
    var animationDelay = !self.data("delay") ? 150 : self.data("delay");
    setTimeout(function () {
      self.addClass("animated " + animationClass);
    }, index * animationDelay);
  }

  function initCounter(self) {
    if (self.hasClass("counted")) {
      return;
    } else {
      self.countTo().addClass("counted");
    }
  }

  function initProgressbar(el) {
    el.progressbar({
      transition_delay: 300,
    });
  }



  //function that initiating template plugins on window.load event
  function documentReadyInit() {
    ////////////
    //mainmenu//
    ////////////
    if ($().scrollbar) {
      $('[class*="scrollbar-"]').scrollbar();
    }
    if ($().superfish) {
      $("ul.sf-menu").superfish({
        popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
        delay: 700,
        animation: { opacity: "show", marginTop: 0 },
        animationOut: { opacity: "hide", marginTop: 30 },
        speed: 200,
        speedOut: 200,
        disableHI: false,
        cssArrows: true,
        autoArrows: true,
        onInit: function () {
          var $thisMenu = $(this);
          $thisMenu.find(".sf-with-ul").after('<span class="sf-menu-item-mobile-toggler"/>');
          $thisMenu.find(".sf-menu-item-mobile-toggler").on("click", function (e) {
            var $parentLi = $(this).parent();
            if ($parentLi.hasClass("sfHover")) {
              $parentLi.superfish("hide");
            } else {
              $parentLi.superfish("show");
            }
          });
        },
      });
      $("ul.sf-menu-side").superfish({
        popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
        delay: 500,
        animation: { opacity: "show", height: 100 + "%" },
        animationOut: { opacity: "hide", height: 0 },
        speed: 400,
        speedOut: 300,
        disableHI: false,
        cssArrows: true,
        autoArrows: true,
      });
    }

    //toggle mobile menu
    $(".page_header .toggle_menu, .page_toplogo .toggle_menu").on("click", function () {
      $(this).toggleClass("mobile-active").closest(".page_header").toggleClass("mobile-active").end().closest(".page_toplogo").next().find(".page_header").toggleClass("mobile-active");
    });

    $(".sf-menu a").on("click", function () {
      var $this = $(this);
      //If this is a local link or item with sumbenu - not toggling menu
      if ($this.hasClass("sf-with-ul") || !($this.attr("href").charAt(0) === "#")) {
        return;
      }
      $this.closest(".page_header").toggleClass("mobile-active").find(".toggle_menu").toggleClass("mobile-active");
    });

    //side header processing
    var $sideHeader = $(".page_header_side");
    // toggle sub-menus visibility on menu-click
    $("ul.menu-click")
      .find("li")
      .each(function () {
        var $thisLi = $(this);
        //toggle submenu only for menu items with submenu
        if ($thisLi.find("ul").length) {
          $thisLi
            .append('<span class="toggle_submenu color-darkgrey"></span>')
            //adding anchor
            .find(".toggle_submenu, > a")
            .on("click", function (e) {
              var $thisSpanOrA = $(this);
              //if this is a link and it is already opened - going to link
              if ($thisSpanOrA.attr("href") === "#" || !$thisSpanOrA.parent().hasClass("active-submenu")) {
                e.preventDefault();
              }
              if ($thisSpanOrA.parent().hasClass("active-submenu")) {
                $thisSpanOrA.parent().removeClass("active-submenu");
                return;
              }
              $thisLi.addClass("active-submenu").siblings().removeClass("active-submenu");
            });
        } //eof sumbenu check
      });
    if ($sideHeader.length) {
      $(".toggle_menu_side").on("click", function () {
        var $thisToggler = $(this);
        $thisToggler.toggleClass("active");
        if ($thisToggler.hasClass("header-slide")) {
          $sideHeader.toggleClass("active-slide-side-header");
        } else {
          if ($thisToggler.parent().hasClass("header_side_right")) {
            $body.toggleClass("active-side-header slide-right");
          } else {
            $body.toggleClass("active-side-header");
          }
          $body.parent().toggleClass("html-active-push-header");
        }
        //fixing mega menu and aside affix on toggling side sticked header
        if ($thisToggler.closest(".header_side_sticked").length) {
          initMegaMenu(600);
          var $affixAside = $(".affix-aside");
          if ($affixAside.length) {
            $affixAside
              .removeClass("affix affix-bottom")
              .addClass("affix-top")
              .css({
                width: "",
                left: "",
              })
              .trigger("affix-top.bs.affix");
            setTimeout(function () {
              $affixAside
                .removeClass("affix affix-bottom")
                .addClass("affix-top")
                .css({
                  width: "",
                  left: "",
                })
                .trigger("affix-top.bs.affix");
            }, 10);
          }
        }
      });
      //hidding side header on click outside header
      $body.on("mousedown touchstart", function (e) {
        if (!$(e.target).closest(".page_header_side").length && !$sideHeader.hasClass("header_side_sticked")) {
          $sideHeader.removeClass("active-slide-side-header");
          $body.removeClass("active-side-header slide-right");
          $body.parent().removeClass("html-active-push-header");
          var $toggler = $(".toggle_menu_side");
          if ($toggler.hasClass("active")) {
            $toggler.removeClass("active");
          }
        }
      });
    } //sideHeader check

    //1 and 2/3/4th level offscreen fix
    var MainWindowWidth = $window.width();
    $window.on("resize", function () {
      MainWindowWidth = $(window).width();
    });
    //2/3/4 levels
    $(".top-nav .sf-menu")
      .on("mouseover", "ul li", function () {
        // $('.mainmenu').on('mouseover', 'ul li', function(){
        if (MainWindowWidth > 991) {
          var $this = $(this);
          // checks if third level menu exist
          var subMenuExist = $this.find("ul").length;
          if (subMenuExist > 0) {
            var subMenuWidth = $this.find("ul, div").first().width();
            var subMenuOffset = $this.find("ul, div").first().parent().offset().left + subMenuWidth;
            // if sub menu is off screen, give new position
            if (subMenuOffset + subMenuWidth > MainWindowWidth) {
              var newSubMenuPosition = subMenuWidth + 0;
              $this.find("ul, div").first().css({
                left: -newSubMenuPosition,
              });
            } else {
              $this.find("ul, div").first().css({
                left: "100%",
              });
            }
          }
        }
        //1st level
      })
      .on("mouseover", "> li", function () {
        if (MainWindowWidth > 991) {
          var $this = $(this);
          var subMenuExist = $this.find("ul").length;
          if (subMenuExist > 0) {
            var subMenuWidth = $this.find("ul").width();
            var subMenuOffset = $this.find("ul").parent().offset().left;
            // if sub menu is off screen, give new position
            if (subMenuOffset + subMenuWidth > MainWindowWidth) {
              var newSubMenuPosition = MainWindowWidth - (subMenuOffset + subMenuWidth);
              $this.find("ul").first().css({
                left: newSubMenuPosition,
              });
            }
          }
        }
      });

    /////////////////////////////////////////
    //single page localscroll and scrollspy//
    /////////////////////////////////////////
    var navHeight = $(".page_header").outerHeight(true);
    //if sidebar nav exists - binding to it. Else - to main horizontal nav
    if ($(".mainmenu_side_wrapper").length) {
      $body.scrollspy({
        target: ".mainmenu_side_wrapper",
        offset: navHeight ? navHeight : 50,
      });
    } else if ($(".top-nav").length) {
      $body.scrollspy({
        target: ".top-nav",
        offset: navHeight,
      });
    }
    if ($().localScroll) {
      $(".top-nav > ul, .mainmenu_side_wrapper > ul, #land,  .comments-link, .scroll_down").localScroll({
        duration: 900,
        easing: "easeInOutQuart",
        offset: -navHeight + 40,
      });
    }

    //background image teaser and sections with half image bg
    //put this before prettyPhoto init because image may be wrapped in prettyPhoto link
    $(".bg_teaser, .cover-image").each(function () {
      var $element = $(this);
      var $image = $element.find("img").first();
      if (!$image.length) {
        $image = $element.parent().find("img").first();
      }
      if (!$image.length) {
        return;
      }
      var imagePath = $image.attr("src");
      $element.css("background-image", "url(" + imagePath + ")");
      var $imageParent = $image.parent();
      //if image inside link - adding this link, removing gallery to preserve duplicating gallery items
      if ($imageParent.is("a")) {
        $element.prepend($image.parent().clone().html(""));
        $imageParent.attr("data-gal", "");
      }
    });

    //video images preview - from WP
    $(".embed-placeholder").each(function () {
      $(this).on("click", function (e) {
        var $thisLink = $(this);
        // if prettyPhoto popup with YouTube - return
        if ($thisLink.attr("data-gal")) {
          return;
        }
        e.preventDefault();
        if ($thisLink.attr("href") === "" || $thisLink.attr("href") === "#") {
          $thisLink
            .replaceWith(
              $thisLink
                .data("iframe")
                .replace(/&amp/g, "&")
                .replace(/$lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/$quot;/g, '"')
            )
            .trigger("click");
        } else {
          $thisLink.replaceWith('<iframe class="embed-responsive-item" src="' + $thisLink.attr("href") + "?rel=0&autoplay=1" + '"></iframe>');
        }
      });
    });

    //toTop
    if ($().UItoTop) {
      $().UItoTop({ easingType: "easeInOutQuart" });
    }

    //parallax
    if ($().parallax) {
      $(".s-parallax").parallax("50%", 0.01);
    }

    //prettyPhoto
    if ($().prettyPhoto) {
      $("a[data-gal^='prettyPhoto']").prettyPhoto({
        hook: "data-gal",
        theme: "facebook" /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/,
      });
    }
    initPhotoSwipe();

    ////////////////////////////////////////
    //init Bootstrap JS components//
    ////////////////////////////////////////
    //adding .form-control class for search widgets
    $('[type="search"]').addClass("form-control");

    //bootstrap carousel
    if ($().carousel) {
      $(".carousel").carousel();
    }
    //bootstrap tab - show first tab
    $(".nav-tabs").each(function () {
      $(this).find("a").first().tab("show");
    });
    //video in bootstrap tabs
    $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
      var iframe = $(e.relatedTarget.hash).find("iframe");
      var src = iframe.attr("src");
      iframe.attr("src", "");
      iframe.attr("src", src);
    });

    $(".tab-content").each(function () {
      $(this).find(".tab-pane").first().addClass("fade in");
    });
    //bootstrap collapse - show first tab
    $(".panel-group").each(function () {
      $(this).find("a").first().filter(".collapsed").trigger("click");
    });
    //tooltip
    if ($().tooltip) {
      $('[data-toggle="tooltip"]').tooltip();
    }

    //comingsoon counter
    if ($().countdown) {
      var $counter = $("#comingsoon-countdown");
      //today date plus month for demo purpose
      var date = $counter.data("date") !== "undefined" ? $counter.data("date") : false;
      if (date) {
        date = new Date(date);
      } else {
        date = new Date();
        date.setMonth(date.getMonth() + 1);
      }
      $counter.countdown({ until: date });
    }

    /////////////////////////////////////////////////
    //PHP widgets - contact form, search, MailChimp//
    /////////////////////////////////////////////////

    //contact form processing
    $("form.contact-form").on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      $($form).find(".contact-form-respond").remove();

      //checking on empty values
      $($form)
        .find('[aria-required="true"], [required]')
        .each(function (index) {
          var $thisRequired = $(this);
          if (!$thisRequired.val().length) {
            $thisRequired.addClass("invalid").on("focus", function () {
              $thisRequired.removeClass("invalid");
            });
          }
        });
      //if one of form fields is empty - exit
      if ($form.find('[aria-required="true"], [required]').hasClass("invalid")) {
        return;
      }

      //sending form data to PHP server if fields are not empty
      var request = $form.serialize();
      var ajax = jQuery
        .post("contact-form.php", request)
        .done(function (data) {
          $($form)
            .find('[type="submit"]')
            .attr("disabled", false)
            .parent()
            .append('<div class="contact-form-respond color-main mt-20">' + data + "</div>");
          //cleaning form
          var $formErrors = $form.find(".form-errors");
          if (!$formErrors.length) {
            $form[0].reset();
          }
        })
        .fail(function (data) {
          $($form).find('[type="submit"]').attr("disabled", false).blur().parent().append('<div class="contact-form-respond color-main mt-20">Mail cannot be sent. You need PHP server to send mail.</div>');
        });
    });

    //search modal
    $(".search_modal_button").on("click", function (e) {
      e.preventDefault();
      $("#search_modal").modal("show").find("input").first().focus();
    });
    //search form processing - not need in WP
    $("form.searchform, form.search-form").on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      var $searchModal = $("#search_modal");
      $searchModal.find("div.searchform-respond").remove();

      //checking on empty values
      $($form)
        .find('[type="text"], [type="search"]')
        .each(function (index) {
          var $thisField = $(this);
          if (!$thisField.val().length) {
            $thisField.addClass("invalid").on("focus", function () {
              $thisField.removeClass("invalid");
            });
          }
        });
      //if one of form fields is empty - exit
      if ($form.find('[type="text"]').hasClass("invalid")) {
        return;
      }

      $searchModal.modal("show");
      //sending form data to PHP server if fields are not empty
      var request = $form.serialize();
      var ajax = jQuery
        .post("search.php", request)
        .done(function (data) {
          $searchModal.append('<div class="searchform-respond">' + data + "</div>");
        })
        .fail(function (data) {
          $searchModal.append('<div class="searchform-respond">Search cannot be done. You need PHP server to search.</div>');
        });
    });

    //MailChimp subscribe form processing
    $(".signup").on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      // update user interface
      $form.find(".response").html("Adding email address...");
      // Prepare query string and send AJAX request
      jQuery.ajax({
        url: "mailchimp/store-address.php",
        data: "ajax=true&email=" + escape($form.find(".mailchimp_email").val()),
        success: function (msg) {
          $form.find(".response").html(msg);
        },
      });
    });

    //twitter
    if ($().tweet) {
      $(".twitter").tweet({
        modpath: "./twitter/",
        count: 2,
        avatar_size: 48,
        loading_text: "loading twitter feed...",
        join_text: "auto",
        username: "michaeljackson",
        template: '{avatar}<div class="tweet_right">{join}<span class="tweet_text links-maincolor">{tweet_text}</span>{time}</div>',
      });
    }

    // init timetable
    var $timetable = $("#timetable");
    if ($timetable.length) {
      // bind filter click
      $("#timetable_filter").on("click", "a", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $thisA = $(this);
        if ($thisA.hasClass("selected")) {
          // return false;
          return;
        }
        var selector = $thisA.attr("data-filter");
        $timetable.find("tbody td").removeClass("current").end().find(selector).closest("td").addClass("current");
        $thisA.closest("ul").find("a").removeClass("selected");
        $thisA.addClass("selected");
      });
    }
  }

  //function that initiating template plugins on window.load event
  function windowLoadInit() {
    //////////////
    //flexslider//
    //////////////
    if ($().flexslider) {
      var $introSlider = $(".page_slider .flexslider");
      $introSlider.each(function (index) {
        var $currentSlider = $(this);
        var data = $currentSlider.data();
        var nav = data.nav !== "undefined" ? data.nav : true;
        var dots = data.dots !== "undefined" ? data.dots : true;
        var speed = data.speed !== "undefined" ? data.speed : 7000;

        $currentSlider.flexslider({
          animation: "fade",
          pauseOnHover: true,
          useCSS: true,
          controlNav: dots,
          directionNav: nav,
          prevText: "",
          nextText: "",
          smoothHeight: false,
          slideshowSpeed: speed,
          animationSpeed: 600,
          start: function (slider) {
            slider.find(".intro_layers").children().css({ visibility: "hidden" });
            slider
              .find(".flex-active-slide .intro_layers")
              .children()
              .each(function (index) {
                var self = $(this);
                var animationClass = !self.data("animation") ? "scaleAppear" : self.data("animation");
                setTimeout(function () {
                  self.addClass("animated " + animationClass);
                }, index * 250);
              });
          },
          after: function (slider) {
            slider
              .find(".flex-active-slide .intro_layers")
              .children()
              .each(function (index) {
                var self = $(this);
                var animationClass = !self.data("animation") ? "scaleAppear" : self.data("animation");
                setTimeout(function () {
                  self.addClass("animated " + animationClass);
                }, index * 250);
              });
          },
          end: function (slider) {
            slider
              .find(".intro_layers")
              .children()
              .each(function () {
                var self = $(this);
                var animationClass = !self.data("animation") ? "scaleAppear" : self.data("animation");
                self.removeClass("animated " + animationClass).css({ visibility: "hidden" });
                // $(this).attr('class', '');
              });
          },
        });
        //wrapping nav with container - uncomment if need
        // .find('.flex-control-nav')
        // .wrap('<div class="container nav-container"/>')
      }); //.page_slider flex slider

      $(".flexslider").each(function (index) {
        var $currentSlider = $(this);
        //exit if intro slider already activated
        if ($currentSlider.find(".flex-active-slide").length) {
          return;
        }
        $currentSlider.flexslider({
          animation: "fade",
          useCSS: true,
          controlNav: true,
          directionNav: false,
          prevText: "",
          nextText: "",
          smoothHeight: false,
          slideshowSpeed: 5000,
          animationSpeed: 800,
        });
      });
    }

    ////////////////
    //owl carousel//
    ////////////////
    if ($().owlCarousel) {
      $(".owl-carousel").each(function () {
        var $carousel = $(this);
        $carousel.find("> *").each(function (i) {
          $(this).attr("data-index", i);
        });
        var data = $carousel.data();

        var loop = data.loop ? data.loop : false,
          margin = data.margin || data.margin === 0 ? data.margin : 30,
          nav = data.nav ? data.nav : false,
          navPrev = data.navPrev ? data.navPrev : '<i class="fa fa-angle-left">',
          navNext = data.navNext ? data.navNext : '<i class="fa fa-angle-right">',
          dots = data.dots ? data.dots : false,
          themeClass = data.themeclass ? data.themeclass : "owl-theme",
          center = data.center ? data.center : false,
          items = data.items ? data.items : 4,
          autoplay = data.autoplay ? data.autoplay : false,
          responsiveXs = data.responsiveXs ? data.responsiveXs : 1,
          responsiveSm = data.responsiveSm ? data.responsiveSm : 2,
          responsiveMd = data.responsiveMd ? data.responsiveMd : 3,
          responsiveLg = data.responsiveLg ? data.responsiveLg : 4,
          responsiveXl = data.responsiveXl ? data.responsiveXl : 1,
          responsiveXXl = data.responsiveXxl ? data.responsiveXxl : 1,
          draggable = data.draggable === false ? data.draggable : true,
          syncedClass = data.syncedClass ? data.syncedClass : false,
          filters = data.filters ? data.filters : false;

        if (filters) {
          $carousel.after($carousel.clone().addClass("owl-carousel-filter-cloned"));

          $(filters).on("click", "a", function (e) {
            //processing filter link
            e.preventDefault();
            if ($(this).hasClass("selected")) {
              return;
            }
            var filterValue = $(this).attr("data-filter");
            $(this).siblings().removeClass("selected active");
            $(this).addClass("selected active");

            //removing old items
            for (var i = $carousel.find(".owl-item").length - 1; i >= 0; i--) {
              $carousel.trigger("remove.owl.carousel", [1]);
            }
            //adding new items
            var $filteredItems = $(
              $carousel
                .next()
                .find(" > " + filterValue)
                .clone()
            );
            $filteredItems.each(function () {
              $carousel.trigger("add.owl.carousel", $(this));
              $(this).addClass("scaleAppear");
            });

            $carousel.trigger("refresh.owl.carousel");

            //reinit prettyPhoto in filtered OWL carousel
            if ($().prettyPhoto) {
              $carousel.find("a[data-gal^='prettyPhoto']").prettyPhoto({
                hook: "data-gal",
                theme: "facebook" /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/,
              });
            }
          });
        } //filters

        $carousel
          .owlCarousel({
            loop: loop,
            margin: margin,
            nav: nav,
            autoplay: autoplay,
            dots: dots,
            themeClass: themeClass,
            center: center,
            navText: [navPrev, navNext],
            mouseDrag: draggable,
            touchDrag: draggable,
            items: items,
            responsive: {
              0: {
                items: responsiveXs,
              },
              575: {
                items: responsiveSm,
              },
              767: {
                items: responsiveMd,
              },
              992: {
                items: responsiveLg,
              },
              1200: {
                items: responsiveXl,
              },
              1600: {
                items: responsiveXXl,
              },
            },
          })
          .addClass(themeClass);
        if (center) {
          $carousel.addClass("owl-center");
        }

        $window.on("resize", function () {
          $carousel.trigger("refresh.owl.carousel");
        });

        //topline two synced carousels
        if ($carousel.hasClass("owl-news-slider-items") && syncedClass) {
          $carousel.on("changed.owl.carousel", function (e) {
            var indexTo = loop ? e.item.index + 1 : e.item.index;
            $(syncedClass).trigger("to.owl.carousel", [indexTo]);
          });
        }
      });
    } //eof owl-carousel
    jQuery(".testimonials-owl-dots").each(function () {
      var $owl1 = jQuery(this);
      var $owl2 = $owl1.next(".testimonials-owl-content");

      $owl2.on("change.owl.carousel", function (event) {
        if (event.namespace && event.property.name === "position") {
          var target = event.relatedTarget.relative(event.property.value, true);
          $owl1.owlCarousel("to", target, 300, true);
        }
      });
    });

    ////////////////////
    //header processing/
    ////////////////////
    //stick header to top
    //wrap header with div for smooth sticking
    var $header = $(".page_header").first();
    var boxed = $header.closest(".boxed").length;
    var headerSticked = $(".header_side_sticked").length;
    if ($header.length) {
      //hiding main menu 1st levele elements that do not fit width
      menuHideExtraElements();
      //mega menu
      initMegaMenu(1);
      //wrap header for smooth stick and unstick
      $header.wrap('<div class="page_header_wrapper"></div>');
      var $headerWrapper = $(".page_header_wrapper");
      if (!boxed) {
        setTimeout(function () {
          var headerHeight = $header.outerHeight();
          $headerWrapper.css({ height: $(".page_header").first().outerHeight() });
        }, 400);
      }

      //headerWrapper background - same as header
      if ($header.hasClass("ls")) {
        $headerWrapper.addClass("ls");
        if ($header.hasClass("ms")) {
          $headerWrapper.addClass("ms");
        }
      } else if ($header.hasClass("ds")) {
        $headerWrapper.addClass("ds");
        if ($header.hasClass("bs")) {
          $headerWrapper.addClass("bs");
        }
        if ($header.hasClass("ms")) {
          $headerWrapper.addClass("ms");
        }
        if ($header.hasClass("ms bg-transparent")) {
          $headerWrapper.addClass("ms bg-transparent");
        }
        if ($header.hasClass("bg-transparent")) {
          $headerWrapper.addClass("bg-transparent");
        }
      } else if ($header.hasClass("cs")) {
        $headerWrapper.addClass("cs");
        if ($header.hasClass("cs2")) {
          $headerWrapper.addClass("cs2");
        }
        if ($header.hasClass("cs3")) {
          $headerWrapper.addClass("cs3");
        }
      } else if ($header.hasClass("gradient-background")) {
        $headerWrapper.addClass("gradient-background");
      }

      //get offset
      var headerOffset = 0;
      //check for sticked template headers
      if (!boxed && !($headerWrapper.css("position") === "fixed")) {
        headerOffset = $header.offset().top;
      }

      //for boxed layout - show or hide main menu elements if width has been changed on affix
      $header.on("affixed-top.bs.affix affixed.bs.affix affixed-bottom.bs.affix", function (e) {
        if ($header.hasClass("affix-top")) {
          $headerWrapper.removeClass("affix-wrapper affix-bottom-wrapper").addClass("affix-top-wrapper");
          //cs to ls when affixed
          // if($header.hasClass('cs')) {
          // 	$header.removeClass('ls');
          // }
        } else if ($header.hasClass("affix")) {
          $headerWrapper.removeClass("affix-top-wrapper affix-bottom-wrapper").addClass("affix-wrapper");
          //cs to ls when affixed
          // if($header.hasClass('cs')) {
          // 	$header.addClass('ls');
          // }
        } else if ($header.hasClass("affix-bottom")) {
          $headerWrapper.removeClass("affix-wrapper affix-top-wrapper").addClass("affix-bottom-wrapper");
        } else {
          $headerWrapper.removeClass("affix-wrapper affix-top-wrapper affix-bottom-wrapper");
        }

        //calling this functions disable menu items animation when going from affix to affix-top with centered logo inside
        //in boxed layouts header is always fixed
        if (boxed && !($header.css("position") === "fixed")) {
          menuHideExtraElements();
          initMegaMenu(1);
        }
        if (headerSticked) {
          initMegaMenu(1);
        }
      });

      //if header has different height on afixed and affixed-top positions - correcting wrapper height
      $header.on("affixed-top.bs.affix", function () {
        // $headerWrapper.css({height: $header.outerHeight()});
      });

      //fixing auto affix bug - toggle affix on click when page is at the top
      $header.on("affix.bs.affix", function () {
        if (!$window.scrollTop()) return false;
      });

      $header.affix({
        offset: {
          top: headerOffset,
          bottom: -10,
        },
      });
    }

    //aside affix
    initAffixSidebar();

    $body.scrollspy("refresh");

    //appear plugin is used to elements animation, counter, pieChart, bootstrap progressbar
    if ($().appear) {
      //animation to elements on scroll
      var $animate = $(".animate");
      $animate.appear();

      $animate.filter(":appeared").each(function (index) {
        initAnimateElement($(this), index);
      });

      $body.on("appear", ".animate", function (e, $affected) {
        $($affected).each(function (index) {
          initAnimateElement($(this), index);
        });
      });

      //counters init on scroll
      if ($().countTo) {
        var $counter = $(".counter");
        $counter.appear();

        $counter.filter(":appeared").each(function () {
          initCounter($(this));
        });
        $body.on("appear", ".counter", function (e, $affected) {
          $($affected).each(function () {
            initCounter($(this));
          });
        });
      }

      //bootstrap animated progressbar
      if ($().progressbar) {
        var $progressbar = $(".progress .progress-bar");
        $progressbar.appear();

        $progressbar.filter(":appeared").each(function () {
          initProgressbar($(this));
        });
        $body.on("appear", ".progress .progress-bar", function (e, $affected) {
          $($affected).each(function () {
            initProgressbar($(this));
          });
        });
        //animate progress bar inside bootstrap tab
        $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
          initProgressbar($($(e.target).attr("href")).find(".progress .progress-bar"));
        });
        //animate progress bar inside bootstrap dropdown
        $(".dropdown").on("shown.bs.dropdown", function (e) {
          initProgressbar($(this).find(".progress .progress-bar"));
        });
      }

      //circle progress bar
      if ($().easyPieChart) {
        var $chart = $(".chart");

        $chart.appear();

        $chart.filter(":appeared").each(function () {
          initChart($(this));
        });
        $body.on("appear", ".chart", function (e, $affected) {
          $($affected).each(function () {
            initChart($(this));
          });
        });
      }
    } //appear check

    setTimeout(() => {
      $("#form-modal").modal("show");
    }, 80000);

    $(".form-sites").on("submit", function (e) {
      e.preventDefault();
      const data = $(e.target).serialize();

      $.ajax({
        url: `./send-email.php`,
        method: "post",
        dataType: "json",
        data: data,
        success: function (_data) {
          alert("Спасибо ваши заявка отправлена");
        },
      });
    });

    $(".header-calc").on("submit", function (e) {
      e.preventDefault();
      const count = e.target.count.value.replace(/ /g, "");
      const height = e.target.height.value;

      const calcPrice = count * (320 * height);
      alert(`Плата будет зависеть от вашего вклада около ${calcPrice} рублей, мы передадим ваш номер телефона нашему специалисту, он свяжется с вами, а также вам будут предоставлены скидки за обратную связь.`);
      const data = $(e.target).serialize();

      $.ajax({
        url: `./send-email.php`,
        method: "post",
        dataType: "json",
        data: data,
        success: function (_data) {
          console.log(_data);
        },
      });
    });

    const element = document.querySelectorAll(".def-mask-input");
    const maskOptions = {
      mask: "+{7}(000)000-00-00",
    };

    element.forEach((item) => {
      const mask = IMask(item, maskOptions);
    });

    const inpNumbers = document.querySelectorAll(".def-input-number");

    inpNumbers.forEach((item) => {
      IMask(item, {
        mask: Number,
        min: +$(item).attr("min"),
        max: +$(item).attr("max"),
        thousandsSeparator: " ",
      });
    })


    /*back button*/
    $("#back-btn").on("click", function (e) {
      e.preventDefault();
      window.history.back();
    });

    /////////
    //SHOP///
    /////////

    $(".remove").html('<i class="fa fa-trash-alt"></i>');

    var className = $(".products-selection").next().attr("class");
    $(".products-selection .toggle_view .full").on("click", function (e) {
      e.preventDefault();
      $(".products-selection .toggle_view .full.active").removeClass("active");
      $(".products-selection .toggle_view .grid.active").removeClass("active");
      $(this).closest(".products-selection").next().removeClass(className).addClass("products columns-1");
      $(this).addClass("active");
    });

    $(".products-selection .toggle_view .grid").on("click", function (e) {
      e.preventDefault();
      $(".products-selection .toggle_view .full.active").removeClass("active");
      $(".products-selection .toggle_view .grid.active").removeClass("active");
      $(this).closest(".products-selection").next().removeClass("products columns-1").addClass(className);
      $(this).addClass("active");
    });

    $("#toggle_shop_view").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("grid-view");
      $("#products").toggleClass("grid-view list-view");
    });

    (function () {
      let updateCard = () => {
        let shopTable = $(".shop_table");
        shopTable.find('.quantity input[type="number"]').on("change", function () {
          setTimeout(function () {
            shopTable.find('button[name="update_cart"]').trigger("click");
          }, 300);
        });
      };

      let quantity_init = () => {
        var $numberInput = $('input[type="number"]');
        $numberInput.before('<input type="button" value="+" class="plus"><i class="fa fa-angle-up" aria-hidden="true"></i>');
        $numberInput.after('<input type="button" value="-" class="minus"><i class="fa fa-angle-down" aria-hidden="true"></i>');

        $(".plus").on("click", function (e) {
          var numberField = $(this).parent().find('[type="number"]');
          var currentVal = numberField.val() === "" ? 0 : numberField.val();
          numberField.val(parseFloat(currentVal) + 1).trigger("change");
        });
        $(".minus").on("click", function (e) {
          var numberField = $(this).parent().find('[type="number"]');
          var currentVal = numberField.val();
          numberField.val(parseFloat(currentVal) - 1).trigger("change");
          if (currentVal < 2) {
            numberField.val(1);
          }
        });
      };

      quantity_init();
      updateCard();

      $body.on("updated_cart_totals", function (e) {
        quantity_init();
        updateCard();
      });
    })();

    //checkout collapse forms - only for HTML
    $("a.showlogin, a.showcoupon").on("click", function (e) {
      e.preventDefault();
      var $form = $(this).parent().next();
      if ($form.css("display") === "none") {
        $form.show(150);
      } else {
        $form.hide(150);
      }
    });

    //remove product from cart - only for HTML
    $("a.remove").on("click", function (e) {
      e.preventDefault();
      $(this).closest("tr, .media").remove();
    });

    //flexslider - only for HTML
    $(".images").flexslider({
      animation: "slide",
      controlNav: "thumbnails",
      selector: "figure > div",
      directionNav: false,
    });

    //tabs - only for HTML
    $(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();

    $(".wc-tabs li a, ul.tabs li a").on("click", function (e) {
      e.preventDefault();
      var $tab = $(this);
      var $tabs_wrapper = $tab.closest(".wc-tabs-wrapper, .woocommerce-tabs");
      var $tabs = $tabs_wrapper.find(".wc-tabs, ul.tabs");
      $tabs.find("li").removeClass("active");
      $tabs_wrapper.find(".wc-tab, .panel:not(.panel .panel)").hide();
      $tab.closest("li").addClass("active");
      $tabs_wrapper.find($tab.attr("href")).show();
    });
    // Review link
    $("a.woocommerce-review-link").on("click", function () {
      $(".reviews_tab a").trigger("click");
      return true;
    });

    //parsing URL hash
    var hash = window.location.hash;
    var url = window.location.href;
    var $tabs = $(".wc-tabs, ul.tabs").first();

    if (hash.toLowerCase().indexOf("comment-") >= 0 || hash === "#reviews" || hash === "#tab-reviews") {
      $tabs.find("li.reviews_tab a").trigger("click");
    } else if (url.indexOf("comment-page-") > 0 || url.indexOf("cpage=") > 0) {
      $tabs.find("li.reviews_tab a").trigger("click");
    } else if (hash === "#tab-additional_information") {
      $tabs.find("li.additional_information_tab a").trigger("click");
    } else {
      $tabs.find("li:first a").trigger("click");
    }

    //price filter - only for HTML
    if ($().slider) {
      var $rangeSlider = $(".slider-range-price");
      if ($rangeSlider.length) {
        var $priceMin = $(".slider_price_min");
        var $priceMax = $(".slider_price_max");
        $rangeSlider.slider({
          range: true,
          min: 0,
          max: 100000,
          values: [1500, 30000],
          slide: function (event, ui) {
            $priceMin.val(ui.values[0]);
            $priceMax.val(ui.values[1]);
          },
        });
        $priceMin.val($rangeSlider.slider("values", 0));
        $priceMax.val($rangeSlider.slider("values", 1));
      }
    }

    //woocommerce related products, upsells products
    $(".related.products ul.products, .upsells.products ul.products, .cross-sells ul.products")
      .addClass("owl-carousel top-right-nav")
      .owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        items: 3,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
          0: {
            items: 1,
          },
          767: {
            items: 2,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });

    //color filter
    $(".color-filters")
      .find("a[data-background-color]")
      .each(function () {
        $(this).css({ "background-color": $(this).data("background-color") });
      });
    ////////////////
    // end of SHOP//
    ////////////////

    //Unyson or other messages modal
    var $messagesModal = $("#messages_modal");
    if ($messagesModal.find("ul").length) {
      $messagesModal.modal("show");
    }

    //page preloader
    $(".preloaderimg").fadeOut(150);
    $(".preloader")
      .fadeOut(150)
      .delay(50, function () {
        $(this).remove();
      });
  } //eof windowLoadInit
  $(function () {
    documentReadyInit();
    initGoogleMap();
  });

  $window.on("load", function () {
    windowLoadInit();
  }); //end of "window load" event

  $window.on("resize", function () {
    $body.scrollspy("refresh");

    if ($(".header-1") && $body.hasClass("active-side-header") && $window.width() > 1199) {
      $(".toggle_menu_side.active").trigger("click");
    }

    (function () {
      var originalAddClassMethod = jQuery.fn.addClass;
      var originalRemoveClassMethod = jQuery.fn.removeClass;
      jQuery.fn.addClass = function () {
        var result = originalAddClassMethod.apply(this, arguments);
        jQuery(this).trigger("classChanged");
        return result;
      };
      jQuery.fn.removeClass = function () {
        var result = originalRemoveClassMethod.apply(this, arguments);
        jQuery(this).trigger("classChanged");
        return result;
      };
    })();

    //header processing
    menuHideExtraElements();
    initMegaMenu(1);
    var $header = $(".page_header").first();
    //checking document scrolling position
    if ($header.length && !$(document).scrollTop() && $header.first().data("bs.affix")) {
      $header.first().data("bs.affix").options.offset.top = $header.offset().top;
    }
    if (!$header.closest(".boxed").length) {
      var affixed = false;
      if ($header.hasClass("affix")) {
        affixed = true;
        //animation duration
        $header.removeClass("affix");

        //TODO fix header wrapper height from small to large when page is scrolled (not top)
        setTimeout(function () {
          //editing header wrapper height for smooth stick and unstick
          $(".page_header_wrapper").css({ height: $header.first().outerHeight() });
          $header.addClass("affix");
        }, 250);
      }

      if (!affixed) {
        //editing header wrapper height for smooth stick and unstick
        $(".page_header_wrapper").css({ height: $header.first().outerHeight() });
      }
    }
  });

  const imageArray = Array.from({ length: 26 });
  setTimeout(() => {
    imageArray.forEach((i, index) => {
      const img = new Image();
      img.onload = function () {
        $("#works").append(`
            <div class="col-lg-4 col-md-6 walkways">
                <div class="vertical-item item-gallery only-img ds">
                  <div class="item-media">
                    <img src="images/gallery/tiled/slider${index + 1}.png" alt="" width="${this.width}" height="${this.height}">
                    <div class="media-links">
                      <div class="links-wrap">
                        <a class="link-zoom photoswipe-link" title="" href="images/gallery/tiled/slider${index + 1}.png"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `);

        if (index === imageArray.length - 1) {
          startConvert();
          initPhotoSwipe();
          $('.loading-images').remove()
        }
      };
      img.src = `images/gallery/tiled/slider${index + 1}.png`;
    });
  }, 8000);


  const modalProducts = $('#full-desktop')


  const modalOpenFull = $('.modal-open-full')

  modalOpenFull.on('click', function (e){
    e.preventDefault();
    const id = $(this).attr('href');

    openModalCategory(id);
  })

  function openModalCategory(id) {
    modalProducts.modal('show');
    $('.modal-body-item').addClass('d-none');
    $(id).removeClass('d-none');
  }

  function startConvert() {
    // init Isotope
    $(".isotope-wrapper").each(function (index) {
      var $container = $(this);
      var layoutMode = $container.hasClass("masonry-layout") ? "masonry" : "fitRows";
      var columnWidth = $container.children(".col-xl-2").length ? ".col-xl-2" : false;
      $container.isotope({
        percentPosition: true,
        layoutMode: layoutMode,
        masonry: {
          //TODO for big first element in grid - giving smaller element to use as grid
          // columnWidth: '.isotope-wrapper > .col-md-2'
          columnWidth: columnWidth,
        },
      });
      //
      // var $filters = $container.attr('data-filters') ? $($container.attr('data-filters')) : $container.prev().find('.filters');
      // // bind filter click
      // if ($filters.length) {
      //   $filters.on('click', 'a', function (e) {
      //     e.preventDefault();
      //     var $thisA = $(this);
      //     var filterValue = $thisA.attr('data-filter');
      //     $container.isotope({filter: filterValue});
      //     $thisA.siblings().removeClass('selected active');
      //     $thisA.addClass('selected active');
      //   });
      //   //for works on select
      //   $filters.on('change', 'select', function (e) {
      //     e.preventDefault();
      //     var filterValue = $(this).val();
      //     $container.isotope({filter: filterValue});
      //   });
      // }
    });
  }

  //end of IIFE function
})(jQuery);
