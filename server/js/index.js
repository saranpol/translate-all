'use strict';

var mCurrentQ = "";
var API_KEY = 'AIzaSyC1yKvF0FsRIkQTxyqoVPpTXZUWhbHpORI';

function set_t(r, lang) {
    var t;
    if (r.data === undefined) {
        t = mCurrentQ;
    } else {
        t = r.data.translations[0].translatedText;
    }
    $('#out_' + lang).val(t);
}

function got_af(r) {
    set_t(r, "af");
}
function got_ar(r) {
    set_t(r, "ar");
}
function got_az(r) {
    set_t(r, "az");
}
function got_be(r) {
    set_t(r, "be");
}
function got_bg(r) {
    set_t(r, "bg");
}
function got_bn(r) {
    set_t(r, "bn");
}
function got_bs(r) {
    set_t(r, "bs");
}
function got_ca(r) {
    set_t(r, "ca");
}
function got_ceb(r) {
    set_t(r, "ceb");
}
function got_cs(r) {
    set_t(r, "cs");
}
function got_cy(r) {
    set_t(r, "cy");
}
function got_da(r) {
    set_t(r, "da");
}
function got_de(r) {
    set_t(r, "de");
}
function got_el(r) {
    set_t(r, "el");
}
function got_en(r) {
    set_t(r, "en");
}
function got_eo(r) {
    set_t(r, "eo");
}
function got_es(r) {
    set_t(r, "es");
}
function got_et(r) {
    set_t(r, "et");
}
function got_eu(r) {
    set_t(r, "eu");
}
function got_fa(r) {
    set_t(r, "fa");
}
function got_fi(r) {
    set_t(r, "fi");
}
function got_fr(r) {
    set_t(r, "fr");
}
function got_ga(r) {
    set_t(r, "ga");
}
function got_gl(r) {
    set_t(r, "gl");
}
function got_gu(r) {
    set_t(r, "gu");
}
function got_ha(r) {
    set_t(r, "ha");
}
function got_hi(r) {
    set_t(r, "hi");
}
function got_hmn(r) {
    set_t(r, "hmn");
}
function got_hr(r) {
    set_t(r, "hr");
}
function got_ht(r) {
    set_t(r, "ht");
}
function got_hu(r) {
    set_t(r, "hu");
}
function got_hy(r) {
    set_t(r, "hy");
}
function got_id(r) {
    set_t(r, "id");
}
function got_ig(r) {
    set_t(r, "ig");
}
function got_is(r) {
    set_t(r, "is");
}
function got_it(r) {
    set_t(r, "it");
}
function got_iw(r) {
    set_t(r, "iw");
}
function got_ja(r) {
    set_t(r, "ja");
}
function got_jw(r) {
    set_t(r, "jw");
}
function got_ka(r) {
    set_t(r, "ka");
}
function got_kk(r) {
    set_t(r, "kk");
}
function got_km(r) {
    set_t(r, "km");
}
function got_kn(r) {
    set_t(r, "kn");
}
function got_ko(r) {
    set_t(r, "ko");
}
function got_la(r) {
    set_t(r, "la");
}
function got_lo(r) {
    set_t(r, "lo");
}
function got_lt(r) {
    set_t(r, "lt");
}
function got_lv(r) {
    set_t(r, "lv");
}
function got_mg(r) {
    set_t(r, "mg");
}
function got_mi(r) {
    set_t(r, "mi");
}
function got_mk(r) {
    set_t(r, "mk");
}
function got_ml(r) {
    set_t(r, "ml");
}
function got_mn(r) {
    set_t(r, "mn");
}
function got_mr(r) {
    set_t(r, "mr");
}
function got_ms(r) {
    set_t(r, "ms");
}
function got_mt(r) {
    set_t(r, "mt");
}
function got_my(r) {
    set_t(r, "my");
}
function got_ne(r) {
    set_t(r, "ne");
}
function got_nl(r) {
    set_t(r, "nl");
}
function got_no(r) {
    set_t(r, "no");
}
function got_ny(r) {
    set_t(r, "ny");
}
function got_pa(r) {
    set_t(r, "pa");
}
function got_pl(r) {
    set_t(r, "pl");
}
function got_pt(r) {
    set_t(r, "pt");
}
function got_ro(r) {
    set_t(r, "ro");
}
function got_ru(r) {
    set_t(r, "ru");
}
function got_si(r) {
    set_t(r, "si");
}
function got_sk(r) {
    set_t(r, "sk");
}
function got_sl(r) {
    set_t(r, "sl");
}
function got_so(r) {
    set_t(r, "so");
}
function got_sq(r) {
    set_t(r, "sq");
}
function got_sr(r) {
    set_t(r, "sr");
}
function got_st(r) {
    set_t(r, "st");
}
function got_su(r) {
    set_t(r, "su");
}
function got_sv(r) {
    set_t(r, "sv");
}
function got_sw(r) {
    set_t(r, "sw");
}
function got_ta(r) {
    set_t(r, "ta");
}
function got_te(r) {
    set_t(r, "te");
}
function got_tg(r) {
    set_t(r, "tg");
}
function got_th(r) {
    set_t(r, "th");
}
function got_tl(r) {
    set_t(r, "tl");
}
function got_tr(r) {
    set_t(r, "tr");
}
function got_uk(r) {
    set_t(r, "uk");
}
function got_ur(r) {
    set_t(r, "ur");
}
function got_uz(r) {
    set_t(r, "uz");
}
function got_vi(r) {
    set_t(r, "vi");
}
function got_yi(r) {
    set_t(r, "yi");
}
function got_yo(r) {
    set_t(r, "yo");
}
function got_zh(r) {
    set_t(r, "zh");
}
function got_zhTW(r) {
    set_t(r, "zh-TW");
}
function got_zu(r) {
    set_t(r, "zu");
}

