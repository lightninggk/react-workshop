var Counter = React.createClass({
    render: function () {
        return <div>Counter value is {this.props.counter}<button onClick={this.props.click}> Increment</button></div>
    }
});

var Counters = React.createClass({

    getInitialState: function () {
        return {counter1: 10, counter2: 0};
    },

    incrementCounter: function (increment) {
        this.setState({counter1: this.state.counter1 + increment, counter2: this.state.counter2 - increment})
    },

    render: function () {
        return <div>
            <Counter click={this.incrementCounter.bind(this, 1)} counter={this.state.counter1}/>
            <Counter click={this.incrementCounter.bind(this, -1)} counter={this.state.counter2}/>
        </div>
    }
});

React.render(<Counters/>, document.getElementById('counter'));