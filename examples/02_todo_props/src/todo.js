
var TodoHeader = React.createClass({

    render: function () {
        return (
            <header id="header">
          <h1>todos</h1>
          <input id="new-todo" placeholder="What needs to be done?" autofocus />
        </header>);


    }

});


var TodoFooter = React.createClass({

    render: function () {
        return <footer id="footer" style={{display: 'block'}}>
          <span id="todo-count"><strong>5</strong> items left</span>
          <ul id="filters">
            <li>
              <a className="selected" href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
        </footer>;
    }

});


var Todo = React.createClass({

    render: function () {
        return <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{this.props.task}</label>
                <button className="destroy" />
              </div>
              <input className="edit" defaultValue="Buy tomatos" />
            </li>;
    }

});



var Todos = React.createClass({

    render: function () {
        return (
        <section id="main" style={{display: 'block'}}>
          <input id="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
            {this.props.items.slice().sort().map(function (task, index) {
                return <Todo task={task} key={"foo" + index}/>;
            })}
            </ul>
        </section>);

    }

});


var App = React.createClass({
  render: function() {
    return (
        <section id="todoapp">
            <People/>
      </section>
    );
  }
});

//var App = React.createClass({
//  render: function() {
//    return (
//        <section id="todoapp">
//            <TodoHeader/>
//            <Todos items={["do this", "do this", "foo bar", "do that", "buy tickets"]}/>
//            <TodoFooter/>
//      </section>
//    );
//  }
//});

var HelloWorld = React.createClass({

    render: function () {
        return <div onClick={this.props.onClick}>{"Hello " + this.props.name}</div>;
    }
});


var People = React.createClass({
    onClick: function (name) {
        console.log("Hello " + name);
    },

    render: function () {
        return <div>{["John", "Mary", "Susan"].map(function (person, idx) {
            return <HelloWorld  onClick={this.onClick.bind(this, person)} name={person} key={idx} />;
        }.bind(this))}</div>;
    }
});

React.render(<App/>, document.getElementById('app'))
