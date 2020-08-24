var disqus_shortname = theme_config.disqus_shortname;
! function () {
    var e = document.createElement("script");
    e.async = !0, e.type = "text/javascript", e.src = "//" + disqus_shortname + ".disqus.com/count.js", document.getElementsByTagName("BODY")[0].appendChild(e)
}();

(($) => {
    Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/';
    $(document).ready(() => {
        console.log("Test");
        Prism.highlightAll();

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        // Give the parameter a variable name
        var action = getParameterByName('action');
        var stripe = getParameterByName('stripe');

        if (action == 'subscribe') {
            $('body').addClass("subscribe-success");
        }
        if (action == 'signup') {
            window.location = '/signup/?action=checkout';
        }
        if (action == 'checkout') {
            $('body').addClass("signup-success");
        }
        if (action == 'signin') {
            $('body').addClass("signin-success");
        }
        if (stripe == 'success') {
            $('body').addClass("checkout-success");
        }
        if (stripe == 'billing-update-success') {
            $('body').addClass("billing-success");
        }
        if (stripe == 'billing-update-cancel') {
            $('body').addClass("billing-cancel");
        }
        $('.notification-close').click(function () {
            $(this).parent().addClass('closed');
            var uri = window.location.toString();
            if (uri.indexOf("?") > 0) {
                var clean_uri = uri.substring(0, uri.indexOf("?"));
                window.history.replaceState({}, document.title, clean_uri);
            }
        });
       

        $('a[data-members-continue-subscription]').removeClass('button-ghost')
        $('#menubtn').on('click', (e) => {
            e.preventDefault();
            $('#menulist')[0].classList.toggle('active')
        })
        AOS.init({
            offset: 220,
            duration: 700,
            disable: window.innerWidth < 1024,
            easing: 'ease',
            once: true
        });
        console.log(Prism.languages)
        $('.tooltip').tooltipster({
            theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
            animation: 'fade',
            delay: 200,
            arrow: false
        });
        $('.lazy').Lazy();

        var images = document.querySelectorAll('.kg-gallery-image img');
        images.forEach(function (image) {
            var container = image.closest('.kg-gallery-image');
            var width = image.attributes.width.value;
            var height = image.attributes.height.value;
            var ratio = width / height;
            container.style.flex = ratio + ' 1 0%';
        });
        
        $('.kg-embed-card').fitVids();

    });
})(jQuery);