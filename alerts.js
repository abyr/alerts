(function () {
    var container,
        mainCssClass = 'alerts';

    var alerts = {
        settings: {
            container: null,
            duration: 2000
        },

        log: function (text, duration) {
            alerts.appendElement(alerts.createElement(text, mainCssClass + '_log'), duration);
        },

        success: function (text, duration) {
            alerts.appendElement(alerts.createElement(text, mainCssClass + '_success'));
        },
        error: function (text, duration) {
            alerts.appendElement(alerts.createElement(text, mainCssClass + '_error'));
        },

        appendElement: function (el, duration) {
            alerts.getContainer().appendChild(el);
            alerts.setRemoveElementTimeout(el, duration);
        },

        createElement: function (text, cssClass) {
            var el = document.createElement('div');

            alerts.addClassToElement(el, cssClass);

            el.textContent = text;

            el.addEventListener('click', function () {
                alerts.removeElement(el);
            });

            return el;
        },

        addClassToElement: function (el, cssClass) {
            if (el.classList) {
                el.classList.add(mainCssClass);
                cssClass && el.classList.add(cssClass);
            } else {
                el.className += mainCssClass + ' ' + (cssClass || '');
            }
        },

        getContainer: function () {
            return alerts.settings.container || document.querySelector('body');
        },

        setRemoveElementTimeout: function (el, duration) {
            setTimeout(function () {
                alerts.removeElement(el);
            }, duration || alerts.settings.duration);
        },

        removeElement: function (el) {
            el.parentNode && el.parentNode.removeChild(el);
        }
    };

    window.alerts = alerts;
})();