function callScript(source) {
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = source;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}

function translate(q, src_lang, target_lang) {
    var source = 'https://www.googleapis.com/language/translate/v2?key=' + API_KEY + '&source=' + src_lang + '&target=' + target_lang + '&callback=got_' + target_lang.replace('-', '') + '&q=' + escape(q);
    callScript(source);
}

function gotLang(r) {
    var l = r.data.detections[0][0].language;
    var q = mCurrentQ;
    translate(q, l, "af");
    translate(q, l, "ar");
    translate(q, l, "az");
    translate(q, l, "be");
    translate(q, l, "bg");
    translate(q, l, "bn");
    translate(q, l, "bs");
    translate(q, l, "ca");
    translate(q, l, "ceb");
    translate(q, l, "cs");
    translate(q, l, "cy");
    translate(q, l, "da");
    translate(q, l, "de");
    translate(q, l, "el");
    translate(q, l, "en");
    translate(q, l, "eo");
    translate(q, l, "es");
    translate(q, l, "et");
    translate(q, l, "eu");
    translate(q, l, "fa");
    translate(q, l, "fi");
    translate(q, l, "fr");
    translate(q, l, "ga");
    translate(q, l, "gl");
    translate(q, l, "gu");
    translate(q, l, "ha");
    translate(q, l, "hi");
    translate(q, l, "hmn");
    translate(q, l, "hr");
    translate(q, l, "ht");
    translate(q, l, "hu");
    translate(q, l, "hy");
    translate(q, l, "id");
    translate(q, l, "ig");
    translate(q, l, "is");
    translate(q, l, "it");
    translate(q, l, "iw");
    translate(q, l, "ja");
    translate(q, l, "jw");
    translate(q, l, "ka");
    translate(q, l, "kk");
    translate(q, l, "km");
    translate(q, l, "kn");
    translate(q, l, "ko");
    translate(q, l, "la");
    translate(q, l, "lo");
    translate(q, l, "lt");
    translate(q, l, "lv");
    translate(q, l, "mg");
    translate(q, l, "mi");
    translate(q, l, "mk");
    translate(q, l, "ml");
    translate(q, l, "mn");
    translate(q, l, "mr");
    translate(q, l, "ms");
    translate(q, l, "mt");
    translate(q, l, "my");
    translate(q, l, "ne");
    translate(q, l, "nl");
    translate(q, l, "no");
    translate(q, l, "ny");
    translate(q, l, "pa");
    translate(q, l, "pl");
    translate(q, l, "pt");
    translate(q, l, "ro");
    translate(q, l, "ru");
    translate(q, l, "si");
    translate(q, l, "sk");
    translate(q, l, "sl");
    translate(q, l, "so");
    translate(q, l, "sq");
    translate(q, l, "sr");
    translate(q, l, "st");
    translate(q, l, "su");
    translate(q, l, "sv");
    translate(q, l, "sw");
    translate(q, l, "ta");
    translate(q, l, "te");
    translate(q, l, "tg");
    translate(q, l, "th");
    translate(q, l, "tl");
    translate(q, l, "tr");
    translate(q, l, "uk");
    translate(q, l, "ur");
    translate(q, l, "uz");
    translate(q, l, "vi");
    translate(q, l, "yi");
    translate(q, l, "yo");
    translate(q, l, "zh");
    translate(q, l, "zh-TW");
    translate(q, l, "zu");
}

