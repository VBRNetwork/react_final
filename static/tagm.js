$( document ).ready(function() {
    window.dataLayer = window.dataLayer || [];

    function gtag () {dataLayer.push(arguments)}

    gtag('js', new Date());
    gtag('config', 'AW-699838440');

    window.gtag_report_conversion_employer = function () {
        gtag('event', 'conversion', {
            'send_to': 'AW-699838440/NhQ6CLfmyMIBEOjf2s0C',
        });
        console.log('SENDED')
        return false;
    }
    window.gtag_report_conversion_freelancer = function () {
        gtag('event', 'conversion', {
            'send_to': 'AW-699838440/NhQ6CLfmyMIBEOjf2s0C',
        });
        return false;
    }

    window.gtag_report_conversion_ico_lead = function () {
        gtag('event', 'conversion', {
            'send_to': 'AW-699838440/AM6jCIy32MIBEOjf2s0C',
        });
        return false;
    }

    window.gtag_report_conversion_ico_signup = function(){
        gtag('event', 'conversion', {
            'send_to': 'AW-699838440/95bcCKK82cIBEOjf2s0C',
            'transaction_id': '',
        });
        return false;
    }


});