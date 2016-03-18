var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('resume', this.onResume, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        Branch.initSession();
    },

    onResume: function() {
        Branch.initSession();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        if (navigator.userAgent.indexOf('iPhone') >= 0) {
            document.getElementsByTagName("html")[0].className = 'ios';
        } else if (navigator.userAgent.indexOf('Android') >= 0) {
            document.getElementsByTagName("html")[0].className = 'android';
        }

        SetDebug(true);
        InitSession();

    }
};

app.initialize();

function DeepLinkHandler(data) {
    debugger;
    console.log('Data from initSession:', data)
    alert('Data from initSession: ' + data.data);
}
