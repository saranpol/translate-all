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
function got_en(r) {
    set_t(r, "en");
}
function got_th(r) {
    set_t(r, "th");
}
function got_ja(r) {
    set_t(r, "ja");
}

function callScript(source) {
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = source;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}

function translate(q, src_lang, target_lang) {
    var source = 'https://www.googleapis.com/language/translate/v2?key=' + API_KEY + '&source=' + src_lang + '&target=' + target_lang + '&callback=got_' + target_lang + '&q=' + escape(q);
    callScript(source);
}

function gotLang(r) {
    var l = r.data.detections[0][0].language;
    var q = mCurrentQ;
    translate(q, l, "en");
    translate(q, l, "th");
    translate(q, l, "ja");
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
            null,
            'Input ',
            React.createElement('input', { ref: 'inputText', onChange: this.inputChange, type: 'text' }),
            React.createElement(OutBox, { l: 'en', f: 'English' }),
            React.createElement(OutBox, { l: 'th', f: 'Thai' }),
            React.createElement(OutBox, { l: 'ja', f: 'Japanese' }),
            React.createElement(
                'button',
                { onClick: this.shareFB },
                'Share FB'
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
            'div',
            null,
            this.props.l,
            ' ',
            React.createElement('input', { onFocus: this.selectText, ref: 'textInput', id: input_id }),
            ' ',
            this.props.f
        );
    }
});

ReactDOM.render(React.createElement(Index, null), document.getElementById('content'));