function getLang(q) {
    var source = 'https://www.googleapis.com/language/translate/v2/detect?key=' + API_KEY + '&callback=gotLang&q=' + escape(q);
    callScript(source);
}

var Index = React.createClass({
    displayName: 'Index',

    getInitialState: function getInitialState() {
        return {
            mTypingTimer: null
        };
    },
    doneTyping: function doneTyping() {
        this.state.mTypingTimer = null;
        getLang(mCurrentQ);
    },
    inputChange: function inputChange() {
        var r = this.refs;
        var q = r.inputText.value;
        mCurrentQ = q;
        if (this.state.mTypingTimer != null) clearTimeout(this.state.mTypingTimer);
        this.state.mTypingTimer = setTimeout(this.doneTyping, 500);
    },
    shareFB: function shareFB() {
        FB.ui({
            method: 'share',
            href: 'https://translate-all-language-at-once.appspot.com'
        }, function (response) {});
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'center' },
            React.createElement(
                'div',
                { className: 'mdl-card__supporting-text mdl-shadow--2dp mdl-textfield mdl-js-textfield white-bg' },
                React.createElement('input', { ref: 'inputText', onChange: this.inputChange, className: 'mdl-textfield__input padding-left', type: 'text', id: 'inputText' }),
                React.createElement(
                    'label',
                    { className: 'mdl-textfield__label padding-left', 'for': 'inputText' },
                    'Input text of any language here...'
                )
            ),
            React.createElement(
                'table',
                { className: 'mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { className: 'mdl-data-table__cell--non-numeric' },
                            'Language'
                        ),
                        React.createElement(
                            'th',
                            { className: 'mdl-data-table__cell--non-numeric' },
                            'Translation'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    React.createElement(OutBox, { l: 'af', f: 'Afrikaans' }),
                    React.createElement(OutBox, { l: 'ar', f: 'Arabic' }),
                    React.createElement(OutBox, { l: 'az', f: 'Azerbaijani' }),
                    React.createElement(OutBox, { l: 'be', f: 'Belarusian' }),
                    React.createElement(OutBox, { l: 'bg', f: 'Bulgarian' }),
                    React.createElement(OutBox, { l: 'bn', f: 'Bengali' }),
                    React.createElement(OutBox, { l: 'bs', f: 'Bosnian' }),
                    React.createElement(OutBox, { l: 'ca', f: 'Catalan' }),
                    React.createElement(OutBox, { l: 'ceb', f: 'Cebuano' }),
                    React.createElement(OutBox, { l: 'cs', f: 'Czech' }),
                    React.createElement(OutBox, { l: 'cy', f: 'Welsh' }),
                    React.createElement(OutBox, { l: 'da', f: 'Danish' }),
                    React.createElement(OutBox, { l: 'de', f: 'German' }),
                    React.createElement(OutBox, { l: 'el', f: 'Greek' }),
                    React.createElement(OutBox, { l: 'en', f: 'English' }),
                    React.createElement(OutBox, { l: 'eo', f: 'Esperanto' }),
                    React.createElement(OutBox, { l: 'es', f: 'Spanish' }),
                    React.createElement(OutBox, { l: 'et', f: 'Estonian' }),
                    React.createElement(OutBox, { l: 'eu', f: 'Basque' }),
                    React.createElement(OutBox, { l: 'fa', f: 'Persian' }),
                    React.createElement(OutBox, { l: 'fi', f: 'Finnish' }),
                    React.createElement(OutBox, { l: 'fr', f: 'French' }),
                    React.createElement(OutBox, { l: 'ga', f: 'Irish' }),
                    React.createElement(OutBox, { l: 'gl', f: 'Galician' }),
                    React.createElement(OutBox, { l: 'gu', f: 'Gujarati' }),
                    React.createElement(OutBox, { l: 'ha', f: 'Hausa' }),
                    React.createElement(OutBox, { l: 'hi', f: 'Hindi' }),
                    React.createElement(OutBox, { l: 'hmn', f: 'Hmong' }),
                    React.createElement(OutBox, { l: 'hr', f: 'Croatian' }),
                    React.createElement(OutBox, { l: 'ht', f: 'Haitian Creole' }),
                    React.createElement(OutBox, { l: 'hu', f: 'Hungarian' }),
                    React.createElement(OutBox, { l: 'hy', f: 'Armenian' }),
                    React.createElement(OutBox, { l: 'id', f: 'Indonesian' }),
                    React.createElement(OutBox, { l: 'ig', f: 'Igbo' }),
                    React.createElement(OutBox, { l: 'is', f: 'Icelandic' }),
                    React.createElement(OutBox, { l: 'it', f: 'Italian' }),
                    React.createElement(OutBox, { l: 'iw', f: 'Hebrew' }),
                    React.createElement(OutBox, { l: 'ja', f: 'Japanese' }),
                    React.createElement(OutBox, { l: 'jw', f: 'Javanese' }),
                    React.createElement(OutBox, { l: 'ka', f: 'Georgian' }),
                    React.createElement(OutBox, { l: 'kk', f: 'Kazakh' }),
                    React.createElement(OutBox, { l: 'km', f: 'Khmer' }),
                    React.createElement(OutBox, { l: 'kn', f: 'Kannada' }),
                    React.createElement(OutBox, { l: 'ko', f: 'Korean' }),
                    React.createElement(OutBox, { l: 'la', f: 'Latin' }),
                    React.createElement(OutBox, { l: 'lo', f: 'Lao' }),
                    React.createElement(OutBox, { l: 'lt', f: 'Lithuanian' }),
                    React.createElement(OutBox, { l: 'lv', f: 'Latvian' }),
                    React.createElement(OutBox, { l: 'mg', f: 'Malagasy' }),
                    React.createElement(OutBox, { l: 'mi', f: 'Maori' }),
                    React.createElement(OutBox, { l: 'mk', f: 'Macedonian' }),
                    React.createElement(OutBox, { l: 'ml', f: 'Malayalam' }),
                    React.createElement(OutBox, { l: 'mn', f: 'Mongolian' }),
                    React.createElement(OutBox, { l: 'mr', f: 'Marathi' }),
                    React.createElement(OutBox, { l: 'ms', f: 'Malay' }),
                    React.createElement(OutBox, { l: 'mt', f: 'Maltese' }),
                    React.createElement(OutBox, { l: 'my', f: 'Myanmar (Burmese)' }),
                    React.createElement(OutBox, { l: 'ne', f: 'Nepali' }),
                    React.createElement(OutBox, { l: 'nl', f: 'Dutch' }),
                    React.createElement(OutBox, { l: 'no', f: 'Norwegian' }),
                    React.createElement(OutBox, { l: 'ny', f: 'Chichewa' }),
                    React.createElement(OutBox, { l: 'pa', f: 'Punjabi' }),
                    React.createElement(OutBox, { l: 'pl', f: 'Polish' }),
                    React.createElement(OutBox, { l: 'pt', f: 'Portuguese' }),
                    React.createElement(OutBox, { l: 'ro', f: 'Romanian' }),
                    React.createElement(OutBox, { l: 'ru', f: 'Russian' }),
                    React.createElement(OutBox, { l: 'si', f: 'Sinhala' }),
                    React.createElement(OutBox, { l: 'sk', f: 'Slovak' }),
                    React.createElement(OutBox, { l: 'sl', f: 'Slovenian' }),
                    React.createElement(OutBox, { l: 'so', f: 'Somali' }),
                    React.createElement(OutBox, { l: 'sq', f: 'Albanian' }),
                    React.createElement(OutBox, { l: 'sr', f: 'Serbian' }),
                    React.createElement(OutBox, { l: 'st', f: 'Sesotho' }),
                    React.createElement(OutBox, { l: 'su', f: 'Sundanese' }),
                    React.createElement(OutBox, { l: 'sv', f: 'Swedish' }),
                    React.createElement(OutBox, { l: 'sw', f: 'Swahili' }),
                    React.createElement(OutBox, { l: 'ta', f: 'Tamil' }),
                    React.createElement(OutBox, { l: 'te', f: 'Telugu' }),
                    React.createElement(OutBox, { l: 'tg', f: 'Tajik' }),
                    React.createElement(OutBox, { l: 'th', f: 'Thai' }),
                    React.createElement(OutBox, { l: 'tl', f: 'Filipino' }),
                    React.createElement(OutBox, { l: 'tr', f: 'Turkish' }),
                    React.createElement(OutBox, { l: 'uk', f: 'Ukrainian' }),
                    React.createElement(OutBox, { l: 'ur', f: 'Urdu' }),
                    React.createElement(OutBox, { l: 'uz', f: 'Uzbek' }),
                    React.createElement(OutBox, { l: 'vi', f: 'Vietnamese' }),
                    React.createElement(OutBox, { l: 'yi', f: 'Yiddish' }),
                    React.createElement(OutBox, { l: 'yo', f: 'Yoruba' }),
                    React.createElement(OutBox, { l: 'zh', f: 'Chinese Simplified' }),
                    React.createElement(OutBox, { l: 'zh-TW', f: 'Chinese Traditional' }),
                    React.createElement(OutBox, { l: 'zu', f: 'Zulu' })
                )
            ),
            React.createElement(
                'button',
                { className: 'bt-face mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored', onClick: this.shareFB },
                'Share to  Facebook'
            )
        );
    }
});

var OutBox = React.createClass({
    displayName: 'OutBox',

    selectText: function selectText() {
        this.refs.textInput.select();
    },
    render: function render() {
        var input_id = "out_" + this.props.l;
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                { className: 'mdl-data-table__cell--non-numeric' },
                this.props.f,
                ' (',
                this.props.l,
                ')'
            ),
            React.createElement(
                'td',
                { className: 'mdl-data-table__cell--non-numeric' },
                React.createElement('input', { onFocus: this.selectText, ref: 'textInput', id: input_id })
            )
        );
    }
});

ReactDOM.render(React.createElement(Index, null), document.getElementById('content'));