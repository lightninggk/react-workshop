
var TodoHeader = React.createClass({displayName: "TodoHeader",

    render: function () {
        return (
            React.createElement("header", {id: "header"}, 
          React.createElement("h1", null, "todos"), 
          React.createElement("input", {id: "new-todo", placeholder: "What needs to be done?", autofocus: true})
        ));


    }

});


var TodoFooter = React.createClass({displayName: "TodoFooter",

    render: function () {
        return React.createElement("footer", {id: "footer", style: {display: 'block'}}, 
          React.createElement("span", {id: "todo-count"}, React.createElement("strong", null, "5"), " items left"), 
          React.createElement("ul", {id: "filters"}, 
            React.createElement("li", null, 
              React.createElement("a", {className: "selected", href: "#/"}, "All")
            ), 
            React.createElement("li", null, 
              React.createElement("a", {href: "#/active"}, "Active")
            ), 
            React.createElement("li", null, 
              React.createElement("a", {href: "#/completed"}, "Completed")
            )
          )
        );
    }

});


var Todo = React.createClass({displayName: "Todo",

    render: function () {
        return React.createElement("li", null, 
              React.createElement("div", {className: "view"}, 
                React.createElement("input", {className: "toggle", type: "checkbox"}), 
                React.createElement("label", null, this.props.task), 
                React.createElement("button", {className: "destroy"})
              ), 
              React.createElement("input", {className: "edit", defaultValue: "Buy tomatos"})
            );
    }

});



var Todos = React.createClass({displayName: "Todos",

    render: function () {
        return (
        React.createElement("section", {id: "main", style: {display: 'block'}}, 
          React.createElement("input", {id: "toggle-all", type: "checkbox"}), 
          React.createElement("label", {htmlFor: "toggle-all"}, "Mark all as complete"), 
            React.createElement("ul", {id: "todo-list"}, 
            this.props.items.slice().sort().map(function (task, index) {
                return React.createElement(Todo, {task: task, key: "foo" + index});
            })
            )
        ));

    }

});


var App = React.createClass({displayName: "App",
  render: function() {
    return (
        React.createElement("section", {id: "todoapp"}, 
            React.createElement(People, null)
      )
    );
  }
});
//
//var App = React.createClass({
//  render: function() {
//    return (
//        <section id="todoapp">
//            <TodoHeader/>
//            <Todos items={["do this", "do this", "foo bar", "do that", "buy tickets"]}/>
//            <TodoFooter/>
//            <People/>
//      </section>
//    );
//  }
//});

var HelloWorld = React.createClass({displayName: "HelloWorld",

    render: function () {
        return React.createElement("div", {onClick: this.props.onClick}, "Hello " + this.props.name);
    }
});


var People = React.createClass({displayName: "People",
    onClick: function (name) {
        console.log("Hello " + name);
    },

    render: function () {
        return React.createElement("div", null, ["John", "Mary", "Susan"].map(function (person, idx) {
            return React.createElement(HelloWorld, {onClick: this.onClick.bind(this, person), name: person, key: idx});
        }.bind(this)));
    }
});

React.render(React.createElement(App, null), document.getElementById('app'))
