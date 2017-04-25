var WidgetBody = React.createClass({
  render() {
    return (<div>
      <span className={this.props.iconClass}></span>
      <p>{ this.props.infoText}</p>
    </div>)
  }
});

export default WidgetBody;
