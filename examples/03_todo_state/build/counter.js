var Counter = React.createClass({displayName: "Counter",
    render: function () {
        return React.createElement("div", null, "Counter value is ", this.props.counter, React.createElement("button", {onClick: this.props.click}, "Increment"))
    }
});


var Counters = React.createClass({displayName: "Counters",

    getInitialState: function () {
        return {counter1: 10, counter2: 0};
    },

    incrementCounter: function (increment) {
        this.setState({counter1: this.state.counter1 + increment, counter2: this.state.counter2 - increment})
    },

    render: function () {
        return React.createElement("div", null, 
            React.createElement(Counter, {click: this.incrementCounter.bind(this, 1), counter: this.state.counter1}), 
            React.createElement(Counter, {click: this.incrementCounter.bind(this, -1), counter: this.state.counter2})
        )
    },
})


React.render(React.createElement(Counters, null), document.getElementById('counter'));